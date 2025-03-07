import React from 'react';
import NavBar from './NavBar/NavBar';
import styles from './Header.module.css';


function Header(){
    return(
        <div>
            <header className="flex items-center justify-between px-4 py-4 lg:px-16 lg:py-6">
                <nav className={styles.nav_header}> 
                    <NavBar />
                    
                </nav>
            </header>
        </div>
    );
}


export default Header;