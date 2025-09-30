import React from 'react';
import { Check, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Pricing() {
  const caseHandling = [
    {
      name: 'Individual',
      price: '€100',
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
      price: '€170',
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
      price: '€250',
      description: 'For influencers above 10k followers',
      features: [
        'Post removal assistance',
        'Shadowban investigation',
        'IP claims handling',
        'Basic account recovery',
        '48-hour response time'
      ]
    },
    {
      name: 'Public Figures',
      price: '€250',
      description: 'For high profile individuals.',
      features: [
        'Post removal assistance',
        'Shadowban investigation',
        'IP claims handling',
        'Basic account recovery',
        '48-hour response time'
      ]
    }
  ];

  const auditsConsulting = [
    {
      name: 'Campaign Audit (10 posts)',
      price: '€150',
      features: ['10 posts analysis', 'Risk assessment', 'Recommendations report']
    },
    {
      name: 'Campaign Audit (20 posts)',
      price: '€200',
      features: ['20 posts analysis', 'Detailed risk assessment', 'Comprehensive recommendations']
    },
    {
      name: 'Preventive Content Audit',
      price: '€100',
      features: ['Content safety review', 'Policy compliance check', 'Prevention strategies']
    },
    {
      name: 'Digital Prevention Product',
      price: '€250',
      features: ['Complete protection toolkit', 'Templates and checklists', 'Ongoing support']
    }
  ];

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
    <div className="min-h-screen py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Transparent Pricing</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the right protection level for your digital presence with our flexible pricing optionss
          </p>
        </div>

        {/* Case Handling Pricing */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Light Case</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {caseHandling.map((plan, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl shadow-xl p-8 relative ${
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
                <div className="text-4xl font-bold text-blue-600 mb-2">{plan.price}</div>
                
                {/* Add mb-4 (margin-bottom) to the paragraph */}
                <p className="text-gray-600 mb-4">{plan.description}</p> 
                
                <Link
                  to="/contact/"
                  className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200"
                >
                  Contact us
                </Link>
              </div>
              </div>
            ))}
          </div>
        </section>

                {/* Case Handling Pricing */}
                <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Heavy Case
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {caseHandling.map((plan, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl shadow-xl p-8 relative ${
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
                  <div className="text-4xl font-bold text-blue-600 mb-2">{plan.price}</div>
                  <p className="text-gray-600">{plan.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>


        {/* Audits & Consulting */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Audits & Consulting</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {auditsConsulting.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.name}</h3>
                <div className="text-3xl font-bold text-purple-600 mb-4">{service.price}</div>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm">
                      <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>


        {/* Legal Services */}
        <section className="bg-gradient-to-r from-gray-900 to-blue-900 rounded-2xl p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-6">Legal Services</h2>
          <p className="text-xl mb-8">
            Professional legal consultation and representation services
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-sm">
            <div className="bg-white bg-opacity-10 rounded-lg p-4">
              <h4 className="font-semibold mb-2">Legal Consultation</h4>
              <p>1-hour expert session</p>
            </div>
            <div className="bg-white bg-opacity-10 rounded-lg p-4">
              <h4 className="font-semibold mb-2">Contract Review</h4>
              <p>Brand-deal analysis</p>
            </div>
            <div className="bg-white bg-opacity-10 rounded-lg p-4">
              <h4 className="font-semibold mb-2">Court Representation</h4>
              <p>Up to 2 hearings</p>
            </div>
            <div className="bg-white bg-opacity-10 rounded-lg p-4">
              <h4 className="font-semibold mb-2">IP Protection</h4>
              <p>Claims & defense</p>
            </div>
          </div>
          <p className="mt-8 text-blue-200">Contact us for custom legal service pricing</p>
        </section>
      </div>
    </div>
  );
}