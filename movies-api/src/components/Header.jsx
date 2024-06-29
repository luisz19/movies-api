import '../styles/Header.css'
import { FaSearch } from "react-icons/fa"


const Header = ( {handleSubmit, setSearch, search}) => {
    return (
        <header className="header">
            <figure>
                <img src="https://curtamais.com.br/goiania/wp-content/uploads/sites/2/2023/11/423b0a797abd14faebc7c09e38bc9e9c.jpeg" alt="The Absolute Cinema" />
            </figure>

            <h2>Absolute Cinema</h2>

            <div className="search-bar">
             <FaSearch />
             <form onSubmit={handleSubmit}>
                
                <input className='search' type="text" placeholder="Digite o nome do filme" onChange={(e) => setSearch(e.target.value)} value={search}/>

            
             </form>

            
             </div>
           

        </header>
    )
}

export default Header;