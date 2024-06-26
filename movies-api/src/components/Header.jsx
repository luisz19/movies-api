import '../styles/Header.css'
import Search from './Search';

const Header = () => {
    return (
        <header className="header">
            <figure>
                <img src="https://curtamais.com.br/goiania/wp-content/uploads/sites/2/2023/11/423b0a797abd14faebc7c09e38bc9e9c.jpeg" alt="The Absolute Cinema" />
            </figure>

            <h2>Absolute Cinema</h2>

            <Search />
           

        </header>
    )
}

export default Header;