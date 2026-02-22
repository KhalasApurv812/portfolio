import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between p-5 border-b border-slate-800">
      <h1 className="font-bold">Apurv</h1>

      <div className="flex gap-4">
        <Link href="/">Home</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
}