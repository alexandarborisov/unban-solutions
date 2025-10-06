import React from 'react';
import { Link } from 'react-router-dom';
import { Check, Star, ArrowLeft, Shield } from 'lucide-react';

export default function SubscriptionPublicFigures() {
  const plans = [
    {
      name: 'Politics',
      subtitle: 'Political figures & campaigns',
      description: 'Specialized protection for political content',
      monthly: 200,
      plans: [
        { duration: '3 months', price: 450, savings: 0 },
        { duration: '6 months', price: 720, savings: 240 },
        { duration: '12 months', price: 1200, savings: 720 }
      ],
      features: [
        'Preventive Content Audit (up to 20 posts per subscription period)',
        'Digital Prevention Product',
        '1 x Heavy Case per subscription period',
        '3 x Light Cases ( 1 per month )',
        '3 x Preventive Consultations ( 1 per month )',
      ],
      alaCarte: [
        { service: 'Preventive Content Audit (up to 20 posts)', price: '€100' },
        { service: 'Digital Preventive Product', price: '€80' },
        { service: 'Preventive Consultation', price: '€50' },
        { service: 'Light Case', price: '€250' },
        { service: 'Heavy Case', price: '€500' },
      ]
    },
    {
      name: 'Personal',
      subtitle: 'Celebrities & public personalities',
      description: 'Comprehensive protection for high-profile individuals',
      monthly: 250,
      plans: [
        { duration: '3 months', price: 450, savings: 0 },
        { duration: '6 months', price: 720, savings: 300 },
        { duration: '12 months', price: 1200, savings: 900 }
      ],
      features: [
        'Preventive Content Audit (up to 20 posts per subscription period)',
        'Campaign Audit (up to 10 posts per subscription period)',
        'Digital Prevention Product',
        '1 x Heavy Case per subscription period',
        '3 x Light Cases ( 1 per month )',
        '3 x Preventive Consultations ( 1 per month )',
      ],
      alaCarte: [
        { service: 'Preventive Content Audit (up to 20 posts)', price: '€100' },
        { service: 'Campaign Audit (up to 10 posts)', price: '€100' },
        { service: 'Digital Preventive Product', price: '€80' },
        { service: 'Preventive Consultation', price: '€50' },
        { service: 'Light Case', price: '€250' },
        { service: 'Heavy Case', price: '€500' },
      ],
      popular: true
    }
  ];

  return (
    <div className="min-h-screen py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <Link 
            to="/pricing" 
            className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Pricing
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Public Figure Subscriptions</h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Premium protection services designed for politicians, celebrities, and high-profile public personalities
          </p>
        </div>

        {/* Subscription Plans */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl shadow-xl overflow-hidden relative ${
                plan.popular ? 'ring-2 ring-blue-500' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                    <Star className="h-4 w-4 mr-1" />
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">{plan.name}</h3>
                  <p className="text-gray-600 mb-2">{plan.subtitle}</p>
                  <p className="text-sm text-gray-500">{plan.description}</p>
                </div>

                {/* Subscription Pricing */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Subscription Plans</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {plan.plans.map((pricing, pricingIndex) => (
                      <div key={pricingIndex} className="text-center p-3 border rounded-lg">
                        <div className="text-sm font-medium text-gray-900">{pricing.duration}</div>
                        <div className="text-xl font-bold text-blue-600">€{pricing.price}</div>
                        {pricing.savings > 0 && (
                          <div className="text-xs text-green-600 font-medium">
                            Save €{pricing.savings}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">What's Included</h4>
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* A la Carte Comparison */}
                <div className="border-t pt-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">vs. Single Service Pricing</h4>
                  <div className="space-y-2">
                    {plan.alaCarte.map((service, serviceIndex) => (
                      <div key={serviceIndex} className="flex justify-between items-center text-sm">
                        <span className="text-gray-600">{service.service}</span>
                        <span className="font-medium text-gray-900">{service.price}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 p-3 bg-green-50 rounded-lg">
                    <p className="text-sm text-green-800 font-medium">
                      Save up to 70% with annual subscription vs. individual crisis management
                    </p>
                  </div>
                </div>

                <div className="mt-8">
                  <Link
                    to="/contact"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold text-center block transition-colors duration-200"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Benefits */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Why Public Figures Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-red-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Crisis Management</h3>
              <p className="text-gray-600">24/7 emergency response for reputation-threatening situations</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Legal Expertise</h3>
              <p className="text-gray-600">Specialized legal team with public figure experience</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Check className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Discretion</h3>
              <p className="text-gray-600">Confidential handling of sensitive matters and privacy protection</p>
            </div>
          </div>
        </div>

        {/* Special Notice */}
        <div className="bg-gradient-to-r from-red-600 to-purple-600 rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">High-Stakes Protection</h2>
          <p className="text-lg mb-6">
            When your reputation and career are on the line, trust our specialized team of experts who understand the unique challenges facing public figures.
          </p>
          <Link
            to="/contact"
            className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 inline-block"
          >
            Schedule Confidential Consultation
          </Link>
        </div>
      </div>
    </div>
  );
}