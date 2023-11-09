import { Link } from "react-router-dom";

function Movie({movie}) {
    return (
        <div>
            <Link to="/hi">go to Hi</Link>
            <img alt={movie.title_long} src={movie.medium_cover_image}></img>
            <h2><Link to={`/movie/${movie.id}`}>{movie.title}</Link> ({movie.year}) {movie.rating} </h2>
            <p>{movie.summary}</p>
            <ul>
              {movie.genres.map(genre => <li key={genre}>{genre}</li>)}
            </ul>
            <hr />
          </div>
    );
}

export default Movie;