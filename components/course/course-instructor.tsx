import type { CourseInstructor } from "@/lib/courses"

export function CourseInstructorSection({
  instructor,
}: {
  instructor: CourseInstructor
}) {
  return (
    <section aria-labelledby="instructor-heading">
      <h2
        id="instructor-heading"
        className="font-serif text-2xl font-bold text-foreground"
      >
        Your Instructor
      </h2>

      <div className="mt-5 flex items-start gap-5">
        <div
          className="h-16 w-16 shrink-0 overflow-hidden rounded-full bg-secondary"
          aria-hidden="true"
        >
          {/* Using a CSS initial to avoid an image load that could hurt LCP */}
          <div className="flex h-full w-full items-center justify-center text-xl font-bold text-secondary-foreground">
            {instructor.name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </div>
        </div>

        <div className="space-y-1.5">
          <h3 className="text-lg font-semibold text-foreground">
            {instructor.name}
          </h3>
          <p className="text-sm font-medium text-muted-foreground">
            {instructor.role}
          </p>
          <p className="mt-2 max-w-xl text-sm leading-relaxed text-foreground">
            {instructor.bio}
          </p>
        </div>
      </div>
    </section>
  )
}
