import { useEffect, useState } from "react";

export function Loading() {
  return (
    <div>
      <span>Loading...</span>
    </div>
  );
}

const MovieListFunc = async (setMovies, setLoading, condition) => {
  const json = await (await fetch(`https://yts.mx/api/v2/${condition}`)).json();
  setMovies(json.data.movies);
  setLoading(false);
};

const MovieFunc = async (setMovies, setLoading, condition) => {
  const json = await (await fetch(`https://yts.mx/api/v2/${condition}`)).json();
  setMovies(json.data.movie);
  setLoading(false);
};

export function LoadMovieList(setMovies, setLoading, condition) {
  useEffect(() => {
    MovieListFunc(setMovies, setLoading, condition);
  }, []);
}

export function LoadMovie(setMovies, setLoading, condition) {
  useEffect(() => {
    MovieFunc(setMovies, setLoading, condition);
  }, []);
}
