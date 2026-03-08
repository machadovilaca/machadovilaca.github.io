"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { profile } from "@/data/content";

const navLinks = [
  { label: "About", href: "/" },
  { label: "Speaking", href: "/speaking" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="fixed inset-x-0 top-0 z-50 backdrop-blur-md bg-white/80 border-b border-zinc-100">
      <nav className="mx-auto flex max-w-3xl items-center justify-between px-6 py-3">
        <Link href="/" className="flex items-center gap-2.5 shrink-0 transition-opacity hover:opacity-80">
          <Image
            src={profile.image}
            alt={profile.name}
            width={36}
            height={36}
            className="rounded-full object-cover ring-2 ring-zinc-200"
            style={{ width: 36, height: 36 }}
          />
          <span className="text-sm font-semibold text-zinc-900">
            {profile.name}
          </span>
        </Link>

        <ul className="flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-zinc-100 text-zinc-900"
                      : "text-zinc-500 hover:bg-zinc-50 hover:text-zinc-900"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
