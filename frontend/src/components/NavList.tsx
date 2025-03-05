import React from "react";


function NavList(){
    return(
        <div>
            <div className="nav-primary-container">
                <img src="assets/img/sidebar.svg" alt="side bar" className="side-nav"/>
                    <h1>shop.co</h1>
                <ul className="nav-list close">
                    <li>Shop</li>
                    <li>On Sale</li>
                    <li>New Arrivals</li>
                    <li>Brands</li>
                </ul>
            </div>
        </div>
    );
}



export default NavList;