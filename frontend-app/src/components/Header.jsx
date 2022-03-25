import { Link } from 'react-router-dom'


const Header = () => {

    return (
        <header>
            <nav>
                <Link to="/" className='link'>Home</Link>
                <Link to="./Dinner" className='link'>Dinner</Link>
                <Link to="./Desserts" className='link'>Dessert</Link>
            </nav>
        </header>
    )
}

export default Header