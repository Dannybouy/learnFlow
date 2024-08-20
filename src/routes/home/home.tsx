import briefcase from "@/assets/landing-page/briefcase-icon.svg";
import DashboardImage from "@/assets/landing-page/Dashboard2.png";
import ellipse1 from "@/assets/landing-page/Ellipse 1.svg";
import ellipse2 from "@/assets/landing-page/Ellipse 5.svg";
import ellipse3 from "@/assets/landing-page/Ellipse 6.svg";
import frame from "@/assets/landing-page/frame-icon.svg";
import heroCircleRight from "@/assets/landing-page/hero-circle-right.svg";
import heroCircle from "@/assets/landing-page/hero-circle.svg";
import Logo from "@/assets/landing-page/Logo.svg";
import teacher from "@/assets/landing-page/teacher-icon.svg";
import womanCalling from "@/assets/landing-page/woman-calling.png";
import womanSmiling from "@/assets/landing-page/woman-smiling.png";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { logos } from "@/lib/companies";
import { SocialIcons } from "@/lib/socialsIcons";
import { testimonials } from "@/lib/testimonies";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <main className="h-screen w-full">
      <Navbar />
      <section className="flex justify-between items-start relative bg-[#1E1E1E]">
        {/* Left decorative circle */}
        <div className="absolute top-0 left-0">
          <img src={heroCircle} alt="wavy-circle" />
        </div>

        {/* Main content */}
        <div className="flex flex-col justify-center items-center text-center flex-1 pt-[100px]">
          <h2 className="text-[48px] md:text-[68px] font-bold text-white leading-[1.1] max-w-[80%] md:max-w-[60%]">
            The free, fun, and effective way to learn a language
          </h2>
          <small className="mt-6 text-lg md:text-xl text-zinc-400 max-w-[80%]">
            Learn at your own pace with lifetime access on mobile and desktop.
          </small>
          <NavLink to="/register" className="my-8">
            <Button className="rounded-full px-6 py-4 bg-[#f7CA4E] text-black  hover:opacity-80 transition-all delay-75 hover:bg-[#4E7BF7] hover:text-white">
              Start a new course!
            </Button>
          </NavLink>

          {/* Avatar Group */}
          <div className="flex justify-center items-center mt-4">
            <div className="h-11 w-11 rounded-full border-[1.9px] border-white">
              <img src={ellipse1} alt="avatar one" />
            </div>
            <div className="h-11 w-11 rounded-full border-[1.9px] border-white">
              <img
                src={ellipse2}
                alt="avatar two"
                className="w-11 h-11 object-cover"
              />
            </div>
            <div className="h-11 w-11 rounded-full border-[1.9px] border-white">
              <img src={ellipse3} alt="avatar three" />
            </div>
          </div>

          <small className="mt-4 text-lg md:text-xl text-zinc-400">
            Join thousands of students to start coding now!
          </small>

          {/* Dashboard Image */}
          <img
            src={DashboardImage}
            alt="Dashboard"
            className="mt-10 w-full max-w-[90%] md:max-w-[70%]"
          />
        </div>

        {/* Right decorative circle */}
        <div className="absolute bottom-0 right-0">
          <img src={heroCircleRight} alt="wavy-circle" />
        </div>
      </section>

      <section className="flex items-center justify-between px-[150px] py-[50px] bg-[#E8E8E8]">
        {logos.map((logo) => (
          <img key={logo.id} src={logo.src} alt={logo.alt} className="h-8" />
        ))}
      </section>

      <section className="w-full py-[100px]">
        <h2 className="font-dmsans font-bold text-5xl text-center mx-auto text-black mb-[82px] leading-[50px] w-1/2">
          Special features that make our online courses the best
        </h2>
        <div className="flex items-center mx-[122px] gap-7 justify-center">
          <div className="bg-neutral-100 py-10 px-8 rounded-3xl w-[400px]">
            <h4 className="text-black font-dmsans font-bold mb-7 text-2xl leading-normal">
              Made by Experts
            </h4>
            <p className="text-lg font-dmsans text-[#555555] mb-6">
              Our programming languages courses are meticulously crafted and
              taught by industry experts who bring years of practical experience
            </p>
            <div className="flex justify-end">
              <img src={frame} alt="person icon" />
            </div>
          </div>
          <div className="bg-neutral-100 py-10 px-8 rounded-3xl w-[400px]">
            <h4 className="text-black font-dmsans font-bold mb-7 text-2xl leading-normal">
              Career Opportunities
            </h4>
            <p className="text-lg font-dmsans text-[#555555] mb-6">
              Benefit from our job placement assistance services that connects
              qualified learners with relevant career path
            </p>
            <div className="flex justify-end">
              <img src={briefcase} alt="person icon" />
            </div>
          </div>
          <div className="bg-neutral-100 py-10 px-8 rounded-3xl w-[400px]">
            <h4 className="text-black font-dmsans font-bold mb-7 text-2xl leading-normal">
              Collaboration
            </h4>
            <p className="text-lg font-dmsans text-[#555555] mb-6">
              Study at their own pace and on their own schedule, which is ideal
              for those who have work, family, or other commitments
            </p>
            <div className="flex justify-end">
              <img src={teacher} alt="person icon" />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-[60px] md:mx-[157px] mt-[60px] mb-[104px]">
        <div className="flex flex-col md:flex-row justify-center items-center md:items-start mb-[70px]">
          <div className="md:mr-[70px] mb-6 md:mb-0 border-2">
            <img
              src={womanCalling}
              alt="woman holding phone calling"
              className="rounded-lg w-full max-w-md"
            />
          </div>
          <div className="flex flex-col text-center md:text-left">
            <h2 className="text-3xl md:text-5xl w-3/4 font-dmsans font-bold text-black leading-snug">
              Collaborate & learn with our platform
            </h2>
            <p className="mt-[20px] md:mt-[30px] text-[#555555] text-lg md:text-[22px] font-dmsans w-1/2">
              We offer a wide range of language courses taught by experienced
              and qualified instructors, who are passionate about teaching and
              dedicated to helping you achieve your language goals.
            </p>
            <NavLink to="/register" className="mt-[40px] md:mt-[50px]">
              <Button className="rounded-full px-6 py-4 bg-[#f7CA4E] text-black hover:bg-[#f7CA4E] hover:opacity-80 transition-all delay-75">
                Get started
              </Button>
            </NavLink>
          </div>
        </div>

        <div className="flex flex-col-reverse md:flex-row justify-center items-center md:items-start">
          <div className="md:mr-[70px] mt-6 md:mt-0 order-2 md:order-1">
            <h2 className="text-3xl md:text-5xl font-dmsans text-black leading-snug">
              Propel your career & expand your knowledge at any level
            </h2>
            <p className="mt-[20px] md:mt-[30px] text-[#555555] text-lg md:text-[22px] font-dmsans">
              LearnFlow is an online course that provides various categories of
              programming courses.
            </p>
            <NavLink to="/register" className="mt-[40px] md:mt-[50px]">
              <Button className="rounded-full px-6 py-4 bg-[#f7CA4E] text-black hover:bg-[#f7CA4E] hover:opacity-80 transition-all delay-75">
                Get started
              </Button>
            </NavLink>
          </div>
          <div className="md:ml-[70px] mb-6 md:mb-0 order-1 md:order-2">
            <img
              src={womanSmiling}
              alt="woman smiling"
              className="rounded-lg w-full max-w-md"
            />
          </div>
        </div>
      </section>

      <section className="bg-[#1E1E1E]">
        <div className="w-1/2 mx-auto">
          <h2 className="font-dmsans font-bold text-5xl text-center text-white leading-[50px] pt-28">
            Learners like you achieve their goals through our courses
          </h2>
          <p className="text-xl font-dmsans text-opacity-70 text-white pt-8 text-center">
            We believe everyone has something to give. Share your skills &
            experience with students around the world by teaching free or paid.
          </p>
        </div>
        <div className="grid grid-cols-4 gap-6 mt-16 px-20 font-inter">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="px-4 py-5 border border-opacity-20 border-[#E3E3E3] rounded-lg space-y-"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.avatar}
                  alt={`Avatar of ${testimonial.name}`}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h3 className="text-white font-semibold text-sm">
                    {testimonial.name}
                  </h3>
                  <p className="text-gray-400 text-xs font-semibold leading-5">
                    {testimonial.job}
                  </p>
                </div>
              </div>
              <p className="text-[#c4c4c4] text-sm font-inter leading-6">
                "{testimonial.quote}"
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="m-[120px] bg-[#F7CA4E] h-[337px] rounded-[20px] flex justify-between items-center overflow-hidden">
        <div className="pl-[90px] pt-[52px] font-dmsans w-[45%]">
          <h2 className="font-bold text-[42px] leading-10 text-black">
            Expand your skills & knowledge at any level.
          </h2>
          <p className="mt-7 mb-10 text-xl text-black text-opacity-70">
            Learn at your own pace with lifetime access on mobile and desktop.
          </p>
          <Button className="bg-black text-white px-8 font-dmsans py-[18px] rounded-full">
            Get started
          </Button>
        </div>
        <div className="relative w-[50%]">
          <img
            src={DashboardImage}
            alt="Dashboard preview"
            className="absolute right-[-70px] top-[-60px] max-h-[450px] object-cover -rotate-[20deg]"
          />
        </div>
      </section>
      <footer className="bg-[#1E1E1E]">
        <section className="flex justify-between p-[100px]">
          <div className="not-prose">
            <img src={Logo} alt="logo" className="h-8 md:h-10" />
            <p className="text-[#EAECF0] font-dmsans text-xl mt-5 leading-8 w-[60%]">
              Top learning experiences that create more talent in the world.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-10 font-dmsans">
            <div className="flex flex-col gap-4">
              <h3 className="text-white text-opacity-90 text-3xl font-bold">
                Links
              </h3>
              <div className="flex flex-col gap-4 text-xl text-[#EAECF0] text-opacity-70">
                <p>About Us</p>
                <p>Programs</p>
                <p>COntact</p>
                <p>FAQs</p>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-white text-opacity-90 text-3xl font-bold">
                Social
              </h3>
              <div className="flex flex-col gap-4 text-xl text-[#EAECF0] text-opacity-70">
                <p>Twitter</p>
                <p>LinkedIn</p>
                <p>Facebook</p>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-white text-opacity-90 text-3xl font-bold">
                Legal
              </h3>
              <div className="flex flex-col gap-4 text-xl text-[#EAECF0] text-opacity-70">
                <p>Terms</p>
                <p>Privacy</p>
              </div>
            </div>
          </div>
        </section>
        <section className="px-[100px] py-12 border-t border-opacity-30 border-white flex flex-1 justify-between">
          <h2 className="text-lg font-dmsans text-white text-opacity-70">
            © 2024 The programmers University. All rights reserved.
          </h2>
          <div className="flex gap-6">
            {SocialIcons.map((icon) => (
              <div key={icon.name}>{icon.svg}</div>
            ))}
          </div>
        </section>
      </footer>
    </main>
  );
};

export default Home;
