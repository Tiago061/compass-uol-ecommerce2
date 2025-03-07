import { X } from 'lucide-react';
import { useState } from 'react';

export function TopBanner() {
  const [close, activeClose] = useState(false);


  return (
    <nav className="bg-black">
      <section className="flex justify-center items-center">
        <div className="text-center flex-[2]">
          <p className="text-white font-satoshi-regular py-2 text-sm md:text-base">
            Sign up and get 20% off to your first order.{' '}
            <span className="underline font-bold cursor-pointer">Sign Up Now</span>
          </p>
        </div>
        <div className="hidden md:flex items-center pr-4">
          <button className="text-white">
            <X className="w-4 h-4" />
          </button>
        </div>
      </section>
    </nav>
  );
}