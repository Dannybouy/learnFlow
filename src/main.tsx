import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import App from './App.tsx'
import CourseDetail from "./components/CourseDetail.tsx";
import "./index.css";
import DashboardLayout from "./layouts/dashboardLayout/dashboardLayout.tsx";
import Coursebuilder from "./routes/courseBuilder/Coursebuilder.tsx";
import AllCourses from "./routes/courses/courses.tsx";
import DashboardPage from "./routes/dashboard/DashboardPage.tsx";
import Home from "./routes/home/home.tsx";
import Login from "./routes/login/login.tsx";
import Register from "./routes/register/register.tsx";
import Settings from "./routes/settings/Settings.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />, // Parent route
    children: [
      {
        index: true, // Relative path, renders DashboardPage on /dashboard
        element: <DashboardPage />,
      },
      {
        path: "courses", // Renders on /dashboard/courses
        element: <AllCourses />,
      },
      { path: "courses/:courseId", element: <CourseDetail /> }, // Dynamic route for course details
      {
        path: "course-builder", // Renders on /dashboard/course-builder
        element: <Coursebuilder />,
      },
      {
        path: "settings", // Renders on /dashboard/settings
        element: <Settings />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
