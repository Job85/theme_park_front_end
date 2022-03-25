import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../globals'

const Desserts = () => {
    const [menuDets, setMenuDets] = useState({})

    useEffect(() => {
        const getDesserts = async () => {
            const res = await axios.get(`${BASE_URL}/desserts`)
            console.log(res.data)
            setMenuDets(res.data)
        }
        getDesserts()
    }, [])
    console.log(menuDets)
    return (
        <div className='navbar'>
            <h1>Grandma's Fried Goodies</h1>
            <h2>Dessert Menu</h2>
            <div>
                <ul>
                    {menuDets.map((element, index) => (
                        <li>
                            {element.item} ${element.price}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Desserts