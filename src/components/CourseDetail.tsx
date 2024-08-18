import { NavLink } from "react-router-dom";
import { Button } from "./ui/button";
import { ArrowLeft } from "lucide-react";

const CourseDetail = () => {
  return (
    <>
      <div className="flex items-center">
        <NavLink to="/dashboard/courses">
            <Button className="" variant="ghost">
                <ArrowLeft/>
            </Button>
        </NavLink>
        <p className="text-2xl font-medium ml-2">Back to Courses</p>
      </div>

      <main className="flex-col flex gap-6">

      </main>
    </>
  );
};

export default CourseDetail;
