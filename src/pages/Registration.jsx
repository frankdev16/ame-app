import { useState } from 'react';

export default function Registration() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center px-4">
        <div className="glass p-12 text-center max-w-lg">
          <div className="w-20 h-20 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6 text-4xl">✓</div>
          <h2 className="text-3xl font-bold mb-4">Registration Successful!</h2>
          <p className="text-gray-400 mb-8">Thank you for registering with AME. We will review your application and contact you shortly.</p>
          <button onClick={() => setSubmitted(false)} className="bg-gold text-black px-8 py-3 rounded-full font-bold">Register Another</button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-20">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-4">Join The <span className="text-gradient">Competition</span></h1>
        <p className="text-gray-400">Fill out the form below to secure your spot. Registration fee is ₦3,000.</p>
      </div>

      <form onSubmit={handleSubmit} className="glass p-8 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium mb-2">First Name</label>
            <input required type="text" className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-gold" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Last Name</label>
            <input required type="text" className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-gold" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Email Address</label>
            <input required type="email" className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-gold" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Phone Number</label>
            <input required type="tel" className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-gold" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">State of Origin</label>
            <input required type="text" className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-gold" />
          </div>
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium mb-2">Age</label>
              <input required type="number" min="18" className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-gold" />
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium mb-2">Gender</label>
              <select className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-gold text-white">
                <option>Male</option>
                <option>Female</option>
              </select>
            </div>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Competition Category</label>
          <select className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-gold text-white">
            <option>Freestyle Music</option>
            <option>Eating Competition</option>
            <option>Drinking Competition</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Full Address</label>
          <textarea required rows="3" className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-gold"></textarea>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Upload Passport Photo</label>
          <input required type="file" accept="image/*" className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-gold text-sm file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-white/10 file:text-white hover:file:bg-white/20" />
        </div>

        <div className="flex items-center">
          <input required type="checkbox" id="terms" className="w-4 h-4 rounded bg-black/50 border-white/10 text-gold focus:ring-gold" />
          <label htmlFor="terms" className="ml-3 text-sm text-gray-400">I agree to the Terms & Conditions and confirm payment of the ₦3,000 fee.</label>
        </div>

        <button type="submit" className="w-full bg-gradient-to-r from-purple-600 to-orange-500 hover:opacity-90 text-white py-4 rounded-lg font-bold text-lg transition-opacity">
          Submit Application
        </button>
      </form>
    </div>
  );
}