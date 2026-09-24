import Link from 'next/link';
import {
  caching,
  dataFetchingConcepts,
  dataMutatingConcepts,
  routingConcepts,
  serverClientConcepts,
} from './data/next-js-concepts';

export default async function Home() {
  return (
    <div className="p-4">
      <h1 className="text-[24px] text-black font-semibold">Next Js R&D</h1>
      <p className="mt-1 text-gray-500">Exploring Next.js concepts with practical demos.</p>
      <div className="mt-8">
        <h2 className="text-[20px] font-semibold text-black">1. Routing</h2>

        <ul className="mt-4 list-disc space-y-2 pl-6">
          {routingConcepts.map((concept) => (
            <li key={concept.href}>
              <Link
                href={concept.href}
                className="flex items-center gap-2 text-gray-600 hover:underline hover:text-[#0DA2FF]"
              >
                {concept.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-8">
        <h2 className="text-[20px] font-semibold text-black">2. Server and Client Components</h2>

        <ul className="mt-4 list-disc space-y-2 pl-6">
          {serverClientConcepts.map((concept) => (
            <li key={concept.href}>
              <Link
                href={concept.href}
                className="flex items-center gap-2 text-gray-600 hover:text-[#0DA2FF] hover:underline"
              >
                {concept.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-8">
        <h2 className="text-[20px] font-semibold text-black">3. Data Fetching</h2>

        <ul className="mt-4 list-disc space-y-2 pl-6">
          {dataFetchingConcepts.map((concept) => (
            <li key={concept.href}>
              <Link
                href={concept.href}
                className="flex items-center gap-2 text-gray-600 hover:text-[#0DA2FF] hover:underline"
              >
                {concept.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-8">
        <h2 className="text-[20px] font-semibold text-black">4. Data Mutating</h2>

        <ul className="mt-4 list-disc space-y-2 pl-6">
          {dataMutatingConcepts.map((concept) => (
            <li key={concept.href}>
              <Link
                href={concept.href}
                className="flex items-center gap-2 text-gray-600 hover:text-[#0DA2FF] hover:underline"
              >
                {concept.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-8">
        <h2 className="text-[20px] font-semibold text-black">5. Caching</h2>

        <ul className="mt-4 list-disc space-y-2 pl-6">
          {caching.map((concept) => (
            <li key={concept.href}>
              <Link
                href={concept.href}
                className="flex items-center gap-2 text-gray-600 hover:text-[#0DA2FF] hover:underline"
              >
                {concept.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
