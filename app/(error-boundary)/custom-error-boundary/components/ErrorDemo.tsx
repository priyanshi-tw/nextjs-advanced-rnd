'use client';

export default function ErrorDemo() {
  if (true) {
    console.error('This is an intentional error.');
  }

  return <div>Error Demo</div>;
}
