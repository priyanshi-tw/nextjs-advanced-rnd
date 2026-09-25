import type { Metadata } from 'next';
import Link from 'next/link';

import { conceptSections } from './data/next-js-concepts';

export const metadata: Metadata = {
  title: 'Next.js R&D',
  description:
    'A practical Next.js R&D project exploring concepts and best practices with the App Router.',
};

export default function Home() {
  return (
    <>
      <header className="rounded-2xl border border-slate-200 bg-white/90 px-6 py-8 shadow-sm backdrop-blur-sm sm:px-8">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600 text-sm font-bold text-white">
            N
          </div>

          <div>
            <h1 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
              Next.js R&D
            </h1>

            <p className="mt-1 text-sm text-slate-500">
              Advanced concepts and practical implementations
            </p>
          </div>
        </div>

        <p className="mt-5 text-sm leading-6 text-slate-600 sm:text-base">
          Exploring Next.js concepts with practical demos and hands-on implementations using the App
          Router.
        </p>
      </header>

      <div className="mt-12 space-y-12">
        {conceptSections.map((section, index) => (
          <section key={section.title}>
            <div className="mb-5 flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-100 text-sm font-semibold text-blue-600">
                {String(index + 1)}
              </span>

              <h2 className="text-lg font-semibold text-slate-900">{section.title}</h2>
            </div>

            <div className="grid grid-cols-1 items-stretch gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {section.concepts.map((concept) => (
                <Link
                  key={concept.href}
                  href={concept.href}
                  className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white px-5 py-4 shadow-sm transition-all hover:border-blue-200 hover:shadow-md"
                >
                  <span className="font-medium text-slate-700 transition-colors group-hover:text-blue-600">
                    {concept.title}
                  </span>

                  <span className="text-lg text-slate-300 transition-all group-hover:translate-x-1 group-hover:text-blue-600">
                    →
                  </span>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>
    </>
  );
}
