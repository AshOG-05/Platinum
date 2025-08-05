import type React from "react"
import { Link } from "react-router-dom"
import { ArrowRight, Play, Award, Users, BookOpen, Star } from "lucide-react"

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-400 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-400 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-400 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium mb-6">
              <Star className="mr-2" size={16} />
              CBSE Affiliated • Est. 1995
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Empowering Minds,
              <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent block">
                Shaping Futures
              </span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl">
              At Platinum Academy, we provide world-class education that nurtures creativity, critical thinking, and
              character development. Join us in building tomorrow's innovators and leaders.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link
                to="/admission"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold rounded-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <span>Start Admission</span>
                <ArrowRight className="ml-2" size={20} />
              </Link>
              <button className="inline-flex items-center justify-center px-8 py-4 border-2 border-emerald-500 text-emerald-600 font-semibold rounded-xl hover:bg-emerald-50 transition-all duration-300">
                <Play className="mr-2" size={20} />
                Virtual Tour
              </button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start">
                <Award className="text-emerald-500 mr-3" size={24} />
                <div>
                  <div className="text-2xl font-bold text-gray-800">29+</div>
                  <div className="text-sm text-gray-600">Years Excellence</div>
                </div>
              </div>
              <div className="flex items-center justify-center lg:justify-start">
                <Users className="text-emerald-500 mr-3" size={24} />
                <div>
                  <div className="text-2xl font-bold text-gray-800">3000+</div>
                  <div className="text-sm text-gray-600">Students</div>
                </div>
              </div>
              <div className="flex items-center justify-center lg:justify-start">
                <BookOpen className="text-emerald-500 mr-3" size={24} />
                <div>
                  <div className="text-2xl font-bold text-gray-800">95%</div>
                  <div className="text-sm text-gray-600">Success Rate</div>
                </div>
              </div>
            </div>
          </div>

          {/* Image/Visual */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-emerald-100 to-teal-100 rounded-3xl p-8 shadow-2xl">
              <img
                src="/placeholder.svg?height=500&width=600&text=Students+Learning"
                alt="Students in classroom"
                className="w-full h-96 object-cover rounded-2xl shadow-lg"
              />

              {/* Floating Cards */}
              <div className="absolute -top-4 -left-4 bg-white p-4 rounded-2xl shadow-xl">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  <span className="text-sm font-medium">Live Classes</span>
                </div>
              </div>

              <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-2xl shadow-xl">
                <div className="text-center">
                  <div className="text-2xl font-bold text-emerald-600">A+</div>
                  <div className="text-xs text-gray-600">Grade Average</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
