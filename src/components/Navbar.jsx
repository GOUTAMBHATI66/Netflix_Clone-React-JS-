import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();

  const handleLogOut = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="absolute w-full p-4 flex items-center justify-between z-50">
      <Link to="/">
        <h1 className="uppercase text-red-700 font-bold cursor-pointer text-5xl">
          netflix
        </h1>
      </Link>

      {user?.email ? (
        <div>
          <button
            onClick={handleLogOut}
            className="capitalize bg-red-700 px-3 py-1 rounded cursor-pointer hover:bg-red-800 "
          >
            logOut
          </button>
        </div>
      ) : (
        <div>
          <Link to="/login">
            <button className="capitalize pr-4 underline">log-in</button>
          </Link>

          <Link to="/signup">
            <button className="capitalize bg-red-700 px-3 py-1 rounded cursor-pointer hover:bg-red-800 ">
              Sign up
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
