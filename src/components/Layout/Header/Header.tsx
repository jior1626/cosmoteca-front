import React from "react";

// Styles 
import "./Header.css";

// Components
import Search from "../../Search/Search";
import Navbar from "../Navbar/Navbar";

interface HeaderInterface {
    children?: React.ReactNode;
}
const Header: React.FC<HeaderInterface> = ({children}) => {
    return (
        <div className='holder'>
            <header className='header'>
                <Navbar />
                <div className='header-content flex flex-c text-center text-white'>
                    <h2 className='header-title text-capitalize'>find your book of choice.</h2><br />
                    <p className='header-text fs-18 fw-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam beatae sapiente quibusdam consequatur perspiciatis facere laboriosam non nesciunt at id repudiandae, modi iste? Eligendi, rerum!</p>
                    <Search />
                </div>
            </header>
        </div>
        
    )
}

export default Header;