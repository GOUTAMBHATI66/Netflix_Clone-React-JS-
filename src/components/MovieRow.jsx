import React, { useEffect, useState } from "react";
import axios from "axios";
import MovieItem from "./MovieItem";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const MovieRow = ({ title, url }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(url).then((response) => {
      setMovies(response.data.results);
    });
  }, [url]);

  const randomNum = Math.floor(Math.random() * 1000);
  const slide = (offset) => {
    const slider = document.getElementById("slider" + randomNum);
    slider.scrollLeft = slider.scrollLeft + offset;
  };

  return (
    <>
      <h2 className="font-bold capitalize p-4 md:text-xl">{title}</h2>

      <div className=" relative flex items-cenwhiteter group ">
        <MdChevronLeft
          onClick={() => {
            slide(-500);
          }}
          className="absolute left-4 top-12 bg-white size-8 opacity-80 rounded-full z-10 text-gray-700 hidden group-hover:block cursor-pointer sm:size-9"
        />
        <div
          id={`slider` + randomNum}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide "
        >
          {movies.map((movie) => (
            <MovieItem key={movie.id} movie={movie} />
          ))}
        </div>

        <MdChevronRight
          onClick={() => {
            slide(500);
          }}
          className="absolute right-2 top-12 bg-white size-8 opacity-80 rounded-full z-10 hidden text-gray-700 group-hover:block cursor-pointer sm:size-9 "
        />
      </div>
    </>
  );
};

export default MovieRow;
