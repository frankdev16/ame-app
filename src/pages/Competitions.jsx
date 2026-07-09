import { Link } from 'react-router-dom';

export default function Competitions() {
  const competitions = [
    {
      title: "Freestyle Music",
      desc: "Spit fire bars or showcase your vocal range. The stage is yours.",
      img: "https://placehold.co/600x400/2a2a2a/ffffff?text=Music+Competition",
      color: "from-purple-600 to-blue-500"
    },
    {
      title: "Eating Competition",
      desc: "Think you have the biggest appetite? Compete against the best.",
      img: "https://placehold.co/600x400/2a2a2a/ffffff?text=Eating+Competition",
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Drinking Competition",
      desc: "Speed and capacity combined. A thrilling test of endurance.",
      img: "https://placehold.co/600x400/2a2a2a/ffffff?text=Drinking+Competition",
      color: "from-green-500 to-teal-500"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-20">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">Our <span className="text-gradient">Competitions</span></h1>
      <p className="text-center text-gray-400 mb-16">Registration Fee: <span className="text-gold font-bold text-xl">₦3,000</span> | Winner receives: <span className="text-gold font-bold text-xl">Cash Prize</span></p>

      {/* Grid updated here for phone, tablet, and desktop */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {competitions.map((comp, idx) => (
          <div key={idx} className="glass overflow-hidden group hover:-translate-y-2 transition-all duration-300">
            <div className="relative h-48 overflow-hidden">
              <img src={comp.img} alt={comp.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className={`absolute top-0 right-0 m-4 px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r ${comp.color}`}>Live</div>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">{comp.title}</h3>
              <p className="text-gray-400 mb-6">{comp.desc}</p>
              <div className="flex gap-4">
                <Link to="/register" className={`flex-1 text-center py-2 rounded-lg font-bold bg-gradient-to-r ${comp.color} hover:opacity-90 transition-opacity`}>
                  Register
                </Link>
                <button className="flex-1 border border-white/20 hover:bg-white/10 py-2 rounded-lg font-bold transition-colors">
                  Rules
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}