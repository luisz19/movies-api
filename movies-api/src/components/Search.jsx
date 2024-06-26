import { FaSearch } from "react-icons/fa"

const Search = () => {
    return(
        <>
         <div className="search-bar">
             <FaSearch />
             <input className='search' type="text" placeholder="Digite o nome do filme"/>
             </div>
         </>
        
    )
}

export default Search