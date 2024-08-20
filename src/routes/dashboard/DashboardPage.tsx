import CourseProgress from "@/components/CourseProgress";
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";
import AllCourses from "../courses/courses";

const Dashboard = () => {
  return (
    <div>
      <section className="pb-8">
        <h1 className="text-3xl font-dmsans font-bold">Welcome to Learnflow</h1>
        <p className="text-base mt-4 font-dmsans text-[#555555] leading-normal sm:w-full lg:max-w-[80%]">
          Learn at your own pace with lifetime access on mobile and desktop.
        </p>
      </section>

      <section className="border-t pt-8 ">
        <h2 className="font-dmsans font-medium">Let’s continue Learning!</h2>
        <div className="pt-5">
          <CourseProgress />
        </div>
      </section>
      <section className="mt-14">
        <h2 className="font-dmsans font-semibold text-xl">Language Courses</h2>
        <p className="text-opacity-70 font-dmsans mt-2 text-base">
          Choose from one over many of course and learn with industry leading
          experts.
        </p>
        <div className="mt-7">
          <AllCourses />
        </div>
      </section>
      <section className="text-center">
        <NavLink to="/dashboard/courses">
          <Button className="mt-8 bg-yellow-400 rounded-full text-black p-[18px] text-base font-dmsans font-bold hover:opacity-90 hover:bg-yellow-400">
            View all courses
          </Button>
        </NavLink>
      </section>
    </div>
  );
};

export default Dashboard;
