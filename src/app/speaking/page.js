import Image from "next/image";
import { speakingData, profile } from "@/data/content";

export const metadata = {
  title: `Speaking — ${profile.name}`,
  description: `Conference talks and presentations by ${profile.name}.`,
};

export default function Speaking() {
  return (
    <div className="min-h-screen px-6 py-16">
      <main className="mx-auto w-full max-w-3xl">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
          Speaking
        </h1>
        <p className="mt-2 text-base text-zinc-500">
          Conference talks and presentations.
        </p>

        <div className="mt-12 space-y-10">
          {speakingData.map((talk, i) => (
            <article
              key={i}
              className="group relative flex flex-col gap-5 rounded-2xl border border-zinc-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md sm:flex-row"
            >
              <div className="flex shrink-0 items-start justify-center sm:w-28">
                <Image
                  src={talk.image}
                  alt={talk.conference}
                  width={96}
                  height={96}
                  className="rounded-xl object-contain"
                  style={{ width: 96, height: 96 }}
                />
              </div>

              <div className="flex-1">
                <p className="text-sm font-medium text-zinc-400">
                  {talk.year}
                </p>
                <h2 className="mt-1 text-lg font-semibold text-zinc-900">
                  {talk.title}
                </h2>
                <p className="mt-0.5 text-sm font-medium text-zinc-500">
                  {talk.conference}
                </p>
                <p className="mt-3 text-sm leading-6 text-zinc-600">
                  {talk.description}
                </p>

                {talk.links.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-3">
                    {talk.links.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 rounded-md bg-zinc-100 px-3 py-1.5 text-xs font-medium text-zinc-700 transition-colors hover:bg-zinc-200 hover:text-zinc-900"
                      >
                        {link.label}
                        <svg
                          viewBox="0 0 16 16"
                          fill="currentColor"
                          className="h-3 w-3"
                        >
                          <path d="M6.22 8.72a.75.75 0 0 0 1.06 1.06l3.22-3.22v1.69a.75.75 0 0 0 1.5 0v-3.5a.75.75 0 0 0-.75-.75h-3.5a.75.75 0 0 0 0 1.5h1.69L6.22 8.72z" />
                        </svg>
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}
