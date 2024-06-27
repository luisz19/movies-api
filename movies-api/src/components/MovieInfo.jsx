import '../styles/MovieInfo.css'

const MovieInfo = ({movie}) => {
    return (
        <div className="info-container">
            <div className="details">
                <p className="info-title">{movie.title}</p>
                <p className="info-date">Lançamento: {movie.release_date}</p>
          
                <p className="info-overview"><span>Sinopse:</span> {movie.overview}</p>
                {/* <p>{movie.poster_path}</p> */}
            </div>
        </div>
    )
}

export default MovieInfo;