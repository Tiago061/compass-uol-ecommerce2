import React from 'react';
import NavList from './NavList'
import SearchBar from './SeachBar';


function Header(){
    return(
        <div>
            <header className="header">
                <nav className="nav-header"> 
                    <NavList />
                    <SearchBar />
                </nav>
            </header>
        </div>
    );
}


export default Header;