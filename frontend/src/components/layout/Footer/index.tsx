import { Facebook, Github, Instagram, Twitter } from 'lucide-react';

export function Footer() {
  const socials = [
    { icon: Twitter, href: '#' },
    { icon: Facebook, href: '#', className: 'bg-black text-white' },
    { icon: Instagram, href: '#' },
    { icon: Github, href: '#' },
  ];

  const links = {
    Company: ['About', 'Features', 'Works', 'Career'],
    Help: ['Customer Support', 'Terms & Conditions', 'Privacy Policy'],
    FAQ: ['Account', 'Manage Deliveries', 'Orders', 'Payment'],
    Resources: ['Free eBook', 'Development Tutorial', 'How to - Blog', 'Youtube Playlist'],
  };

  const payments = [
    '/assets/img/Visa.png',
    '/assets/img/Mastercard.png',
    '/assets/img/Paypal.png',
    '/assets/img/ Pay.png',
    '/assets/img/G Pay.png',
  ];

  return (
    <footer className="bg-gray-100 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <div className="lg:col-span-2">
            <h2 className="font-integral text-3xl mb-4">shop.co</h2>
            <p className="text-gray-600 mb-6 md:w-3/4">
              We have clothes that suits your style and which you're proud to wear. From women to men.
            </p>
            <div className="flex gap-3">
              {socials.map((Social, index) => (
                <a
                  key={index}
                  href={Social.href}
                  className={`w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center ${Social.className || 'bg-white'}`}
                >
                  <Social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(links).map(([title, items]) => (
            <div key={title}>
              <h3 className="font-satoshi text-sm uppercase tracking-wider mb-4">{title}</h3>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-600 hover:text-black">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <hr className="border-gray-200 mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600">Shop.co © 2000-2023, All Rights Reserved</p>
          <div className="flex gap-3">
            {payments.map((payment, index) => (
              <div key={index} className="bg-white p-2 rounded">
                <img src={payment} alt="Payment method" className="h-6" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}