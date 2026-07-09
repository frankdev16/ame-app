import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-20">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-16">Get In <span className="text-gradient">Touch</span></h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div className="glass p-8">
            <h2 className="text-2xl font-bold mb-6 text-gold">Contact Information</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="text-purple-500 mt-1" />
                <div>
                  <h4 className="font-bold">Address</h4>
                  <p className="text-gray-400">123 Entertainment Blvd, Victoria Island, Lagos, Nigeria</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="text-orange-500 mt-1" />
                <div>
                  <h4 className="font-bold">Phone</h4>
                  <p className="text-gray-400">+234 800 123 4567</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="text-purple-500 mt-1" />
                <div>
                  <h4 className="font-bold">Email</h4>
                  <p className="text-gray-400">info@angelmusic.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="text-orange-500 mt-1" />
                <div>
                  <h4 className="font-bold">Working Hours</h4>
                  <p className="text-gray-400">Mon - Sat: 9:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          <div className="glass h-64 rounded-2xl overflow-hidden flex items-center justify-center relative">
            <img src="https://placehold.co/800x400/111111/444444?text=Google+Maps+Placeholder" alt="Map" className="absolute inset-0 w-full h-full object-cover" />
          </div>
        </div>

        <form className="glass p-8 space-y-6" onSubmit={(e) => e.preventDefault()}>
          <h2 className="text-2xl font-bold mb-6 text-gold">Send us a Message</h2>
          <div>
            <label className="block text-sm font-medium mb-2">Your Name</label>
            <input type="text" className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-gold" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Email Address</label>
            <input type="email" className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-gold" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Message</label>
            <textarea rows="6" className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-gold"></textarea>
          </div>
          <button className="w-full bg-gold hover:bg-yellow-400 text-black py-4 rounded-lg font-bold text-lg transition-colors">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}