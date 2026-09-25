import ErrorDemo from './components/ErrorDemo';
import ErrorBoundary from './components/CustomErrorBoundary';
import { Metadata } from 'next';
import PageHeader from '@/app/components/PageHeader';

export const metadata: Metadata = {
  title: 'Custom Error Boundary',
};
export default function CustomErrorBoundaryPage() {
  return (
    <div className="space-y-4">
      <PageHeader
        title="Custom Error Boundary"
        description="This example demonstrates a custom component-level error boundary."
      />

      <div className="mt-6">
        <ErrorBoundary title="Component Error">
          <ErrorDemo />
        </ErrorBoundary>
      </div>
    </div>
  );
}
