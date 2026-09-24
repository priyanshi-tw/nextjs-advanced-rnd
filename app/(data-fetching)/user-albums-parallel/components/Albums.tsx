type Album = {
  id: number;
  title: string;
};

type AlbumsProps = {
  albums: Album[];
};

export default function Albums({ albums }: AlbumsProps) {
  return (
    <div className="rounded-lg border p-4">
      <p className="text-sm text-gray-500">Albums</p>

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
