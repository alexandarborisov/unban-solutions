import React from 'react';
import { Check, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

// Reusable card component for case handling pricing
const CasePriceCard = ({ plan, priceKey, priceTitle }) => (
  <div
    className={`bg-white rounded-2xl shadow-xl p-8 relative transition-all duration-300 hover:shadow-2xl ${
      plan.popular ? 'ring-2 ring-blue-500' : ''
    }`}
  >
    {plan.popular && (
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
          <Star className="h-4 w-4 mr-1" />
          Popular
        </span>
      </div>
    )}
    <div className="text-center mb-8">
      <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
      {/* Dynamic Price Display */}
      <div className="text-4xl font-bold text-blue-600 mb-2">{plan[priceKey]}</div>

      <p className="text-gray-600 mb-4">{plan.description}</p>
      
      <Link
        to="/contact/"
        className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200 inline-block w-full"
      >
        Contact us
      </Link>
    </div>
    {/* Features List */}
    <ul className="space-y-3 pt-4 border-t border-gray-100">
        {plan.features.map((feature, featureIndex) => (
          <li key={featureIndex} className="flex items-start text-sm">
            <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
            <span className="text-gray-600 text-left">{feature}</span>
          </li>
        ))}
      </ul>
  </div>
);

export default function Pricing() {
  // Refactored data structure to include separate prices for Light and Heavy cases
  const caseHandling = [
    {
      name: 'Individual',
      lightPrice: '€100',
      heavyPrice: '€170', // NEW PRICE
      description: 'Suitable for average users and small accounts',
      features: [
        'Post removal assistance',
        'Shadowban investigation',
        'IP claims handling',
        'Basic account recovery',
        '48-hour response time'
      ]
    },
    {
      name: 'Creator - Micro',
      lightPrice: '€170',
      heavyPrice: '€300', // NEW PRICE
      description: 'For influencers below 10k followers',
      features: [
        'Account deletion recovery',
        'Ad account suspension',
        'Monetization ban appeals',
        'Complex policy violations',
        'Priority 24-hour response',
        'Dedicated case manager'
      ],
      popular: true
    },
    {
      name: 'Creator - Macro',
      lightPrice: '€250',
      heavyPrice: '€500', // NEW PRICE
      description: 'For influencers above 10k followers',
      features: [
        'Post removal assistance (Advanced)',
        'Shadowban investigation (In-depth)',
        'IP claims handling (Complex)',
        'Advanced account recovery',
        '12-hour response time'
      ]
    },
    {
      name: 'Public Figures',
      lightPrice: '€250',
      heavyPrice: '€500', // NEW PRICE
      description: 'For high profile individuals.',
      features: [
        'Full service management',
        'Immediate crisis response (2 hours)',
        'Legal review coordination',
        'Proactive monitoring',
        'Dedicated senior counsel'
      ]
    }
  ];

  const auditsConsulting = [
    {
      name: 'Campaign Audit (10 posts)',
      price: '€100',
      features: ['10 posts analysis', 'Risk assessment', 'Recommendations report']
    },
    {
      name: 'Campaign Audit (20 posts)',
      price: '€150',
      features: ['20 posts analysis', 'Detailed risk assessment', 'Comprehensive recommendations']
    },
    {
      name: 'Preventive Content Audit',
      price: '€100',
      features: ['20 posts', 'Content safety review', 'Policy compliance check', 'Prevention strategies']
    },
    {
      name: 'Digital Prevention Product',
      price: '€80',
      features: ['Complete protection toolkit', 'Templates and checklists', 'Ongoing support']
    }
  ];

  // Note: Subscriptions array remains unchanged as the request only concerned Case Handling
  const subscriptions = [
    {
      name: 'Small Accounts',
      subtitle: '≤3,000 followers',
      monthly: 80,
      plans: [
        { duration: '1 month', price: 80, savings: 0 },
        { duration: '3 months', price: 340, savings: 240 - 340 },
        { duration: '6 months', price: 480, savings: 480 - 480 },
        { duration: '12 months', price: 720, savings: 960 - 720 }
      ],
      features: [
        'Monthly content review',
        'Risk assessment',
        'Prevention guidance',
        'Email support',
        'Resource library access'
      ]
    },
    {
      name: 'Large Accounts',
      subtitle: '≥3,000 followers',
      monthly: 150,
      plans: [
        { duration: '1 month', price: 150, savings: 0 },
        { duration: '3 months', price: 450, savings: 450 - 450 },
        { duration: '6 months', price: 720, savings: 900 - 720 },
        { duration: '12 months', price: 1200, savings: 1800 - 1200 }
      ],
      features: [
        'Priority content review',
        'Advanced risk assessment',
        'Personalized strategies',
        'Phone & email support',
        'Dedicated account manager',
        'Emergency response'
      ],
      popular: true
    }
  ];

  return (
    <div className="min-h-screen py-12 bg-gray-50 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            Transparent Pricing
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the right protection level for your digital presence with our flexible case handling and consultation options.
          </p>
        </div>

        {/* --- Light Case Pricing Section --- */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12 border-b-2 border-blue-500 pb-3 inline-block mx-auto">
            Light Case Handling (Standard Issues)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Renders card using lightPrice */}
            {caseHandling.map((plan, index) => (
              <CasePriceCard
                key={`light-${index}`}
                plan={plan}
                priceKey="lightPrice"
              />
            ))}
          </div>
        </section>

        {/* --- Heavy Case Pricing Section --- */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12 border-b-2 border-red-500 pb-3 inline-block mx-auto">
            Heavy Case Handling (Complex/Urgent Issues)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Renders card using heavyPrice */}
            {caseHandling.map((plan, index) => (
              <CasePriceCard
                key={`heavy-${index}`}
                plan={plan}
                priceKey="heavyPrice"
              />
            ))}
          </div>
        </section>


        {/* Audits & Consulting */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12 border-b-2 border-purple-500 pb-3 inline-block mx-auto">
            Audits & Consulting Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {auditsConsulting.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-xl p-6 transition-all duration-300 hover:shadow-2xl">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.name}</h3>
                <div className="text-3xl font-extrabold text-purple-600 mb-4">{service.price}</div>
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start text-base">
                      <Check className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>


        {/* Legal Services */}
        <section className="bg-gradient-to-br from-gray-800 to-blue-950 rounded-2xl p-12 text-white text-center shadow-2xl">
          <h2 className="text-3xl font-bold mb-6">Legal Services & Subscriptions</h2>
          <p className="text-xl mb-10 text-blue-200 max-w-4xl mx-auto">
            Professional legal consultation, representation, and monthly protection plans for ongoing peace of mind.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {subscriptions.map((sub, index) => (
                <div 
                    key={`sub-${index}`} 
                    className={`bg-white text-gray-900 rounded-2xl p-8 text-left shadow-xl transform transition-transform duration-300 hover:scale-[1.02] ${sub.popular ? 'ring-4 ring-yellow-400' : ''}`}
                >
                    {sub.popular && (
                      <span className="bg-yellow-400 text-gray-900 px-3 py-0.5 rounded-full text-sm font-bold absolute top-0 right-6 -translate-y-1/2">
                        BEST VALUE
                      </span>
                    )}
                    <h3 className="text-2xl font-bold mb-1">{sub.name}</h3>
                    <p className="text-gray-500 text-lg mb-4">{sub.subtitle}</p>
                    
                    <div className="flex items-baseline mb-6">
                        <span className="text-5xl font-extrabold text-indigo-600">€{sub.monthly}</span>
                        <span className="text-xl font-medium text-gray-500">/month</span>
                    </div>

                    <h4 className="font-semibold text-lg mb-3 border-b pb-2">Key Benefits:</h4>
                    <ul className="space-y-2">
                        {sub.features.map((feature, fIndex) => (
                            <li key={fIndex} className="flex items-start text-base">
                                <Check className="h-5 w-5 text-indigo-500 mr-3 flex-shrink-0 mt-0.5" />
                                <span className="text-gray-700">{feature}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
          </div>

          <p className="mt-8 text-blue-200 text-xl font-semibold">
            Contact us for custom legal service pricing and court representation quotes.
          </p>
        </section>
      </div>
    </div>
  );
}
