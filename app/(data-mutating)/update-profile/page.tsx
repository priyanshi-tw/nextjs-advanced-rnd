import ProfileForm from './components/ProfileForm';

export default function Page() {
  return (
    <div className="max-w-xl p-6">
      <h1 className="text-2xl font-bold">Update Profile</h1>

      <div className="mt-6">
        <ProfileForm />
      </div>
    </div>
  );
}
