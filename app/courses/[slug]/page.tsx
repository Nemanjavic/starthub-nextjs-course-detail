import { notFound } from "next/navigation"
import type { Metadata } from "next"

import { getCourseBySlug, getAllCourseSlugs } from "@/lib/courses"
import { CourseJsonLd } from "@/components/course/course-json-ld"
import { CourseHero } from "@/components/course/course-hero"
import { CourseHighlights } from "@/components/course/course-highlights"
import { CourseCurriculum } from "@/components/course/course-curriculum"
import { CourseInstructorSection } from "@/components/course/course-instructor"
import { CourseDescription } from "@/components/course/course-description"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

// ---------------------------------------------------------------------------
// Static Params — pre-render all known course slugs at build time
// ---------------------------------------------------------------------------
export async function generateStaticParams() {
  const slugs = await getAllCourseSlugs()
  return slugs.map((slug) => ({ slug }))
}

// ---------------------------------------------------------------------------
// Dynamic Metadata — title, description, Open Graph, Twitter cards
// ---------------------------------------------------------------------------
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const course = await getCourseBySlug(slug)

  if (!course) {
    return { title: "Course Not Found" }
  }

  const title = `${course.title} — ${course.provider.name}`
  const description = course.description

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      url: `${course.provider.url}/courses/${course.slug}`,
      siteName: course.provider.name,
      images: [
        {
          url: course.imageUrl,
          width: 1200,
          height: 630,
          alt: course.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [course.imageUrl],
    },
    alternates: {
      canonical: `${course.provider.url}/courses/${course.slug}`,
    },
  }
}

// ---------------------------------------------------------------------------
// Page Component (Server Component — zero client JS by default)
// ---------------------------------------------------------------------------
export default async function CourseDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const course = await getCourseBySlug(slug)

  if (!course) {
    notFound()
  }

  return (
    <>
      {/* JSON-LD structured data for search engines */}
      <CourseJsonLd course={course} />

      {/* Skip to main content link for accessibility */}
      <a
        href="#main-content"
        className="absolute -top-full left-0 z-50 inline-block bg-primary text-primary-foreground px-4 py-2 rounded focus:top-0 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all"
      >
        Skip to main content
      </a>

      <div className="flex min-h-screen flex-col">
        <SiteHeader />

        <CourseHero course={course} />

        <main id="main-content" className="flex-1">
          <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
            <div className="space-y-12">
              <CourseHighlights highlights={course.highlights} />

              <hr className="border-border" />

              <CourseCurriculum modules={course.modules} />

              <hr className="border-border" />

              <CourseDescription
                description={course.description}
                longDescription={course.longDescription}
              />

              <hr className="border-border" />

              <CourseInstructorSection instructor={course.instructor} />

              {/* Tags */}
              <section aria-label="Course topics">
                <div className="flex flex-wrap gap-2">
                  {course.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </main>

        <SiteFooter />
      </div>
    </>
  )
}
