"use client";

import {useMemo} from "react";
import dynamic from "next/dynamic";
import {restaurantData} from "@/app/food-map/restaurants";

export default function FoodMap() {
  const Map = useMemo(() => dynamic(
    () => import('@/components/map'),
    {
      loading: () => <p>A map is loading</p>,
      ssr: false
    }
  ), [])

  return (
    <div className="h-96 max-w-3xl mx-auto">
      <Map restaurants={restaurantData}/>
    </div>
  )
}
