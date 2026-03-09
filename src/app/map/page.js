"use client";

import { useState, useCallback } from "react";
import { useSearchParams } from "next/navigation";
import dynamic from "next/dynamic";
import { restaurantData } from "@/data/restaurants";
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
  { id: "restaurants", label: "Restaurants", enabled: true },
  { id: "flights", label: "Flights", enabled: false },
  { id: "stadiums", label: "Stadiums", enabled: false },
];

export default function MapPage() {
  const searchParams = useSearchParams();
  const focusKey = searchParams.get("restaurant") || null;
  const [activeLayers, setActiveLayers] = useState(["restaurants"]);
  const [filteredRestaurants, setFilteredRestaurants] = useState(restaurantData);

  const toggleLayer = (id) => {
    setActiveLayers((prev) =>
      prev.includes(id) ? prev.filter((l) => l !== id) : [...prev, id]
    );
  };

  const handleFilterChange = useCallback((filtered) => {
    setFilteredRestaurants(filtered);
  }, []);

  const showRestaurants = activeLayers.includes("restaurants");
  const restaurants = showRestaurants ? filteredRestaurants : [];

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
          <WorldMap restaurants={restaurants} focusKey={focusKey} />
        </div>
      </div>
    </div>
  );
}
