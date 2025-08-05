import type React from "react"
import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { Menu, X, Phone, Mail, MapPin, GraduationCap, ChevronDown, Clock, Users, Award } from "lucide-react"

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [showCallModal, setShowCallModal] = useState(false)
  const [showMailModal, setShowMailModal] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      if (!target.closest('.dropdown-container')) {
        setActiveDropdown(null)
      }
    }

    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [])

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setShowCallModal(false)
        setShowMailModal(false)
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [])

  const handleDropdownToggle = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown)
  }

  const closeDropdown = () => {
    setActiveDropdown(null)
  }

  const navItems = [
    { name: "Home", path: "/" },
    {
      name: "About",
      path: "/about",
      dropdown: [
        { name: "Our Story", path: "/about", icon: <Users size={16} /> },
        { name: "Faculty", path: "/faculty", icon: <Award size={16} /> },
        { name: "Facilities", path: "/facilities", icon: <GraduationCap size={16} /> },
      ]
    },
    {
      name: "Academics",
      path: "/academics",
      dropdown: [
        { name: "Curriculum", path: "/academics", icon: <GraduationCap size={16} /> },
        { name: "Results", path: "/results", icon: <Award size={16} /> },
        { name: "Events", path: "/events", icon: <Clock size={16} /> },
      ]
    },
    { name: "Admission", path: "/admission" },
    {
      name: "Campus Life",
      path: "/student-life",
      dropdown: [
        { name: "Student Life", path: "/student-life", icon: <Users size={16} /> },
        { name: "Gallery", path: "/gallery", icon: <GraduationCap size={16} /> },
        { name: "Events", path: "/events", icon: <Clock size={16} /> },
      ]
    },
    { name: "Contact", path: "/contact" },
  ]

  return (
    <>
      {/* Top Info Bar */}
      <div className="bg-gradient-to-r from-emerald-600 via-emerald-700 to-teal-600 text-white py-3 text-sm border-b border-emerald-500/20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-2 lg:space-y-0">
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-8">
              <button
                onClick={() => setShowCallModal(true)}
                className="flex items-center space-x-2 hover:text-emerald-200 transition-colors duration-200 cursor-pointer hover:bg-white/10 px-3 py-1 rounded-lg"
              >
                <Phone size={16} className="text-emerald-200" />
                <span className="font-medium">Call Us</span>
              </button>
              <button
                onClick={() => setShowMailModal(true)}
                className="flex items-center space-x-2 hover:text-emerald-200 transition-colors duration-200 cursor-pointer hover:bg-white/10 px-3 py-1 rounded-lg"
              >
                <Mail size={16} className="text-emerald-200" />
                <span className="font-medium">Email Us</span>
              </button>
              <div className="flex items-center space-x-2 hover:text-emerald-200 transition-colors duration-200">
                <MapPin size={16} className="text-emerald-200" />
                <span className="font-medium">Sector 15, Gurgaon, Haryana</span>
              </div>
            </div>
            <div className="flex items-center space-x-4 text-emerald-100">
              <div className="flex items-center space-x-2">
                <Clock size={16} />
                <span className="text-sm">Mon-Fri: 8:00 AM - 4:00 PM</span>
              </div>
              <div className="hidden sm:block w-px h-4 bg-emerald-400"></div>
              <Link
                to="/admission"
                className="bg-white/10 hover:bg-white/20 px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 backdrop-blur-sm hover:scale-105"
              >
                Quick Admission
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-white/95 backdrop-blur-md shadow-xl" : "bg-white shadow-md"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                <GraduationCap className="text-white" size={28} />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  Platinum Academy
                </h1>
                <p className="text-sm text-gray-600 font-medium">Excellence in Education Since 1995</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-2">
              {navItems.map((item) => (
                <div key={item.name} className="relative group dropdown-container">
                  {item.dropdown ? (
                    <div className="relative dropdown-container">
                      <button
                        onClick={() => handleDropdownToggle(item.name)}
                        className={`flex items-center space-x-1 px-4 py-3 rounded-xl font-medium transition-all duration-300 relative ${
                          location.pathname === item.path || activeDropdown === item.name
                            ? "text-emerald-600 bg-emerald-50 shadow-md"
                            : "text-gray-700 hover:text-emerald-600 hover:bg-emerald-50"
                        }`}
                      >
                        <span>{item.name}</span>
                        <ChevronDown
                          size={16}
                          className={`transition-transform duration-200 ${
                            activeDropdown === item.name ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {/* Dropdown Menu */}
                      <div className={`absolute top-full left-0 mt-2 w-64 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden transition-all duration-300 ${
                        activeDropdown === item.name
                          ? "opacity-100 visible transform translate-y-0"
                          : "opacity-0 invisible transform -translate-y-2"
                      }`}>
                        <div className="py-2">
                          {item.dropdown.map((dropdownItem, index) => (
                            <Link
                              key={index}
                              to={dropdownItem.path}
                              onClick={closeDropdown}
                              className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 transition-all duration-200"
                            >
                              <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center text-emerald-600">
                                {dropdownItem.icon}
                              </div>
                              <span className="font-medium">{dropdownItem.name}</span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <Link
                      to={item.path}
                      className={`px-4 py-3 rounded-xl font-medium transition-all duration-300 relative ${
                        location.pathname === item.path
                          ? "text-emerald-600 bg-emerald-50 shadow-md"
                          : "text-gray-700 hover:text-emerald-600 hover:bg-emerald-50"
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}

              {/* CTA Button */}
              <div className="ml-6 flex items-center space-x-3">
                <Link
                  to="/admission"
                  className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:from-emerald-600 hover:to-teal-700"
                >
                  Apply Now
                </Link>
              </div>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-3 rounded-xl hover:bg-emerald-50 transition-all duration-200 border border-gray-200"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X size={24} className="text-gray-700" />
              ) : (
                <Menu size={24} className="text-gray-700" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden transition-all duration-500 ${
            isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          } overflow-hidden bg-gradient-to-br from-white to-emerald-50 border-t border-emerald-100`}
        >
          <nav className="container mx-auto px-4 py-6 space-y-1">
            {navItems.map((item) => (
              <div key={item.name}>
                {item.dropdown ? (
                  <div>
                    <button
                      onClick={() => handleDropdownToggle(`mobile-${item.name}`)}
                      className={`w-full flex items-center justify-between px-4 py-4 rounded-xl font-medium transition-all duration-200 ${
                        location.pathname === item.path || activeDropdown === `mobile-${item.name}`
                          ? "text-emerald-600 bg-emerald-100 shadow-md"
                          : "text-gray-700 hover:text-emerald-600 hover:bg-emerald-50"
                      }`}
                    >
                      <span>{item.name}</span>
                      <ChevronDown
                        size={16}
                        className={`transition-transform duration-200 ${
                          activeDropdown === `mobile-${item.name}` ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {/* Mobile Dropdown */}
                    <div className={`overflow-hidden transition-all duration-300 ${
                      activeDropdown === `mobile-${item.name}` ? "max-h-48 mt-2" : "max-h-0"
                    }`}>
                      <div className="pl-4 space-y-1">
                        {item.dropdown.map((dropdownItem, index) => (
                          <Link
                            key={index}
                            to={dropdownItem.path}
                            onClick={() => {
                              setIsMenuOpen(false)
                              closeDropdown()
                            }}
                            className="flex items-center space-x-3 px-4 py-3 text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-all duration-200"
                          >
                            <div className="w-6 h-6 bg-emerald-100 rounded-lg flex items-center justify-center text-emerald-600">
                              {dropdownItem.icon}
                            </div>
                            <span className="font-medium">{dropdownItem.name}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className={`block px-4 py-4 rounded-xl font-medium transition-all duration-200 ${
                      location.pathname === item.path
                        ? "text-emerald-600 bg-emerald-100 shadow-md"
                        : "text-gray-700 hover:text-emerald-600 hover:bg-emerald-50"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}

            {/* Mobile CTA */}
            <div className="pt-4 border-t border-emerald-200 mt-4">
              <Link
                to="/admission"
                onClick={() => setIsMenuOpen(false)}
                className="block w-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-6 py-4 rounded-xl font-semibold text-center hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Apply Now
              </Link>
            </div>
          </nav>
        </div>
      </header>

      {/* Call Modal */}
      {showCallModal && (
        <div
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          onClick={() => setShowCallModal(false)}
        >
          <div
            className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl transform transition-all duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Contact Us</h3>
              <p className="text-gray-600 mb-6">Choose your preferred way to reach us</p>

              <div className="space-y-4">
                <a
                  href="tel:+919876543210"
                  className="flex items-center justify-between p-4 bg-emerald-50 rounded-xl hover:bg-emerald-100 transition-colors duration-200 group"
                >
                  <div className="flex items-center space-x-3">
                    <Phone size={20} className="text-emerald-600" />
                    <div className="text-left">
                      <div className="font-semibold text-gray-800">Main Office</div>
                      <div className="text-emerald-600">+91 98765 43210</div>
                    </div>
                  </div>
                  <div className="text-emerald-600 group-hover:translate-x-1 transition-transform duration-200">
                    →
                  </div>
                </a>

                <a
                  href="tel:+919876543211"
                  className="flex items-center justify-between p-4 bg-emerald-50 rounded-xl hover:bg-emerald-100 transition-colors duration-200 group"
                >
                  <div className="flex items-center space-x-3">
                    <Phone size={20} className="text-emerald-600" />
                    <div className="text-left">
                      <div className="font-semibold text-gray-800">Admissions</div>
                      <div className="text-emerald-600">+91 98765 43211</div>
                    </div>
                  </div>
                  <div className="text-emerald-600 group-hover:translate-x-1 transition-transform duration-200">
                    →
                  </div>
                </a>

                <a
                  href="tel:+919876543212"
                  className="flex items-center justify-between p-4 bg-emerald-50 rounded-xl hover:bg-emerald-100 transition-colors duration-200 group"
                >
                  <div className="flex items-center space-x-3">
                    <Phone size={20} className="text-emerald-600" />
                    <div className="text-left">
                      <div className="font-semibold text-gray-800">Emergency</div>
                      <div className="text-emerald-600">+91 98765 43212</div>
                    </div>
                  </div>
                  <div className="text-emerald-600 group-hover:translate-x-1 transition-transform duration-200">
                    →
                  </div>
                </a>
              </div>

              <button
                onClick={() => setShowCallModal(false)}
                className="mt-6 w-full bg-gray-100 hover:bg-gray-200 text-gray-800 py-3 rounded-xl font-semibold transition-colors duration-200"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Mail Modal */}
      {showMailModal && (
        <div
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          onClick={() => setShowMailModal(false)}
        >
          <div
            className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl transform transition-all duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Email Us</h3>
              <p className="text-gray-600 mb-6">Send us an email for any inquiries</p>

              <div className="space-y-4">
                <a
                  href="mailto:info@platinumacademy.edu"
                  className="flex items-center justify-between p-4 bg-emerald-50 rounded-xl hover:bg-emerald-100 transition-colors duration-200 group"
                >
                  <div className="flex items-center space-x-3">
                    <Mail size={20} className="text-emerald-600" />
                    <div className="text-left">
                      <div className="font-semibold text-gray-800">General Inquiries</div>
                      <div className="text-emerald-600 text-sm">info@platinumacademy.edu</div>
                    </div>
                  </div>
                  <div className="text-emerald-600 group-hover:translate-x-1 transition-transform duration-200">
                    →
                  </div>
                </a>

                <a
                  href="mailto:admissions@platinumacademy.edu"
                  className="flex items-center justify-between p-4 bg-emerald-50 rounded-xl hover:bg-emerald-100 transition-colors duration-200 group"
                >
                  <div className="flex items-center space-x-3">
                    <Mail size={20} className="text-emerald-600" />
                    <div className="text-left">
                      <div className="font-semibold text-gray-800">Admissions</div>
                      <div className="text-emerald-600 text-sm">admissions@platinumacademy.edu</div>
                    </div>
                  </div>
                  <div className="text-emerald-600 group-hover:translate-x-1 transition-transform duration-200">
                    →
                  </div>
                </a>

                <a
                  href="mailto:careers@platinumacademy.edu"
                  className="flex items-center justify-between p-4 bg-emerald-50 rounded-xl hover:bg-emerald-100 transition-colors duration-200 group"
                >
                  <div className="flex items-center space-x-3">
                    <Mail size={20} className="text-emerald-600" />
                    <div className="text-left">
                      <div className="font-semibold text-gray-800">Careers</div>
                      <div className="text-emerald-600 text-sm">careers@platinumacademy.edu</div>
                    </div>
                  </div>
                  <div className="text-emerald-600 group-hover:translate-x-1 transition-transform duration-200">
                    →
                  </div>
                </a>

                <a
                  href="mailto:support@platinumacademy.edu"
                  className="flex items-center justify-between p-4 bg-emerald-50 rounded-xl hover:bg-emerald-100 transition-colors duration-200 group"
                >
                  <div className="flex items-center space-x-3">
                    <Mail size={20} className="text-emerald-600" />
                    <div className="text-left">
                      <div className="font-semibold text-gray-800">Technical Support</div>
                      <div className="text-emerald-600 text-sm">support@platinumacademy.edu</div>
                    </div>
                  </div>
                  <div className="text-emerald-600 group-hover:translate-x-1 transition-transform duration-200">
                    →
                  </div>
                </a>
              </div>

              <button
                onClick={() => setShowMailModal(false)}
                className="mt-6 w-full bg-gray-100 hover:bg-gray-200 text-gray-800 py-3 rounded-xl font-semibold transition-colors duration-200"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Header
