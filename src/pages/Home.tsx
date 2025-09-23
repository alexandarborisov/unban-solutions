import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Users, Building2, Crown, User, ArrowRight, CheckCircle } from 'lucide-react';

export default function Home() {
  const whoWeHelp = [
    {
      icon: User,
      title: 'Creators',
      description: 'Micro (3k-10k) and Macro (10k+) influencers',
      color: 'text-blue-600'
    },
    {
      icon: Building2,
      title: 'Agencies',
      description: 'Digital marketing and creative agencies',
      color: 'text-purple-600'
    },
    {
      icon: Building2,
      title: 'Enterprises',
      description: 'Large corporations and businesses',
      color: 'text-green-600'
    },
    {
      icon: Crown,
      title: 'Public Figures',
      description: 'Politicians and celebrities',
      color: 'text-orange-600'
    },
    {
      icon: User,
      title: 'Individuals',
      description: 'General users facing bans or restrictions',
      color: 'text-blue-600'
    }
  ];

  const features = [
    'Expert case handling for all ban types',
    'Preventive content auditing',
    'Legal consultation and representation',
    '24/7 support for urgent cases'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-purple-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Protect Your Digital Presence.{' '}
              <span className="text-blue-300">Recover.</span>{' '}
              <span className="text-purple-300">Prevent.</span>{' '}
              <span className="text-green-300">Thrive.</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Legal & digital solutions for creators, agencies, enterprises, and public figures.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors duration-200 shadow-lg"
              >
                Get Help Now
              </Link>
              <Link
                to="/services"
                className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors duration-200"
              >
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Help Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Who We Help</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide specialized digital protection services for diverse clients across industries
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {whoWeHelp.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
                >
                  <div className={`w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-gray-100`}>
                    <IconComponent className={`h-8 w-8 ${item.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Comprehensive Digital Protection
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                From light case handling to complex legal representation, we provide end-to-end solutions for your digital presence protection needs.
              </p>
              <ul className="space-y-4 mb-8">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="h-6 w-6 text-green-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/services"
                className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
              >
                Explore All Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-purple-100 p-8 rounded-2xl">
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow">
                  <h3 className="font-semibold text-gray-900 mb-2">Case Handling</h3>
                  <p className="text-gray-600 text-sm">Light & Heavy cases from €170</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow">
                  <h3 className="font-semibold text-gray-900 mb-2">Legal & Preventive</h3>
                  <p className="text-gray-600 text-sm">Audits, consultations & protection</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow">
                  <h3 className="font-semibold text-gray-900 mb-2">Training & Education</h3>
                  <p className="text-gray-600 text-sm">Prevention programs & resources</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Secure Your Digital Presence?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Don't wait for a ban to happen. Get expert protection and recovery services today.
          </p>
          <Link
            to="/contact"
            className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors duration-200 shadow-lg inline-block"
          >
            Request a Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}