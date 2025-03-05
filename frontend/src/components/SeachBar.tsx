import React from "react";

function SearchBar(){
    return(
        <div className="nav-secondary-container">
            <div className="input-group close">
                        <div className="input-icon">
                            <img src="assets/img/search.svg" alt="search"/>
                        </div>
                        <input id="search" type="text" className="input-field" placeholder="Search for products..."/>
                    </div>
                     <div className="nav-img">
                        <img src="./assets/img/search.svg" alt="search" className="search-nav"/>
                        <img src="./assets/img/car.svg" alt="car" className="car-nav"/>
                        <img src="./assets/img/perfil.svg" alt="perfil" className="perfil-nav"/>
                    </div>
             </div>
    );
}



export default SearchBar;