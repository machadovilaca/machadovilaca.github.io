"use client"

import * as React from "react"
import Link from "next/link"

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const pages = [
  {
    title: "About",
    href: "/",
  },
  {
    title: "Resume",
    href: "/resume",
  },
  {
    title: "Food Map",
    href: "/food-map",
  },
]

export function Menu() {
  return (
    <header className="w-full py-4 border-b mx-auto px-4">
      <NavigationMenu>
        <NavigationMenuList>
          {pages.map((page) => (
            <NavigationMenuItem key={page.href}>
              <Link href={page.href} legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  {page.title}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  )
}
