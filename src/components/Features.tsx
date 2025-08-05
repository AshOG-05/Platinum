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
    },
    {
      icon: <Trophy size={32} />,
      title: "Achievement Focus",
      description: "Consistent top results in board exams and competitive entrance tests with 95% success rate.",
      color: "from-amber-500 to-orange-500",
      bgColor: "bg-amber-50",
    },
    {
      icon: <Heart size={32} />,
      title: "Holistic Development",
      description: "Focus on emotional, social, and physical development alongside academic growth.",
      color: "from-rose-500 to-pink-500",
      bgColor: "bg-rose-50",
    },
    {
      icon: <Lightbulb size={32} />,
      title: "Innovation & Creativity",
      description: "Modern labs, smart classrooms, and project-based learning to foster innovation.",
      color: "from-violet-500 to-purple-500",
      bgColor: "bg-violet-50",
    },
    {
      icon: <Users size={32} />,
      title: "Expert Faculty",
      description: "Highly qualified and experienced teachers dedicated to student success.",
      color: "from-blue-500 to-indigo-500",
      bgColor: "bg-blue-50",
    },
    {
      icon: <BookOpen size={32} />,
      title: "Rich Resources",
      description: "Well-equipped library, digital resources, and modern infrastructure.",
      color: "from-cyan-500 to-teal-500",
      bgColor: "bg-cyan-50",
    },
    {
      icon: <Microscope size={32} />,
      title: "STEM Excellence",
      description: "Advanced Science, Technology, Engineering, and Mathematics programs with hands-on learning.",
      color: "from-purple-500 to-indigo-500",
      bgColor: "bg-purple-50",
    },
    {
      icon: <Palette size={32} />,
      title: "Creative Arts",
      description: "Comprehensive arts program including visual arts, drama, and creative writing workshops.",
      color: "from-pink-500 to-rose-500",
      bgColor: "bg-pink-50",
    },
    {
      icon: <Music size={32} />,
      title: "Music & Dance",
      description: "Professional training in Indian and Western music, classical and contemporary dance forms.",
      color: "from-indigo-500 to-purple-500",
      bgColor: "bg-indigo-50",
    },
    {
      icon: <Shield size={32} />,
      title: "Safe Environment",
      description: "24/7 security, CCTV monitoring, and comprehensive safety protocols for student welfare.",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50",
    },
    {
      icon: <Wifi size={32} />,
      title: "Smart Classrooms",
      description: "Digital learning with interactive whiteboards, tablets, and high-speed internet connectivity.",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
    },
    {
      icon: <Bus size={32} />,
      title: "Transport Facility",
      description: "Safe and reliable transportation covering all major areas with GPS tracking and trained drivers.",
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
            Why Choose Platinum Academy?
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
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div
                className={`w-16 h-16 ${feature.bgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <div className={`bg-gradient-to-r ${feature.color} bg-clip-text text-transparent`}>{feature.icon}</div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800 group-hover:text-emerald-600 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
