export function Brands() {
    const brands = [
      { name: 'Versace', logo: '/assets/img/versacedesk.svg' },
      { name: 'Zara', logo: '/assets/img/zaradesk.svg' },
      { name: 'Gucci', logo: '/assets/img/guccidesk.svg' },
      { name: 'Prada', logo: '/assets/img/pradadesk.svg' },
      { name: 'Calvin Klein', logo: '/assets/img/calvindesk.svg' },
    ];
  
    return (
      <section className="bg-black py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-around items-center gap-4 md:gap-8">
            {brands.map((brand) => (
              <img
                key={brand.name}
                src={brand.logo}
                alt={`${brand.name} logo`}
                className="h-6 md:h-8 object-contain"
              />
            ))}
          </div>
        </div>
      </section>
    );
}