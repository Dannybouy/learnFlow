import CourseCard from "@/components/CourseCard";
import { db } from "@/config/firebase";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Link } from "react-router-dom";

interface Course {
  id: string;
  title: string;
  desc: string;
  imageUrl: string;
  price: number;
}

const AllCourses = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "courses"));
        const coursesData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as Course[];
        setCourses(coursesData);
      } catch (error) {
        console.log("Error fetching courses: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);
  return (
    <div>
      <h1 className="text-3xl font-dmsans font-bold">Courses</h1>
      <p className="text-base mt-4 font-dmsans text-[#555555] leading-normal sm:w-full lg:max-w-[80%]">
        Unlock the world of web development effortlessly with our innovative
        e-learning courses. Elevate your skills, build a dynamic portfolio, and
        launch your web development or no-code career with our industry-aligned
        certifications and dedicated job placement assistance.
      </p>
      <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-6 mt-8">
        {loading ? (
          <Skeleton height={100} className="my-2" count={3} />
        ) : (
          courses.map((course) => (
            <Link to={`/dashboard/courses/${course.id}`} key={course.id}>
              <CourseCard course={course} />
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default AllCourses;
