export default function About() {
  const partners = [
    "Top Nation Troops (TNT)",
    "Fun and Fashion TV Sauce Modeling Agency",
    "Smile Lounge",
    "Praise Hood TV",
    "Lagos City Music",
    "Ebrython Blog/TV"
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-20">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">About <span className="text-gradient">AME</span></h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          Angel Music Entertainment is a unique organization created to discover, promote and motivate talented individuals across Nigeria and beyond.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
        <div className="glass p-8">
          <h2 className="text-2xl font-bold text-gold mb-4">Our Mission</h2>
          <p className="text-gray-300 leading-relaxed">
            To provide a world-class platform where raw talent meets unparalleled opportunity. We strive to nurture creativity and transform everyday individuals into global superstars through fair competition and premium exposure.
          </p>
        </div>
        <div className="glass p-8">
          <h2 className="text-2xl font-bold text-gold mb-4">Our Vision</h2>
          <p className="text-gray-300 leading-relaxed">
            To become the leading entertainment hub in Africa, recognized globally for authentic talent discovery, high-quality production, and youth empowerment.
          </p>
        </div>
      </div>

      <div className="mb-20">
        <h2 className="text-3xl font-bold text-center mb-10">Our Trusted Partners</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {partners.map((partner, idx) => (
            <div key={idx} className="glass px-6 py-4 text-center w-full md:w-auto flex-grow max-w-xs hover:border-gold transition-colors">
              <p className="font-semibold">{partner}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}