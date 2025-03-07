import { X } from 'lucide-react';

export function TopBanner() {
  return (
    <nav className="bg-black">
      <div className="flex justify-between items-center">
        <div className="flex-1" />
        <div className="text-center flex-[2]">
          <p className="text-white font-satoshi py-2 text-sm md:text-base">
            Sign up and get 20% off to your first order.{' '}
            <span className="underline font-bold cursor-pointer">Sign Up Now</span>
          </p>
        </div>
        <div className="hidden md:flex items-center pr-4">
          <button className="text-white">
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </nav>
  );
}