import { useState } from "react"
import { useEffect } from "react"
import Header from "../components/Header"
import MovieCard from "../components/MovieCard"
import axios from 'axios'
import '../styles/MovieCard.css'


function Home ( ) {
    const movieURL = import.meta.env.VITE_API
    const apiKey = import.meta.env.VITE_API_KEY
    console.log(movieURL, apiKey)
    const [topMovies, setTopMovies] = useState([]);

//     const getTopMovies = async (url) => {
//         const res = await fetch (url);
//         const data = await res.json();

//         setTopMovies(data.results)
//         console.log(data)
//     }
    
//    useEffect(() => {
//         const topRatedUrl = `${movieURL}top_rated?${apiKey}`;
//         getTopMovies(topRatedUrl);
        
//    }, [])

    const getTopMovies = async () => {
        try {
            const response = await axios.get(`${movieURL}top_rated?${apiKey}`);
            setTopMovies(response.data.results)
            console.log(response.data)
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
            <h2>
                Melhores filmes
            </h2>
            <div className="movies-container">
                {topMovies && topMovies.map((movie) => 
                    <p className="movie-title"> <MovieCard movie={movie} /> </p>
                )}


            </div>
            
        </div>
          
        </>
    )
}

export default Home;