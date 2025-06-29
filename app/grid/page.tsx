"use client";
import React, { useState } from 'react'
import Grid from '../Grid'
import Navbar from '../components/Navbar'
import NavbarHome from '../components/NavbarHome'


const page = () => {
    const [query, setQuery] = useState<string>('');
    return (
        <div className='bg-[#030303]'>
            <NavbarHome setQuery={setQuery} />
            <Grid query={query} />
        </div>
    )
}

export default page
