"use client";

import { Marker, Popup, Tooltip, useMap } from "react-leaflet";
import L from "leaflet";

const shadowUrl = "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png";

const stadiumIcon = new L.Icon({
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",
  iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png",
  shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const goldenMarkerSvg = encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="25" height="41" viewBox="0 0 25 41"><path d="M12.5 0C5.6 0 0 5.6 0 12.5C0 21.9 12.5 41 12.5 41S25 21.9 25 12.5C25 5.6 19.4 0 12.5 0z" fill="#d97706"/><circle cx="12.5" cy="12.5" r="6" fill="#fbbf24"/></svg>`);

const goldenIcon = new L.Icon({
  iconUrl: `data:image/svg+xml,${goldenMarkerSvg}`,
  shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

function StadiumPopup({ stadium }) {
  return (
    <div className="w-64">
      {stadium.image && (
        <div className="mb-2">
          <img
            src={stadium.image}
            alt={stadium.match || stadium.stadium}
            className="max-h-48 w-full rounded-md object-contain"
          />
        </div>
      )}

      {stadium.golden && (
        <span className="inline-block rounded-full bg-amber-100 border border-amber-400 px-2 py-0.5 text-[10px] font-semibold text-amber-700 mb-1.5">
          {stadium.stadium}
        </span>
      )}

      {stadium.competition && (
        <span className="inline-block rounded-full bg-zinc-100 px-2 py-0.5 text-[10px] font-medium text-zinc-600 mb-1.5">
          {stadium.competition}
        </span>
      )}

      {stadium.match && (
        <h3 className="text-sm font-semibold text-zinc-900">{stadium.match}</h3>
      )}

      {stadium.date && (
        <p className="mt-1 text-[11px] text-zinc-500">{stadium.date}</p>
      )}

      {!stadium.golden && (
        <div className="mt-1.5 flex items-center gap-1.5">
          <span className="text-[11px] font-medium text-zinc-700">
            {stadium.stadium}
          </span>
        </div>
      )}
      <p className="text-[11px] text-zinc-500">
        {stadium.city}, {stadium.country}
      </p>
    </div>
  );
}

function StadiumMarkers({ stadiums }) {
  const map = useMap();

  return stadiums.map((s) => (
    <Marker
      key={s.key}
      position={s.position}
      icon={s.golden ? goldenIcon : stadiumIcon}
      zIndexOffset={s.golden ? 1000 : 0}
      eventHandlers={{
        click: () => {
          const zoom = Math.max(map.getZoom(), 15);
          const targetPoint = map.project(s.position, zoom);
          const offsetPoint = targetPoint.subtract([0, map.getSize().y / 4]);
          const offsetLatLng = map.unproject(offsetPoint, zoom);
          map.flyTo(offsetLatLng, zoom, { duration: 0.8 });
        },
      }}
    >
      <Tooltip direction="top" offset={[0, -10]}>
        {s.match || s.stadium}{s.date ? ` (${s.date})` : ""}
      </Tooltip>
      <Popup maxWidth={300} minWidth={260}>
        <StadiumPopup stadium={s} />
      </Popup>
    </Marker>
  ));
}

export default function StadiumLayer({ stadiums = [] }) {
  if (stadiums.length === 0) return null;

  return (
    <>
      <StadiumMarkers stadiums={stadiums} />
    </>
  );
}
