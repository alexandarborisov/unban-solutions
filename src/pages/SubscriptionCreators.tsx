import React from 'react';
import { Link } from 'react-router-dom';
import { Check, Star, ArrowLeft } from 'lucide-react';

export default function SubscriptionCreators() {
  const plans = [
    {
      name: 'Micro Creator',
      subtitle: '3k-10k followers',
      description: 'Perfect for growing creators',
      monthly: 80,
      plans: [
        { duration: '3 months', price: 240, savings: 0 },
        { duration: '6 months', price: 420, savings: 0 },
        { duration: '12 months', price: 720, savings: 240 }
      ],
      features: [
        'Monthly content review (up to 10 posts)',
        '1x Campaign audit per subscription period',
        '1x Digital Prevention Product',
        '3 x Light Cases Resolution (1 per month)',
        '1 x Heavy Case per subscription period',
        '1 x Prevention Consultation',
      ],
      alaCarte: [
        { service: 'Light Case', price: '€170' },
        { service: 'Heavy Case', price: '€300' },
        { service: 'Campaign Audit (10 posts)', price: '€100' },
        { service: 'Prevention Consultation', price: '€50' }
        { service: 'Digital Preventive Product', price: '€80' }
      ]
    },
    {
      name: 'Macro Creator',
      subtitle: '10k+ followers',
      description: 'For established creators',
      monthly: 150,
      plans: [
        { duration: '3 months', price: 450, savings: 0 },
        { duration: '6 months', price: 720, savings: 180 },
        { duration: '12 months', price: 1200, savings: 600 }
      ],
      features: [
        'Priority content review (up to 20 posts)',
        'Advanced risk assessment',
        'Personalized prevention strategies',
        'Phone & email support',
        'Dedicated account manager',
        'Emergency response (24/7)',
        'Brand deal contract review',
        'Crisis management support'
      ],
      alaCarte: [
        { service: 'Heavy Case', price: '€300-€1000' },
        { service: 'Content Audit (20 posts)', price: '€200' },
        { service: 'Legal Consultation', price: '€250' },
        { service: 'Brand Deal Review', price: '€300' }
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
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Creator Subscriptions</h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Comprehensive protection plans designed specifically for content creators at different stages of growth
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
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">vs. A la Carte Pricing</h4>
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
                      Save up to 70% with annual subscription vs. individual services
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
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Why Choose a Creator Subscription?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Check className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Proactive Protection</h3>
              <p className="text-gray-600">Regular content reviews prevent issues before they become problems</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Priority Support</h3>
              <p className="text-gray-600">Dedicated support team with faster response times for subscribers</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <ArrowLeft className="h-8 w-8 text-green-600 transform rotate-180" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Cost Savings</h3>
              <p className="text-gray-600">Significant savings compared to individual service pricing</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}