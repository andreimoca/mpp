import CourseCard from '@/components/courses/CourseCard';
import { Course } from '@/types/course';

const courses: Course[] = [
  {
    id: '1',
    title: 'Next.js Fundamentals',
    description: 'Learn the basics of Next.js, React, and TypeScript.',
    instructor: 'Jane Doe',
    level: 'Beginner',
    duration: '4 hours',
    price: 49,
  },
  {
    id: '2',
    title: 'Advanced TypeScript',
    description: 'Deep dive into advanced TypeScript techniques.',
    instructor: 'John Smith',
    level: 'Advanced',
    duration: '6 hours',
    price: 99,
  },
  {
    id: '3',
    title: 'React Hooks in Depth',
    description: 'Master React hooks and optimize your React apps.',
    instructor: 'Emily Brown',
    level: 'Intermediate',
    duration: '5 hours',
    price: 69,
  },
];

export default function CoursesPage() {
  return (
    <main className="container py-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-10">Explore Courses</h1>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </section>
    </main>
  );
}
