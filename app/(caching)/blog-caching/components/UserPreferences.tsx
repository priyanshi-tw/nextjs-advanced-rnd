import { cookies } from 'next/headers';

export default async function UserPreferences() {
  const cookieStore = await cookies();

  const theme = cookieStore.get('theme')?.value ?? 'light';
  const favoriteCategory = cookieStore.get('category')?.value;

  return (
    <>
      <h2 className="text-xl font-semibold text-slate-900">Your Preferences</h2>

      <div className="mt-5 space-y-4">
        <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
          <p className="text-sm text-slate-500">Theme</p>

          <p className="mt-1 font-medium capitalize text-slate-900">{theme}</p>
        </div>

        <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
          <p className="text-sm text-slate-500">Favorite Category</p>

          <p className="mt-1 font-medium text-slate-900">{favoriteCategory ?? 'Not selected'}</p>
        </div>
      </div>
    </>
  );
}
