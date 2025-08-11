import type { Movie } from '../types';



export function MovieList({ movies }: { movies: Movie[] }) {

return (
    <div className="movie-list">
        {movies.map(movie => (
            <div key={movie.imdbID} className="movie-item">
                <img src={movie.Poster} alt={movie.Title} />
                <h3>{movie.Title}</h3>
                <p>{movie.Year}</p>
            </div>
        ))}
    </div>
    )
}