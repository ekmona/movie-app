import { Link } from "react-router-dom";
import styles from "./Movie.module.css";

function Movie({movie}) {

    return (
        <div className={styles.movie}>
            <img className={styles.movie__img} alt={movie.title_long} src={movie.medium_cover_image}></img>
            <div>
              <h2 className={styles.movie__title}>
                <Link to={`/movie/${movie.id}`}>{movie.title}</Link>  </h2>
              <h3 className={styles.movie__year}>{movie.year} ⭐ {movie.rating}</h3>
              <p>{movie.summary.length > 235 ? `${movie.summary.slice(0, 235)}...` : movie.summary}</p>
              <ul className={styles.movie__genres}>
                {movie.genres.map(genre => <li key={genre}>{genre}</li>)}
              </ul>
            </div>
          </div>
    );
}

export default Movie;