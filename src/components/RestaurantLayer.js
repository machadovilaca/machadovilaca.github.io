"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { Marker, Popup, Tooltip, useMap } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import { usePopupSize } from "./usePopupSize";

function PriceRange({ level }) {
  return (
    <span className="text-green-700 font-medium">
      {"€".repeat(level)}
      <span className="text-zinc-300">{"€".repeat(5 - level)}</span>
    </span>
  );
}

function StarRating({ rating }) {
  const full = Math.floor(rating);
  const hasHalf = rating - full >= 0.3;
  const empty = 5 - full - (hasHalf ? 1 : 0);

  return (
    <span className="inline-flex items-center gap-0.5 text-amber-500">
      {"★".repeat(full)}
      {hasHalf && "⯪"}
      <span className="text-zinc-300">{"★".repeat(empty)}</span>
      <span className="ml-1 text-xs text-zinc-500">{rating}</span>
    </span>
  );
}

function RestaurantPopup({ restaurant }) {
  const [imgIdx, setImgIdx] = useState(0);
  const images = restaurant.images;
  const hasMultiple = images.length > 1;

  return (
    <div className="w-64 sm:w-80 md:w-96">
      {images.length > 0 && (
        <div className="relative mb-2">
          <img
            src={images[imgIdx]}
            alt={restaurant.name}
            className="max-h-48 sm:max-h-56 md:max-h-64 w-full rounded-md object-contain"
          />
          {hasMultiple && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setImgIdx((i) => (i - 1 + images.length) % images.length);
                }}
                className="absolute left-1 top-1/2 -translate-y-1/2 rounded-full bg-black/50 px-1.5 py-0.5 text-xs text-white hover:bg-black/70"
              >
                ‹
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setImgIdx((i) => (i + 1) % images.length);
                }}
                className="absolute right-1 top-1/2 -translate-y-1/2 rounded-full bg-black/50 px-1.5 py-0.5 text-xs text-white hover:bg-black/70"
              >
                ›
              </button>
              <span className="absolute bottom-1 right-1 rounded bg-black/50 px-1.5 py-0.5 text-[10px] text-white">
                {imgIdx + 1}/{images.length}
              </span>
            </>
          )}
        </div>
      )}

      <h3 className="text-sm md:text-base font-semibold text-zinc-900">{restaurant.name}</h3>

      <div className="mt-1 flex flex-wrap gap-1">
        {restaurant.types.map((type) => (
          <span
            key={type}
            className="rounded-full bg-zinc-100 px-2 py-0.5 text-[10px] font-medium text-zinc-600"
          >
            {type}
          </span>
        ))}
      </div>

      <div className="mt-2 flex items-center justify-between text-xs">
        <StarRating rating={restaurant.rating} />
        <PriceRange level={restaurant.priceRange} />
      </div>

      <p className="mt-1.5 text-[11px] text-zinc-500">
        {restaurant.address.street}
      </p>
      <p className="text-[11px] text-zinc-500">
        {restaurant.address.city}, {restaurant.address.country}
      </p>

      <div className="mt-2 flex items-center gap-3">
        <a
          href={restaurant.googleMaps}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[11px] font-medium text-zinc-500 underline decoration-zinc-300 underline-offset-2 hover:text-zinc-900"
        >
          Directions
        </a>
        <a
          href={restaurant.website}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[11px] font-medium text-zinc-500 underline decoration-zinc-300 underline-offset-2 hover:text-zinc-900"
        >
          Website
        </a>
      </div>
    </div>
  );
}

function FocusHandler({ focusKey, markerRefs }) {
  const map = useMap();
  const hasFocused = useRef(false);

  useEffect(() => {
    if (!focusKey || hasFocused.current) return;

    const marker = markerRefs.current.get(focusKey);
    if (!marker) return;

    hasFocused.current = true;
    const pos = marker.getLatLng();
    const zoom = 17;
    const targetPoint = map.project(pos, zoom);
    const offsetPoint = targetPoint.subtract([0, map.getSize().y / 4]);
    const offsetLatLng = map.unproject(offsetPoint, zoom);

    map.flyTo(offsetLatLng, zoom, { duration: 1.5 });

    map.once("moveend", () => {
      setTimeout(() => {
        marker.openPopup();
      }, 200);
    });
  }, [focusKey, map, markerRefs]);

  return null;
}

function RestaurantMarkers({ restaurants, markerRefs, setMarkerRef }) {
  const map = useMap();
  const { maxWidth, minWidth } = usePopupSize();

  return restaurants.map((r) => (
    <Marker
      key={r.key}
      position={r.position}
      ref={(ref) => setMarkerRef(r.key, ref)}
      eventHandlers={{
        click: () => {
          const zoom = Math.max(map.getZoom(), 15);
          const targetPoint = map.project(r.position, zoom);
          const offsetPoint = targetPoint.subtract([0, map.getSize().y / 4]);
          const offsetLatLng = map.unproject(offsetPoint, zoom);
          map.flyTo(offsetLatLng, zoom, { duration: 0.8 });
          const url = new URL(window.location);
          url.searchParams.set("restaurant", r.key);
          window.history.replaceState({}, "", url);
        },
        popupclose: () => {
          const url = new URL(window.location);
          url.searchParams.delete("restaurant");
          window.history.replaceState({}, "", url);
        },
      }}
    >
      <Tooltip direction="top" offset={[0, -10]}>
        {r.name} ({r.rating})
      </Tooltip>
      <Popup maxWidth={maxWidth} minWidth={minWidth}>
        <RestaurantPopup restaurant={r} />
      </Popup>
    </Marker>
  ));
}

export default function RestaurantLayer({ restaurants = [], focusKey = null }) {
  const markerRefs = useRef(new Map());

  const setMarkerRef = useCallback((key, ref) => {
    if (ref) {
      markerRefs.current.set(key, ref);
    } else {
      markerRefs.current.delete(key);
    }
  }, []);

  if (restaurants.length === 0) return null;

  return (
    <MarkerClusterGroup chunkedLoading>
      <FocusHandler focusKey={focusKey} markerRefs={markerRefs} />
      <RestaurantMarkers
        restaurants={restaurants}
        markerRefs={markerRefs}
        setMarkerRef={setMarkerRef}
      />
    </MarkerClusterGroup>
  );
}
