import { StarsBlack, Models } from "../../assets/img/home";



export function Hero() {
  const stats = [
    { number: '200+', label: 'International Brands' },
    { number: '2,000+', label: 'High-Quality Products' },
    { number: '30,000+', label: 'Happy Customers' },
  ];

  return (
    <section className="bg-gray-100 px-4 md:px-20 py-8 md:py-20">
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 space-y-6">
          <h2 className="font-integral-cf text-4xl md:text-6xl leading-none">
            find clothes that matches your style
          </h2>
          <p className="text-gray-600 font-satoshi-regular md:w-4/5">
            Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
          </p>
          <button className="w-full md:w-auto bg-black text-white px-14 py-4 rounded-full font-satoshi">
            Shop Now
          </button>
          
          <div className="flex justify-around flex-wrap items-center mt-8 md:w-4/5">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                {index > 0 && <div className="hidden md:block w-px h-12 bg-gray-300 mx-4" />}
                <h3 className="font-satoshi text-2xl md:text-4xl">{stat.number}</h3>
                <p className="text-gray-600 font-satoshi-regular text-sm md:text-base">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="md:w-1/2 relative mt-8 md:mt-0">
          <div className="absolute top-0 left-0 right-0 flex justify-around z-10">
            <StarsBlack className="h-11 w-11 relative top-40 right-10"/>
            <StarsBlack className="relative top-12 left-10"/>
          </div>
          <Models />
        </div>
      </div>
    </section>
  );
}