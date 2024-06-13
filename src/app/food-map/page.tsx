"use client";

import {useMemo} from "react";
import dynamic from "next/dynamic";

import {restaurantData} from "@/app/food-map/restaurants";
import {Skeleton} from "@/components/ui/skeleton";

export default function FoodMap() {
  const Map = useMemo(() => dynamic(
    () => import('@/components/map'),
    {
      loading: () => <div className="h-96 max-w-3xl mx-auto my-auto">
        <Skeleton className="h-96 max-w-3xl rounded-full mx-auto my-auto" />
      </div>,
      ssr: false
    }
  ), [])

  return (
    <div className="h-96 max-w-3xl mx-auto">
      <Map restaurants={restaurantData}/>
    </div>
  )
}
