export default function UsersLayout({
  children,
  auth,
}: {
  children: React.ReactNode;
  auth: React.ReactNode;
}) {
  return (
    <div className="p-6">
      {children}
      {auth}
    </div>
  );
}
