import { Mail } from 'lucide-react';

export function Newsletter() {
  return (
    <section className="bg-gradient-to-b from-white to-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="bg-black rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between">
          <h2 className="font-integral text-3xl md:text-4xl text-white md:w-1/2 mb-6 md:mb-0">
            stay upto date about our latest offers
          </h2>
          
          <div className="w-full md:w-auto space-y-4">
            <div className="flex items-center bg-white rounded-full px-4 py-3">
              <Mail className="w-5 h-5 text-gray-500" />
              <input
                type="email"
                placeholder="Enter your email address"
                className="ml-2 bg-transparent border-none focus:outline-none font-satoshi"
              />
            </div>
            <button className="w-full bg-white text-black rounded-full py-3 px-6 font-satoshi">
              Subscribe to Newsletter
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}