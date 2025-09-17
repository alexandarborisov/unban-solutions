import React from 'react';
import { Shield, FileText, Scale, GraduationCap, AlertCircle, Users } from 'lucide-react';

export default function Services() {
  const serviceCategories = [
    {
      icon: Shield,
      title: 'Case Handling',
      description: 'Expert resolution for social media bans and restrictions',
      services: [
        {
          name: 'Light Cases',
          description: 'Post removal, shadowban, IP claims',
          price: '€170-€250'
        },
        {
          name: 'Heavy Cases',
          description: 'Account deletion, ad account suspension, monetization ban',
          price: '€300-€1000'
        }
      ]
    },
    {
      icon: Scale,
      title: 'Legal & Preventive',
      description: 'Comprehensive legal support and prevention strategies',
      services: [
        {
          name: 'Campaign Audit',
          description: '10-20 posts review and optimization',
          price: '€150-€200'
        },
        {
          name: 'Preventive Content Audit',
          description: 'Comprehensive 20 posts analysis',
          price: '€100'
        },
        {
          name: 'Digital Prevention Products',
          description: 'Comprehensive protection toolkit',
          price: '€250'
        },
        {
          name: 'Legal Consultation',
          description: '1-hour expert consultation',
          price: 'Contact us'
        },
        {
          name: 'Contract Review',
          description: 'Brand-deal contract analysis',
          price: 'Contact us'
        },
        {
          name: 'Legal Opinions',
          description: 'Defamation, hate speech analysis',
          price: 'Contact us'
        },
        {
          name: 'Court Representation',
          description: 'Up to 2 hearings included',
          price: 'Contact us'
        },
        {
          name: 'IP Protection & Claims',
          description: 'Intellectual property services',
          price: 'Contact us'
        }
      ]
    },
    {
      icon: FileText,
      title: 'Add-On Services',
      description: 'Additional support for complex cases',
      services: [
        {
          name: 'Extra Light Case',
          description: 'Additional light case handling',
          price: '€170-€250'
        },
        {
          name: 'Extra Heavy Case',
          description: 'Complex case resolution',
          price: '€330-€1000'
        }
      ]
    },
    {
      icon: GraduationCap,
      title: 'Education & Training',
      description: 'Prevention programs and educational resources',
      services: [
        {
          name: 'Prevention Programs',
          description: 'Comprehensive training modules'
        },
        {
          name: 'Video Series & Webinars',
          description: 'Interactive learning content'
        },
        {
          name: 'Case Studies & Guides',
          description: 'Real-world examples and solutions'
        },
        {
          name: 'Checklists & Templates',
          description: 'Publishing, fact-checking, ad approval tools'
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive digital protection and recovery services tailored to your specific needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="space-y-16">
          {serviceCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 text-white">
                  <div className="flex items-center mb-4">
                    <IconComponent className="h-12 w-12 mr-4" />
                    <div>
                      <h2 className="text-3xl font-bold">{category.title}</h2>
                      <p className="text-blue-100 text-lg">{category.description}</p>
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.services.map((service, serviceIndex) => (
                      <div
                        key={serviceIndex}
                        className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow duration-200"
                      >
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.name}</h3>
                        <p className="text-gray-600 mb-4">{service.description}</p>
                        {service.price && (
                          <div className="flex items-center justify-between">
                            <span className="text-2xl font-bold text-blue-600">{service.price}</span>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Subscription Services */}
        <div className="mt-16 bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8">
          <div className="text-center mb-12">
            <Users className="h-16 w-16 text-blue-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Subscription Services</h2>
            <p className="text-xl text-gray-600">
              Ongoing protection and support for your digital presence
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Small Accounts</h3>
              <p className="text-gray-600 mb-6">≤3,000 followers</p>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span>Monthly</span>
                  <span className="text-2xl font-bold text-blue-600">€80</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>3 months</span>
                  <span className="text-2xl font-bold text-blue-600">€340</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>6 months</span>
                  <span className="text-2xl font-bold text-blue-600">€480</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>12 months</span>
                  <span className="text-2xl font-bold text-blue-600">€720</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Large Accounts</h3>
              <p className="text-gray-600 mb-6">≥3,000 followers</p>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span>Monthly</span>
                  <span className="text-2xl font-bold text-purple-600">€150</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>3 months</span>
                  <span className="text-2xl font-bold text-purple-600">€450</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>6 months</span>
                  <span className="text-2xl font-bold text-purple-600">€720</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>12 months</span>
                  <span className="text-2xl font-bold text-purple-600">€1200</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Referral Program */}
        <div className="mt-16 bg-gradient-to-r from-green-500 to-blue-600 rounded-2xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Referral Program</h2>
          <p className="text-xl mb-6">
            Get 10% discount on subscriptions or single services for every client you refer
          </p>
          <div className="bg-white bg-opacity-20 rounded-lg p-4 inline-block">
            <p className="text-2xl font-bold">10% OFF</p>
            <p className="text-sm">For referred clients</p>
          </div>
        </div>
      </div>
    </div>
  );
}