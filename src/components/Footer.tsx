import type React from "react"
import { useState } from "react"
import { Link } from "react-router-dom"
import {
  Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin, GraduationCap,
  Clock, Award, Users, BookOpen, Send, ArrowRight, Star, Shield, Globe
} from "lucide-react"

const Footer: React.FC = () => {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubscribed(true)
      setEmail("")
      setTimeout(() => setIsSubscribed(false), 3000)
    }
  }

  const quickLinks = [
    { name: "About", path: "/about" },
    { name: "Academics", path: "/academics" },
    { name: "Admission", path: "/admission" },
    { name: "Faculty", path: "/faculty" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ]

  const programs = [
    { name: "Primary (I-V)", path: "/academics" },
    { name: "Secondary (VI-X)", path: "/academics" },
    { name: "Senior Secondary (XI-XII)", path: "/academics" },
    { name: "Events", path: "/events" },
  ]

  const socialLinks = [
    { icon: <Facebook size={18} />, href: "#", name: "Facebook", color: "hover:bg-blue-600" },
    { icon: <Twitter size={18} />, href: "#", name: "Twitter", color: "hover:bg-sky-500" },
    { icon: <Instagram size={18} />, href: "#", name: "Instagram", color: "hover:bg-pink-600" },
    { icon: <Youtube size={18} />, href: "#", name: "YouTube", color: "hover:bg-red-600" },
  ]

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* School Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center">
                <GraduationCap className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Platinum Academy</h3>
                <p className="text-gray-400 text-sm">Excellence in Education</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Empowering minds and shaping futures since 1995 with world-class education and innovative teaching methods.
            </p>

            {/* Social Links */}
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className={`w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center transition-all duration-200 transform hover:scale-110 ${social.color}`}
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-emerald-400">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center group"
                  >
                    <span className="w-0 h-0.5 bg-emerald-500 transition-all duration-200 group-hover:w-4 mr-0 group-hover:mr-2"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-emerald-400">Programs</h4>
            <ul className="space-y-2">
              {programs.map((program, index) => (
                <li key={index}>
                  <Link
                    to={program.path}
                    className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center group"
                  >
                    <span className="w-0 h-0.5 bg-emerald-500 transition-all duration-200 group-hover:w-4 mr-0 group-hover:mr-2"></span>
                    {program.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-emerald-400">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone size={16} className="text-emerald-400" />
                <span className="text-gray-400 text-sm">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={16} className="text-emerald-400" />
                <span className="text-gray-400 text-sm">info@platinumacademy.edu</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin size={16} className="text-emerald-400 mt-0.5" />
                <span className="text-gray-400 text-sm">Sector 15, Gurgaon, Haryana</span>
              </div>
            </div>

            {/* Newsletter */}
            <div className="mt-6">
              <h5 className="font-semibold mb-3 text-emerald-400">Newsletter</h5>
              <form onSubmit={handleNewsletterSubmit} className="flex">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:border-emerald-500 text-white text-sm"
                  required
                />
                <button
                  type="submit"
                  className="px-3 py-2 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-r-lg hover:shadow-lg transition-all duration-200"
                >
                  {isSubscribed ? <Star size={16} /> : <Send size={16} />}
                </button>
              </form>
            </div>
          </div>


        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Platinum Academy. All rights reserved. | CBSE Affiliation No: 3430XXX
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link to="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                Terms of Service
              </Link>
              <Link to="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
