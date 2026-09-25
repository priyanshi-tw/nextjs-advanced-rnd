'use client';

import { Heart } from 'lucide-react';
import { useState } from 'react';

export default function LikeButton({ likes }: { likes: number }) {
  const [count, setCount] = useState(likes);

  return (
    <button
      type="button"
      onClick={() => setCount(count + 1)}
      className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm font-medium text-slate-700 transition-all hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
    >
      <Heart size={18} />
      {count} likes
    </button>
  );
}
