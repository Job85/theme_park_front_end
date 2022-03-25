import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {

    return (
        <div className='navbar'>
            <h2>Eatery</h2>
            <div>
                <Link to='/'>Home</Link>
            </div>
        </div>
    )
}

export default Home
