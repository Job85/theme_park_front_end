import { Link } from 'react-router-dom'


const Header = () => {

    return (
        <header>
            <nav>
                <Link to="/" className='link'>Home</Link>
                <Link to="dinner" className='link'>Dinner</Link>
                <Link to="desserts" className='link'>Dessert</Link>
            </nav>
        </header>
    )
}

export default Header