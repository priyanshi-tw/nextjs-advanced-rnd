import { cookies } from 'next/headers';

export default async function UserPreferences() {
  const cookieStore = await cookies();

  const theme = cookieStore.get('theme')?.value ?? 'light';
  const favoriteCategory = cookieStore.get('category')?.value;

  return (
    <>
      <h2 className="text-xl font-semibold text-gray-900">Your Preferences</h2>

      <div className="mt-5 space-y-4">
        <div className="rounded-lg bg-gray-50 p-4">
          <p className="text-sm text-gray-500">Theme</p>
          <p className="mt-1 font-medium capitalize text-gray-900">{theme}</p>
        </div>

        <div className="rounded-lg bg-gray-50 p-4">
          <p className="text-sm text-gray-500">Favorite Category</p>
          <p className="mt-1 font-medium text-gray-900">{favoriteCategory ?? 'Not selected'}</p>
        </div>
      </div>
    </>
  );
}
