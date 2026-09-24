import Link from 'next/link';
import React from 'react';

function page() {
  return (
    <div>
      <h1>this is my website</h1>

      {/* বড় হাতের Link এবং সঠিক ইম্পোর্ট সহ */}
      <div className="flex flex gap-2 mt-4 bg-cyan-300 shadow-amber-950 p-5 justify-baseline">
        <Link href="/">Home</Link>
        <Link href="/logo">Logo</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/about">About</Link>
        <Link href="/bio">Bio</Link>
      </div>
    </div>
  );
}

export default page;