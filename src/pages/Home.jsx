import React from "react";
import Hero from "../components/Hero";
import MovieRow from "../components/MovieRow";
import endpoints from "../services/movieServices";
import { UserAuth } from "../context/AuthContext";

const Home = () => {
  const { user } = UserAuth();

  return (
    <>
      {user?.email ? (
        <div>
          <Hero />
          <MovieRow title={"upcoming"} url={endpoints.upcoming} />
          <MovieRow title={"trending"} url={endpoints.trending} />
          <MovieRow title={"top rated"} url={endpoints.topRated} />
          <MovieRow title={"comedy"} url={endpoints.comedy} />
          <MovieRow title={"popular"} url={endpoints.popular} />
        </div>
      ) : (
        <Hero />
      )}
    </>
  );
};

export default Home;
