import { useState } from "react";
import type { Movie } from "../types"; 
type SearchBarProps = {
  onResults: (movies: Movie[]) => void;
}

export  function SearchBar({ onResults }: SearchBarProps) {

const [query, setQuery] = useState("");

const handleSearch = async () => {
    if (query.trim() === "") {
      alert("Please enter a movie name to search.");
      return;
    }
    const res = await  fetch(`https://www.omdbapi.com/?apikey=58cdff5d&s=${query}`)
    const data = await res.json();
    console.log(data.Search);
  onResults(data.Search || []);
}

  return (
    <div className="search-bar">
      <input
      value={query}
       type="text"
       onChange={ e => setQuery(e.target.value)}
       placeholder="Search for movies..."
       onKeyDown={(e) => {
         if (e.key === "Enter") {handleSearch()}
        }
      }
        />
      <button onClick={handleSearch} type="submit">Search</button>
    </div>
  );
}