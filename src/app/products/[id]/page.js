import React from 'react';

// ১. এখানে `params` রিসিভ করতে হয় async/await দিয়ে
export default async function ProductDetailsPage({ params }) {
  // ডাইনামিক ইউআরএল থেকে [id] রিসিভ করা
  const { id } = await params;

  // ২. ওই নির্দিষ্ট আইডি দিয়ে এপিআই থেকে শুধু একটি প্রোডাক্টের ডেটা ফেচ করা
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const product = await res.json();

  return (
    <div className="p-8 bg-zinc-950 text-white min-h-screen">
      <div className="max-w-2xl mx-auto bg-zinc-900 border border-zinc-800 p-6 rounded-xl">
        
        {/* প্রোডাক্টের আইডি */}
        <span className="text-xs bg-blue-600 text-white px-2 py-1 rounded">
          Product ID: {id}
        </span>

        {/* এপিআই থেকে আনা সিঙ্গেল প্রোডাক্টের টাইটেল */}
        <h1 className="text-2xl font-bold text-yellow-400 mt-4 mb-3">
          {product.title}
        </h1>

        {/* এপিআই থেকে আনা সিঙ্গেল প্রোডাক্টের বিবরণ */}
        <p className="text-zinc-300 leading-relaxed">
          {product.body}
        </p>
        
      </div>
    </div>
  );
}