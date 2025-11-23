// components
import LoginForm from "./components/LoginForm";

const LoginPage = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center p-4">
      <div
        className="lg:w-140 lg:h-140 dark:bg-transparent border border-zinc-800
          dark:border-zinc-200/30 flex flex-col justify-center items-center
          px-10 py-5 rounded-xl"
      >
        <h1 className="lg:text-2xl font-bold py-5">Sign In</h1>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
