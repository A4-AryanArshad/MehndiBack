import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";
import { useState } from "react";
import Image from "next/image";

const Login = () => {
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });
  const [showErrorToast, setShowErrorToast] = useState(false);
  const [showSuccessToast, setShowSuccessToast] = useState(false);
  const [isWaiting, setIsWaiting] = useState(false);
  const router = useRouter();

  const handleChange = (e) => {
    setLoginForm({ ...loginForm, [e.target.name]: e.target.value });
    setShowErrorToast(false);
    setShowSuccessToast(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsWaiting(true);
    setShowErrorToast(false);
    let res = await fetch(
      `${process.env.NEXT_PUBLIC_DOMAINNAME}/api/login`,
      {
        method: "POST",
        body: JSON.stringify({...loginForm,isAdmin:false,isSAdmin:true,isUser:false}),
      }
    );
    let response = await res.json();
    if (response.success || res.status === 200) {
      localStorage.setItem("token", response.token);
      setShowSuccessToast(true);
      setLoginForm({ email: "",
      password: ""})
      setTimeout(() => {
        router.push("/sadmin/dashboard");
      }, 1000);
      setIsWaiting(false);
    } else {
      setShowErrorToast(true);
      setIsWaiting(false);
    }
  };
  return (
    <section className="bg-gray-50 dark:bg-gray-900 ">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a
          href="#"
          className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
        >
          <Image className="w-8 h-8 mr-2 rounded " src="/p2plogo.png" alt="logo" width={50} height={50}/>
          <span className="ml-1">Super Admin</span>
        </a>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="h-12">
            {showErrorToast && (
              <div
                className="p-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
                role="alert"
              >
                <span className="font-medium">
                  Incorrect Credentials or Internet Error
                </span>
              </div>
            )}

            {showSuccessToast && (
              <div
                className="p-4  text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400"
                role="alert"
              >
                <span className="font-medium">Successfully Login!</span>
              </div>
            )}
          </div>
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Sign in to your account
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">
                  <Link href="forgotpassword">Forgot password?</Link>
                </span>
              </div>
              <button
                type="submit"
                className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                {!isWaiting && "Sign in"}
                {isWaiting && "Please Wait..."}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
