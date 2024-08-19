import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { auth, db } from "@/config/firebase";
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const Settings = () => {
  const [loading, setLoading] = useState(true);

  const { register, setValue } = useForm();
  useEffect(() => {
    const fetchUserData = async () => {
      const user = auth.currentUser;

      if (user) {
        const userDoc = await getDoc(doc(db, "users", user.uid));
        if (userDoc.exists()) {
          const userData = userDoc.data();
          setValue("firstName", userData.firstName);
          setValue("lastName", userData.lastName);
          setValue("nickname", userData.nickname);
          setValue("accountEmail", user.email || "");
        }
      }
      setLoading(false);
    };

    fetchUserData();
  }, [setValue]);
  return (
    <>
      <div className="p-3 border-b-2 border-b-black w-fit mb-9">
        <h2 className="text-2xl font-semibold tracking-[0.3px] font-inter ">
          Edit Profile
        </h2>
      </div>

      <small className="font-dmsans font-medium text-lg">Edit Details</small>

      <form className="grid gap-5">
        <div className="grid gap-3">
          <Label
            htmlFor="username"
            className="text-base font-normal font-dmsans"
          >
            First Name (required)
          </Label>
          <Input
            {...register("firstName")}
            className="h-14 placeholder:text-[#ABABA] placeholder:text-sm placeholder:font-light border border-[rgba(85, 85, 85, 0.10)] bg-neutral-100"
          />
          {/* {errors.username && (
            <p className="text-red-500">{errors.username.message}</p>
          )} */}
        </div>
        <div className="grid gap-3">
          <Label
            htmlFor="username"
            className="text-base font-normal font-dmsans"
          >
            Last Name (required)
          </Label>

          <Input
            {...register("lastName")}
            className="h-14 placeholder:text-[#ABABA] placeholder:text-sm placeholder:font-light border border-[rgba(85, 85, 85, 0.10)] bg-neutral-100"
          />
          {/* {errors.username && (
            <p className="text-red-500">{errors.username.message}</p>
          )} */}
        </div>
        <div className="grid gap-3">
          <Label
            htmlFor="username"
            className="text-base font-normal font-dmsans"
          >
            Nickname (required)
          </Label>
          <Input
            {...register("username")}
            className="h-14 placeholder:text-[#ABABA] placeholder:text-sm placeholder:font-light border border-[rgba(85, 85, 85, 0.10)] bg-neutral-100"
          />
          {/* {errors.username && (
            <p className="text-red-500">{errors.username.message}</p>
          )} */}
        </div>

        <small className="font-dmsans font-medium text-lg mb-4">
          Login Information
        </small>

        <div className="grid gap-3">
          <Label
            htmlFor="username"
            className="text-base font-medium font-dmsans text-opacity-70 text-black"
          >
            Current Password (required)
          </Label>
          <Input
            {...register("currentPassword")}
            className="h-14 placeholder:text-[#ABABA] placeholder:text-sm placeholder:font-light border border-[rgba(85, 85, 85, 0.10)] bg-neutral-100"
          />
          {/* {errors.username && (
            <p className="text-red-500">{errors.username.message}</p>
          )} */}
        </div>
        <div className="grid gap-3">
          <Label
            htmlFor="username"
            className="text-base font-medium font-dmsans text-opacity-70 text-black"
          >
            Account Email
          </Label>
          <Input className="h-14 placeholder:text-[#ABABA] placeholder:text-sm placeholder:font-light border border-[rgba(85, 85, 85, 0.10)] bg-neutral-100" />
          {/* {errors.username && (
            <p className="text-red-500">{errors.username.message}</p>
          )} */}
        </div>
        <div className="grid gap-3">
          <Label
            htmlFor="username"
            className="text-base font-medium font-dmsans text-opacity-70 text-black"
          >
            Add your new password
          </Label>
          <Input className="h-14 placeholder:text-[#ABABA] placeholder:text-sm placeholder:font-light border border-[rgba(85, 85, 85, 0.10)] bg-neutral-100" />
          {/* {errors.username && (
            <p className="text-red-500">{errors.username.message}</p>
          )} */}
        </div>
        <div className="grid gap-3">
          <Label
            htmlFor="username"
            className="text-base font-medium font-dmsans text-opacity-70 text-black"
          >
            Confirm new password
          </Label>
          <Input className="h-14 placeholder:text-[#ABABA] placeholder:text-sm placeholder:font-light border border-[rgba(85, 85, 85, 0.10)] bg-neutral-100" />
          {/* {errors.username && (
            <p className="text-red-500">{errors.username.message}</p>
          )} */}
        </div>

        <Button className="bg-yellow-400 rounded-full text-black p-[18px] text-base font-dmsans font-bold hover:opacity-90 hover:bg-yellow-400 max-w-fit">
          View all courses
        </Button>
      </form>
    </>
  );
};

export default Settings;
