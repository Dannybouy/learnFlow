import {
  Card,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";

interface CourseCardProps {
  course: {
    id: string;
    title: string;
    desc: string;
    imageUrl: string;
    price: number;
  };
}
const CourseCard = ({ course }: CourseCardProps) => {
  return (
    <Card className="w-[550px] flex flex-col gap-12 border shadow-sm rounded-none rounded-t-[20px] pb-8">
      <div className="h-[260px] w-full">
        <img src={course.imageUrl} alt="card image" className="object-contain rounded-none rounded-t-[20px]" />
      </div>
      <div className="flex flex-col gap-4 px-8 font-inter">
        <CardTitle className="text-2xl font-medium">{course.title}</CardTitle>
        <CardDescription className="text-lg text-opacity-70 leading-normal">
          {course.desc}
        </CardDescription>
        <div className="flex justify-between items-center border-t-2 border-[#555555] border-opacity-20 pt-7 text-lg">
          <div>
            <p className="text-[#555]">
              By <span className="text-black font-medium">ATO</span>
            </p>
          </div>
          <div>
            <span>{course.price}</span>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default CourseCard;
