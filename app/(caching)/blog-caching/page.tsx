import { Suspense } from 'react';
import Link from 'next/link';
import BlogPosts from './components/BlogPosts';
import UserPreferences from './components/UserPreferences';

export default function BlogCachingPage() {
  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <header className="rounded-xl border bg-white p-6 shadow-sm">
          <h1 className="text-3xl font-bold text-gray-900">Our Blog</h1>

          <nav className="mt-4 flex gap-6 text-sm font-medium">
            <Link href="/" className="text-gray-600 transition hover:text-gray-900">
              Home
            </Link>

            <Link href="/about" className="text-gray-600 transition hover:text-gray-900">
              About
            </Link>
          </nav>
        </header>

        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-3">
          <section className="lg:col-span-2 rounded-xl border bg-white p-6 shadow-sm">
            <BlogPosts />
          </section>

          <aside className="h-fit rounded-xl border bg-white p-6 shadow-sm">
            <Suspense
              fallback={<div className="text-sm text-gray-500">Loading your preferences...</div>}
            >
              <UserPreferences />
            </Suspense>
          </aside>
        </div>
      </div>
    </main>
  );
}
