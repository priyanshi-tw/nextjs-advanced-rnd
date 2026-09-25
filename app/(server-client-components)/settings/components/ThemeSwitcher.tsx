'use client';

import { useContext } from 'react';
import { ThemeContext } from '../providers/ThemeProvider';
import { Moon, Sun } from 'lucide-react';

export default function ThemeSwitcher() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div className="mt-7">
      <p className="text-sm font-medium text-slate-700">Appearance</p>

      <div className="mt-3 inline-flex rounded-lg border border-slate-200 bg-slate-50 p-1">
        <button
          type="button"
          onClick={() => setTheme('light')}
          className={`inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition-colors ${
            theme === 'light'
              ? 'bg-white text-blue-600 shadow-sm'
              : 'text-slate-500 hover:text-slate-700'
          }`}
        >
          <Sun size={16} />
          Light
        </button>

        <button
          type="button"
          onClick={() => setTheme('dark')}
          className={`inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition-colors ${
            theme === 'dark'
              ? 'bg-slate-800 text-white shadow-sm'
              : 'text-slate-500 hover:text-slate-700'
          }`}
        >
          <Moon size={16} />
          Dark
        </button>
      </div>

      <p className="mt-3 text-sm text-slate-500">
        Current theme: <span className="font-medium text-slate-700">{theme}</span>
      </p>
    </div>
  );
}
