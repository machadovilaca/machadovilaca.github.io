"use client";

import { useState, useCallback } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import dynamic from "next/dynamic";
import { restaurantData } from "@/data/restaurants";
import { flightData, flightCount } from "@/data/flights";
import { stadiumData } from "@/data/stadiums";
import RestaurantFilter from "@/components/RestaurantFilter";

const WorldMap = dynamic(() => import("@/components/WorldMap"), {
  ssr: false,
  loading: () => (
    <div className="flex h-full items-center justify-center bg-zinc-50">
      <div className="text-sm text-zinc-400">Loading map…</div>
    </div>
  ),
});

const layers = [
  { id: "restaurants", label: "Restaurants", count: () => restaurantData.length, enabled: true },
  { id: "flights", label: "Flights", count: () => flightCount, enabled: true },
  { id: "stadiums", label: "Stadiums", count: () => stadiumData.length, enabled: true },
];

export default function MapPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const focusKey = searchParams.get("restaurant") || null;
  const initialLayer = searchParams.get("layer");
  const validLayerIds = layers.filter((l) => l.enabled).map((l) => l.id);
  const [activeLayers, setActiveLayers] = useState(
    initialLayer && validLayerIds.includes(initialLayer) ? [initialLayer] : ["restaurants"]
  );
  const [filteredRestaurants, setFilteredRestaurants] = useState(restaurantData);

  const toggleLayer = (id) => {
    const next = activeLayers.includes(id) ? [] : [id];
    setActiveLayers(next);
    const params = new URLSearchParams(searchParams.toString());
    if (next.length > 0) {
      params.set("layer", next[0]);
    } else {
      params.delete("layer");
    }
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const handleFilterChange = useCallback((filtered) => {
    setFilteredRestaurants(filtered);
  }, []);

  const showRestaurants = activeLayers.includes("restaurants");
  const showFlights = activeLayers.includes("flights");
  const showStadiums = activeLayers.includes("stadiums");
  const restaurants = showRestaurants ? filteredRestaurants : [];
  const flights = showFlights ? flightData : [];
  const stadiums = showStadiums ? stadiumData : [];

  return (
    <div className="flex h-[calc(100vh-3.5rem)] flex-col p-6">
      <div className="shrink-0 pb-4">
        <h1 className="text-lg font-semibold text-zinc-900">Map</h1>
        <p className="mt-1 text-sm text-zinc-500">
          Select a layer to explore.
        </p>

        <div className="mt-3 flex flex-wrap gap-2">
          {layers.map((layer) => {
            const isActive = activeLayers.includes(layer.id);
            return (
              <button
                key={layer.id}
                disabled={!layer.enabled}
                onClick={() => layer.enabled && toggleLayer(layer.id)}
                className={`rounded-full border px-3 py-1.5 text-xs font-medium transition-colors ${
                  !layer.enabled
                    ? "border-zinc-200 bg-zinc-50 text-zinc-400 cursor-not-allowed"
                    : isActive
                      ? "border-zinc-900 bg-zinc-900 text-white"
                      : "border-zinc-200 bg-white text-zinc-600 hover:bg-zinc-50"
                }`}
              >
                {layer.label}
                {layer.count && (
                  <span className="ml-1.5 rounded-full bg-white/20 px-1.5 py-0.5 text-[10px] tabular-nums">
                    {layer.count()}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {showRestaurants && (
          <div className="mt-3 max-w-xl">
            <RestaurantFilter
              restaurants={restaurantData}
              onChange={handleFilterChange}
            />
          </div>
        )}
      </div>

      <div className="relative flex-1 rounded-lg border border-zinc-200" style={{ isolation: "isolate" }}>
        <div className="absolute inset-0 overflow-hidden rounded-lg">
          <WorldMap restaurants={restaurants} focusKey={focusKey} flights={flights} stadiums={stadiums} />
        </div>
      </div>
    </div>
  );
}
