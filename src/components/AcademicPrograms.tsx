import type React from "react"
import { BookOpen, Calculator, Globe, Beaker, Palette, Music, Trophy, Code } from "lucide-react"

const AcademicPrograms: React.FC = () => {
  const programs = [
    {
      icon: BookOpen,
      title: "Primary Education",
      grades: "Classes I - V",
      description: "Foundation building with focus on basic literacy, numeracy, and life skills through play-based learning.",
      subjects: ["English", "Hindi", "Mathematics", "EVS", "Art & Craft", "Physical Education"],
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
    },
    {
      icon: Calculator,
      title: "Middle School",
      grades: "Classes VI - VIII",
      description: "Comprehensive curriculum introducing specialized subjects and developing analytical thinking.",
      subjects: ["English", "Hindi", "Mathematics", "Science", "Social Science", "Computer Science"],
      color: "from-emerald-500 to-teal-500",
      bgColor: "bg-emerald-50",
    },
    {
      icon: Beaker,
      title: "Secondary Education",
      grades: "Classes IX - X",
      description: "CBSE board preparation with emphasis on conceptual understanding and practical application.",
      subjects: ["English", "Hindi", "Mathematics", "Science", "Social Science", "Computer Applications"],
      color: "from-purple-500 to-indigo-500",
      bgColor: "bg-purple-50",
    },
    {
      icon: Globe,
      title: "Senior Secondary - Science",
      grades: "Classes XI - XII",
      description: "Advanced science stream preparing students for engineering and medical entrance exams.",
      subjects: ["Physics", "Chemistry", "Mathematics", "Biology", "English", "Computer Science"],
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50",
    },
    {
      icon: Calculator,
      title: "Senior Secondary - Commerce",
      grades: "Classes XI - XII",
      description: "Commerce stream focusing on business studies, economics, and accounting principles.",
      subjects: ["Accountancy", "Business Studies", "Economics", "Mathematics", "English", "Computer Applications"],
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50",
    },
    {
      icon: Palette,
      title: "Senior Secondary - Arts",
      grades: "Classes XI - XII",
      description: "Humanities stream developing critical thinking and creative expression skills.",
      subjects: ["History", "Geography", "Political Science", "Psychology", "English", "Fine Arts"],
      color: "from-pink-500 to-rose-500",
      bgColor: "bg-pink-50",
    },
  ]

  const specialPrograms = [
    {
      icon: Code,
      title: "Coding & Robotics",
      description: "Programming languages, robotics, and AI fundamentals for future tech leaders.",
      color: "from-violet-500 to-purple-500",
    },
    {
      icon: Music,
      title: "Performing Arts",
      description: "Music, dance, drama, and public speaking to build confidence and creativity.",
      color: "from-indigo-500 to-blue-500",
    },
    {
      icon: Trophy,
      title: "Sports Excellence",
      description: "Professional coaching in cricket, football, basketball, swimming, and athletics.",
      color: "from-amber-500 to-orange-500",
    },
    {
      icon: Globe,
      title: "International Programs",
      description: "Exchange programs, international competitions, and global certification courses.",
      color: "from-teal-500 to-cyan-500",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4">
        {/* Academic Programs */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Academic <span className="text-emerald-600">Programs</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive curriculum designed to nurture intellectual growth and prepare students for higher education and career success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {programs.map((program, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className={`w-16 h-16 ${program.bgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <program.icon className={`w-8 h-8 bg-gradient-to-r ${program.color} bg-clip-text text-transparent`} />
              </div>
              
              <div className="mb-4">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{program.title}</h3>
                <span className="text-sm font-medium text-emerald-600 bg-emerald-100 px-3 py-1 rounded-full">
                  {program.grades}
                </span>
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed">{program.description}</p>
              
              <div>
                <h4 className="text-sm font-semibold text-gray-800 mb-3">Key Subjects:</h4>
                <div className="flex flex-wrap gap-2">
                  {program.subjects.map((subject, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-md"
                    >
                      {subject}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Special Programs */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Special <span className="text-emerald-600">Programs</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Beyond academics, we offer specialized programs to develop well-rounded personalities and future-ready skills.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {specialPrograms.map((program, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                <program.icon className={`w-8 h-8 bg-gradient-to-r ${program.color} bg-clip-text text-transparent`} />
              </div>
              
              <h3 className="text-lg font-bold text-gray-800 mb-3">{program.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{program.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AcademicPrograms
