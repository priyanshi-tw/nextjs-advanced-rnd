type Album = {
  id: number;
  title: string;
};

export default async function Albums({ userId }: { userId: number }) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}/albums`);

  const albums: Album[] = await response.json();
  await new Promise((resolve) => setTimeout(resolve, 500)); //  Added this to visually represent sequential data fetching properly

  return (
    <div className="mt-6 rounded-lg border p-4">
      <p className="text-sm text-gray-500">Albums for this user</p>

      <ul className="mt-4 space-y-2">
        {albums.map((album) => (
          <li key={album.id} className="rounded border p-3">
            {album.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
