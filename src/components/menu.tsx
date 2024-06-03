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
import {ThemeToggle} from "@/components/theme-toogle";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import Image from "next/image";

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
    <header className="w-full py-4 border-b mx-auto px-4 flex justify-between">
      <NavigationMenu>
        <Avatar className="mr-2 h-10 w-10">
          <AvatarImage asChild src="/jvilaca.jpg">
            <Image src="/jvilaca.jpg" alt="João Vilaça" width={400} height={400}/>
          </AvatarImage>
          <AvatarFallback>JV</AvatarFallback>
        </Avatar>
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
      <ThemeToggle/>
    </header>
  )
}
