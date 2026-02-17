export interface CourseModule {
  title: string
  lessons: { title: string; duration: string }[]
}

export interface CourseInstructor {
  name: string
  role: string
  bio: string
  avatarUrl: string
}

export interface Course {
  slug: string
  title: string
  subtitle: string
  description: string
  longDescription: string
  instructor: CourseInstructor
  provider: {
    name: string
    url: string
  }
  rating: number
  reviewCount: number
  enrolledCount: number
  price: number
  originalPrice: number
  currency: string
  language: string
  level: "Beginner" | "Intermediate" | "Advanced"
  duration: string
  lastUpdated: string
  category: string
  tags: string[]
  highlights: string[]
  modules: CourseModule[]
  imageUrl: string
}

const courses: Course[] = [
  {
    slug: "advanced-react-patterns",
    title: "Advanced React Patterns & Performance",
    subtitle:
      "Master compound components, render props, hooks composition, and performance optimization techniques used by top engineering teams.",
    description:
      "A comprehensive deep-dive into advanced React patterns including compound components, render props, custom hooks, and performance optimization strategies for production applications.",
    longDescription:
      "This course takes your React skills to the next level. You will learn battle-tested patterns used by companies like Meta, Vercel, and Shopify to build scalable, maintainable component libraries. Each module includes real-world exercises and code reviews that mirror actual production scenarios. By the end, you will confidently architect complex React applications with clean, reusable abstractions.",
    instructor: {
      name: "Nemanja Sokolovic",
      role: "SEO Engineer at Starthub",
      bio: "Nemanja Sokolovic has 7+ years of experience building web applications at scale. He has worked at top tech companies and is passionate about sharing knowledge through teaching and open source.",
      avatarUrl: "/images/instructor-avatar.jpg",
    },
    provider: {
      name: "Learnwise",
      url: "https://learnwise.example.com",
    },
    rating: 4.8,
    reviewCount: 2847,
    enrolledCount: 18420,
    price: 79.99,
    originalPrice: 149.99,
    currency: "USD",
    language: "English",
    level: "Advanced",
    duration: "28 hours",
    lastUpdated: "2026-01-15",
    category: "Web Development",
    tags: ["React", "JavaScript", "TypeScript", "NextJs", "SEO"],
    highlights: [
      "Build production-grade compound components from scratch",
      "Master the art of custom hook composition and abstraction",
      "Optimize rendering with memoization, virtualization, and Suspense",
      "Implement accessible, keyboard-navigable UI patterns",
      "Real-world capstone project reviewed by the instructor",
      "Lifetime access with free updates for new React versions",
    ],
    modules: [
      {
        title: "Foundations of Component Architecture",
        lessons: [
          { title: "Rethinking Component Boundaries", duration: "18 min" },
          { title: "The Inversion of Control Principle", duration: "22 min" },
          { title: "Props vs. State vs. Context: Decision Framework", duration: "25 min" },
          { title: "Exercise: Refactoring a Monolithic Component", duration: "35 min" },
        ],
      },
      {
        title: "Compound Components & Slots",
        lessons: [
          { title: "The Compound Component Pattern", duration: "28 min" },
          { title: "Implicit State Sharing with Context", duration: "20 min" },
          { title: "Building a Flexible Tabs Component", duration: "32 min" },
          { title: "Slot Patterns for Maximum Flexibility", duration: "24 min" },
        ],
      },
      {
        title: "Advanced Hook Patterns",
        lessons: [
          { title: "Custom Hook Composition Strategies", duration: "26 min" },
          { title: "The Reducer Pattern for Complex State", duration: "30 min" },
          { title: "Building a useAsync Hook from Scratch", duration: "28 min" },
          { title: "Hook Testing with React Testing Library", duration: "22 min" },
        ],
      },
      {
        title: "Render Performance Optimization",
        lessons: [
          { title: "React Rendering Deep Dive", duration: "35 min" },
          { title: "Memoization: When and How", duration: "24 min" },
          { title: "Virtualization with Large Lists", duration: "30 min" },
          { title: "Suspense and Concurrent Features", duration: "28 min" },
        ],
      },
      {
        title: "Capstone: Building a Component Library",
        lessons: [
          { title: "Architecture & API Design", duration: "40 min" },
          { title: "Implementing Core Components", duration: "45 min" },
          { title: "Accessibility & Keyboard Navigation", duration: "35 min" },
          { title: "Documentation & Storybook Setup", duration: "30 min" },
        ],
      },
    ],
    imageUrl: "/images/course-hero.jpg",
  },
]

/**
 * Simulates a server-side data fetch for a course by slug.
 * In production, this would query a database or CMS.
 */
export async function getCourseBySlug(slug: string): Promise<Course | null> {
  // Simulate async fetch latency
  await new Promise((resolve) => setTimeout(resolve, 0))
  return courses.find((c) => c.slug === slug) ?? null
}

/**
 * Returns all available course slugs (used for generateStaticParams).
 */
export async function getAllCourseSlugs(): Promise<string[]> {
  return courses.map((c) => c.slug)
}
