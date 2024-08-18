import LogoBlack from "@/assets/Logo-black.svg";
import formImage from "@/assets/form-image.png";
import LoginForm from "@/components/LoginForm";

const Login = () => {
  return (
    <main className="pl-[120px] min-h-screen">
      <nav className="py-8">
        <img src={LogoBlack} alt="logo" />
      </nav>
      <section className="flex items-center">
        <LoginForm />
        <div>
          <img src={formImage} alt="form image" />
        </div>
      </section>
    </main>
  );
};

export default Login;
