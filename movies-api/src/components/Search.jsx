import { useState } from "react"
import { FaSearch } from "react-icons/fa"
import Home from "../pages/Home";


const Search = () => {
    const [search, setSearch] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(search)
    }
    
    return(
        <>
         <div className="search-bar">
             <FaSearch />
             <form onSubmit={handleSubmit}>
                <input className='search' type="text" placeholder="Digite o nome do filme" onChange={(e) => setSearch(e.target.value)} value={search}/>

            
             </form>

             
            
             </div>
         </>
        
    )
}

export default Search