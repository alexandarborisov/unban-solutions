import React from 'react';
import { Check, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Subscriptions() {
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
       

        {/* Subscription Plans */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Subscription Plans</h2>
          <div className="text-center mb-8">
            <p className="text-gray-600 mb-6">Choose the subscription plan that fits your profile and needs</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/subscription/creators"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200"
              >
                View Creator Plans
              </Link>
              <Link
                to="/subscription/public-figures"
                className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200"
              >
                View Public Figure Plans
              </Link>
              <Link
                to="/subscription/individuals"
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200"
              >
                View Individual Plans
              </Link>
              <Link
                to="/contact"
                className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200"
              >
                Agency Plans
              </Link>
              <Link
                to="/contact"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200"
              >
                Enterprise Plans
              </Link>
            </div>
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