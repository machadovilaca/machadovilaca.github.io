"use client";

import { useMemo } from "react";
import { Polyline, Tooltip, CircleMarker } from "react-leaflet";

function routeKey(a, b) {
  const codes = [a.code, b.code].sort();
  return `${codes[0]}-${codes[1]}`;
}

function arcPoints(posA, posB, segments = 50) {
  const [latA, lngA] = posA;
  const [latB, lngB] = posB;

  const dx = lngB - lngA;
  const dy = latB - latA;
  const dist = Math.sqrt(dx * dx + dy * dy);

  const points = [];
  for (let i = 0; i <= segments; i++) {
    const t = i / segments;
    const lat = latA + (latB - latA) * t;
    const lng = lngA + (lngB - lngA) * t;
    const bulge = Math.sin(t * Math.PI) * dist * 0.15;
    const perpLat = dx / dist;
    const perpLng = -dy / dist;
    points.push([lat + bulge * perpLat, lng + bulge * perpLng]);
  }
  return points;
}

function groupFlightsByRoute(flights) {
  const routes = new Map();

  for (const flight of flights) {
    const key = routeKey(flight.from, flight.to);
    if (!routes.has(key)) {
      routes.set(key, {
        from: flight.from,
        to: flight.to,
        flights: [],
      });
    }
    routes.get(key).flights.push(flight);
  }

  return [...routes.values()];
}

function formatDate(d) {
  const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
  ];
  return `${months[d.month - 1]} ${d.year}`;
}

export default function FlightLayer({ flights = [] }) {
  const routes = useMemo(() => groupFlightsByRoute(flights), [flights]);

  const airports = useMemo(() => {
    const seen = new Map();
    for (const f of flights) {
      seen.set(f.from.code, f.from);
      seen.set(f.to.code, f.to);
    }
    return [...seen.values()];
  }, [flights]);

  if (flights.length === 0) return null;

  return (
    <>
      {airports.map((airport) => (
        <CircleMarker
          key={airport.code}
          center={airport.position}
          radius={5}
          pathOptions={{
            color: "#3b82f6",
            fillColor: "#3b82f6",
            fillOpacity: 1,
            weight: 2,
          }}
        >
          <Tooltip direction="top" offset={[0, -8]}>
            {airport.name} ({airport.code})
          </Tooltip>
        </CircleMarker>
      ))}

      {routes.map((route) => {
        const key = routeKey(route.from, route.to);
        const arc = arcPoints(route.from.position, route.to.position);
        const datedFlights = route.flights.filter((f) => f.date);
        const dateList = datedFlights
          .map((f) => formatDate(f.date))
          .join(", ");

        return (
          <Polyline
            key={key}
            positions={arc}
            pathOptions={{
              color: "#3b82f6",
              weight: 2,
              opacity: 0.6,
              dashArray: "6 4",
            }}
          >
            <Tooltip sticky>
              <div className="text-[11px]">
                <div className="font-semibold">
                  {route.from.code} → {route.to.code}
                </div>
                {dateList && <div className="text-zinc-500">{dateList}</div>}
              </div>
            </Tooltip>
          </Polyline>
        );
      })}
    </>
  );
}
