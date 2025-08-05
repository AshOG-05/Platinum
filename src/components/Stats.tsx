import type React from "react"
import { TrendingUp, Users, Award, BookOpen, Trophy, Globe, Heart, Star } from "lucide-react"

const Stats: React.FC = () => {
  const stats = [
    {
      icon: <Users size={40} />,
      number: "2500+",
      label: "Happy Students",
      description: "Active learners across all grades",
      color: "from-emerald-500 to-teal-500",
    },
    {
      icon: <Award size={40} />,
      number: "98%",
      label: "Success Rate",
      description: "CBSE board exam pass percentage",
      color: "from-amber-500 to-orange-500",
    },
    {
      icon: <BookOpen size={40} />,
      number: "120+",
      label: "Expert Faculty",
      description: "Qualified and experienced educators",
      color: "from-blue-500 to-indigo-500",
    },
    {
      icon: <TrendingUp size={40} />,
      number: "29+",
      label: "Years of Excellence",
      description: "Serving the community since 1995",
      color: "from-violet-500 to-purple-500",
    },
    {
      icon: <Trophy size={40} />,
      number: "500+",
      label: "Awards Won",
      description: "Academic and sports achievements",
      color: "from-rose-500 to-pink-500",
    },
    {
      icon: <Globe size={40} />,
      number: "15+",
      label: "Countries",
      description: "International collaborations",
      color: "from-cyan-500 to-blue-500",
    },
    {
      icon: <Heart size={40} />,
      number: "100%",
      label: "Parent Satisfaction",
      description: "Based on annual surveys",
      color: "from-red-500 to-rose-500",
    },
    {
      icon: <Star size={40} />,
      number: "A+",
      label: "CBSE Rating",
      description: "Excellent infrastructure rating",
      color: "from-indigo-500 to-purple-500",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-emerald-50 to-teal-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
            Our Achievements
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Numbers that speak for our commitment to excellence and quality education
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div
                className={`w-20 h-20 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center text-white mx-auto mb-6 shadow-lg`}
              >
                {stat.icon}
              </div>
              <div className="text-4xl font-bold text-gray-800 mb-2">{stat.number}</div>
              <div className="text-xl font-semibold text-emerald-600 mb-2">{stat.label}</div>
              <p className="text-gray-600 text-sm">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats
