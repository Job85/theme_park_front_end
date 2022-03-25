import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../globals'

const Dinner = () => {
    useEffect(() => {
        const getDinner = async () => {
            const res = await axios.get(`${BASE_URL}/Dinner`)
            console.log(res)
        }
        getDinner()
    }, [])
    return (
        <div className='navbar'>
            <h1>All American Grill</h1>
            <h2>Menu</h2>
            <div >
            </div>
        </div>
    )
}

export default Dinner