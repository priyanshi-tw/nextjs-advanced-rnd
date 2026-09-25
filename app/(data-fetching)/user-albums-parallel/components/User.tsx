type UserProps = {
  user: {
    id: number;
    name: string;
    username: string;
  };
};

export default function User({ user }: UserProps) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <p className="text-sm text-slate-500">User</p>

      <h2 className="mt-2 text-xl font-semibold text-slate-900">{user.name}</h2>

      <p className="mt-1 text-sm text-slate-600">@{user.username}</p>
    </div>
  );
}
