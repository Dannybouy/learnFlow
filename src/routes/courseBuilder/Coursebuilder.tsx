import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { db, storage } from "@/config/firebase";
import { addDoc, collection } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { Plus } from "lucide-react";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

interface CFormInput {
  courseTitle: string;
  courseDesc: string;
  courseImage: FileList | undefined;
  coursePrice: string;
}

const Coursebuilder = () => {
  const [modal, setModal] = useState<boolean>(false);

  const onSubmit: SubmitHandler<CFormInput> = async (data) => {
    const { courseTitle, courseDesc, coursePrice } = data;
    try {
      // upload the file to fire storage
      if (data.courseImage && data.courseImage.length > 0) {
        const imageFile = data.courseImage[0];
        const storageRef = ref(storage, `courseImages/${imageFile.name}`);
        const snapshot = await uploadBytes(storageRef, imageFile);
        alert("Image uploaded");
        const imageUrl = await getDownloadURL(snapshot.ref);

        // Add course data to Firestore
        const courseData = {
          title: courseTitle,
          desc: courseDesc,
          imageUrl: imageUrl,
          price: `$${coursePrice}`,
          createdAt: new Date(),
        };

        const docRef = await addDoc(collection(db, "courses"), courseData);
        alert(`course added with ID: ${docRef.id}`);

        // reset form fields
        reset();

        //close the modal
        setModal(false);
      } else {
        console.error("No image file selected");
      }
    } catch (error) {
      console.error("Error adding course: ", error);
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm({
    defaultValues: {
      courseTitle: "",
      courseDesc: "",
      courseImage: undefined,
      coursePrice: "",
    },
  });
  return (
    <div>
      <h2 className="font-dmsans text-3xl font-bold">Create a new course</h2>
      <section className="mt-6 w-[551px] h-[358px] bg-white rounded-lg flex justify-center items-center border ">
        <Dialog open={modal} onOpenChange={setModal}>
          <DialogTrigger asChild>
            <Button
              variant="ghost"
              className="border-2 rounded-full bg-black hover:bg-muted-foreground"
              size="icon"
            >
              <Plus className="h-14 w-14 text-white" />
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px] lg:max-w-[603px]">
            <form onSubmit={handleSubmit(onSubmit)}>
              <main className="grid gap-6 mt-4 font-inter">
                <div className="grid gap-3">
                  <Label htmlFor="coursetitle" className="text-lg font-medium">
                    Course Title
                  </Label>
                  <Input
                    {...register("courseTitle", {
                      required: "course title is required",
                    })}
                    placeholder="Add course title"
                    className="h-14 pl-4 border border-[#55555] bg-neutral-100 rounded-xl placeholder:text-xs placeholder:text-black placeholder:text-opacity-70"
                  />
                  {errors.courseTitle && (
                    <p className="text-red-500 text-xs">
                      {errors.courseTitle.message}
                    </p>
                  )}
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="coursetitle" className="text-lg font-medium">
                    Course Description
                  </Label>
                  <Input
                    {...register("courseDesc", {
                      required: "course title is required",
                    })}
                    placeholder="Add course description"
                    className="h-14 pl-4 border border-[#55555] bg-neutral-100 rounded-xl placeholder:text-xs placeholder:text-black placeholder:text-opacity-70 placeholder:font-inter"
                  />
                  {errors.courseDesc && (
                    <p className="text-red-500 text-xs">
                      {errors.courseDesc.message}
                    </p>
                  )}
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="courseimage" className="text-lg font-medium">
                    Course Image
                  </Label>
                  <Input
                    {...register("courseImage", {
                      required: "Course Image required",
                    })}
                    id="courseimage"
                    type="file"
                    accept="image/*"
                    placeholder="Upload Image"
                    className="h-14 pl-4 border border-[#55555] bg-neutral-100 rounded-xl placeholder:text-xs placeholder:text-black placeholder:text-opacity-70 placeholder:font-inter flex items-center truncate"
                  />
                  {errors.courseImage && (
                    <p className="text-red-500 text-xs">
                      {errors.courseImage.message}
                    </p>
                  )}
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="coursetitle" className="text-lg font-medium">
                    Add Price
                  </Label>
                  <Input
                    {...register("coursePrice", {
                      required: "price is required",
                    })}
                    type="text"
                    placeholder="0.00"
                    className="h-14 pl-4 border border-[#55555] bg-neutral-100 rounded-xl placeholder:text-xs placeholder:text-black placeholder:text-opacity-70 placeholder:font-inter"
                  />
                  {errors.coursePrice && (
                    <p className="text-red-500 text-xs">
                      {errors.coursePrice.message}
                    </p>
                  )}
                </div>
              </main>
              <DialogFooter className="mt-10">
                <Button disabled={!isValid} type="submit">
                  Create course
                </Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </section>
    </div>
  );
};

export default Coursebuilder;
