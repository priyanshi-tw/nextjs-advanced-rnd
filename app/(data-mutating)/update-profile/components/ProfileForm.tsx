import { updateProfile } from '../actions/profile';

export default function ProfileForm() {
  return (
    <form action={updateProfile} className="space-y-4">
      <input name="name" placeholder="Enter your name" className="rounded border p-2" />

      <button type="submit" className="rounded bg-black px-2 py-2 text-white ml-2">
        Update Profile
      </button>
    </form>
  );
}
