import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { auth, db } from "@/config/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import {
  doc,
  getDoc,
} from "firebase/firestore";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

interface LoginFormProps {
  username: string;
  password: string;
}

const LoginForm = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const navigate = useNavigate();

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const togglePasswordVisibility = () => {
    setPasswordVisible((prev) => !prev);
  };

  const onSubmit: SubmitHandler<LoginFormProps> = async (data) => {
    const { username, password } = data;
    try {
      //look up the email associated with the username
      const usernameRef = doc(db, "usernames", username);
      const usernameSnap = await getDoc(usernameRef);

      if (!usernameSnap.exists()) {
        alert("Username does not exist");
        // Display error to the user
        return;
      }

      // Sign in with the retrieved email and password
      const { email } = usernameSnap.data();
      await signInWithEmailAndPassword(auth, email, password);

      // Redirect to dashboard
      navigate("/dashboard");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Card className="w-full max-w-lg font-poppins">
      <CardHeader className="mb-6">
        <CardTitle className="text-2xl font-light mb-8">Welcome !</CardTitle>
        <CardTitle className="text-3xl font-medium">Sign in to</CardTitle>
        <CardDescription className="text-black">
          Lorem Ipsum is simply
        </CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CardContent className="grid gap-6">
          <div className="grid gap-2">
            <Label htmlFor="username" className="text-base font-normal">
              User name
            </Label>
            <Input
              {...register("username", {
                required: "username is required",
              })}
              placeholder="Enter your user name"
              className="h-14 placeholder:text-[#ABABA] placeholder:text-sm placeholder:font-light border-[#282828]"
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
              className="h-14 placeholder:text-[#ABABA] border-[#282828]"
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

          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <input type="checkbox" className="h-4 w-4" />
              <span className="ml-2 text-xs">Remember me</span>
            </div>
            <NavLink to="#" className="text-xs font-light">
              Forgot password?
            </NavLink>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col">
          <Button
            type="submit"
            className="w-full h-14 disabled:cursor-not-allowed"
            disabled={!isValid}
          >
            Login
          </Button>
          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{" "}
            <NavLink to="/register" className="font-semibold">
              Register
            </NavLink>
          </div>
        </CardFooter>
      </form>
    </Card>
  );
};

export default LoginForm;
