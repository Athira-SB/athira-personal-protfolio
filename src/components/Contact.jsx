import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import mail from '../assets/images/mail.png';
import website from '../assets/images/website.png';
import linkedin from '../assets/images/linkedinLogo.png';
import facebook from '../assets/images/fb.png';
import youtube from '../assets/images/YT.png';
import instagram from '../assets/images/insta.png';
const Contact = () => {
  const { isDark } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setSubmitted(false), 3000);
  };

  const contactInfo = [
    { label: 'Mail', value: 'athirasb2026@gmail.com', icon: mail, href: 'mailto:athirasb2026@gmail.com' },
    { label: 'Website', value: 'https://athira-sb-personal-portfolio.vercel.app/', icon: website, href: 'https://athira-sb-personal-portfolio.vercel.app/' },
    { label: 'LinkedIn', value: 'https://www.linkedin.com/in/athirasb/', icon: linkedin, href: 'https://www.linkedin.com/in/athirasb/' },
  ];

  return (
    <section 
      id="contact"
      className={`py-20 px-4 sm:px-6 lg:px-8 transition-all duration-300 ${
        isDark ? 'bg-slate-950' : 'bg-white'
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className={`text-4xl font-bold mb-4 text-center transition-all duration-300 ${
          isDark ? 'text-white' : 'text-slate-900'
        }`}>
          Let's <span style={{ color: `rgb(var(--color-primary))` }}>Connect</span>
        </h2>

        <p className={`text-lg text-center mb-12 transition-all duration-300 ${
          isDark ? 'text-slate-300' : 'text-slate-700'
        }`}>
          If you're looking to scale your brand, generate quality leads, or improve your digital marketing performance, let's work together.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <h3 className={`text-2xl font-bold mb-6 transition-all duration-300 ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}>
              Get in Touch
            </h3>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  className={`flex items-start gap-4 p-4 rounded-lg transition-all duration-300 hover:shadow-lg transform hover:scale-105 ${
                    isDark ? 'hover:bg-slate-900' : 'hover:bg-slate-100'
                  }`}
                >
                  {/* <div className="text-4xl">{info.icon}</div> */}
                  <img src={info.icon} alt={info.label} className="w-10 h-10 object-contain" />
                  <div>
                    <p className={`font-semibold transition-all duration-300 ${
                      isDark ? 'text-white' : 'text-slate-900'
                    }`}>
                      {info.label}
                    </p>
                    <p className={`transition-all duration-300 ${
                      isDark ? 'text-slate-400' : 'text-slate-600'
                    }`}>
                      {info.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className={`font-bold mb-4 transition-all duration-300 ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}>
                Follow Me
              </h4>
              <div className="flex gap-4">
                {[
                  { name: 'Facebook', icon: facebook, link: 'https://www.facebook.com/profile.php?id=61583965953306' },
                  { name: 'YouTube', icon: youtube, link: 'https://www.youtube.com/@PlanetBeautySalon-b1u' },
                  { name: 'Instagram', icon: instagram, link: 'https://www.instagram.com/planetbeautysalon/?hl=en' },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 rounded-full flex items-center justify-center text-2xl transition-all duration-300 transform hover:scale-110 ${
                      isDark ? 'bg-slate-900 hover:bg-slate-800' : 'bg-slate-200 hover:bg-slate-300'
                    }`}
                    aria-label={social.name}
                  >
                    <img src={social.icon} alt={social.name} className="w-8 h-8 object-contain" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className={`block text-sm font-semibold mb-2 transition-all duration-300 ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}>
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className={`w-full px-4 py-3 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 ${
                  isDark
                    ? 'bg-slate-900 text-white focus:ring-offset-slate-950'
                    : 'bg-slate-100 text-slate-900 focus:ring-offset-white'
                }`}
                style={{ focusRingColor: `rgba(var(--color-primary), 0.5)` }}
                placeholder="Your Name"
              />
            </div>

            <div>
              <label htmlFor="email" className={`block text-sm font-semibold mb-2 transition-all duration-300 ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}>
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className={`w-full px-4 py-3 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 ${
                  isDark
                    ? 'bg-slate-900 text-white focus:ring-offset-slate-950'
                    : 'bg-slate-100 text-slate-900 focus:ring-offset-white'
                }`}
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label htmlFor="subject" className={`block text-sm font-semibold mb-2 transition-all duration-300 ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}>
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className={`w-full px-4 py-3 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 ${
                  isDark
                    ? 'bg-slate-900 text-white focus:ring-offset-slate-950'
                    : 'bg-slate-100 text-slate-900 focus:ring-offset-white'
                }`}
                placeholder="Project Inquiry"
              />
            </div>

            <div>
              <label htmlFor="message" className={`block text-sm font-semibold mb-2 transition-all duration-300 ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}>
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className={`w-full px-4 py-3 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 resize-none ${
                  isDark
                    ? 'bg-slate-900 text-white focus:ring-offset-slate-950'
                    : 'bg-slate-100 text-slate-900 focus:ring-offset-white'
                }`}
                placeholder="Tell me about your project..."
              />
            </div>

            <button
              type="submit"
              className="w-full px-8 py-3 rounded-lg font-semibold text-white transition-all duration-300 hover:shadow-lg hover:scale-105"
              style={{ backgroundColor: `rgb(var(--color-primary))` }}
            >
              Send Message
            </button>

            {submitted && (
              <div className={`p-4 rounded-lg text-center transition-all duration-300 ${
                isDark ? 'bg-green-900/30 text-green-300' : 'bg-green-100 text-green-800'
              }`}>
                ✓ Message sent successfully! I'll get back to you soon.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
