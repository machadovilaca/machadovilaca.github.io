import React from "react";

import Link from "next/link";
import {BadgeDollarSign, CheckIcon, EllipsisVerticalIcon, StarHalfIcon, StarIcon} from "lucide-react";

import {Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle,} from "@/components/ui/dialog"
import {Gallery} from "@/components/gallery";
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from "@/components/ui/dropdown-menu";
import {Restaurant} from "@/app/food-map/restaurants";

interface restaurantDialogType {
  restaurant: Restaurant;
  open: boolean;
  onOpenChange: () => void;
}

export function RestaurantDialog({
                                   restaurant,
                                   open,
                                   onOpenChange
                                 }: Readonly<restaurantDialogType>) {
  const [urlCopied, setUrlCopied] = React.useState(false);

  const stars = () => {
    const stars: JSX.Element[] = [];
    let i = 0;
    for (; i + 1 <= restaurant.rating; i++) {
      stars.push(<StarIcon fill="#f0ab00" strokeWidth={0.2} key={i}/>);
    }
    if (restaurant.rating - i >= 0.5) {
      stars.push(<StarHalfIcon fill="#f0ab00" strokeWidth={0.2} key={i}/>);
    }

    return (
      <div className="flex">
        <span className="mr-2">{restaurant.rating}</span>

        <div className="relative">
          <div className="flex">
            {Array.from({length: 5}, (_, i) => (
              <StarIcon key={i} fill="gray" strokeWidth={0}/>
            ))}
          </div>
          <div className="flex absolute top-0">
            {stars}
          </div>
        </div>
      </div>
    );
  }

  const dropdownMenu = (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <EllipsisVerticalIcon className="w-5 h-5"/>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>
          <Link href={restaurant.googleMaps} target="_blank">
            Google Maps
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href={restaurant.website} target="_blank">
            Website
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => {
          navigator.clipboard.writeText(window.location.href).then(() => {
            setUrlCopied(true);
            setTimeout(() => setUrlCopied(false), 1000);
          })
        }}>
          Copy link {urlCopied ? <CheckIcon/> : ""}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-1">
            {restaurant.name}
            {dropdownMenu}
          </DialogTitle>
          <DialogDescription>
            {restaurant.types.join(", ")}
          </DialogDescription>
        </DialogHeader>

        <span>{restaurant.address.street}, {restaurant.address.city}, {restaurant.address.country}</span>

        <span>{stars()}</span>
        <span className="flex flex-row">
          {Array.from({length: restaurant.priceRange}, (_, i) => (
            <BadgeDollarSign key={i}/>
          ))}
          {Array.from({length: 5 - restaurant.priceRange}, (_, i) => (
            <BadgeDollarSign key={i} className="opacity-30"/>
          ))}
        </span>

        <div className="mx-auto">
          <Gallery images={restaurant.images}/>
        </div>
      </DialogContent>
    </Dialog>
  )
}
