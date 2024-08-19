import { db } from "@/config/firebase";
import { CourseTypes } from "@/types/courses";
import { collection, getDocs } from "firebase/firestore";
import { Play } from "lucide-react";
import { useEffect, useState } from "react";
import { Progress } from "./ui/progress";

const CourseProgress = () => {
  const [courses, setCourses] = useState<CourseTypes[]>([]);

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
      }
    };
    fetchCourses();
  }, []);

  const randomProgressValue: number = Math.floor(Math.random() * 50) + 50;

  return (
    <div className="grid grid-cols-2 gap-4">
      {courses.slice(0, 2).map((course, index) => (
        <section
          key={index}
          className="flex h-[110px] rounded-2xl bg-white shadow-sm"
        >
          <div className="w-[20%] h-full flex justify-center items-center relative">
            <img
              src={course.imageUrl}
              alt={course.title}
              className="h-full w-full object-cover rounded-l-[20px]"
            />
            <Play
              className="absolute text-white p-2 bg-black bg-opacity-30 rounded-full"
              size={40}
            />
          </div>
          <div className="w-[80%]  font-dmsans font-medium">
            <h2 className="text-xs text-[#555] mb-2 mt-3 ml-8">
              {course.title}
            </h2>
            <p className="text-sm mb-5 ml-8 max-w-80">{course.desc}</p>
            <Progress
              value={randomProgressValue}
              className="h-2 mb-3 rounded-none bg-[#D2D7DC]"
            />
          </div>
        </section>
      ))}
    </div>
  );
};

export default CourseProgress;
