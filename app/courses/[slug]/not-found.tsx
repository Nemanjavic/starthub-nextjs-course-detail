import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function CourseNotFound() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex flex-1 items-center justify-center px-4">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
            404
          </p>
          <h1 className="mt-2 font-serif text-3xl font-bold text-foreground">
            Course not found
          </h1>
          <p className="mt-2 text-muted-foreground">
            The course you are looking for does not exist or has been removed.
          </p>
          <Link
            href="/"
            className="mt-6 inline-block rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Browse Courses
          </Link>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
