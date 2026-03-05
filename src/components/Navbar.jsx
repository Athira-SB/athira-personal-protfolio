import { useState } from 'react';
import ThemeSwitcher from './ThemeSwitcher';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const { isDark } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Case Studies', href: '#case-studies' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-40 w-full transition-all duration-300 backdrop-blur-md animate-slide-down ${
      isDark ? 'bg-slate-950/80 border-b border-slate-800' : 'bg-white/80 border-b border-slate-200'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#home" className="text-2xl font-bold transition-all duration-300">
              <span style={{ color: `rgb(var(--color-primary))` }}>Athira</span>
              <span className={isDark ? 'text-white' : 'text-slate-900'}> SB</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`font-medium transition-all duration-300 hover:opacity-70 ${
                  isDark ? 'text-white' : 'text-slate-900'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Theme Switcher & Mobile Menu */}
          <div className="flex items-center gap-4">
            <ThemeSwitcher />
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg"
              style={{
                backgroundColor: mobileMenuOpen ? `rgba(var(--color-primary), 0.2)` : 'transparent'
              }}
              aria-label="Toggle mobile menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={
                  mobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'
                } />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className={`md:hidden pb-4 ${isDark ? 'bg-slate-900' : 'bg-slate-50'}`}>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`block px-4 py-2 font-medium transition-all duration-300 hover:bg-opacity-50 ${
                  isDark ? 'text-white hover:bg-slate-800' : 'text-slate-900 hover:bg-slate-100'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
