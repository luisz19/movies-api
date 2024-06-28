import {FaStar} from 'react-icons/fa'
import '../styles/MovieCard.css'
import { useState } from 'react'
import MovieInfo from './MovieInfo'
const imgMovie = import.meta.env.VITE_IMG

const MovieCard = ({movie}) => {
    const [close, setClose] = useState(true)
    const [id, setIdMovie] = useState();

    const toggleDiv = () => {
        setClose(!close);
        setIdMovie(false)
      };

    const getId = () => {
        setIdMovie(movie.id)
        console.log(movie.id)
    }


    return (
        <>
            <div className="card-movie">
                <figure>
                    <img src={imgMovie + movie.poster_path} alt={movie.title  || movie.name}/>
                </figure>
                <h3>{movie.title  || movie.name}</h3>
                <p className='classification'>
                    <FaStar />
                    <span>{movie.vote_average}</span>
                </p>

                <button className='btn-movie' onClick={getId}>Detalhes</button>

                <p>
                    {id && <MovieInfo id={id} movie={movie} close={toggleDiv} />}
                </p>
                
                
            </div>

            
        </>
    )
}

export default MovieCard