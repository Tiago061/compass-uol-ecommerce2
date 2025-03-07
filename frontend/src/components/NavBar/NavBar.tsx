import React, { useState } from "react";
import NavItem, { NavItemInterface } from "./NavItem";


function NavBar(){

    const items: NavItemInterface[] = [
        {
            url:"/shop",
            label:"Shop",
        },
        {
            url:"/On Sale",
            label:"On Sale",
        },
        {
            url:"/New Arrivals",
            label:"New Arrivals",
        },
        {
            url:"/Brands",
            label:"Brands",
        },
    ]

    return(
        <nav  className="flex items-center justify-between px-4 py-4 lg:px-16 lg:py-6">

           <h1 className="font-integral-bold text-2xl lg:text-4xl lg:-mt-1.5"><a href="/">shop.co</a></h1>
            
           <ul className="hidden lg:flex items-center space-x-8 font-satoshi-regular text-gray-text ">
                {items.map((item, index) => (
                    <NavItem 
                    key={index}
                    url={item.url}
                    label={item.label}
               />
                ))}
           </ul>

           <div className="flex items-center gap-4 lg:gap-8 w-[55%] justify-end">
                <div className="hidden lg:block relative w-[70%] right-10">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400">
                         <img src="/assets/img/search.jpg" alt="search"/>
                    </div>
                       <input id="search" type="text" placeholder="Search for products..." className="flex justify-start w-full h-12 pl-12 pr-4  rounded-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-black/20 transition-all font-satoshi-regular"/>
                </div>
                <div className="flex items-center gap-4">
                       <img src="/assets/img/search.jpg" alt="search" className="w-6 h-6"/>
                       <img src="/assets/img/car.jpg" alt="car" className="w-6 h-6 lg:w-7 lg:h-7"/>
                       <img src="assets/img/perfil.jpg" alt="perfil" className="w-6 h-6 lg:w-7 lg:h-7"/>
                </div>
            </div>
        </nav>
    );
}



export default NavBar;