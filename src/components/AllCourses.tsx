import CourseCard from "@/components/CourseCard";
import { db } from "@/config/firebase";
import { CourseTypes } from "@/types/courses";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Link } from "react-router-dom";

const AllCourses = () => {
  const [courses, setCourses] = useState<CourseTypes[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "courses"));
        const coursesData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as CourseTypes[];
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
    <>
      {loading ? (
        <Skeleton className="my-2 w-full h-full" />
      ) : (
        courses.map((course) => (
          <Link to={`/dashboard/courses/${course.id}`} key={course.id}>
            <CourseCard course={course} />
          </Link>
        ))
      )}
    </>
  );
};

export default AllCourses;
