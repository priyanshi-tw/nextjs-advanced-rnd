'use server';

export async function updateProfile(formData: FormData) {
  const name = formData.get('name');
  console.log('Updated profile:', name);
}
