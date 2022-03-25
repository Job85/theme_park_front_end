import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../globals'

const Desserts = () => {
    useEffect(() => {
        const getDesserts = async () => {
            const res = await axios.get(`${BASE_URL}/desserts`)
            console.log(res)
        }
        getDesserts()
    }, [])
    return (
        <div className='navbar'>
            <h1>Grandma's Fried Goodies</h1>
            <h2>Menu</h2>
            <div>

            </div>
        </div>
    )
}

export default Desserts