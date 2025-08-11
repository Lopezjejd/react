import './App.css'
import { SearchBar } from './components/searchBar'
import type { Movie } from './types'
import { useState } from 'react';
import { MovieList } from './components/movieList'
function App() {
const [movies, setMovies] = useState<Movie[]>([]);

  return (
    <>
    <h1>Search your favorite movie</h1>
    <div className="app">
      <SearchBar onResults={setMovies} />
      <MovieList movies={movies} ></MovieList>

    </div>
   
    </>
  )
}

export default App
