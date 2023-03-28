import { useState, useEffect } from "react";
import "./App.css";
import { AiOutlineSearch } from "react-icons/ai";
import Header from "./components/Header";
import MovieCard from "./components/MovieCard";
import Search from "./components/Search";

// f234d243
//

const API_URL = "http://omdbapi.com?apikey=c032e2d7";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
    console.log(data.Search);
  };

  useEffect(() => {
    searchMovies("Gorilla");
  }, []);

  return (
    <>
      <Header />
      <div className="flex items-center justify-center">
        <form className="md:w-2/4 w-96">
          <label
            for="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div className="relative">
            <AiOutlineSearch className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3" />
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"></div>
            <input
              type="search"
              id="default-search"
              className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search Movies and Series"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              required
            />
            <button
              type="button"
              className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={() => searchMovies(searchTerm)}
            >
              Search
            </button>
          </div>
        </form>
      </div>
      {movies?.length > 0 ? (
        <div className="container mx-auto ml-10">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {movies.map((movie) => (
              <MovieCard movie={movie} />
            ))}
          </div>
        </div>
      ) : (
        <div className="h-80 flex items-center justify-center mt-10 font-medium text-3xl">
          <h2>No Movies Found</h2>
        </div>
      )}
    </>
  );
};

export default App;
