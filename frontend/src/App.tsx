import { Header } from './components/layout/Header';
import { Hero } from './components/home/Hero';
import { Brands } from './components/home/Brands';
import { ProductSection } from './components/home/ProductSection';
import { Footer } from './components/layout/Footer';
import { Newsletter } from './components/home/Newsletter';


const newArrivals = [
  {
    id: '1',
    image: '/assets/img/Frame32.svg',
    title: 'T-shirt with Tape Details',
    price: 120
  },
  {
    id: '2',
    image: '/assets/img/Frame33.svg',
    title: 'Skinny Fit Jeans',
    price: 240,
    originalPrice: 260
  },
  {
    id: '3',
    image: '/assets/img/Frame34.svg',
    title: 'Checkred Shirt',
    price: 180
  },
  {
    id: '4',
    image: '/assets/img/Frame38.svg',
    title: 'Sleeve Striped T-shirt',
    price: 130,
    originalPrice: 160
  }
];

const topSelling = [
  {
    id: '1',
    image: '/assets/img/vertical.svg',
    title: 'Vertical Striped Shirt',
    price: 212,
    originalPrice: 232
  },
  {
    id: '2',
    image: '/assets/img/courage.svg',
    title: 'Courage Graphic T-shirt',
    price: 145
  },
  {
    id: '3',
    image: '/assets/img/bermuda.svg',
    title: 'Loose Fit Bermuda Shorts',
    price: 80
  },
  {
    id: '4',
    image: '/assets/img/jeans.svg',
    title: 'Faded Skinny Jeans',
    price: 210
  }
];

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Brands />
        <ProductSection title="new arrivals" products={newArrivals} />
        <hr className="max-w-7xl mx-auto border-gray-200" />
        <ProductSection title="top selling" products={topSelling} />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}

export default App;