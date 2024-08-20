import LogoBlack from "@/assets/Logo-black.svg";
import formImage from "@/assets/form-image2.svg";
import RegisterForm from "@/components/RegisterForm";

const Register = () => {
  return (
    <main className="pl-[120px] min-h-screen">
      <nav className="py-8">
        <img src={LogoBlack} alt="logo" />
      </nav>
      <section className="flex items-center">
        <RegisterForm />
        <div>
          <img src={formImage} alt="form image" />
        </div>
      </section>
    </main>
  );
};

export default Register;
