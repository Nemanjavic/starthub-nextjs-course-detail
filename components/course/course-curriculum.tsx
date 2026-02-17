import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { PlayCircle } from "lucide-react"
import type { CourseModule } from "@/lib/courses"

export function CourseCurriculum({ modules }: { modules: CourseModule[] }) {
  const totalLessons = modules.reduce((sum, m) => sum + m.lessons.length, 0)

  return (
    <section aria-labelledby="curriculum-heading">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h2
          id="curriculum-heading"
          className="font-serif text-2xl font-bold text-foreground"
        >
          Course Curriculum
        </h2>
        <p className="text-sm text-muted-foreground">
          {modules.length} modules &middot; {totalLessons} lessons
        </p>
      </div>

      <Accordion
        type="multiple"
        defaultValue={[modules[0]?.title ?? ""]}
        className="mt-5"
      >
        {modules.map((mod, moduleIndex) => (
          <AccordionItem key={mod.title} value={mod.title}>
            <AccordionTrigger className="text-left text-sm font-semibold text-foreground hover:no-underline">
              <span className="flex items-center gap-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-secondary text-xs font-bold text-secondary-foreground">
                  {moduleIndex + 1}
                </span>
                {mod.title}
              </span>
            </AccordionTrigger>
            <AccordionContent>
              <ol role="list" className="space-y-1 py-1 pl-10">
                {mod.lessons.map((lesson) => (
                  <li
                    key={lesson.title}
                    className="flex items-center justify-between rounded-md px-3 py-2 text-sm transition-colors hover:bg-muted"
                  >
                    <span className="flex items-center gap-2 text-foreground">
                      <PlayCircle
                        className="h-4 w-4 text-muted-foreground"
                        aria-hidden="true"
                      />
                      {lesson.title}
                    </span>
                    <span className="shrink-0 text-xs text-muted-foreground">
                      {lesson.duration}
                    </span>
                  </li>
                ))}
              </ol>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  )
}
