import { useTheme } from '../context/ThemeContext';
import { useState } from 'react';

const ThemeSwitcher = () => {
  const { isDark, toggleDarkMode, colorTheme, setTheme } = useTheme();
  const [showThemeMenu, setShowThemeMenu] = useState(false);

  const themes = [
    { name: 'blue', label: 'Blue' },
    { name: 'purple', label: 'Purple' },
    { name: 'green', label: 'Green' },
    { name: 'orange', label: 'Orange' },
    { name: 'pink', label: 'Pink' },
  ];

  return (
    <div className="flex items-center gap-2">
      {/* Dark Mode Toggle */}
      <button
        onClick={toggleDarkMode}
        className="p-2 rounded-lg transition-all duration-300 hover:shadow-md"
        style={{ 
          backgroundColor: isDark ? 'rgba(var(--color-primary), 0.2)' : 'rgba(var(--color-primary), 0.1)',
        }}
        aria-label="Toggle dark mode"
      >
        {isDark ? (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 3a1 1 0 011 1v1a1 1 0 11-2 0V4a1 1 0 011-1zM4.217 4.217a1 1 0 011.414 0l.707.707a1 1 0 11-1.414 1.414l-.707-.707a1 1 0 010-1.414zm11.566 0a1 1 0 010 1.414l-.707.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM4 10a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zm12 0a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM4.217 15.783a1 1 0 010-1.414l.707-.707a1 1 0 011.414 1.414l-.707.707a1 1 0 01-1.414 0zm11.566 0a1 1 0 011.414-1.414l.707.707a1 1 0 11-1.414 1.414l-.707-.707zM10 17a1 1 0 011-1h1a1 1 0 110 2h-1a1 1 0 01-1-1z" />
          </svg>
        ) : (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
          </svg>
        )}
      </button>

      {/* Theme Switcher Dropdown */}
      <div className="relative">
        <button
          onClick={() => setShowThemeMenu(!showThemeMenu)}
          className="px-4 py-2 rounded-lg font-semibold transition-all duration-300 text-white hover:shadow-md"
          style={{ backgroundColor: `rgb(var(--color-primary))` }}
          aria-label="Open theme selector"
        >
          Theme
        </button>

        {showThemeMenu && (
          <div className="absolute right-0 mt-2 w-40 rounded-lg shadow-xl z-50 backdrop-blur-sm"
            style={{
              backgroundColor: isDark ? 'rgba(30, 30, 30, 0.95)' : 'rgba(255, 255, 255, 0.95)',
              border: `1px solid rgba(var(--color-primary), 0.2)`
            }}
          >
            {themes.map((theme) => (
              <button
                key={theme.name}
                onClick={() => {
                  setTheme(theme.name);
                  setShowThemeMenu(false);
                }}
                className={`w-full text-left px-4 py-3 hover:bg-opacity-80 transition-all duration-200 flex items-center gap-2 ${
                  colorTheme === theme.name ? 'font-bold' : ''
                }`}
                style={{
                  backgroundColor: colorTheme === theme.name ? `rgba(var(--color-primary), 0.2)` : 'transparent',
                  color: isDark ? '#fff' : '#000'
                }}
              >
                <span
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: `rgb(var(--color-primary))` }}
                />
                {theme.label}
                {colorTheme === theme.name && ' ✓'}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ThemeSwitcher;
