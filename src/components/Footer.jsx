import { Link } from 'react-router-dom';
import { Globe, MessageCircle, Camera, Play } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-darkGray pt-12 pb-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold text-gold mb-4">AME.</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Discover. Compete. Shine. Angel Music Entertainment is your premier platform for showcasing talent across Nigeria and beyond.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link to="/about" className="hover:text-gold transition-colors">About Us</Link></li>
              <li><Link to="/competitions" className="hover:text-gold transition-colors">Competitions</Link></li>
              <li><Link to="/gallery" className="hover:text-gold transition-colors">Gallery</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Contact</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>123 Entertainment Blvd, Lagos</li>
              <li>info@angelmusic.com</li>
              <li>+234 800 123 4567</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-gold transition-colors"><Globe size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-gold transition-colors"><MessageCircle size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-gold transition-colors"><Camera size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-gold transition-colors"><Play size={20} /></a>
            </div>
          </div>
        </div>
        <div className="text-center text-gray-500 text-sm border-t border-white/10 pt-8">
          © {new Date().getFullYear()} Angel Music Entertainment. All rights reserved.
        </div>
      </div>
    </footer>
  );
}