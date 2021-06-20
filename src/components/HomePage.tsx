import React, { Component, useState } from 'react';
import Navbar from './NavBar/Nav.js';
import SideBar from './NavBar/sideBar/SideBar.js';


const ITEMS = ["campaigns"]


export const HomePage = () => {

    const [isOpen, setIsOpen] = useState(false);


    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Navbar toggle={toggle} items={ITEMS} />
            <SideBar isOpen={isOpen} toggle={toggle} items ={ITEMS} />


        </>
    )
}

export default HomePage;