export function CourseDescription({
  description,
  longDescription,
}: {
  description: string
  longDescription: string
}) {
  return (
    <section aria-labelledby="description-heading">
      <h2
        id="description-heading"
        className="font-serif text-2xl font-bold text-foreground"
      >
        About This Course
      </h2>

      <div className="mt-4 space-y-4 text-sm leading-relaxed text-foreground">
        <p>{description}</p>
        <p>{longDescription}</p>
      </div>
    </section>
  )
}
