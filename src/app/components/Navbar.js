import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-zinc-900 px-6 py-4 flex justify-between items-center text-white border-b border-zinc-800">
      <div className="text-xl font-bold text-yellow-400">আমার প্রজেক্ট</div>
      <div className="flex gap-6">
        <Link href="/" className="hover:text-yellow-400">হোম</Link>
        <Link href="/contact" className="hover:text-yellow-400">conatct</Link>
          <Link href="/about" className="hover:text-yellow-400">About me</Link>
      </div>
    </nav>
  );
}