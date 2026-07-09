import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Competitions', path: '/competitions' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="fixed w-full z-50 glass rounded-none border-t-0 border-x-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="text-2xl font-bold text-gold tracking-wider">AME.</Link>
          
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {links.map((link) => (
                <Link key={link.name} to={link.path} className="hover:text-gold transition-colors px-3 py-2 rounded-md text-sm font-medium">
                  {link.name}
                </Link>
              ))}
              <Link to="/register" className="bg-gradient-to-r from-purple-600 to-orange-500 hover:opacity-90 text-white px-6 py-2 rounded-full font-bold transition-all">
                Register Now
              </Link>
            </div>
          </div>

          <div className="lg:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white hover:text-gold transition-colors">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <>
          <div 
            className="fixed inset-0 top-20 bg-black/80 backdrop-blur-sm z-40 lg:hidden"
            onClick={() => setIsOpen(false)}
          ></div>

          <div className="absolute top-20 left-0 w-full z-50 lg:hidden bg-[#1a1a1a] border-b border-white/10 shadow-2xl">
            <div className="px-6 py-2 flex flex-col divide-y divide-white/10">
              {links.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.path} 
                  onClick={() => setIsOpen(false)} 
                  className="py-5 text-base font-medium text-white hover:text-gold transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-6 pb-8">
                <Link 
                  to="/register" 
                  onClick={() => setIsOpen(false)} 
                  className="block w-full text-center bg-gradient-to-r from-purple-600 to-orange-500 text-white px-6 py-4 rounded-xl font-bold hover:opacity-90 transition-opacity shadow-lg"
                >
                  Register Now
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </nav>
  );
}