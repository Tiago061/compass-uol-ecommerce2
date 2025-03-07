import {Versace, Zara, Gucci, Prada, Calvin} from "../../assets/img/home";


export function Brands() {
    const brands = [
      { name: 'Versace', Logo: Versace },
      { name: 'Zara', Logo: Zara },
      { name: 'Gucci', Logo: Gucci },
      { name: 'Prada', Logo: Prada },
      { name: 'Calvin Klein', Logo: Calvin},
    ];
  
    return (
      <section className="bg-black py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-around items-center gap-4 md:gap-8">
            {brands.map(({ name, Logo }) => (
              <Logo key={name} className="h-6 md:h-8 md:w-44 object-contain"/>
            ))}
          </div>
        </div>
      </section>
    );
}