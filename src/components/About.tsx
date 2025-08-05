import type React from "react"
import { CheckCircle } from "lucide-react"

const About: React.FC = () => {
  const achievements = [
    "CBSE Affiliated Institution",
    "State-of-the-art Infrastructure",
    "Experienced Faculty Team",
    "Modern Teaching Methods",
    "Sports & Cultural Activities",
    "Career Guidance Programs",
  ]

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              About Jawahar Vidya Mandir
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Since our foundation, we have been dedicated to providing excellent education that goes beyond textbooks.
              Our mission is to nurture young minds and help them develop into confident, capable, and compassionate
              individuals.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              We believe that education should be holistic, incorporating academic excellence with character
              development, creativity, and critical thinking skills that prepare students for the challenges of
              tomorrow.
            </p>

            {/* Achievements List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="text-green-500 flex-shrink-0" size={20} />
                  <span className="text-gray-700">{achievement}</span>
                </div>
              ))}
            </div>

            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-200 transform hover:scale-105">
              Learn More About Us
            </button>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative z-10 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-8">
              <img
                src="/modern-school-students.png"
                alt="School Building"
                className="w-full h-80 object-cover rounded-xl shadow-lg"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-orange-400 to-red-500 rounded-full opacity-20"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
