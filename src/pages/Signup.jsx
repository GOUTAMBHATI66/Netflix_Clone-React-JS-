import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Signup = () => {
  const [rememberLogin, setRememberLogin] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { user, signUp } = UserAuth();
  const navigate = useNavigate();

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      await signUp(email, password);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="w-full h-screen">
        <img
          className="hidden sm:block absolute w-full h-full object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/c31c3123-3df7-4359-8b8c-475bd2d9925d/15feb590-3d73-45e9-9e4a-2eb334c83921/IN-en-20231225-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt="///"
        />
        <div className=" bg-black/50 fixed top-0 left-0 w-full h-screen " />

        <div className="fixed w-full px-3 py-24 z-20">
          <div className="max-w-[400px] h-[500px] mx-auto bg-black/80 rounded-lg">
            <div className="max-w-[300px] mx-auto py-16">
              <h1 className="text-3xl font-bold">Sign Up</h1>

              <form
                onSubmit={handleFormSubmit}
                className="w-full flex flex-col py-4"
              >
                <input
                  className="p-3 my-3 bg-gray-700 rounded outline-none"
                  type="email"
                  placeholder="enter your email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

                <input
                  className="p-3 my-3 bg-gray-700 rounded outline-none"
                  type="password"
                  placeholder="password"
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />

                <button
                  className="font-bold bg-red-700 py-3
                my-6 rounded"
                >
                  Sing Up
                </button>

                <div className="flex justify-between items-center text-gray-400">
                  <p>
                    <input
                      checked={rememberLogin}
                      onChange={() => setRememberLogin(rememberLogin)}
                      type="checkbox"
                      className="mr-2"
                    />
                    Remember me
                  </p>

                  <p>Need help?</p>
                </div>

                <p className="my-4">
                  <span className="text-gray-400 mr-1">
                    Already subscribed to Netflex?
                  </span>
                  <Link to="/login">Login</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
