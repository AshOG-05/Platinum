import type React from "react"
import { GraduationCap, Trophy, Heart, Lightbulb, Users, BookOpen, Microscope, Palette, Music, Shield, Wifi, Bus } from "lucide-react"

const Features: React.FC = () => {
  const features = [
    {
      icon: <GraduationCap size={32} />,
      title: "Academic Excellence",
      description: "CBSE curriculum with innovative teaching methods and personalized attention for every student.",
      color: "from-emerald-500 to-teal-500",
      bgColor: "bg-emerald-50",
      image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=400&h=300&fit=crop&crop=center",
    },
    {
      icon: <Trophy size={32} />,
      title: "Achievement Focus",
      description: "Consistent top results in board exams and competitive entrance tests with 95% success rate.",
      color: "from-amber-500 to-orange-500",
      bgColor: "bg-amber-50",
      image: "/modern-school-students.png",
    },
    {
      icon: <Heart size={32} />,
      title: "Holistic Development",
      description: "Focus on emotional, social, and physical development alongside academic growth.",
      color: "from-rose-500 to-pink-500",
      bgColor: "bg-rose-50",
      image: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=400&h=300&fit=crop&crop=center",
    },
    {
      icon: <Lightbulb size={32} />,
      title: "Innovation & Creativity",
      description: "Modern labs, smart classrooms, and project-based learning to foster innovation.",
      color: "from-violet-500 to-purple-500",
      bgColor: "bg-violet-50",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop&crop=center",
    },
    {
      icon: <Users size={32} />,
      title: "Expert Faculty",
      description: "Highly qualified and experienced teachers dedicated to student success.",
      color: "from-blue-500 to-indigo-500",
      bgColor: "bg-blue-50",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=300&fit=crop&crop=face",
    },
    {
      icon: <BookOpen size={32} />,
      title: "Rich Resources",
      description: "Well-equipped library, digital resources, and modern infrastructure.",
      color: "from-cyan-500 to-teal-500",
      bgColor: "bg-cyan-50",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop&crop=center",
    },
    {
      icon: <Microscope size={32} />,
      title: "STEM Excellence",
      description: "Advanced Science, Technology, Engineering, and Mathematics programs with hands-on learning.",
      color: "from-purple-500 to-indigo-500",
      bgColor: "bg-purple-50",
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400&h=300&fit=crop&crop=center",
    },
    {
      icon: <Palette size={32} />,
      title: "Creative Arts",
      description: "Comprehensive arts program including visual arts, drama, and creative writing workshops.",
      color: "from-pink-500 to-rose-500",
      bgColor: "bg-pink-50",
      image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=300&fit=crop&crop=center",
    },
    {
      icon: <Music size={32} />,
      title: "Music & Dance",
      description: "Professional training in Indian and Western music, classical and contemporary dance forms.",
      color: "from-indigo-500 to-purple-500",
      bgColor: "bg-indigo-50",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop&crop=center",
    },
    {
      icon: <Shield size={32} />,
      title: "Safe Environment",
      description: "24/7 security, CCTV monitoring, and comprehensive safety protocols for student welfare.",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop&crop=center",
    },
    {
      icon: <Wifi size={32} />,
      title: "Smart Classrooms",
      description: "Digital learning with interactive whiteboards, tablets, and high-speed internet connectivity.",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop&crop=center",
    },
    {
      icon: <Bus size={32} />,
      title: "Transport Facility",
      description: "Safe and reliable transportation covering all major areas with GPS tracking and trained drivers.",
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50",
      image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=400&h=300&fit=crop&crop=center",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
            Why Choose Brightwood Academy?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We are committed to providing world-class education that prepares students for success in academics, career,
            and life with our proven track record of excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-white via-gray-50 to-emerald-50/30 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 hover:border-emerald-200"
            >
              {/* Feature Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                <div
                  className={`absolute top-4 left-4 w-12 h-12 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  <div className="text-white">
                    {feature.icon}
                  </div>
                </div>
                {/* Decorative corner accent */}
                <div className={`absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl ${feature.color} opacity-20 rounded-bl-2xl`}></div>
              </div>

              {/* Feature Content */}
              <div className="p-6 relative">
                {/* Enhanced decorative element */}
                <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${feature.color} rounded-t-lg`}></div>

                {/* Subtle background pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className={`w-full h-full bg-gradient-to-br ${feature.color}`}></div>
                </div>

                <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-emerald-600 transition-colors duration-300 relative z-10">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm mb-4 relative z-10">{feature.description}</p>

                {/* Enhanced learn more button */}
                <div className="flex items-center text-emerald-600 font-medium text-sm group-hover:translate-x-2 transition-transform duration-300 relative z-10">
                  <span>Learn More</span>
                  <svg className="w-4 h-4 ml-2 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
