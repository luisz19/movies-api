import {FaStar} from 'react-icons/fa'
import '../styles/MovieCard.css'

const imgMovie = import.meta.env.VITE_IMG

const MovieCard = ({movie}) => {

    return (
        <>
            <div className="card-movie">
                <figure>
                    <img src={imgMovie + movie.poster_path} alt={movie.title}/>
                </figure>
                <h3>{movie.title}</h3>
                <p className='classification'>
                    <FaStar />
                    <span>{movie.vote_average}</span>
                </p>
                <button className='btn-movie'>Detalhes</button>
            </div>

            
        </>
    )
}

export default MovieCard