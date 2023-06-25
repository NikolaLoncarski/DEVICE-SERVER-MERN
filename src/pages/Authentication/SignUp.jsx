import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../context/context";
function SignUp() {
  const [userName, setUserName] = useState();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { auth, setAuth } = useGlobalContext();

  const login = async () => {
    try {
      const postData = await fetch("http://127.0.0.1:3001/user/signup", {
        method: "POST",

        // credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userName,
          email,
          password,
          confirmPassword,
        }),
      });
      const data = await postData.json();
      console.log(data);
      setAuth(data);
    } catch (err) {
      console.log(err);
    }
  };
  const submitForm = (e) => {
    e.preventDefault();
    login();
  };
  return (
    <div className="relative h-full flex flex-col justify-center overflow-hidden">
      <div className="w-full dark:bg-slate-600  p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl ">
        <h1 className=" dark:text-purple-400 no-underline text-3xl font-semibold text-center  text-purple-700 ">
          Sign in
        </h1>
        <form className="mt-6" onSubmit={submitForm}>
          <div className="mb-2">
            <label className=" dark:text-purple-400 block text-sm font-semibold text-gray-800">
              User Name
            </label>
            <input
              onChange={(e) => setUserName(e.target.value)}
              type="text"
              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label className=" dark:text-purple-400 block text-sm font-semibold text-gray-800">
              Email
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label className=" dark:text-purple-400 block text-sm font-semibold text-gray-800">
              Password
            </label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label className=" dark:text-purple-400 block text-sm font-semibold text-gray-800">
              Confirm Password
            </label>
            <input
              onChange={(e) => setConfirmPassword(e.target.value)}
              type="password"
              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mt-6">
            <button className=" dark:text-purple-400 w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
