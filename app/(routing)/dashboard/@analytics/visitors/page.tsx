import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Visitors | Parallel Routing',
};
export default async function Visitors() {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return (
    <div>
      <p>Visitors: 4,250</p>
    </div>
  );
}
