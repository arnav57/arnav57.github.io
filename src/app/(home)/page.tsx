import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="flex flex-col justify-center text-center flex-1">
      <h1 className="text-2xl font-bold mb-4">This website is still under construction!</h1>
      <p>
        You can visit{' '}
        <Link href="aperture/" className="font-medium underline">
          /aperture
        </Link>{' '}
        and see the homepage for capstone docs.
      </p>
    </div>
  );
}