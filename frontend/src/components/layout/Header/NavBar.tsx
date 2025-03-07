import { Menu, Search, ShoppingCart, User } from 'lucide-react';

export function Navbar() {
  return (
    <header className="p-4">
      <nav className="flex justify-between items-center">
        <div className="flex gap-4 items-center">
          <Menu className="md:hidden w-6 h-6" />
          <h1 className="font-integral text-2xl md:text-3xl">shop.co</h1>
          <ul className="hidden md:flex gap-4 font-satoshi">
            <li className="cursor-pointer">Shop</li>
            <li className="cursor-pointer">On Sale</li>
            <li className="cursor-pointer">New Arrivals</li>
            <li className="cursor-pointer">Brands</li>
          </ul>
        </div>
        
        <div className="flex gap-3 items-center">
          <div className="hidden md:flex items-center bg-gray-100 px-4 py-3 rounded-full w-[577px]">
            <Search className="w-5 h-5 text-gray-500" />
            <input
              type="text"
              placeholder="Search for products..."
              className="bg-transparent border-none focus:outline-none ml-2 w-full font-satoshi"
            />
          </div>
          <div className="flex gap-2">
            <Search className="md:hidden w-6 h-6" />
            <ShoppingCart className="w-6 h-6" />
            <User className="w-6 h-6" />
          </div>
        </div>
      </nav>
    </header>
  );
}