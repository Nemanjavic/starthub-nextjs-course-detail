import type { Course } from "@/lib/courses"

/**
 * Renders a JSON-LD <script> tag for Google structured data (Course schema).
 * @see https://schema.org/Course
 * @see https://developers.google.com/search/docs/appearance/structured-data/course
 */
export function CourseJsonLd({ course }: { course: Course }) {
  const totalLessons = course.modules.reduce((sum, m) => sum + m.lessons.length, 0)

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: course.title,
    description: course.description,
    url: `${course.provider.url}/courses/${course.slug}`,
    provider: {
      "@type": "Organization",
      name: course.provider.name,
      sameAs: course.provider.url,
    },
    instructor: {
      "@type": "Person",
      name: course.instructor.name,
      jobTitle: course.instructor.role,
    },
    coursePrerequisites: `Recommended level: ${course.level}`,
    educationalLevel: course.level,
    inLanguage: course.language,
    numberOfCredits: totalLessons,
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: "online",
      courseWorkload: course.duration,
    },
    offers: {
      "@type": "Offer",
      price: course.price,
      priceCurrency: course.currency,
      availability: "https://schema.org/InStock",
      category: "Paid",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: course.rating,
      bestRating: 5,
      ratingCount: course.reviewCount,
    },
    about: course.tags.map((tag) => ({
      "@type": "Thing",
      name: tag,
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}
