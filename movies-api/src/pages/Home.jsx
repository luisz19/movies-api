import { useState } from "react"
import { useEffect } from "react"
import Header from "../components/Header"
import MovieCard from "../components/MovieCard"
import axios from 'axios'
import '../styles/MovieCard.css'


const Home  = ( ) =>  {
    const movieURL = import.meta.env.VITE_API
    const apiKey = import.meta.env.VITE_API_KEY
    const apiTv = import.meta.env.VITE_API_TV
    console.log(movieURL, apiKey)
    const [topMovies, setTopMovies] = useState([]);
    const [topSeries, setTopSeries] = useState([]);
    const [showTV, setShowTV] = useState(false)
    const [showMovie, setShowMovie] = useState(false)

    const getTopMovies = async () => {
        try {
            const response = await axios.get(`${movieURL}top_rated?${apiKey}`);
            setTopMovies(response.data.results)
            console.log(response.data)
            setShowMovie(true)
            setShowTV(false)
        } catch (error) {
            console.error(error)
        }
    }

    const getTopSeries = async () => {
        try {
            const response = await axios.get(`${apiTv}top_rated?${apiKey}`);
            setTopSeries(response.data.results)
            console.log(response.data)
            setShowTV(true)
            setShowMovie(false)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        getTopMovies()
    }, [])


    return (
        <>

        <Header />
        {/* <MovieCard /> */}
        <div className="container">
            <div className="group">
                <h2>
                    Melhores filmes
                </h2>
                <div className="btns">
                    <button onClick={getTopMovies}>Filme</button>
                    <button onClick={getTopSeries}>Série</button>
                </div>
            </div>
            <div className="movies-container">
                {showMovie && topMovies.map((movie) => 
                    <p className="movie-title"> <MovieCard movie={movie} /> </p>
                )}


            </div>

            <div className="movies-container">
                {showTV && topSeries.map((movie) => 
                    <p className="movie-title"> <MovieCard movie={movie} /> </p>
                )}


            </div>
            
        </div>
          
        </>
    )
}

export default Home;