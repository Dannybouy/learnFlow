import { db } from "@/config/firebase";
import { collection, getDocs } from "firebase/firestore";
import { ArrowLeft } from "lucide-react";
import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { Button } from "./ui/button";

interface Course {
  id: string;
  title: string;
  desc: string;
  imageUrl: string;
  price: number;
}

const CourseDetail = () => {
  const { courseId } = useParams<{ courseId: string }>();
  const [course, setCourse] = useState<Course | null>(null);
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "courses"));
        const coursesData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as Course[];

        setCourses(coursesData);

        // Find the current course by ID
        const currentCourse = coursesData.find(
          (course) => course.id === courseId
        );
        setCourse(currentCourse || null);
      } catch (error) {
        console.log("Error fetching courses: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, [courseId]);

  // Function to handle "Next Course" button
  const handleNextCourse = () => {
    if (courses.length === 0 || !course) return;

    const currentIndex = courses.findIndex((c) => c.id === course.id);
    const nextIndex = (currentIndex + 1) % courses.length; // Loop back to first course if at the end
    const nextCourse = courses[nextIndex];

    navigate(`/dashboard/courses/${nextCourse.id}`);
  };

  return (
    <>
      <div className="flex items-center">
        <NavLink to="/dashboard/courses">
          <Button className="" variant="ghost">
            <ArrowLeft />
          </Button>
        </NavLink>
        <p className="text-2xl font-medium ml-2">Back to Courses</p>
      </div>

      <main className="flex-col flex gap-6 w-full">
        <div className="w-full h-[350px]">
          {loading ? (
            <Skeleton className="h-full w-full" />
          ) : (
            <img
              src={course?.imageUrl}
              alt="course image"
              className="object-cover w-full h-full rounded-none rounded-t-[20px]"
            />
          )}
        </div>
        <div className="flex justify-between items-center">
          <div className="w-[50%]">
            {loading ? (
              <Skeleton count={1} height={40} width={200} />
            ) : (
              <h2 className="text-3xl font-dmsans leading-normal font-bold">
                {course?.title}
              </h2>
            )}
            {loading ? (
              <Skeleton count={5} height={20} />
            ) : (
              <p className="font-dmsans leading-5 text-[#555] mt-4">
                {/* {course?.desc} */}
                Lorem ipsum dolor sit amet consectetur. Tempus ultrices dui
                vulputate pulvinar risus. Purus lacus tempus mi nibh ligula. Sit
                in blandit eget id dictum. Dignissim tincidunt pharetra habitant
                mi nec curabitur et justo. Tristique massa est magna auctor
                iaculis diam mauris rhoncus. Justo dignissim odio dolor tortor
                adipiscing. Non volutpat lacinia arcu elit dignissim at. Magna
                dolor fermentum ac morbi. Vitae curabitur lacinia natoque turpis
                enim donec pellentesque. Varius convallis sed ullamcorper nisl
                ligula pharetra. Volutpat cursus et lorem ut risus in metus
                venenatis duis. At vitae nullam at at ut. Mattis nisl amet
                tempus turpis donec vel viverra eu. Faucibus convallis faucibus
                faucibus leo pretium enim euismod. Elit amet volutpat
                pellentesque tempus dolor faucibus risus at. Venenatis volutpat
                nam velit metus cursus ut eget tempor risus. Tortor massa magna
                amet netus adipiscing ultrices nunc facilisi eleifend. Tincidunt
                sit volutpat quam eu at rhoncus purus diam. Et condimentum donec
                ut sed risus mattis metus nisl. Libero praesent bibendum mauris
                mauris turpis.
              </p>
            )}
          </div>
          <div className="w-[45%]">
            {loading ? (
              <Skeleton className="h-full w-full" />
            ) : (
              <div className="bg-white h-[329px] rounded-[20px] border p-10 ">
                <h2 className="text-base font-dmsans font-medium">
                  Course Detail
                </h2>
                <div className="mt-6 font-dmsans text-sm font-medium text-[#555]">
                  <div className="flex justify-between items-center pb-3 border-b border-b-rgba(85, 85, 85, 0.20)">
                    <span>Author:</span>
                    <span>ATO production</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-b-rgba(85, 85, 85, 0.20)">
                    <span>Level:</span>
                    <span>Beginner</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-b-rgba(85, 85, 85, 0.20)">
                    <span>Lesson:</span>
                    <span>14</span>
                  </div>
                </div>
                <Button className="mt-8 bg-yellow-400 w-full rounded-full text-black py-4 text-base font-dmsans font-bold hover:opacity-90 hover:bg-yellow-400">
                  Buy Now
                </Button>
              </div>
            )}
            <div className="mt-7 text-center">
              <Button
                onClick={handleNextCourse}
                className="py-4 font-dmsans font-medium rounded-full w-3/4 mx-auto hover:text-white hover:bg-black transition-all"
                variant="outline"
              >
                Next Course
              </Button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default CourseDetail;
