import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { auth, db } from "@/config/firebase";
import { FormData } from "@/types/FormData";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

const RegisterForm = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    watch,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm({
    defaultValues: {
      email: "",
      username: "",
      password: "",
      confirmPassword: "",
    },
  });

  const togglePasswordVisibility = () => {
    setPasswordVisible((prev) => !prev);
  };
  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible((prev) => !prev);
  };

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    const { email, username, password } = data;
    try {
      // check if username already exists in Firestore
      const usernameRef = doc(db, "usernames", username);
      const usernameSnap = await getDoc(usernameRef);
      console.log(usernameSnap)

      if (usernameSnap.exists()) {
        console.error("Username already exists");
        return;
      }

      // Create the user with email and password
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      // Update user's profile to include the username
      await updateProfile(user, {
        displayName: username,
      });

      await setDoc(usernameRef, { email: email, userId: user.uid });

      navigate("/dashboard");
    } catch (error) {
      console.error("Error registering user:", error);
    }
  };

  return (
    <Card className="w-full max-w-lg font-poppins">
      <CardHeader>
        <CardTitle className="text-2xl font-light">Welcome !</CardTitle>
        <CardTitle className="text-3xl mt-2 font-medium">Sign up to</CardTitle>
        <CardDescription>Lorem Ipsum is simply</CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CardContent className="grid gap-6">
          <div className="grid gap-2">
            <Label htmlFor="email" className="text-base font-normal">
              Email
            </Label>
            <Input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email address",
                },
              })}
              placeholder="Enter your mail"
              className="h-14 placeholder:text-[#ABABA]"
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </div>
          <div className="grid gap-2">
            <Label htmlFor="username" className="text-base font-normal">
              Username
            </Label>
            <Input
              {...register("username", {
                required: "username is required",
              })}
              placeholder="Enter your user name"
              className="h-14 placeholder:text-[#ABABA]"
            />
            {errors.username && (
              <p className="text-red-500">{errors.username.message}</p>
            )}
          </div>
          <div className="grid gap-2 relative">
            <Label htmlFor="password" className="text-base font-normal">
              Password
            </Label>
            <Input
              id="password"
              type={passwordVisible ? "text" : "password"}
              placeholder="Enter your password"
              className="h-14 placeholder:text-[#ABABA]"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters long",
                },
              })}
            />
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
            <Button
              type="button"
              variant="ghost"
              className="absolute right-0 inset-y-10 px-5 hover:bg-transparent"
              onClick={togglePasswordVisibility}
            >
              {passwordVisible ? <Eye /> : <EyeOff />}
            </Button>
          </div>
          <div className="grid gap-2 relative">
            <Label htmlFor="confim-password" className="text-base font-normal">
              Confirm Password
            </Label>
            <Input
              id="confirm-password"
              type={confirmPasswordVisible ? "text" : "password"}
              placeholder="Confirm your password"
              className="h-14 placeholder:text-[#ABABA]"
              {...register("confirmPassword", {
                required: "Please confirm your password",
                validate: (value) => {
                  if (watch("password") != value) {
                    return "Your passwords do not match";
                  }
                },
              })}
            />
            {errors.confirmPassword && (
              <p className="text-red-500">{errors.confirmPassword.message}</p>
            )}
            <Button
              type="button"
              variant="ghost"
              className="absolute right-0 inset-y-10 px-5 hover:bg-transparent"
              onClick={toggleConfirmPasswordVisibility}
            >
              {confirmPasswordVisible ? <Eye /> : <EyeOff />}
            </Button>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col">
          <Button
            type="submit"
            className="w-full h-14 disabled:cursor-not-allowed"
            disabled={!isValid}
          >
            Register
          </Button>
          <div className="mt-4 text-center text-sm">
            Already have an account?{" "}
            <NavLink to="/login" className="font-semibold">
              Login
            </NavLink>
          </div>
        </CardFooter>
      </form>
    </Card>
  );
};
export default RegisterForm;
