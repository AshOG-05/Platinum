import type React from "react"
import { Microscope, Monitor, BookOpen, Utensils, Bus, Shield, Wifi, Camera, Heart, Gamepad2 } from "lucide-react"

const Facilities: React.FC = () => {
  const facilities = [
    {
      icon: Microscope,
      title: "Science Laboratories",
      description: "State-of-the-art Physics, Chemistry, and Biology labs with modern equipment and safety protocols.",
      features: ["Digital microscopes", "Interactive models", "Safety equipment", "Research facilities"],
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400&h=300&fit=crop&crop=center",
    },
    {
      icon: Monitor,
      title: "Computer Labs",
      description: "Modern computer labs with latest hardware and software for programming and digital literacy.",
      features: ["Latest computers", "High-speed internet", "Programming software", "Robotics kits"],
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop&crop=center",
    },
    {
      icon: BookOpen,
      title: "Library & Resource Center",
      description: "Extensive collection of books, digital resources, and quiet study spaces for research and reading.",
      features: ["50,000+ books", "Digital library", "Study rooms", "Research databases"],
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop&crop=center",
    },
    {
      icon: Gamepad2,
      title: "Sports Complex",
      description: "Olympic-standard sports facilities including swimming pool, courts, and professional coaching.",
      features: ["Swimming pool", "Basketball courts", "Football ground", "Indoor games"],
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop&crop=center",
    },
    {
      icon: Utensils,
      title: "Cafeteria & Kitchen",
      description: "Hygienic kitchen and spacious cafeteria serving nutritious meals and healthy snacks.",
      features: ["Nutritious meals", "Hygienic preparation", "Dietary options", "Fresh ingredients"],
      image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop&crop=center",
    },
    {
      icon: Heart,
      title: "Medical Center",
      description: "On-campus medical facility with qualified nurses and tie-ups with nearby hospitals.",
      features: ["Qualified nurses", "First aid", "Health checkups", "Emergency care"],
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop&crop=center",
    },
  ]

  const additionalFeatures = [
    {
      icon: Bus,
      title: "Transportation",
      description: "Safe and reliable bus service covering major areas with GPS tracking and trained drivers.",
    },
    {
      icon: Shield,
      title: "Security",
      description: "24/7 security with CCTV monitoring, access control, and emergency response systems.",
    },
    {
      icon: Wifi,
      title: "Smart Campus",
      description: "High-speed Wi-Fi, smart classrooms, digital attendance, and online learning platforms.",
    },
    {
      icon: Camera,
      title: "Digital Learning",
      description: "Interactive whiteboards, tablets, educational apps, and virtual reality learning experiences.",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            World-Class <span className="text-emerald-600">Facilities</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our modern infrastructure and state-of-the-art facilities create an ideal environment for learning,
            growth, and overall development of our students.
          </p>
        </div>

        {/* Main Facilities */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {facilities.map((facility, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <img
                  src={facility.image}
                  alt={facility.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-xl p-3">
                  <facility.icon className="w-6 h-6 text-emerald-600" />
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{facility.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{facility.description}</p>

                <div>
                  <h4 className="text-sm font-semibold text-gray-800 mb-3">Key Features:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {facility.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Features */}
        <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">Additional Features</h3>
            <p className="text-lg text-gray-600">
              Supporting infrastructure that ensures safety, connectivity, and modern learning experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalFeatures.map((feature, index) => (
              <div
                key={index}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-4 mx-auto shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                  <feature.icon className="w-8 h-8 text-emerald-600" />
                </div>
                <h4 className="text-lg font-bold text-gray-800 mb-2">{feature.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Facilities
