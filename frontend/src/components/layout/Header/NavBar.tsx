import { Menu } from 'lucide-react';
import { IconSearch, IconCar, IconPerfil, DropDawn } from '../../../assets/img/header';




export function Navbar() {
  return (
    <header className="p-5 lg:pl-16">
      <nav className="flex justify-between items-center">
        <div className="flex gap-5 items-center">
          <Menu className="md:hidden w-6 h-6 mt-1.5" />
          <h1 className="font-integral-cf text-2xl md:text-3xl">shop.co</h1>
          <ul className="hidden md:flex items-center gap-4 font-satoshi">
            <div className='flex items-center'>
                <li className="cursor-pointer ">Shop</li>
                <li className='curso-pointer'><DropDawn className="w-6 h-2"/></li>
            </div>
            <li className="cursor-pointer">On Sale</li>
            <li className="cursor-pointer">New Arrivals</li>
            <li className="cursor-pointer">Brands</li>
          </ul>
        </div>
        
        <div className="flex gap-3 items-center">
          <div className="hidden md:flex items-center bg-gray-100 px-4 py-3 rounded-full w-[577px]">
            <IconSearch className="w-5 h-5 text-gray-500" />
            <input
              type="text"
              placeholder="Search for products..."
              className="bg-transparent border-none focus:outline-none ml-2 w-full font-satoshi"
            />
          </div>
          <div className="flex gap-2">
            <IconSearch className="md:hidden w-6 h-6" />
            <IconCar className="w-6 h-6" />
            <IconPerfil className="w-6 h-6" />
          </div>
        </div>
      </nav>
    </header>
  );
}