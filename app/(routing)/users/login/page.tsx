export default function LoginPage() {
  return (
    <div className="mx-auto mt-20 max-w-md rounded-lg border p-6">
      <h1 className="mb-4 text-2xl font-bold">Login Page</h1>

      <input type="email" placeholder="Email" className="mb-3 w-full rounded border p-2" />

      <input type="password" placeholder="Password" className="mb-4 w-full rounded border p-2" />

      <button className="w-full rounded bg-black px-4 py-2 text-white">Login</button>
    </div>
  );
}
