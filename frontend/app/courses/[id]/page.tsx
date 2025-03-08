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

interface CoursePageProps {
  params: { id: string };
}

export default function CourseDetails({ params }: CoursePageProps) {
  const course = courses.find((c) => c.id === params.id);

  if (!course) {
    return <div className="container py-10">Course not found.</div>;
  }

  return (
    <div className="container py-16 max-w-3xl">
      <h1 className="text-4xl font-bold mb-6 text-gray-900">{course.title}</h1>
      <p className="text-lg text-gray-700 mb-6">{course.description}</p>
      <div className="mb-3">
        <span className="font-medium text-gray-800">Instructor:</span> {course.instructor}
      </div>
      <div className="mb-3">
        <span className="font-medium text-gray-800">Level:</span> {course.level}
      </div>
      <div className="mb-3">
        <span className="font-medium text-gray-800">Duration:</span> {course.duration}
      </div>
      <div className="text-2xl font-bold text-gray-900 my-6">Price: ${course.price}</div>
      <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition text-lg">
        Enroll Now
      </button>
    </div>
  );
}
