import Link from "next/link";

export default function Header() {
  return (
    <nav className="sticky top-0 z-10 flex justify-between items-center gap-4 px-4 py-3 md:px-6 md:py-4 bg-background">
      <div className="flex items-baseline gap-2 min-w-0">
        <p className="shrink-0 text-lg font-bold text-foreground">hi-san10</p>
        <span className="text-text-muted">|</span>
        <p className="truncate text-sm text-text-muted">
          フリーランスエンジニア
        </p>
      </div>
      <Link
        href="/"
        className="shrink-0 md:mr-12 hover:underline underline-offset-4 hover:text-accent transition-colors"
      >
        Home
      </Link>
    </nav>
  );
}
