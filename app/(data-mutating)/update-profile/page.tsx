import { Metadata } from 'next';
import ProfileForm from './components/ProfileForm';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Update Profile | Data Mutating',
};
export default function Page() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white px-6 py-8 shadow-sm sm:px-8">
      <div className="flex items-center gap-3">
        <Link
          href="/"
          className="group inline-flex rounded-lg p-2 text-slate-700 transition-colors hover:bg-blue-50 hover:text-blue-600"
          aria-label="Back"
        >
          <ArrowLeft size={20} className="transition-transform" />
        </Link>

        <h1 className="text-2xl font-bold tracking-tight text-slate-900">Update Profile</h1>
      </div>

      <div className="mt-7">
        <ProfileForm />
      </div>
    </div>
  );
}
