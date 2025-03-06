import { useState } from "react";
import styles from './NavList.module.css'


function NavList(){
    const [active, setMode] = useState(false);

    const ToggleMode = () => {
        setMode(!active)
    }

    return(
        <nav className={styles.navPrimaryContainer}>
            {/* Ícone do menu hamburguer para mobile */}
        <div className={styles.navMobile}>
            <div className={active ? `${styles.icon} ${styles.iconActive}` : styles.icon} onClick={ToggleMode}>
                <div className={styles.hamburguer}></div>
            </div>
        </div>
        
        {/* Menu responsivo para mobile */}
        <div className={active ? `${styles.menu} ${styles.menuOpen}` : styles.menuClose}>
            <ul className={styles.nav_list}>
                <li>Shop</li>
                <li>On Sale</li>
                <li>New Arrivals</li>
                <li>Brands</li>
            </ul>
        </div>
        
        {/* Título */}
        <div className={styles.title}>
            <h1>shop.co</h1>
        </div>
        
        {/* Navegação padrão em telas maiores */}
        <ul className={styles.navListDesktop}>
            <li>Shop</li>
            <li>On Sale</li>
            <li>New Arrivals</li>
            <li>Brands</li>
        </ul>
    </nav>
    );
}



export default NavList;