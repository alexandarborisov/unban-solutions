import React from 'react';
import { Link } from 'react-router-dom';
import { Check, ArrowLeft, User, Shield, Clock } from 'lucide-react';

export default function SubscriptionIndividuals() {
  const plan = {
    name: 'Individual Protection',
    subtitle: 'For personal profiles & regular users',
    description: 'Essential protection for non-creator individuals',
    monthly: 50,
    plans: [
      { duration: '3 months', price: 150, savings: 0 },
      { duration: '6 months', price: 240, savings: 60 },
      { duration: '12 months', price: 420, savings: 180 }
    ],
    features: [
      'Personal account protection',
      'Privacy violation assistance',
      'Basic content review (up to 5 posts/month)',
      'Account recovery support',
      'Email support',
      'Educational resources',
      'Community guidelines training',
      'Monthly safety tips'
    ],
    alaCarte: [
      { service: 'Light Case', price: '€170-€250' },
      { service: 'Account Recovery', price: '€200' },
      { service: 'Privacy Consultation', price: '€100' },
      { service: 'Content Audit (5 posts)', price: '€75' }
    ]
  };

  const benefits = [
    {
      icon: User,
      title: 'Personal Focus',
      description: 'Tailored for individual users, not businesses or creators',
      color: 'text-blue-600'
    },
    {
      icon: Shield,
      title: 'Privacy Protection',
      description: 'Specialized support for personal privacy and safety concerns',
      color: 'text-green-600'
    },
    {
      icon: Clock,
      title: 'Preventive Care',
      description: 'Regular check-ins and education to prevent issues before they occur',
      color: 'text-purple-600'
    }
  ];

  return (
    <div className="min-h-screen py-12 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <Link 
            to="/pricing" 
            className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Pricing
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Individual Subscription</h1>
          <p className="text-xl text-gray-600">
            Affordable protection for personal social media accounts and individual users
          </p>
        </div>

        {/* Main Plan */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-12">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 text-white">
            <div className="text-center">
              <User className="h-16 w-16 mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-2">{plan.name}</h2>
              <p className="text-blue-100 text-lg mb-1">{plan.subtitle}</p>
              <p className="text-blue-200">{plan.description}</p>
            </div>
          </div>
          
          <div className="p-8">
            {/* Subscription Pricing */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">Choose Your Plan</h3>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {plan.plans.map((pricing, index) => (
                  <div key={index} className="text-center p-4 border-2 rounded-lg hover:border-blue-500 transition-colors">
                    <div className="text-sm font-medium text-gray-900 mb-1">{pricing.duration}</div>
                    <div className="text-2xl font-bold text-blue-600 mb-1">€{pricing.price}</div>
                    <div className="text-xs text-gray-500">€{Math.round(pricing.price / (pricing.duration === '1 month' ? 1 : pricing.duration === '3 months' ? 3 : pricing.duration === '6 months' ? 6 : 12))}/month</div>
                    {pricing.savings > 0 && (
                      <div className="text-xs text-green-600 font-medium mt-1">
                        Save €{pricing.savings}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Features */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">What's Included</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {plan.features.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* A la Carte Comparison */}
            <div className="border-t pt-8 mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">vs. Individual Service Pricing</h3>
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="space-y-3">
                  {plan.alaCarte.map((service, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-gray-700">{service.service}</span>
                      <span className="font-semibold text-gray-900">{service.price}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-green-100 rounded-lg">
                  <p className="text-green-800 font-medium text-center">
                    Annual subscription costs less than one individual case!
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Link
                to="/contact"
                className="bg-blue-600 hover:bg-blue-700 text-white py-4 px-8 rounded-lg font-semibold text-lg transition-colors duration-200 inline-block"
              >
                Start Your Protection
              </Link>
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center">
                <div className="bg-gray-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <IconComponent className={`h-8 w-8 ${benefit.color}`} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            );
          })}
        </div>

        {/* Who This Is For */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Perfect For</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">Personal Users</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Individuals with personal social media accounts</li>
                <li>• People concerned about privacy and safety</li>
                <li>• Users who want to avoid common pitfalls</li>
                <li>• Anyone seeking peace of mind online</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">Common Scenarios</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Accidentally violating community guidelines</li>
                <li>• Privacy settings and account security</li>
                <li>• Dealing with harassment or unwanted contact</li>
                <li>• Understanding platform policies</li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Protect Your Digital Life?</h2>
          <p className="text-lg mb-6 text-blue-100">
            Join thousands of individuals who trust us to keep their online presence safe and secure.
          </p>
          <Link
            to="/contact"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 inline-block"
          >
            Get Started Today
          </Link>
        </div>
      </div>
    </div>
  );
}