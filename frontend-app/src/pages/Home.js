import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { BASE_URL } from '../globals'
import { useEffect, useState } from 'react'


function Home() {
    const [site, setSite] = useState();


    return (
        <div className='navbar'>
            <h1>Eatery</h1>
            <div>
                <p className='homeP'>Click the links above for menu options</p>
            </div>
        </div>
    )
}

export default Home
