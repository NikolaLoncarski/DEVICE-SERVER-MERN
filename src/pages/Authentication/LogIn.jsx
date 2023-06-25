import { useState } from "react";
import { useGlobalContext } from "../../context/context";
import { Link } from "react-router-dom";
export default function LoginPage() {
  const { auth, setAuth } = useGlobalContext();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    try {
      const postData = await fetch("http://127.0.0.1:3001/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          email,
          password,
        }),
      });
      const data = await postData.json();
      console.log(data);

      setAuth(data);
      document.cookie = `token=${data.token}`;
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
      <div className="w-full  p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-purple-700 underline">
          Sign in
        </h1>
        <form className="mt-6" onSubmit={submitForm}>
          <div className="mb-2">
            <label className="block text-sm font-semibold text-gray-800">
              Email
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label className="block text-sm font-semibold text-gray-800">
              Password
            </label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>

          <div className="mt-6">
            <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
              <Link to="home">Login</Link>
            </button>
          </div>
          <Link to="signup" className="pt-2 text-center">
            <p className="block text-sm font-semibold text-gray-800 hover:text-purple-700">
              Dont't have an accout? Signup
            </p>
          </Link>
        </form>
      </div>
    </div>
  );
}
