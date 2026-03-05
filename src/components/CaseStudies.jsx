import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import WebDesign from '../assets/images/Web Design.png'
import Blogging from '../assets/images/Blogging.png'
import Poster1 from '../assets/images/Poster .png'
import Poster2 from '../assets/images/Poster 2.png'
import Poster3 from '../assets/images/Poster 3.png'
const CaseStudies = () => {
  const { isDark } = useTheme();
  const [selectedPoster, setSelectedPoster] = useState(null);

  const caseStudies = [
    {
      id: 1,
      title: 'Planet Beauty Salon',
      description: 'Planet Beauty Salon is a modern and elegant website design created to reflect beauty, confidence, and self-care.',
      image: WebDesign,
      link: 'https://planetbeauty.wuaze.com/',
      category: 'Web Design'
    },
    {
      id: 2,
      title: 'Blogging',
      description: 'A modern and visually appealing blog design created for Planet Beauty Salon.',
      image: Blogging,
      link: 'https://example.com/blog',
      category: 'Content'
    },
  ];

  const posterGallery = [
    {
      id: 1,
      title: 'Poster 1',
      image: Poster1,
    },
    {
      id: 2,
      title: 'Poster 2',
      image: Poster2,
    },
    {
      id: 3,
      title: 'Poster 3',
      image: Poster3,
    },
  ];

  return (
    <>
      {/* Case Studies Section */}
      <section 
        id="case-studies"
        className={`py-20 px-4 sm:px-6 lg:px-8 transition-all duration-300 ${
          isDark ? 'bg-slate-900' : 'bg-slate-50'
        }`}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-4xl font-bold mb-12 text-center transition-all duration-300 ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            Case <span style={{ color: `rgb(var(--color-primary))` }}>Studies</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <a
                key={study.id}
                href={study.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`group rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl animate-fade-in ${
                  isDark ? 'bg-slate-800' : 'bg-white'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-all duration-300"
                    style={{ backgroundColor: `rgb(var(--color-primary))` }}
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span 
                      className="px-3 py-1 rounded-full text-xs font-semibold text-white"
                      style={{ backgroundColor: `rgb(var(--color-primary))` }}
                    >
                      {study.category}
                    </span>
                  </div>
                  <h3 className={`text-xl font-bold mb-2 transition-all duration-300 ${
                    isDark ? 'text-white group-hover:text-blue-400' : 'text-slate-900 group-hover:text-blue-600'
                  }`}>
                    {study.title}
                  </h3>
                  <p className={`text-sm transition-all duration-300 ${
                    isDark ? 'text-slate-400' : 'text-slate-600'
                  }`}>
                    {study.description}
                  </p>

                  {/* Link Arrow */}
                  <div className="mt-4 flex items-center gap-2 font-semibold"
                    style={{ color: `rgb(var(--color-primary))` }}>
                    <span>View Project</span>
                    <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Poster Gallery Section */}
      <section 
        id="poster-gallery"
        className={`py-20 px-4 sm:px-6 lg:px-8 transition-all duration-300 ${
          isDark ? 'bg-slate-800' : 'bg-white'
        }`}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-4xl font-bold mb-12 text-center transition-all duration-300 ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            Poster <span style={{ color: `rgb(var(--color-primary))` }}>Design</span> Gallery
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {posterGallery.map((poster, index) => (
              <div
                key={poster.id}
                onClick={() => setSelectedPoster(poster)}
                className={`group cursor-pointer rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl animate-fade-in ${
                  isDark ? 'bg-slate-700' : 'bg-slate-50'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Image Container */}
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={poster.image}
                    alt={poster.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-all duration-300"
                    style={{ backgroundColor: `rgb(var(--color-primary))` }}
                  />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                    <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                    </svg>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className={`text-lg font-bold transition-all duration-300 ${
                    isDark ? 'text-white group-hover:text-blue-400' : 'text-slate-900 group-hover:text-blue-600'
                  }`}>
                    {poster.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fullscreen Poster Modal */}
      {selectedPoster && (
        <div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setSelectedPoster(null)}
        >
          <div 
            className="relative max-w-4xl max-h-[90vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedPoster(null)}
              className="absolute -top-10 right-0 text-white hover:text-gray-300 transition-colors"
              aria-label="Close image"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Image */}
            <img
              src={selectedPoster.image}
              alt={selectedPoster.title}
              className="w-full h-full object-contain rounded-lg"
            />

            {/* Title Below */}
            <div className="text-center mt-4">
              <h3 className="text-white text-xl font-bold">
                {selectedPoster.title}
              </h3>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CaseStudies;
