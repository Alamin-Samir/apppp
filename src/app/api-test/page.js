import React from 'react';

export default async function ApiDemoPage() {
  // ১. এপিআই থেকে ডেটা কল করা (ফেক ডামি এপিআই)
  const res = await fetch('https://jsonplaceholder.typicode.com/posts/1');
  const data = await res.json();

  return (
    <div style={{ padding: "20px" }}>
      <h1>API Data Fetching Demo</h1>
      <h3>{data.title}</h3>
      <p>{data.body}</p>
      <p>{data.id}</p>
    </div>
  );
}