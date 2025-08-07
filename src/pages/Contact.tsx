"use client"

import type React from "react"
import { useState } from "react"
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from "lucide-react"

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Handle form submission here
  }

  const contactInfo = [
    {
      icon: <MapPin size={28} />,
      title: "Visit Us",
      details: ["Jawahar Vidya Mandir", "Shyamali, Ranchi", "Jharkhand - 834002, India"],
      color: "from-emerald-500 to-teal-500",
    },
    {
      icon: <Phone size={28} />,
      title: "Call Us",
      details: ["+91 651-2345-678", "+91 651-2345-679", "Mon-Fri: 8:00 AM - 4:00 PM"],
      color: "from-blue-500 to-indigo-500",
    },
    {
      icon: <Mail size={28} />,
      title: "Email Us",
      details: ["info@jvmshyamali.edu.in", "admission@jvmshyamali.edu.in", "principal@jvmshyamali.edu.in"],
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: <Clock size={28} />,
      title: "Office Hours",
      details: ["Monday - Friday", "8:00 AM - 4:00 PM", "Saturday: 8:00 AM - 12:00 PM"],
      color: "from-amber-500 to-orange-500",
    },
  ]

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
            Contact Us
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Have questions about admissions, academics, or want to schedule a visit? We're here to help and would love
            to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 text-center border border-gray-100"
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${info.color} rounded-2xl flex items-center justify-center text-white mx-auto mb-6 shadow-lg`}
                >
                  {info.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">{info.title}</h3>
                <div className="space-y-2">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-600">
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-emerald-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <div className="bg-white rounded-3xl p-8 shadow-2xl">
                <div className="flex items-center mb-8">
                  <MessageCircle className="text-emerald-500 mr-3" size={32} />
                  <h2 className="text-3xl font-bold text-gray-800">Send us a Message</h2>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                        Subject *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200"
                        required
                      >
                        <option value="">Select a subject</option>
                        <option value="admission">Admission Inquiry</option>
                        <option value="academic">Academic Information</option>
                        <option value="facilities">School Facilities</option>
                        <option value="transport">Transportation</option>
                        <option value="fees">Fee Structure</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 resize-none"
                      placeholder="Please describe your inquiry in detail..."
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
                  >
                    <span>Send Message</span>
                    <Send size={20} />
                  </button>
                </form>
              </div>
            </div>

            {/* Map and Additional Info */}
            <div className="space-y-8">
              {/* Map */}
              <div className="bg-white rounded-3xl p-8 shadow-2xl">
                <h3 className="text-2xl font-bold mb-6 text-gray-800">Find Us</h3>
                <div className="rounded-2xl overflow-hidden shadow-lg mb-6">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58451.89707091969!2d85.26495!3d23.344315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4e104aa5b7c5b%3A0x6822c7ed587dc0e5!2sShyamali%2C%20Ranchi%2C%20Jharkhand%20834002!5e0!3m2!1sen!2sin!4v1704715200000!5m2!1sen!2sin"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-80"
                    title="JVM Shyamali Location - Ranchi, Jharkhand, India"
                  ></iframe>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <MapPin className="text-emerald-500 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <p className="font-semibold text-gray-800">Address</p>
                      <p className="text-gray-600">Jawahar Vidya Mandir, Shyamali, Ranchi, Jharkhand - 834002</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Phone className="text-emerald-500 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <p className="font-semibold text-gray-800">Directions</p>
                      <p className="text-gray-600">
                        Located near Shyamali Colony, easily accessible by public transport
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Contact */}
              <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-3xl p-8 text-white shadow-2xl">
                <h3 className="text-2xl font-bold mb-6">Quick Contact</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="flex-shrink-0" size={20} />
                    <div>
                      <p className="font-semibold">Admission Office</p>
                      <p className="opacity-90">+91 651-2345-678</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="flex-shrink-0" size={20} />
                    <div>
                      <p className="font-semibold">Email</p>
                      <p className="opacity-90">admission@jvmshyamali.edu.in</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="flex-shrink-0" size={20} />
                    <div>
                      <p className="font-semibold">Office Hours</p>
                      <p className="opacity-90">Mon-Fri: 8:00 AM - 4:00 PM</p>
                    </div>
                  </div>
                </div>
                <button className="mt-6 bg-white text-emerald-600 px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-200 transform hover:scale-105">
                  Schedule a Visit
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
