import "./globals.css";
import Navbar from "./components/Navbar";// নেভবার এখানে ইম্পোর্ট করা হলো

export default function RootLayout({ children }) {
  return (
    <html lang="bn">
      <body className="bg-zinc-950 text-white min-h-screen">
        {/* সবার উপরে নেভবার ফিক্সড থাকবে */}
        <Navbar />

        {/* বাকি পেজগুলোর কন্টেন্ট নিচে আসবে */}
        <main>{children}</main>
      </body>
    </html>
  );
}