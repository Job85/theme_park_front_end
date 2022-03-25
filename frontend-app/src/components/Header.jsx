import { Link } from 'react-router-dom'

const Header = () => {

    return (
        <header>
            <nav>
                <Link to="/">Home</Link>
                <Link to="./Dinner">Dinner</Link>
                <Link to="./Desserts">Dessert</Link>
            </nav>
        </header>
    )
}

export default Header