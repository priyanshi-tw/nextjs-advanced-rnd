import { updateProfile } from '../actions/profile';

export default function ProfileForm() {
  return (
    <form action={updateProfile} className="space-y-4">
      <div className="flex flex-col gap-2">
        <input
          name="name"
          placeholder="Enter your name"
          className="w-[400px] rounded-lg border border-slate-200 px-4 py-2.5 text-sm text-slate-700 outline-none transition-colors placeholder:text-slate-400 focus:border-blue-300 focus:ring-2 focus:ring-blue-100"
        />

        <button
          type="submit"
          className="rounded-lg bg-blue-600 px-3 py-2.5 text-sm font-medium text-white transition-colors hover:bg-blue-700 w-[120px]"
        >
          Update Profile
        </button>
      </div>
    </form>
  );
}
