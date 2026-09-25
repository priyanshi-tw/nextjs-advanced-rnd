type Album = {
  id: number;
  title: string;
};

export default async function Albums({ userId }: { userId: number }) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}/albums`);

  const albums: Album[] = await response.json();
  await new Promise((resolve) => setTimeout(resolve, 500)); //  Added this to visually represent sequential data fetching properly

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <p className="text-sm text-slate-500">Albums for this user</p>

      <ul className="mt-4 space-y-4">
        {albums.map((album) => (
          <li
            key={album.id}
            className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm font-medium text-slate-700"
          >
            {album.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
