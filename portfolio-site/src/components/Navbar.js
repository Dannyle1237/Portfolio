import React, {useRef, useState, useEffect} from 'react';
import {FaBars, FaTimes} from "react-icons/fa";
import "../styles/main.css"

function Navbar() {
    const navRef = useRef();
    const [showButton, setShowButton] = useState(false);

    const showNavbar = () =>{
        navRef.current.classList.toggle("responsive_nav");
    }

    useEffect(() => {
        const handleResize = () => {
            if(window.innerWidth <= 1024) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        };
        window.addEventListener('resize', handleResize);

        //Initial check
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <header>
            <h3>Danny Le</h3>
            <nav ref={navRef}>
                <a href="/#">Home</a>
                <a href="/#">Github</a>
                <a href="/#">Contact</a>   
                {showButton && (
                    <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                        <FaTimes/>
                    </button>
                )}
            </nav>
            {showButton &&(
                <button className="nav-btn" onClick={showNavbar}>
                    <FaBars />
                </button>
            )}
            
        </header>
    );
}

export default Navbar;