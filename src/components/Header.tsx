import Link from "next/link";

export default function Header() {
  return (
    <nav className="sticky top-0 z-10 flex justify-between items-center px-6 py-4">
      <div className="flex items-baseline gap-2">
        <p className="text-lg font-bold text-foreground">hi-san10</p>
        <span className="text-text-muted">|</span>
        <p className="text-sm text-text-muted">フリーランスエンジニア</p>
      </div>
      <Link
        href="/"
        className="mr-12 hover:underline underline-offset-4 hover:text-accent transition-colors"
      >
        Home
      </Link>
    </nav>
  );
}