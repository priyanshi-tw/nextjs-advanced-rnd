'use client';

import { useContext } from 'react';
import { ThemeContext } from '../providers/ThemeProvider';

export default function ThemeSwitcher() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div className="mt-6">
      <p className="mb-4">
        Current theme: <strong>{theme}</strong>
      </p>

      <div className="flex gap-3">
        <button
          onClick={() => setTheme('light')}
          className="rounded bg-gray-200 px-4 py-2 text-black"
        >
          Light
        </button>

        <button
          onClick={() => setTheme('dark')}
          className="rounded bg-gray-900 px-4 py-2 text-white"
        >
          Dark
        </button>
      </div>
    </div>
  );
}
