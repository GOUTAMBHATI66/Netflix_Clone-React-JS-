import React, { useEffect, useState } from "react";
import axios from "axios";
import endpoints, { createImagUrl } from "../services/movieServices";

const Hero = () => {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    axios.get(endpoints.popular).then((response) => {
      const movieArr = response.data.results;
      const randomMovieObj =
        movieArr[Math.floor(Math.random() * movieArr.length)];

      setMovie(randomMovieObj);
    });
  }, []);

  const truncate = (str, length) => {
    if (!str) return "";

    return str.length > length ? str.slice(0, length) + "..." : str;
  };

  if (!movie) {
    return (
      <>
        <p>Fetching movie...</p>
      </>
    );
  }

  const { title, backdrop_path, release_date, overview } = movie;

  return (
    <div className="w-full h-[550px] lg:h-[850px]">
      <div className="w-full h-full">
        <div className="absolute w-full h-[550px] lg:h-[850px] bg-gradient-to-r from-black" />
        <img
          className="w-full h-full object-cover object-top"
          src={createImagUrl(backdrop_path, "original")}
          alt={title}
        />

        <div className=" absolute w-full top-[15%] lg:top-[25%] p-4 md:p-8">
          <h1 className="text-2xl md:text-5xl font-bold">{title}</h1>
          <div className=" mt-6 mb-3">
            <button className=" capitalize bg-gray-400 text-black py-2 px-5 mr-4">
              play
            </button>
            <button className=" capitalize border border-gray-300 py-2 px-5 ">
              watch later
            </button>
          </div>
          <p className="text-gray-300">{release_date}</p>
          <p className=" w-full md:max-w-[45%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200">
            {truncate(overview, 150)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
