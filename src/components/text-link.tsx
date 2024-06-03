import Link from "next/link";

export function TextLink({href, text}: { href: string, text: string }) {
  return (
    <Link
      className="underline" target="_blank"
      href={href}
    >
      {text}
    </Link>
  )
}
