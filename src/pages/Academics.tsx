import type React from "react"
import { BookOpen, Award, Users, Clock, CheckCircle, Star } from "lucide-react"

const Academics: React.FC = () => {
  const programs = [
    {
      level: "Primary Education",
      classes: "Classes I - V",
      description: "Foundation building with focus on basic literacy, numeracy, and life skills development.",
      subjects: ["English", "Hindi", "Mathematics", "Environmental Studies", "Art & Craft", "Physical Education"],
      color: "from-blue-500 to-indigo-500",
    },
    {
      level: "Middle School",
      classes: "Classes VI - VIII",
      description: "Comprehensive curriculum introducing specialized subjects and critical thinking skills.",
      subjects: ["English", "Hindi", "Mathematics", "Science", "Social Studies", "Computer Science", "Art Education"],
      color: "from-emerald-500 to-teal-500",
    },
    {
      level: "Secondary Education",
      classes: "Classes IX - X",
      description: "CBSE board preparation with emphasis on conceptual understanding and practical application.",
      subjects: [
        "English",
        "Hindi",
        "Mathematics",
        "Science",
        "Social Science",
        "Computer Applications",
        "Physical Education",
      ],
      color: "from-purple-500 to-pink-500",
    },
    {
      level: "Senior Secondary",
      classes: "Classes XI - XII",
      description: "Specialized streams preparing students for higher education and competitive examinations.",
      subjects: ["Science Stream", "Commerce Stream", "Arts Stream"],
      color: "from-amber-500 to-orange-500",
    },
  ]

  const facilities = [
    {
      icon: <BookOpen size={32} />,
      title: "Smart Classrooms",
      description: "Interactive digital boards and modern teaching aids for enhanced learning experience.",
    },
    {
      icon: <Award size={32} />,
      title: "Science Labs",
      description: "Well-equipped Physics, Chemistry, and Biology labs with modern instruments.",
    },
    {
      icon: <Users size={32} />,
      title: "Computer Lab",
      description: "Latest computers with high-speed internet for digital literacy and programming.",
    },
    {
      icon: <Clock size={32} />,
      title: "Library",
      description: "Extensive collection of books, journals, and digital resources for research.",
    },
  ]

  const achievements = [
    { metric: "95%", label: "Board Pass Rate", description: "Consistent excellent results in CBSE examinations" },
    { metric: "50+", label: "Subject Toppers", description: "Students achieving 95+ marks in various subjects" },
    {
      metric: "200+",
      label: "Merit Certificates",
      description: "Recognition for academic excellence and participation",
    },
    { metric: "15+", label: "Olympiad Winners", description: "National and international competition achievements" },
  ]

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
            Academic Excellence
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
            Our comprehensive CBSE curriculum is designed to foster critical thinking, creativity, and character
            development while preparing students for academic success and future challenges.
          </p>
        </div>
      </section>

      {/* Academic Programs */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
            Academic Programs
          </h2>
          <div className="space-y-12">
            {programs.map((program, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <div
                    className={`inline-flex items-center px-4 py-2 bg-gradient-to-r ${program.color} text-white rounded-full text-sm font-medium mb-4`}
                  >
                    <Star className="mr-2" size={16} />
                    {program.classes}
                  </div>
                  <h3 className="text-3xl font-bold mb-4 text-gray-800">{program.level}</h3>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">{program.description}</p>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-800 mb-3">Key Subjects:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {program.subjects.map((subject, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="text-emerald-500 flex-shrink-0" size={16} />
                          <span className="text-gray-700">{subject}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className={index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}>
                  <div
                    className={`bg-gradient-to-br ${program.color.replace("from-", "from-").replace("to-", "to-")} bg-opacity-10 rounded-3xl p-8 shadow-lg`}
                  >
                    <img
                      src={`/placeholder_image.png?height=300&width=400&text=${program.level.replace(" ", "+")}`}
                      alt={program.level}
                      className="w-full h-64 object-cover rounded-2xl shadow-lg"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Facilities */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-emerald-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
            Learning Facilities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {facilities.map((facility, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center text-white mx-auto mb-6 shadow-lg">
                  {facility.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">{facility.title}</h3>
                <p className="text-gray-600 leading-relaxed">{facility.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Achievements */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
            Academic Achievements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="text-4xl font-bold text-emerald-600 mb-2">{achievement.metric}</div>
                <div className="text-xl font-semibold text-gray-800 mb-2">{achievement.label}</div>
                <p className="text-gray-600 text-sm leading-relaxed">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Academics
