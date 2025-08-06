import type React from "react"
import { Link } from "react-router-dom"
import Hero from "../components/Hero"
import Features from "../components/Features"
import Stats from "../components/Stats"
import { ArrowRight, BookOpen, Users, Award, Camera } from "lucide-react"

const Home: React.FC = () => {
  const quickLinks = [
    {
      title: "Academic Programs",
      description: "Explore our comprehensive curriculum from primary to senior secondary",
      link: "/academics",
      icon: <BookOpen size={32} />,
      color: "from-blue-500 to-indigo-500"
    },
    {
      title: "Our Faculty",
      description: "Meet our experienced and dedicated teaching professionals",
      link: "/faculty",
      icon: <Users size={32} />,
      color: "from-emerald-500 to-teal-500"
    },
    {
      title: "Facilities",
      description: "Discover our world-class infrastructure and learning environments",
      link: "/facilities",
      icon: <Award size={32} />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Gallery",
      description: "View photos and videos of our vibrant school life",
      link: "/gallery",
      icon: <Camera size={32} />,
      color: "from-orange-500 to-red-500"
    }
  ]

  return (
    <div>
      <Hero />
      <Features />
      <Stats />

      {/* Quick Links Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-emerald-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Explore <span className="text-emerald-600">Brightwood Academy</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover what makes our school special through our comprehensive programs,
              dedicated faculty, modern facilities, and vibrant community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {quickLinks.map((item, index) => (
              <Link
                key={index}
                to={item.link}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{item.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{item.description}</p>
                <div className="flex items-center text-emerald-600 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                  <span>Learn More</span>
                  <ArrowRight size={16} className="ml-2" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-emerald-500 to-teal-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Join Our Community?</h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
            Take the first step towards your child's bright future at Brightwood Academy.
            Our admissions team is here to guide you through the process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/admission"
              className="bg-white text-emerald-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-300 transform hover:scale-105"
            >
              Apply for Admission
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-emerald-600 transition-colors duration-300"
            >
              Schedule a Visit
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
