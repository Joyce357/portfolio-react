import React from 'react';

const About = () => {
  return (
    <section className="page-content container mx-auto px-4">
      <div className="content-section">
        <h2 className="section-title text-3xl text-center font-serif text-espresso mb-6">About Me</h2>
        <div className="grid md:grid-cols-3 gap-10 items-center">
          <div className="profile-img mx-auto w-[280px] h-[280px] rounded-full overflow-hidden border-[6px] border-cream shadow-xl" data-aos="zoom-in" data-aos-delay="200">
            <img src="/images/IMG-20250103-WA0004.jpg" alt="Joy Christopher" className="w-full h-full object-cover" />
          </div>
          <div className="md:col-span-2 space-y-5 text-[#5D4037]">
            <p>
              I'm a passionate developer with <span className="font-bold text-espresso">5+ years</span> of expertise in modern web technologies. I love creating beautiful, functional applications that solve real-world problems with care and craftsmanship.
            </p>
            <p>
              I specialize in JavaScript, React, Node.js, Python, and more. Always eager to learn, I thrive on building scalable, elegant solutions.
            </p>
            <p>
              Outside coding, I enjoy reading tech blogs, exploring new ideas, and working on side projects that spark creativity and innovation.
            </p>

            <h3 className="text-espresso mt-10 mb-3 font-serif text-xl">Skills & Technologies</h3>
            <div className="flex flex-wrap gap-3" data-aos="fade-up" data-aos-delay="500">
              {['JavaScript', 'React', 'Node.js', 'Python', 'MongoDB', 'Vue.js'].map(skill => (
                <span key={skill} className="bg-[#8b45131a] text-espresso px-4 py-1 rounded-full text-sm">{skill}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
