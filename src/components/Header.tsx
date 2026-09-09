import Link from "next/link";

export default function Header() {
    return (
      <nav className="sticky top-0 z-10 flex justify-between items-center px-6 py-4">
        <div className="flex items-center gap-2">
          <p>ヒョー</p>
          <p>フリーランスエンジニア</p>
        </div>
        <Link
          className="hover:underline underline-offset-4 hover:text-gray-500 transition-colors"
          href="/"
        >
          Home
        </Link>
      </nav>
    );
}