import Link from 'next/link';

export default function UsersPage() {
  return (
    <div>
      <h1 className="mb-4 text-2xl font-bold">Users</h1>

      <p className="mb-4">Welcome to the users page.</p>

      <Link href="/users/login" className="rounded bg-black px-4 py-2 text-white">
        Login
      </Link>
    </div>
  );
}
