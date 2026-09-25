import { Suspense } from 'react';
import Link from 'next/link';
import BlogPosts from './components/BlogPosts';
import UserPreferences from './components/UserPreferences';
import { Metadata } from 'next';
import { ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Blog | Static, Cached and Streaming',
};
export default function BlogCachingPage() {
  return (
    <div className="">
      <div className="rounded-2xl border border-slate-200 bg-white px-6 py-8 shadow-sm sm:px-8">
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="group inline-flex rounded-lg p-2 text-slate-700 transition-colors hover:bg-blue-50 hover:text-blue-600"
            aria-label="Back"
          >
            <ArrowLeft size={20} className="transition-transform" />
          </Link>

          <h1 className="text-2xl font-bold tracking-tight text-slate-900">Our Blog</h1>
        </div>

        <nav className="mt-4 flex gap-6 text-sm font-medium ml-12">
          <Link href="/" className="text-slate-600 transition hover:text-blue-600">
            Home
          </Link>

          <Link href="/about" className="text-slate-600 transition hover:text-blue-600">
            About
          </Link>
        </nav>
      </div>
      <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-3">
        <section className="lg:col-span-2 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <BlogPosts />
        </section>

        <aside className="h-fit rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <Suspense
            fallback={<div className="text-sm text-slate-500">Loading your preferences...</div>}
          >
            <UserPreferences />
          </Suspense>
        </aside>
      </div>
    </div>
  );
}
