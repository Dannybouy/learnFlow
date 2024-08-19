import {
  BookText,
  Download,
  Home,
  LayoutDashboard,
  LineChart,
  Menu,
  Package,
  Package2,
  Settings,
  ShoppingCart,
  Users,
} from "lucide-react";

import { NavLink, Outlet, useNavigate } from "react-router-dom";

import LogoBlack from "@/assets/Logo-black.svg";
import profilePhoto from "@/assets/landing-page/profilePhoto.svg";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

import { auth } from "@/config/firebase";
import { signOut } from "firebase/auth";

const Dashboard = () => {
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/login");
    } catch (error) {
      console.error("error signing out:", error);
    }
  };

  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r md:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-14  items-center px-4 lg:h-[70px] lg:px-6">
            <NavLink to="/dashboard" className="flex items-center pl-4">
              <img src={LogoBlack} alt="dashboard logo" />
            </NavLink>
          </div>
          <div className="flex-1">
            <nav className="grid gap-2 items-start px-2 text-sm font-inter lg:px-6 text-opacity-80 text-black tracking-[0.3px] font-normal">
              <p className="font-inter text-xs opacity-70 pl-1 pb-3">MENU</p>
              <NavLink
                to=""
                end
                className={({ isActive }) =>
                  cn(
                    "flex items-center gap-4 rounded-lg p-3 hover:bg-muted transition-all hover:text-primary",
                    isActive ? "bg-[#2A2A2A] text-white" : ""
                  )
                }
              >
                <LayoutDashboard className="h-[18px] w-[18px]" />
                Dashboard
              </NavLink>
              <NavLink
                to="courses"
                end
                className={({ isActive }) =>
                  cn(
                    "flex items-center gap-4 rounded-lg p-3 hover:bg-muted transition-all hover:text-primary",
                    isActive ? "bg-[#2A2A2A] text-white" : ""
                  )
                }
              >
                <BookText className="h-[18px] w-[18px]" />
                All courses
              </NavLink>
              <NavLink
                to="course-builder"
                end
                className={({ isActive }) =>
                  cn(
                    "flex items-center gap-4 rounded-lg p-3 hover:bg-muted transition-all hover:text-primary",
                    isActive ? "bg-[#2A2A2A] text-white" : ""
                  )
                }
              >
                <Package className="h-4 w-4" />
                Course Builder
              </NavLink>
              <NavLink
                to="settings"
                end
                className={({ isActive }) =>
                  cn(
                    "flex items-center gap-4 rounded-lg p-3 hover:bg-muted transition-all hover:text-primary",
                    isActive ? "bg-[#2A2A2A] text-white" : ""
                  )
                }
              >
                <Settings className="h-[18px] w-[18px]" />
                Settings
              </NavLink>
              <button
              
                className="flex items-center gap-4 rounded-lg p-3 hover:bg-muted transition-all hover:text-primary"
                onClick={handleLogout}
              >
                <Download className="h-[18px] w-[18px]" />
                Log out
              </button>
            </nav>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <header className="flex h-14 items-center gap-4 border-b px-4 lg:h-[70px] lg:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="shrink-0 md:hidden"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="flex flex-col">
              <nav className="grid gap-2 text-lg font-medium">
                <NavLink
                  to="#"
                  className="flex items-center gap-2 text-lg font-semibold"
                >
                  <Package2 className="h-6 w-6" />
                  <span className="sr-only">Acme Inc</span>
                </NavLink>
                <NavLink
                  to="#"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                >
                  <Home className="h-5 w-5" />
                  Dashboard
                </NavLink>
                <NavLink
                  to="#"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl bg-muted px-3 py-2 text-foreground hover:text-foreground"
                >
                  <ShoppingCart className="h-5 w-5" />
                  Orders
                  <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                    6
                  </Badge>
                </NavLink>
                <NavLink
                  to="#"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                >
                  <Package className="h-5 w-5" />
                  Products
                </NavLink>
                <NavLink
                  to="#"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                >
                  <Users className="h-5 w-5" />
                  Customers
                </NavLink>
                <NavLink
                  to="#"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                >
                  <LineChart className="h-5 w-5" />
                  Analytics
                </NavLink>
              </nav>
            </SheetContent>
          </Sheet>
          {/* Spacer to push the Avatar div to the right */}
          <div className="flex-grow"></div>
          <div className="flex gap-2">
            <div className="font-inter flex flex-col justify-center">
              <h2 className="font-bold text-sm">Amarachi</h2>
              <p className="text-xs text-opacity-70">Learner</p>
            </div>
            <Avatar className="h-12 w-12 shrink-0">
              <div className="bg-[#D8D8D8]">
                <AvatarImage src={profilePhoto} />
              </div>
              <AvatarFallback>DO</AvatarFallback>
            </Avatar>
          </div>
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6 bg-[#F5F6F7]">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
