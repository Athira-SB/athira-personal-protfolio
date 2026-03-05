import { useTheme } from '../context/ThemeContext';

const Footer = () => {
  const { isDark } = useTheme();
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Case Studies', href: '#case-studies' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className={`transition-all duration-300 ${
      isDark ? 'bg-slate-950 border-t border-slate-800' : 'bg-slate-900 border-t border-slate-800'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-3">
              <span style={{ color: `rgb(var(--color-primary))` }}>Athira</span> SB
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Digital Marketing Specialist driving business growth through data-driven strategies and innovative solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-slate-400 transition-all duration-300 hover:text-white hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold mb-4">Services</h4>
            <ul className="space-y-2">
              {[
                'SEO & Organic Growth',
                'Paid Advertising',
                'Social Media Marketing',
                'Content Marketing',
                'Email Marketing'
              ].map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-slate-400 text-sm transition-all duration-300 hover:text-white"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 my-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-sm">
            © {currentYear} Athira SB. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex gap-4">
            {[
              { icon: '📘', link: 'https://facebook.com', label: 'Facebook' },
              { icon: '📺', link: 'https://youtube.com', label: 'YouTube' },
              { icon: '📸', link: 'https://instagram.com', label: 'Instagram' },
            ].map((social, index) => (
              <a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-10 h-10 rounded-full flex items-center justify-center text-lg transition-all duration-300 hover:scale-110 ${
                  isDark ? 'bg-slate-900 hover:bg-slate-800' : 'bg-slate-800 hover:bg-slate-700'
                }`}
                style={{
                  borderBottom: `2px solid rgb(var(--color-primary))`
                }}
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* Back to Top */}
          <a
            href="#home"
            className={`flex items-center gap-1 text-slate-400 transition-all duration-300 hover:text-white group`}
          >
            <span>Back to Top</span>
            <svg className="w-4 h-4 transition-transform duration-300 group-hover:-translate-y-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
