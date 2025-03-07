import { Apple, Google, Master, PayPal, Visa } from '../../../assets/img/payment/index.';
import {Twitter, Facebook, Instagram, GitHub} from '../../../assets/img/medias/index';


export function Footer() {
  const socials = [
    { icon: Twitter, href: '#' },
    { icon: Facebook, href: '#', className: 'bg-black text-white' },
    { icon: Instagram, href: '#' },
    { icon: GitHub, href: '#' },
  ];

  const links = {
    Company: ['About', 'Features', 'Works', 'Career'],
    FAQ: ['Account', 'Manage Deliveries', 'Orders', 'Payment'],
  };

  const listLinks = {
    Help: ['Customer Support', 'Delivery Details', 'Terms & Conditions', 'Privacy Policy'],
    Resources: ['Free eBook', 'Development Tutorial', 'How to - Blog', 'Youtube Playlist'],
  }

  const payments = [
    <Visa className="h-6" />,
    <Master className="h-6" />,
    <PayPal className="h-6" />,
    <Apple className="h-6" />,
    <Google className="h-6" />
  ];

  return (
    <footer className="bg-bg-footer pt pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <div className="lg:col-span-2">
            <h2 className="font-integral-cf text-3xl mb-4">shop.co</h2>
            <p className="text-gray-600 font-satoshi-regular mb-6 md:w-3/4">
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

          <div className='flex justify-between'>    
            <div className=''>
              {Object.entries(links).map(([title, items]) => (
                <div key={title}>
                  <h3 className="font-satoshi text-sm uppercase tracking-wider mb-4">{title}</h3>
                  <ul className="space-y-3 pb-7 ">
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
            <div className='mb-4'>
              {Object.entries(listLinks).map(([title, items]) => (
                <div key={title}>
                  <h3 className="font-satoshi text-sm uppercase tracking-wider mb-4">{title}</h3>
                  <ul className="space-y-3 pb-7">
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
          </div>
        </div>

        <hr className="#F0F0F0 mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
          <p className="text-gray-600 font-satoshi-regular">Shop.co © 2000-2024, All Rights Reserved</p>
          <div className="flex gap-3">
            {payments.map((PaymentIcon, index) => (
              <div key={index} className="bg-white p-2 rounded">
                {PaymentIcon}
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}