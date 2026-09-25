import AnalyticsTabs from './components/AnalyticsTabs';

export default function AnalyticsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="text-lg font-semibold text-slate-900">Analytics</h2>

      <AnalyticsTabs />

      <div className="mt-6">{children}</div>
    </div>
  );
}
