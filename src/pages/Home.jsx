import { Link } from 'react-router-dom';
import { Users, Trophy, Star } from 'lucide-react';

export default function Home() {
  return (
    <div className="animate-fade-in">
      <section className="relative h-[90vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img src="https://placehold.co/1920x1080/1a1a1a/333333?text=Music+Festival+Vibe" alt="Hero Background" className="w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
            Discover. Compete. <span className="text-gradient">Shine.</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-10">
            Join Nigeria's premier entertainment platform. Showcase your talent to the world and win amazing prizes.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link to="/register" className="w-full sm:w-auto bg-gradient-to-r from-purple-600 to-orange-500 hover:scale-105 transition-transform text-white px-8 py-4 rounded-full font-bold text-lg">
              Register Now
            </Link>
            <Link to="/about" className="w-full sm:w-auto glass hover:bg-white/20 transition-colors text-white px-8 py-4 rounded-full font-bold text-lg">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-darkGray">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: <Users size={40} className="text-purple-500" />, count: "5,000+", label: "Contestants" },
            { icon: <Trophy size={40} className="text-gold" />, count: "₦10M+", label: "Prize Pool" },
            { icon: <Star size={40} className="text-orange-500" />, count: "3", label: "Categories" },
          ].map((stat, idx) => (
            <div key={idx} className="glass p-8 text-center hover:-translate-y-2 transition-transform duration-300">
              <div className="flex justify-center mb-4">{stat.icon}</div>
              <h3 className="text-4xl font-bold mb-2">{stat.count}</h3>
              <p className="text-gray-400 uppercase tracking-widest text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}