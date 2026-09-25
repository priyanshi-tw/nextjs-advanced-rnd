import PageHeader from '@/app/components/PageHeader';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dashboard | Parallel Routing',
};
export default function DashboardPage() {
  return <PageHeader title="Dashboard" description="Welcome to the dashboard." />;
}
