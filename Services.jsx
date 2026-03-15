import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';

const Services = () => {
  const { isDark } = useTheme();
  const [expandedService, setExpandedService] = useState(null);

  const services = [
    {
      id: 1,
      title: 'Search Engine Optimization (SEO)',
      icon: '🔍',
      features: [
        'Keyword research & competitor analysis',
        'On-page & technical SEO',
        'Link-building strategies',
        'SEO audits',
        'Content optimization'
      ]
    },
    {
      id: 2,
      title: 'Paid Advertising (PPC)',
      icon: '💰',
      features: [
        'Google Ads & Meta Ads campaign setup',
        'A/B testing & optimization',
        'Funnel strategy',
        'Retargeting campaigns',
        'Budget optimization'
      ]
    },
    {
      id: 3,
      title: 'Social Media Marketing',
      icon: '📱',
      features: [
        'Strategy development',
        'Content planning & scheduling',
        'Community management',
        'Influencer collaboration',
        'Analytics & reporting'
      ]
    },
    {
      id: 4,
      title: 'Content Marketing',
      icon: '✍️',
      features: [
        'Blog strategy',
        'SEO-driven content',
        'Lead magnets',
        'Website copywriting',
        'Landing page optimization'
      ]
    },
    {
      id: 5,
      title: 'Email Marketing',
      icon: '📧',
      features: [
        'Email automation',
        'Newsletter campaigns',
        'Funnel building',
        'CRM integration',
        'Performance tracking'
      ]
    },
  ];

  return (
    <section 
      id="services"
      className={`py-20 px-4 sm:px-6 lg:px-8 transition-all duration-300 ${
        isDark ? 'bg-slate-900' : 'bg-slate-50'
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className={`text-4xl font-bold mb-12 text-center transition-all duration-300 ${
          isDark ? 'text-white' : 'text-slate-900'
        }`}>
          Services I <span style={{ color: `rgb(var(--color-primary))` }}>Offer</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.id}
              onClick={() => setExpandedService(expandedService === service.id ? null : service.id)}
              className={`p-6 rounded-xl transition-all duration-300 cursor-pointer hover:shadow-xl transform hover:scale-105 animate-zoom-in ${
                isDark ? 'bg-slate-800 hover:bg-slate-700' : 'bg-white hover:bg-slate-100'
              }`}
              style={{
                animationDelay: `${index * 0.1}s`,
                border: expandedService === service.id ? `2px solid rgb(var(--color-primary))` : '2px solid transparent'
              }}
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className={`text-xl font-bold mb-4 transition-all duration-300 ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}>
                {service.title}
              </h3>

              {expandedService === service.id && (
                <ul className={`space-y-2 text-sm transition-all duration-300 ${
                  isDark ? 'text-slate-300' : 'text-slate-700'
                }`}>
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2">
                      <span style={{ color: `rgb(var(--color-primary))` }}>✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className={`text-lg transition-all duration-300 mb-6 ${
            isDark ? 'text-slate-300' : 'text-slate-700'
          }`}>
            Each service is customized to your specific needs and goals
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-3 rounded-lg font-semibold text-white transition-all duration-300 hover:shadow-lg hover:scale-105"
            style={{ backgroundColor: `rgb(var(--color-primary))` }}
          >
            Discuss Your Project
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
