type UserProps = {
  user: {
    id: number;
    name: string;
    username: string;
  };
};

export default function User({ user }: UserProps) {
  return (
    <div className="rounded-lg border p-4">
      <p className="text-sm text-gray-500">User</p>

      <h2 className="mt-2 text-xl font-semibold">{user.name}</h2>

      <p className="text-gray-600">@{user.username}</p>
    </div>
  );
}
