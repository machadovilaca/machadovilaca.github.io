"use client";

import { useState, useRef, useEffect, useMemo } from "react";

function buildSuggestions(restaurants) {
  const types = new Set();
  const cities = new Set();
  const countries = new Set();
  const names = new Set();

  for (const r of restaurants) {
    r.types.forEach((t) => types.add(t));
    cities.add(r.address.city);
    countries.add(r.address.country);
    names.add(r.name);
  }

  return [
    ...[...types].sort().map((v) => ({ label: v, category: "Type" })),
    ...[...cities].sort().map((v) => ({ label: v, category: "City" })),
    ...[...countries].sort().map((v) => ({ label: v, category: "Country" })),
    ...[...names].sort().map((v) => ({ label: v, category: "Name" })),
  ];
}

export default function RestaurantFilter({ restaurants, onChange }) {
  const [tags, setTags] = useState([]);
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const inputRef = useRef(null);
  const containerRef = useRef(null);

  const suggestions = useMemo(() => buildSuggestions(restaurants), [restaurants]);

  const filtered = useMemo(() => {
    if (!query) return [];
    const q = query.toLowerCase();
    return suggestions
      .filter(
        (s) =>
          s.label.toLowerCase().includes(q) &&
          !tags.some((t) => t.label === s.label && t.category === s.category)
      )
      .slice(0, 12);
  }, [query, suggestions, tags]);

  useEffect(() => {
    if (tags.length === 0) {
      onChange(restaurants);
      return;
    }

    const byCategory = {};
    for (const tag of tags) {
      if (!byCategory[tag.category]) byCategory[tag.category] = [];
      byCategory[tag.category].push(tag.label);
    }

    const result = restaurants.filter((r) => {
      for (const [cat, values] of Object.entries(byCategory)) {
        if (cat === "Type") {
          if (!values.some((v) => r.types.includes(v))) return false;
        } else if (cat === "City") {
          if (!values.includes(r.address.city)) return false;
        } else if (cat === "Country") {
          if (!values.includes(r.address.country)) return false;
        } else if (cat === "Name") {
          if (!values.includes(r.name)) return false;
        }
      }
      return true;
    });

    onChange(result);
  }, [tags, restaurants, onChange]);

  useEffect(() => {
    function handleClick(e) {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const addTag = (suggestion) => {
    setTags((prev) => [...prev, suggestion]);
    setQuery("");
    inputRef.current?.focus();
  };

  const removeTag = (idx) => {
    setTags((prev) => prev.filter((_, i) => i !== idx));
  };

  const handleKeyDown = (e) => {
    if (e.key === "Backspace" && !query && tags.length > 0) {
      removeTag(tags.length - 1);
    }
    if (e.key === "Escape") {
      setOpen(false);
    }
  };

  const categoryColors = {
    Type: "bg-blue-100 text-blue-700",
    City: "bg-amber-100 text-amber-700",
    Country: "bg-emerald-100 text-emerald-700",
    Name: "bg-purple-100 text-purple-700",
  };

  return (
    <div ref={containerRef} className="relative w-full">
      <div
        className="flex flex-wrap items-center gap-1.5 rounded-lg border border-zinc-200 bg-white px-2 py-1.5 focus-within:border-zinc-400 focus-within:ring-1 focus-within:ring-zinc-400/20"
        onClick={() => inputRef.current?.focus()}
      >
        {tags.map((tag, i) => (
          <span
            key={`${tag.category}-${tag.label}`}
            className={`inline-flex items-center gap-1 rounded-md px-2 py-0.5 text-[11px] font-medium ${categoryColors[tag.category]}`}
          >
            <span className="opacity-60">{tag.category}:</span>
            {tag.label}
            <button
              onClick={(e) => {
                e.stopPropagation();
                removeTag(i);
              }}
              className="ml-0.5 hover:opacity-70"
            >
              ×
            </button>
          </span>
        ))}
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
          onKeyDown={handleKeyDown}
          placeholder={tags.length === 0 ? "Filter by type, city, country, or name…" : ""}
          className="min-w-[120px] flex-1 bg-transparent text-xs text-zinc-900 outline-none placeholder:text-zinc-400"
        />
      </div>

      {open && filtered.length > 0 && (
        <ul className="absolute z-50 mt-1 max-h-52 w-full overflow-auto rounded-lg border border-zinc-200 bg-white py-1 shadow-lg">
          {filtered.map((s) => (
            <li key={`${s.category}-${s.label}`}>
              <button
                onMouseDown={(e) => e.preventDefault()}
                onClick={() => {
                  addTag(s);
                  setOpen(false);
                }}
                className="flex w-full items-center gap-2 px-3 py-1.5 text-left text-xs hover:bg-zinc-50"
              >
                <span
                  className={`rounded px-1.5 py-0.5 text-[10px] font-medium ${categoryColors[s.category]}`}
                >
                  {s.category}
                </span>
                <span className="text-zinc-700">{s.label}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
