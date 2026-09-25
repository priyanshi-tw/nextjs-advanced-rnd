import PageHeader from '@/app/components/PageHeader';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Document Details | Nested Routing',
};
export default function DocumentDetails() {
  return <PageHeader title="Document Details" backUrl="/documents" />;
}
