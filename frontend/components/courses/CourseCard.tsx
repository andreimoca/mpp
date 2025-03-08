import Link from 'next/link';
import { Course } from '@/types/course';

interface CourseCardProps {
  course: Course;
}

export default function CourseCard({ course }: CourseCardProps) {
  return (
    <div className="bg-white rounded-xl shadow hover:shadow-xl transition overflow-hidden flex flex-col">
      <div className="p-6 flex-1">
        <h3 className="text-2xl font-bold text-gray-800 mb-3">{course.title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{course.description}</p>
        <div className="text-sm text-gray-500 mb-2">
          Instructor: <span className="font-semibold">{course.instructor}</span>
        </div>
        <div className="flex flex-wrap gap-2">
          <span className="bg-blue-100 text-blue-700 rounded-full px-3 py-1 text-sm font-medium">
            {course.level}
          </span>
          <span className="bg-green-100 text-green-700 rounded-full px-3 py-1 text-sm font-medium">
            {course.duration}
          </span>
        </div>
      </div>
      <div className="border-t px-6 py-4 bg-gray-50">
        <div className="flex justify-between items-center">
          <span className="text-xl font-semibold text-gray-900">${course.price}</span>
          <Link href={`/courses/${course.id}`}>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition">
              View Course
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
