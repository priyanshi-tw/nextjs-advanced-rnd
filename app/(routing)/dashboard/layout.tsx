export default function DashboardLayout({
  children,
  analytics,
  notifications,
}: {
  children: React.ReactNode;
  analytics: React.ReactNode;
  notifications: React.ReactNode;
}) {
  return (
    <div className="space-y-6 p-6">
      {children}

      <div className="grid grid-cols-2 gap-4">
        {analytics}
        {notifications}
      </div>
    </div>
  );
}
