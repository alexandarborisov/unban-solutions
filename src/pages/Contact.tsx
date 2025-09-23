import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, Paperclip } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    caseType: 'light',
    profileType: 'Micro Influencer',
    socialAccounts: '',
    caseDescription: '',
    attachments: null as File | null,
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    const maxFileSize = 8 * 1024 * 1024; // 8 MB

    if (file && file.size > maxFileSize) {
      alert("File size exceeds 8MB limit. Please choose a smaller file.");
      e.target.value = ''; // Reset the file input
      setFormData({ ...formData, attachments: null });
      return;
    }
    
    setFormData({
      ...formData,
      attachments: file,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        caseType: 'light',
        profileType: 'Micro Influencer',
        socialAccounts: '',
        caseDescription: '',
        attachments: null,
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      detail: 'support@unbansolutions.com',
      description: 'Get a response within 24 hours'
    },
    {
      icon: Phone,
      title: 'Call Us',
      detail: '+1 (555) 123-4567',
      description: 'Mon-Fri 9AM-6PM EST'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      detail: 'New York, NY',
      description: 'Available for consultations'
    },
    {
      icon: Clock,
      title: 'Emergency Support',
      detail: '24/7 Available',
      description: 'For urgent cases'
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Get Help Now</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to secure your digital presence? Contact our experts for immediate assistance with your case.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Request a Consultation</h2>
              
              {isSubmitted ? (
                <div className="text-center py-12">
                  <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
                  <p className="text-gray-600">
                    Your consultation request has been submitted. We'll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                    <div>
                      <label htmlFor="caseType" className="block text-sm font-medium text-gray-700 mb-2">
                        Case Type
                      </label>
                      <select
                        id="caseType"
                        name="caseType"
                        value={formData.caseType}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      >
                        <option value="light">Light Case (€170-€250)</option>
                        <option value="heavy">Heavy Case (€300-€1000)</option>
                        <option value="consultation">Consultation Only</option>
                        <option value="subscription">Subscription Service</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="profileType" className="block text-sm font-medium text-gray-700 mb-2">
                      Profile Type *
                    </label>
                    <select
                      id="profileType"
                      name="profileType"
                      required
                      value={formData.profileType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="Micro Influencer">Micro Influencer</option>
                      <option value="Macro Influencer">Macro Influencer</option>
                      <option value="Public Figure">Public Figure</option>
                      <option value="Individual">Individual</option>
                      <option value="Agency">Agency</option>
                      <option value="Entreprise">Entreprise</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="socialAccounts" className="block text-sm font-medium text-gray-700 mb-2">
                      Links to Social Accounts *
                    </label>
                    <input
                      type="text"
                      id="socialAccounts"
                      name="socialAccounts"
                      value={formData.socialAccounts}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Instagram, TikTok, YouTube links..."
                    />
                  </div>

                  <div>
                    <label htmlFor="caseDescription" className="block text-sm font-medium text-gray-700 mb-2">
                      Case Description *
                    </label>
                    <textarea
                      id="caseDescription"
                      name="caseDescription"
                      required
                      rows={6}
                      value={formData.caseDescription}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Describe your issue in detail. Include what happened, when it occurred, and any screenshots or documentation you have..."
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="attachments" className="block text-sm font-medium text-gray-700 mb-2">
                      Attach Files (Max 8MB, .png, .jpg, .avif, .jpeg)
                    </label>
                    <div className="flex items-center space-x-2">
                      <input
                        type="file"
                        id="attachments"
                        name="attachments"
                        accept=".png,.jpg,.jpeg,.avif"
                        onChange={handleFileChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                      <Paperclip className="h-5 w-5 text-gray-500" />
                    </div>
                    {formData.attachments && (
                      <p className="mt-2 text-sm text-gray-500">
                        Selected file: {formData.attachments.name}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 px-6 rounded-lg font-semibold text-lg transition-colors duration-200 flex items-center justify-center"
                  >
                    <Send className="h-5 w-5 mr-2" />
                    Submit Consultation Request
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <div key={index} className="flex items-start">
                      <div className="flex-shrink-0 mr-4">
                        <div className="bg-white bg-opacity-20 rounded-lg p-3">
                          <IconComponent className="h-6 w-6" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">{info.title}</h3>
                        <p className="text-blue-100 mb-1">{info.detail}</p>
                        <p className="text-blue-200 text-sm">{info.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">What to Include</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  Screenshots of ban notifications
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  Links to affected content
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  Timeline of events
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  Previous appeal attempts
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  Account verification details
                </li>
              </ul>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-green-900 mb-4">Emergency Cases</h3>
              <p className="text-green-800 mb-4">
                For time-sensitive issues that require immediate attention, contact us directly.
              </p>
              <div className="space-y-2">
                <p className="text-green-700 font-semibold">Emergency Hotline:</p>
                <p className="text-green-700">+1 (555) 911-HELP</p>
                <p className="text-green-600 text-sm">Available 24/7 for urgent cases</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}