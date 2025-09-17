import React from 'react';
import { FileText, Send, Search, Shield, ArrowRight, Clock, CheckCircle, Users } from 'lucide-react';

export default function Process() {
  const steps = [
    {
      icon: FileText,
      title: 'Fill out the intake form',
      description: 'Provide your name, email, phone, account information, and screenshots of the issue.',
      details: [
        'Complete contact information',
        'Social media account links',
        'Detailed issue description',
        'Supporting screenshots or documents'
      ]
    },
    {
      icon: Send,
      title: 'Submit case details',
      description: 'Share specifics about your banned post, notification screenshots, and incident description.',
      details: [
        'Upload ban notification screenshots',
        'Provide context about the content',
        'Include timeline of events',
        'Specify platform policies cited'
      ]
    },
    {
      icon: Search,
      title: 'Expert audit & analysis',
      description: 'Our team audits your case, provides professional advice, and develops an action plan.',
      details: [
        'Comprehensive case review',
        'Policy violation analysis',
        'Success probability assessment',
        'Strategic action plan development'
      ]
    },
    {
      icon: Shield,
      title: 'Recovery & prevention',
      description: 'We execute the recovery strategy and provide prevention measures for future protection.',
      details: [
        'Professional appeal submission',
        'Direct platform communication',
        'Prevention strategy implementation',
        'Ongoing monitoring and support'
      ]
    }
  ];

  const faqs = [
    {
      question: 'What counts as a light vs heavy case?',
      answer: 'Light cases include post removals, shadowbans, and simple IP claims. Heavy cases involve account deletions, ad account suspensions, monetization bans, and complex policy violations requiring extensive documentation and appeals.'
    },
    {
      question: 'How long does recovery take?',
      answer: 'Recovery times vary by case complexity and platform response times. Light cases typically resolve within 48-72 hours, while heavy cases can take 1-4 weeks depending on the platform\'s review process and case specifics.'
    },
    {
      question: 'Do you work with agencies as well as individuals?',
      answer: 'Yes, we provide specialized services for agencies managing multiple client accounts. We offer bulk pricing, dedicated account managers, and streamlined processes for agencies handling numerous creators and brands.'
    },
    {
      question: 'Can you prevent future bans?',
      answer: 'Our prevention programs include content audits, policy compliance training, publishing checklists, and ongoing monitoring. While we cannot guarantee prevention, our strategies significantly reduce the risk of future violations.'
    },
    {
      question: 'What platforms do you support?',
      answer: 'We work with all major social media platforms including Instagram, Facebook, TikTok, YouTube, Twitter/X, LinkedIn, and emerging platforms. Our expertise covers platform-specific policies and appeal processes.'
    },
    {
      question: 'Do you offer refunds if unsuccessful?',
      answer: 'We provide transparent success assessments upfront. While results cannot be guaranteed due to platform policies, we work diligently on every case and offer partial refunds for unsuccessful heavy cases based on our service agreement terms.'
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">How It Works</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our streamlined process ensures quick, effective resolution of your digital presence issues
          </p>
        </div>

        {/* Process Steps */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={index} className="relative">
                  <div className="bg-white rounded-2xl shadow-xl p-8 h-full">
                    <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6 mx-auto">
                      <IconComponent className="h-8 w-8 text-blue-600" />
                    </div>
                    <div className="text-center mb-6">
                      <div className="text-sm font-semibold text-blue-600 mb-2">STEP {index + 1}</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                    <ul className="space-y-2">
                      {step.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          <span className="text-gray-600">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                      <ArrowRight className="h-8 w-8 text-blue-300" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* Timeline Section */}
        <section className="mb-20 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Expected Timelines</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Clock className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Light Cases</h3>
              <div className="text-3xl font-bold text-blue-600 mb-2">48-72h</div>
              <p className="text-gray-600">Most light cases resolved within 3 days</p>
            </div>
            <div className="text-center">
              <Clock className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Heavy Cases</h3>
              <div className="text-3xl font-bold text-purple-600 mb-2">1-4 weeks</div>
              <p className="text-gray-600">Complex cases requiring extensive appeals</p>
            </div>
            <div className="text-center">
              <Clock className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Urgent Cases</h3>
              <div className="text-3xl font-bold text-green-600 mb-2">24h</div>
              <p className="text-gray-600">Priority handling for time-sensitive issues</p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Success Statistics */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Track Record</h2>
            <p className="text-xl text-blue-100">
              Proven results across thousands of cases
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">95%</div>
              <div className="text-blue-100">Success Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">5k+</div>
              <div className="text-blue-100">Cases Resolved</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">72h</div>
              <div className="text-blue-100">Average Resolution</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-blue-100">Support Available</div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}