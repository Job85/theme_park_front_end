import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../globals'

const Dinner = () => {
    const [menuDinner, setDinner] = useState([])

    useEffect(() => {
        const getDinner = async () => {
            const res = await axios.get(`${BASE_URL}/dinner`)
            console.log(res.data)
            setDinner(res.data)
        }
        getDinner()
    }, [])
    console.log(menuDinner)
    return (
        <div className='navbar'>
            <h1>All American Grill</h1>
            <h2>Dinner Menu</h2>
            <div>
                <ul>
                    {menuDinner.map((element) => (
                        <li>
                            {element.item} ${element.price}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Dinner