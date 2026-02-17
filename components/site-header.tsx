import { BookOpen } from "lucide-react"
import Link from "next/link"

export function SiteHeader() {
  return (
    <header className="border-b border-border bg-card">
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <Link
          href="/"
          className="flex items-center gap-2 text-foreground transition-colors hover:text-foreground/80"
        >
          <BookOpen className="h-5 w-5" aria-hidden="true" />
          <span className="font-serif text-lg font-bold">Learnwise</span>
        </Link>

        <ul className="flex items-center gap-6 text-sm font-medium text-muted-foreground" role="list">
          <li>
            <Link href="/" className="transition-colors hover:text-foreground">
              Courses
            </Link>
          </li>
          <li>
            <Link href="/" className="transition-colors hover:text-foreground">
              Pricing
            </Link>
          </li>
          <li className="hidden sm:block">
            <Link href="/" className="transition-colors hover:text-foreground">
              For Teams
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
