import React from 'react';
import NavList from './NavList'
import SearchBar from './SeachBar';
import styles from './Header.module.css'


function Header(){
    return(
        <div>
            <header className={styles.header}>
                <nav className={styles.nav_header}> 
                    <NavList />
                    <SearchBar />
                </nav>
            </header>
        </div>
    );
}


export default Header;