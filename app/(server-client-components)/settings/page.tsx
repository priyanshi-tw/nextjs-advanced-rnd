import ThemeSwitcher from './components/ThemeSwitcher';

export default function SettingsPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Settings</h1>

      <p className="mt-2 text-gray-600">Manage your application preferences.</p>

      <ThemeSwitcher />
    </div>
  );
}
