import React, { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { createImagUrl } from "../services/movieServices";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { db } from "../services/firebase";
import { UserAuth } from "../context/AuthContext";

const MovieItem = ({ movie }) => {
  const [like, setLike] = useState(false);
  const { title, backdrop_path, poster_path } = movie;
  const { user } = UserAuth();

  const markFavShows = async () => {
    const userEmail = user?.email;

    if (userEmail) {
      const userDoc = doc(db, "users", userEmail);
      setLike(!like);
      await updateDoc(userDoc, {
        favShows: arrayUnion({ ...movie }),
      });
    } else {
      alert("LOGIN TO SAVE THE MOVIES.");
    }
  };

  return (
    <div className=" relative w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block overflow-hidden cursor-pointer rounded-lg m-2">
      <img
        className="w-full h-36 block object-cover object-top"
        src={createImagUrl(backdrop_path ?? poster_path, "w500")}
        alt={title}
      />

      <div className="absolute top-0 left-0 w-full h-40 bg-black/75 opacity-0 hover:opacity-100  ">
        <p className=" whitespace-normal text-xs md:text-sm flex items-center justify-center h-full font-bold">
          {movie.title}
        </p>

        <p onClick={markFavShows}>
          {like ? (
            <FaHeart
              size={20}
              className=" absolute top-2 left-2 text-gray-300"
            />
          ) : (
            <FaRegHeart
              size={20}
              className=" absolute top-2 left-2 text-gray-300"
            />
          )}
        </p>
      </div>
    </div>
  );
};

export default MovieItem;
