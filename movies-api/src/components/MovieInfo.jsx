import '../styles/MovieInfo.css'

const MovieInfo = ({movie, close}) => {
    return (
        <div className="info-container">
            <div className="details">
                <p className="info-title">{movie.title  || movie.name} <button className="exit-btn" onClick={close}>x</button></p>
                <p className="info-date">Lançamento: {movie.release_date || movie.first_air_date}</p>
          
                <p className="info-overview"><span>Sinopse:</span> {movie.overview}</p>
                {/* <p>{movie.poster_path}</p> */}
            </div>
        </div>
    )
}

export default MovieInfo;