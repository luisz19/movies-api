import {FaStar} from 'react-icons/fa'
import '../styles/MovieCard.css'

const imgMovie = import.meta.env.VITE_IMG

const MovieCard = ({movie}) => {

    return (
        <>
            <div className="card-movie">
                <figure>
                    <img src={imgMovie + movie.poster_path}/>
                </figure>
                <h3>{movie.title}</h3>
                <p>
                    <FaStar />
                    {movie.vote_average}
                </p>
                <p>Detalhes</p>
            </div>

            
        </>
    )
}

export default MovieCard