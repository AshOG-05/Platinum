import type React from "react"
import { Microscope, Monitor, BookOpen, Utensils, Bus, Shield, Wifi, Camera, Heart, Gamepad2, Music, Palette } from "lucide-react"

const Facilities: React.FC = () => {
  const mainFacilities = [
    {
      icon: Microscope,
      title: "Science Laboratories",
      description: "State-of-the-art Physics, Chemistry, and Biology labs with modern equipment and safety protocols for hands-on learning.",
      features: ["Digital microscopes", "Interactive models", "Safety equipment", "Research facilities", "Modern instruments"],
      image: "https://images.unsplash.com/photo-1605781645799-c9c7d820b4ac?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      capacity: "30 students per lab",
      area: "1500 sq ft",
    },
    {
      icon: Monitor,
      title: "Computer Laboratories",
      description: "Modern computer labs with latest hardware and software for programming, digital literacy, and technology education.",
      features: ["Latest computers", "High-speed internet", "Programming software", "Robotics kits", "AI/ML tools"],
      image: "https://images.unsplash.com/photo-1719159381981-1327b22aff9b?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      capacity: "40 students per lab",
      area: "1200 sq ft",
    },
    {
      icon: BookOpen,
      title: "Library & Resource Center",
      description: "Extensive collection of books, digital resources, and quiet study spaces for research and independent learning.",
      features: ["50,000+ books", "Digital library", "Study rooms", "Research databases", "E-books access"],
      image: "https://images.unsplash.com/photo-1598618589929-b1433d05cfc6?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      capacity: "200 students",
      area: "3000 sq ft",
    },
    {
      icon: Gamepad2,
      title: "Sports Complex",
      description: "Olympic-standard sports facilities including swimming pool, courts, and professional coaching for various sports.",
      features: ["Swimming pool", "Basketball courts", "Football ground", "Indoor games", "Gymnasium"],
      image: "https://images.unsplash.com/photo-1527767654427-1790d8ff3745?q=80&w=2148&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      capacity: "500+ students",
      area: "5 acres",
    },
    {
      icon: Music,
      title: "Performing Arts Center",
      description: "Dedicated spaces for music, dance, and drama with professional equipment and acoustic design.",
      features: ["Music rooms", "Dance studio", "Recording studio", "Instruments", "Sound system"],
      image: "https://images.unsplash.com/photo-1527767654427-1790d8ff3745?q=80&w=2148&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      capacity: "100 students",
      area: "2000 sq ft",
    },
    {
      icon: Palette,
      title: "Art & Craft Studios",
      description: "Creative spaces equipped with art supplies, pottery wheels, and exhibition areas for artistic expression.",
      features: ["Art supplies", "Pottery wheels", "Exhibition space", "Digital art tools", "Craft materials"],
      image: "https://plus.unsplash.com/premium_photo-1683121107354-804160f78eb8?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      capacity: "25 students per studio",
      area: "800 sq ft",
    },
  ]

  const supportFacilities = [
    {
      icon: Utensils,
      title: "Cafeteria & Kitchen",
      description: "Hygienic kitchen and spacious cafeteria serving nutritious meals and healthy snacks.",
      features: ["Nutritious meals", "Hygienic preparation", "Dietary options", "Fresh ingredients"],
    },
    {
      icon: Heart,
      title: "Medical Center",
      description: "On-campus medical facility with qualified nurses and tie-ups with nearby hospitals.",
      features: ["Qualified nurses", "First aid", "Health checkups", "Emergency care"],
    },
    {
      icon: Bus,
      title: "Transportation",
      description: "Safe and reliable bus service covering major areas with GPS tracking and trained drivers.",
      features: ["GPS tracking", "Trained drivers", "Safety protocols", "Route coverage"],
    },
    {
      icon: Shield,
      title: "Security System",
      description: "24/7 security with CCTV monitoring, access control, and emergency response systems.",
      features: ["CCTV monitoring", "Access control", "Security guards", "Emergency response"],
    },
    {
      icon: Wifi,
      title: "Smart Campus",
      description: "High-speed Wi-Fi, smart classrooms, digital attendance, and online learning platforms.",
      features: ["High-speed Wi-Fi", "Smart boards", "Digital systems", "Online platforms"],
    },
    {
      icon: Camera,
      title: "Digital Learning",
      description: "Interactive whiteboards, tablets, educational apps, and virtual reality learning experiences.",
      features: ["Interactive boards", "Tablets", "Educational apps", "VR experiences"],
    },
  ]

  const stats = [
    { number: "50+", label: "Classrooms", description: "Smart and well-ventilated" },
    { number: "15+", label: "Laboratories", description: "Modern and well-equipped" },
    { number: "5", label: "Sports Grounds", description: "Olympic standard facilities" },
    { number: "24/7", label: "Security", description: "Round the clock safety" },
  ]

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
            World-Class Facilities
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
            Our modern infrastructure and state-of-the-art facilities create an ideal environment for learning, 
            growth, and overall development of our students in a safe and inspiring atmosphere.
          </p>
        </div>
      </section>

      {/* Facilities Stats */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="text-4xl font-bold text-emerald-600 mb-2">{stat.number}</div>
                <div className="text-xl font-semibold text-gray-800 mb-2">{stat.label}</div>
                <p className="text-gray-600 text-sm">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Facilities */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-emerald-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Academic <span className="text-emerald-600">Facilities</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive academic facilities provide students with the tools and environment needed for excellence in learning.
            </p>
          </div>

          <div className="space-y-16">
            {mainFacilities.map((facility, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <div className="bg-white rounded-2xl p-8 shadow-lg">
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mr-4">
                        <facility.icon className="w-8 h-8 text-emerald-600" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-800">{facility.title}</h3>
                        <div className="flex gap-4 text-sm text-gray-600 mt-1">
                          <span>Capacity: {facility.capacity}</span>
                          <span>Area: {facility.area}</span>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">{facility.description}</p>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-3">Key Features:</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {facility.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center text-gray-600">
                            <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className={index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}>
                  <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                    <img
                      src={facility.image}
                      alt={facility.title}
                      className="w-full h-80 object-cover hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Facilities */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Support <span className="text-emerald-600">Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Additional facilities and services that ensure student safety, comfort, and comprehensive development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {supportFacilities.map((facility, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6">
                  <facility.icon className="w-8 h-8 text-emerald-600" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 mb-4">{facility.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{facility.description}</p>
                
                <div className="space-y-2">
                  {facility.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-3"></div>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Virtual Tour CTA */}
      <section className="py-20 bg-gradient-to-r from-emerald-500 to-teal-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Experience Our Campus</h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
            Schedule a visit to see our world-class facilities in person and experience the Platinum Academy difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-emerald-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-300">
              Schedule Campus Tour
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-emerald-600 transition-colors duration-300">
              Virtual Tour
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Facilities
