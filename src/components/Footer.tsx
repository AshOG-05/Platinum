import type React from "react"
import { useState } from "react"
import { Link } from "react-router-dom"
import {
  Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin, GraduationCap,
  Send,  Star, Shield,
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
    <>
      <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white antialiased selection:bg-emerald-500/20 selection:text-white">
        {/* Black spacer area */}
        <div className="w-full h-14 md:h-40 lg:h-48"></div>
        
        {/* Main Footer */}
        <div className="container mx-auto max-w-7xl px-4 pb-16">
        <div className="grid grid-cols-1 items-start md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* School Info */}
          <div className="lg:col-span-1 space-y-6">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center shadow-lg">
                <GraduationCap className="text-white" size={28} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Brightwood Academy</h3>
                <p className="text-emerald-300 text-sm font-medium">Excellence in Education</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed text-sm">
              Empowering minds and shaping futures since 1995 with world-class education and innovative teaching methods that prepare students for global success.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className={`w-12 h-12 bg-gray-800/50 backdrop-blur-sm rounded-xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-lg border border-gray-700 hover:border-emerald-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/40 ${social.color}`}
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold mb-6 pb-2 text-emerald-400 relative">
              Quick Links
              <div className="absolute bottom-0 left-0 w-12 md:w-16 h-0.5 bg-gradient-to-r from-emerald-500 to-teal-500"></div>
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-emerald-400 transition-all duration-300 flex items-center group text-sm hover:translate-x-1"
                    aria-label={`Go to ${link.name}`}
                  >
                    <span className="w-0 h-0.5 bg-emerald-500 transition-all duration-300 group-hover:w-6 mr-0 group-hover:mr-3 rounded-full flex-shrink-0"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold mb-6 pb-2 text-emerald-400 relative">
              Programs
              <div className="absolute bottom-0 left-0 w-12 md:w-16 h-0.5 bg-gradient-to-r from-emerald-500 to-teal-500"></div>
            </h4>
            <ul className="space-y-3">
              {programs.map((program, index) => (
                <li key={index}>
                  <Link
                    to={program.path}
                    className="text-gray-300 hover:text-emerald-400 transition-all duration-300 flex items-center group text-sm hover:translate-x-1"
                    aria-label={`Go to ${program.name}`}
                  >
                    <span className="w-0 h-0.5 bg-emerald-500 transition-all duration-300 group-hover:w-6 mr-0 group-hover:mr-3 rounded-full flex-shrink-0"></span>
                    {program.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold mb-6 pb-2 text-emerald-400 relative">
              Contact Us
              <div className="absolute bottom-0 left-0 w-12 md:w-16 h-0.5 bg-gradient-to-r from-emerald-500 to-teal-500"></div>
            </h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 group">
                <div className="w-10 h-10 bg-emerald-500/20 rounded-lg flex items-center justify-center group-hover:bg-emerald-500/30 transition-colors duration-300">
                  <Phone size={18} className="text-emerald-400" />
                </div>
                <div>
                  <p className="text-gray-300 text-sm font-medium">+91 98765 43210</p>
                  <p className="text-gray-500 text-xs">Call us anytime</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 group">
                <div className="w-10 h-10 bg-emerald-500/20 rounded-lg flex items-center justify-center group-hover:bg-emerald-500/30 transition-colors duration-300">
                  <Mail size={18} className="text-emerald-400" />
                </div>
                <div>
                  <p className="text-gray-300 text-sm font-medium">info@brightwoodacademy.edu</p>
                  <p className="text-gray-500 text-xs">Send us an email</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 group">
                <div className="w-10 h-10 bg-emerald-500/20 rounded-lg flex items-center justify-center group-hover:bg-emerald-500/30 transition-colors duration-300 mt-0.5">
                  <MapPin size={18} className="text-emerald-400" />
                </div>
                <div>
                  <p className="text-gray-300 text-sm font-medium">Sector 15, Gurgaon</p>
                  <p className="text-gray-500 text-xs">Haryana, India</p>
                </div>
              </div>
            </div>

            {/* Newsletter */}
            <div className="mt-8">
              <h5 className="font-bold mb-4 text-emerald-400">Stay Updated</h5>
              <p className="text-gray-400 text-xs mb-4">Subscribe to our newsletter for latest updates and news.</p>
              <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 text-white text-sm placeholder-gray-500 transition-all duration-300"
                  aria-label="Email address"
                  autoComplete="email"
                  inputMode="email"
                  spellCheck={false}
                  required
                />
                <button
                  type="submit"
                  className="w-full px-4 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl hover:shadow-lg hover:shadow-emerald-500/25 transition-all duration-300 font-medium text-sm flex items-center justify-center space-x-2 disabled:opacity-60 disabled:cursor-not-allowed"
                  disabled={!email}
                >
                  {isSubscribed ? (
                    <>
                      <Star size={16} />
                      <span>Subscribed!</span>
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      <span>Subscribe</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>


        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800/50 bg-gray-900/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm font-medium">
                © 2024 Brightwood Academy. All rights reserved.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                CBSE Affiliation No: 3430XXX | Estd. 1995
              </p>
            </div>
            <div className="flex flex-wrap justify-center md:justify-end items-center gap-4 md:gap-6">
              <Link
                to="#"
                className="text-gray-400 hover:text-emerald-400 text-sm transition-all duration-300 hover:underline underline-offset-4"
              >
                Privacy Policy
              </Link>
              <Link
                to="#"
                className="text-gray-400 hover:text-emerald-400 text-sm transition-all duration-300 hover:underline underline-offset-4"
              >
                Terms of Service
              </Link>
              <Link
                to="#"
                className="text-gray-400 hover:text-emerald-400 text-sm transition-all duration-300 hover:underline underline-offset-4"
              >
                Sitemap
              </Link>
              <div className="flex items-center space-x-2 text-gray-500">
                <Shield size={14} />
                <span className="text-xs">Secure & Safe</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
    </>
  )
}

export default Footer
