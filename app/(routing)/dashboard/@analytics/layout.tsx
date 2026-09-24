import AnalyticsTabs from './components/AnalyticsTabs';

export default function AnalyticsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-lg border p-4">
      <h2 className="text-lg font-semibold">Analytics</h2>

      <AnalyticsTabs />

      <div className="mt-4">{children}</div>
    </div>
  );
}
