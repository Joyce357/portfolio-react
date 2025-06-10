import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState(null);

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setStatus('sending');

    try {
      const res = await fetch('http://localhost:3000/send-message', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
    }

    setTimeout(() => setStatus(null), 5000);
  };

  return (
    <section className="page-content container mx-auto px-4">
      <div className="content-section text-center">
        <h2 className="section-title text-espresso text-3xl font-serif mb-6">Get In Touch</h2>
        <p className="text-[#5D4037] mb-10 max-w-xl mx-auto">
          I'm always open to new collaborations or freelance opportunities. Let’s bring your ideas to life.
        </p>

        <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-6">
          <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="Your Name"
            className="w-full px-4 py-3 border-2 border-[#d4c4b080] rounded-md bg-white text-[#3C2415] font-serif" />

          <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="Your Email"
            className="w-full px-4 py-3 border-2 border-[#d4c4b080] rounded-md bg-white text-[#3C2415] font-serif" />

          <input type="text" name="subject" value={formData.subject} onChange={handleChange} required placeholder="Subject"
            className="w-full px-4 py-3 border-2 border-[#d4c4b080] rounded-md bg-white text-[#3C2415] font-serif" />

          <textarea name="message" value={formData.message} onChange={handleChange} required placeholder="Your Message" rows="5"
            className="w-full px-4 py-3 border-2 border-[#d4c4b080] rounded-md bg-white text-[#3C2415] font-serif"></textarea>

          <button type="submit" className="submit-btn w-full py-3 bg-gradient-to-br from-espresso to-[#A0522D] text-white rounded-full font-bold uppercase tracking-wide shadow-md hover:scale-[1.02] transition-all">
            {status === 'sending' ? 'Sending...' : 'Send Message'}
          </button>

          {status === 'success' && <p className="text-green-700 mt-4">✅ Message sent successfully!</p>}
          {status === 'error' && <p className="text-red-600 mt-4">⚠️ Something went wrong. Try again.</p>}
        </form>
      </div>
    </section>
  );
};

export default Contact;
