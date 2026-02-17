import { CheckCircle2 } from "lucide-react"

export function CourseHighlights({ highlights }: { highlights: string[] }) {
  return (
    <section aria-labelledby="highlights-heading">
      <h2
        id="highlights-heading"
        className="font-serif text-2xl font-bold text-foreground"
      >
        What you will learn
      </h2>

      <ul
        role="list"
        className="mt-5 grid gap-3 sm:grid-cols-2"
      >
        {highlights.map((item) => (
          <li key={item} className="flex items-start gap-3">
            <CheckCircle2
              className="mt-0.5 h-5 w-5 shrink-0 text-success"
              aria-hidden="true"
            />
            <span className="text-sm leading-relaxed text-foreground">{item}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}
