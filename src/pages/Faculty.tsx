import type React from "react"
import { GraduationCap, Award, BookOpen, Users, Star, Mail, Phone } from "lucide-react"

const Faculty: React.FC = () => {
  const facultyMembers = [
    {
      name: "Dr. Priya Sharma",
      position: "Principal",
      qualification: "Ph.D. in Education, M.Ed.",
      experience: "25+ years",
      subjects: ["Educational Leadership", "Curriculum Development"],
      image: "/placeholder.svg?height=300&width=300&text=Dr.+Priya+Sharma",
      email: "principal@platinumacademy.edu",
      phone: "+91 98765 43210",
      achievements: ["Best Principal Award 2023", "Educational Excellence Award"],
    },
    {
      name: "Mr. Rajesh Kumar",
      position: "Vice Principal",
      qualification: "M.Sc. Mathematics, B.Ed.",
      experience: "20+ years",
      subjects: ["Mathematics", "Physics"],
      image: "/placeholder.svg?height=300&width=300&text=Mr.+Rajesh+Kumar",
      email: "vp@platinumacademy.edu",
      phone: "+91 98765 43211",
      achievements: ["Mathematics Excellence Award", "Best Teacher 2022"],
    },
    {
      name: "Ms. Anita Verma",
      position: "Head of English Department",
      qualification: "M.A. English Literature, B.Ed.",
      experience: "18+ years",
      subjects: ["English Literature", "Creative Writing"],
      image: "/placeholder.svg?height=300&width=300&text=Ms.+Anita+Verma",
      email: "english@platinumacademy.edu",
      phone: "+91 98765 43212",
      achievements: ["Literary Excellence Award", "Best English Teacher"],
    },
    {
      name: "Dr. Suresh Patel",
      position: "Head of Science Department",
      qualification: "Ph.D. Chemistry, M.Sc.",
      experience: "22+ years",
      subjects: ["Chemistry", "Environmental Science"],
      image: "/placeholder.svg?height=300&width=300&text=Dr.+Suresh+Patel",
      email: "science@platinumacademy.edu",
      phone: "+91 98765 43213",
      achievements: ["Science Innovation Award", "Research Excellence"],
    },
    {
      name: "Mrs. Kavita Singh",
      position: "Head of Primary Section",
      qualification: "M.Ed., B.Ed.",
      experience: "15+ years",
      subjects: ["Primary Education", "Child Psychology"],
      image: "/placeholder.svg?height=300&width=300&text=Mrs.+Kavita+Singh",
      email: "primary@platinumacademy.edu",
      phone: "+91 98765 43214",
      achievements: ["Primary Education Excellence", "Child Development Award"],
    },
    {
      name: "Mr. Amit Gupta",
      position: "Computer Science Teacher",
      qualification: "M.Tech Computer Science, B.Ed.",
      experience: "12+ years",
      subjects: ["Computer Science", "Robotics", "AI"],
      image: "/placeholder.svg?height=300&width=300&text=Mr.+Amit+Gupta",
      email: "cs@platinumacademy.edu",
      phone: "+91 98765 43215",
      achievements: ["Technology Innovation Award", "Coding Excellence"],
    },
  ]

  const departments = [
    {
      name: "Mathematics & Science",
      head: "Dr. Suresh Patel",
      teachers: 15,
      subjects: ["Mathematics", "Physics", "Chemistry", "Biology"],
      icon: <BookOpen size={32} />,
      color: "from-blue-500 to-indigo-500",
    },
    {
      name: "Languages & Literature",
      head: "Ms. Anita Verma",
      teachers: 12,
      subjects: ["English", "Hindi", "Sanskrit", "French"],
      icon: <GraduationCap size={32} />,
      color: "from-emerald-500 to-teal-500",
    },
    {
      name: "Social Sciences",
      head: "Mr. Vikram Joshi",
      teachers: 8,
      subjects: ["History", "Geography", "Political Science", "Economics"],
      icon: <Users size={32} />,
      color: "from-purple-500 to-pink-500",
    },
    {
      name: "Arts & Sports",
      head: "Ms. Priyanka Rao",
      teachers: 10,
      subjects: ["Fine Arts", "Music", "Dance", "Physical Education"],
      icon: <Award size={32} />,
      color: "from-orange-500 to-red-500",
    },
  ]

  const stats = [
    { number: "120+", label: "Faculty Members", description: "Highly qualified educators" },
    { number: "85%", label: "Post Graduates", description: "Advanced degree holders" },
    { number: "15+", label: "Average Experience", description: "Years of teaching excellence" },
    { number: "50+", label: "Awards Won", description: "Teaching excellence recognition" },
  ]

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
            Our Faculty
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
            Meet our dedicated team of educators who are committed to nurturing young minds and 
            inspiring excellence in every student through innovative teaching and mentorship.
          </p>
        </div>
      </section>

      {/* Faculty Stats */}
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

      {/* Key Faculty Members */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-emerald-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Key <span className="text-emerald-600">Faculty Members</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our leadership team and senior faculty members who guide our academic excellence and institutional growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facultyMembers.map((faculty, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative">
                  <img
                    src={faculty.image}
                    alt={faculty.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {faculty.experience}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{faculty.name}</h3>
                  <p className="text-emerald-600 font-semibold mb-3">{faculty.position}</p>
                  <p className="text-gray-600 text-sm mb-4">{faculty.qualification}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-800 mb-2">Subjects:</h4>
                    <div className="flex flex-wrap gap-2">
                      {faculty.subjects.map((subject, idx) => (
                        <span
                          key={idx}
                          className="text-xs bg-emerald-100 text-emerald-700 px-2 py-1 rounded-md"
                        >
                          {subject}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-800 mb-2">Achievements:</h4>
                    <div className="space-y-1">
                      {faculty.achievements.map((achievement, idx) => (
                        <div key={idx} className="flex items-center text-xs text-gray-600">
                          <Star className="w-3 h-3 text-emerald-500 mr-2" />
                          {achievement}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <a
                      href={`mailto:${faculty.email}`}
                      className="flex items-center text-emerald-600 hover:text-emerald-700 text-sm"
                    >
                      <Mail className="w-4 h-4 mr-1" />
                      Email
                    </a>
                    <a
                      href={`tel:${faculty.phone}`}
                      className="flex items-center text-emerald-600 hover:text-emerald-700 text-sm"
                    >
                      <Phone className="w-4 h-4 mr-1" />
                      Call
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Academic <span className="text-emerald-600">Departments</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our well-organized departments ensure specialized attention and expertise in every subject area.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {departments.map((dept, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 text-center"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${dept.color} rounded-2xl flex items-center justify-center text-white mx-auto mb-6`}>
                  {dept.icon}
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 mb-3">{dept.name}</h3>
                <p className="text-emerald-600 font-semibold mb-2">Head: {dept.head}</p>
                <p className="text-gray-600 mb-4">{dept.teachers} Teachers</p>
                
                <div className="space-y-2">
                  {dept.subjects.map((subject, idx) => (
                    <div key={idx} className="text-sm text-gray-600 bg-gray-100 rounded-md px-3 py-1">
                      {subject}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Faculty
