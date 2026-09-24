import ThemeProvider from './providers/ThemeProvider';

export default function SettingsLayout({ children }: { children: React.ReactNode }) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
