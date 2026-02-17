import Image from "next/image"
import { Star, Users, Clock, BarChart3, Globe } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import type { Course } from "@/lib/courses"

function StarRating({ rating, count }: { rating: number; count: number }) {
  return (
    <div className="flex items-center gap-1.5">
      <span className="font-semibold text-foreground">{rating}</span>
      <div className="flex items-center" aria-label={`${rating} out of 5 stars`}>
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`h-4 w-4 ${
              i < Math.floor(rating)
                ? "fill-amber-500 text-amber-500"
                : i < rating
                  ? "fill-amber-500/50 text-amber-500"
                  : "fill-muted text-muted"
            }`}
          />
        ))}
      </div>
      <span className="text-sm text-muted-foreground">
        ({count.toLocaleString()} reviews)
      </span>
    </div>
  )
}

export function CourseHero({ course }: { course: Course }) {
  const discount = Math.round(
    ((course.originalPrice - course.price) / course.originalPrice) * 100
  )

  return (
    <section aria-labelledby="course-title" className="border-b border-border bg-card">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-12">
          {/* Text content */}
          <div className="flex-1 space-y-5">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="secondary" className="text-xs font-medium uppercase tracking-wide">
                {course.category}
              </Badge>
              <Badge variant="outline" className="text-xs font-medium uppercase tracking-wide">
                {course.level}
              </Badge>
            </div>

            <h1
              id="course-title"
              className="font-serif text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance"
            >
              {course.title}
            </h1>

            <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
              {course.subtitle}
            </p>

            <StarRating rating={course.rating} count={course.reviewCount} />

            <dl className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-1.5">
                <dt className="sr-only">Enrolled students</dt>
                <Users className="h-4 w-4" aria-hidden="true" />
                <dd>{course.enrolledCount.toLocaleString()} students</dd>
              </div>
              <div className="flex items-center gap-1.5">
                <dt className="sr-only">Duration</dt>
                <Clock className="h-4 w-4" aria-hidden="true" />
                <dd>{course.duration}</dd>
              </div>
              <div className="flex items-center gap-1.5">
                <dt className="sr-only">Level</dt>
                <BarChart3 className="h-4 w-4" aria-hidden="true" />
                <dd>{course.level}</dd>
              </div>
              <div className="flex items-center gap-1.5">
                <dt className="sr-only">Language</dt>
                <Globe className="h-4 w-4" aria-hidden="true" />
                <dd>{course.language}</dd>
              </div>
            </dl>

            <p className="text-xs text-muted-foreground">
              Last updated{" "}
              <time dateTime={course.lastUpdated}>
                {new Date(course.lastUpdated).toLocaleDateString("en-US", {
                  month: "long",
                  year: "numeric",
                })}
              </time>
            </p>
          </div>

          {/* Pricing card */}
          <aside
            aria-label="Pricing and enrollment"
            className="w-full shrink-0 rounded-lg border border-border bg-background p-6 shadow-sm lg:w-80"
          >
            <div className="space-y-4">
              <div className="flex items-baseline gap-3">
                <span className="text-3xl font-bold text-foreground">
                  ${course.price}
                </span>
                <span className="text-lg text-muted-foreground line-through">
                  ${course.originalPrice}
                </span>
                <Badge className="bg-success text-success-foreground text-xs font-semibold">
                  {discount}% off
                </Badge>
              </div>

              <button
                type="button"
                className="w-full rounded-md bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                Enroll Now
              </button>

              <p className="text-center text-xs text-muted-foreground">
                30-day money-back guarantee
              </p>

              <hr className="border-border" />

              <ul className="space-y-2 text-sm text-foreground" role="list">
                <li className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
                  {course.duration} of content
                </li>
                <li className="flex items-center gap-2">
                  <BarChart3 className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
                  {course.modules.length} modules,{" "}
                  {course.modules.reduce((s, m) => s + m.lessons.length, 0)} lessons
                </li>
                <li className="flex items-center gap-2">
                  <Globe className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
                  Certificate of completion
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
