import AllCourses from "@/components/AllCourses";

const Courses = () => {
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
        <AllCourses />
      </div>
    </div>
  );
};

export default Courses;
