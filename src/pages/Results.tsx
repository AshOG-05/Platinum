import type React from "react"
import { useState } from "react"
import { Trophy, Star, Award, TrendingUp, Download, Search, Filter } from "lucide-react"

const Results: React.FC = () => {
  const [selectedYear, setSelectedYear] = useState("2024")
  const [selectedClass, setSelectedClass] = useState("All")

  const resultStats = [
    { metric: "98.5%", label: "Overall Pass Rate", description: "CBSE Board Examinations 2024", color: "from-emerald-500 to-teal-500" },
    { metric: "45", label: "Students Above 95%", description: "Exceptional academic performance", color: "from-blue-500 to-indigo-500" },
    { metric: "12", label: "Subject Toppers", description: "District and state level", color: "from-purple-500 to-pink-500" },
    { metric: "100%", label: "College Admissions", description: "Class XII graduates placed", color: "from-orange-500 to-red-500" },
  ]

  const classResults = [
    {
      class: "Class X",
      year: "2024",
      totalStudents: 120,
      passRate: "100%",
      distinction: 45,
      firstClass: 65,
      secondClass: 10,
      toppers: [
        { name: "Arjun Sharma", percentage: "98.2%", subjects: "All Subjects" },
        { name: "Priya Patel", percentage: "97.8%", subjects: "Science & Math" },
        { name: "Rahul Kumar", percentage: "97.5%", subjects: "Mathematics" },
      ]
    },
    {
      class: "Class XII",
      year: "2024",
      totalStudents: 100,
      passRate: "98%",
      distinction: 38,
      firstClass: 52,
      secondClass: 8,
      toppers: [
        { name: "Sneha Gupta", percentage: "99.1%", subjects: "Science Stream" },
        { name: "Vikash Singh", percentage: "98.7%", subjects: "Commerce Stream" },
        { name: "Ananya Joshi", percentage: "98.3%", subjects: "Arts Stream" },
      ]
    },
  ]

  const competitiveResults = [
    {
      exam: "JEE Main 2024",
      qualified: 25,
      topRank: "AIR 1,245",
      student: "Arjun Sharma",
      percentage: "99.2 percentile"
    },
    {
      exam: "NEET 2024",
      qualified: 18,
      topRank: "AIR 2,890",
      student: "Sneha Gupta",
      percentage: "98.8 percentile"
    },
    {
      exam: "KVPY 2024",
      qualified: 8,
      topRank: "AIR 456",
      student: "Priya Patel",
      percentage: "Selected"
    },
    {
      exam: "NTSE 2024",
      qualified: 12,
      topRank: "State Rank 15",
      student: "Vikash Singh",
      percentage: "Qualified"
    },
  ]

  const achievements = [
    {
      title: "Best School Award",
      description: "Excellence in Academic Performance - CBSE Regional Office",
      year: "2024",
      icon: <Trophy className="w-8 h-8" />,
      color: "from-amber-500 to-orange-500"
    },
    {
      title: "100% Pass Rate",
      description: "Consecutive 5 years of 100% pass rate in Class X",
      year: "2020-2024",
      icon: <Star className="w-8 h-8" />,
      color: "from-emerald-500 to-teal-500"
    },
    {
      title: "Science Excellence",
      description: "State Level Science Fair - Multiple Winners",
      year: "2024",
      icon: <Award className="w-8 h-8" />,
      color: "from-blue-500 to-indigo-500"
    },
    {
      title: "Mathematics Olympiad",
      description: "National Level - 15 students qualified",
      year: "2024",
      icon: <TrendingUp className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500"
    },
  ]

  const years = ["2024", "2023", "2022", "2021", "2020"]
  const classes = ["All", "Class X", "Class XII"]

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
            Academic Results
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
            Celebrating the outstanding academic achievements of our students in board examinations, 
            competitive tests, and various academic competitions.
          </p>
        </div>
      </section>

      {/* Result Statistics */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Academic Excellence</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our consistent track record of academic success reflects our commitment to quality education.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {resultStats.map((stat, index) => (
              <div
                key={index}
                className="text-center bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className={`text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                  {stat.metric}
                </div>
                <div className="text-xl font-semibold text-gray-800 mb-2">{stat.label}</div>
                <p className="text-gray-600 text-sm">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-12 bg-gradient-to-br from-gray-50 to-emerald-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-8">
            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-gray-600" />
              <span className="text-gray-700 font-medium">Filter Results:</span>
            </div>
            
            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              {years.map(year => (
                <option key={year} value={year}>Year {year}</option>
              ))}
            </select>

            <select
              value={selectedClass}
              onChange={(e) => setSelectedClass(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              {classes.map(cls => (
                <option key={cls} value={cls}>{cls}</option>
              ))}
            </select>

            <button className="flex items-center gap-2 bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700 transition-colors duration-300">
              <Download className="w-4 h-4" />
              Download Results
            </button>
          </div>
        </div>
      </section>

      {/* Class-wise Results */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Board Examination Results</h2>
          
          <div className="space-y-12">
            {classResults.map((result, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 shadow-lg">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-6">{result.class} - {result.year}</h3>
                    
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="text-center bg-white rounded-xl p-4 shadow-md">
                        <div className="text-2xl font-bold text-emerald-600">{result.totalStudents}</div>
                        <div className="text-sm text-gray-600">Total Students</div>
                      </div>
                      <div className="text-center bg-white rounded-xl p-4 shadow-md">
                        <div className="text-2xl font-bold text-emerald-600">{result.passRate}</div>
                        <div className="text-sm text-gray-600">Pass Rate</div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700">Distinction (75% & above):</span>
                        <span className="font-semibold text-emerald-600">{result.distinction} students</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700">First Class (60-74%):</span>
                        <span className="font-semibold text-blue-600">{result.firstClass} students</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700">Second Class (45-59%):</span>
                        <span className="font-semibold text-orange-600">{result.secondClass} students</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xl font-bold text-gray-800 mb-4">Top Performers</h4>
                    <div className="space-y-4">
                      {result.toppers.map((topper, idx) => (
                        <div key={idx} className="bg-white rounded-xl p-4 shadow-md">
                          <div className="flex items-center justify-between">
                            <div>
                              <h5 className="font-semibold text-gray-800">{topper.name}</h5>
                              <p className="text-sm text-gray-600">{topper.subjects}</p>
                            </div>
                            <div className="text-right">
                              <div className="text-lg font-bold text-emerald-600">{topper.percentage}</div>
                              <div className="text-xs text-gray-500">Percentage</div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Competitive Exam Results */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-emerald-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Competitive Exam Results</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {competitiveResults.map((result, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <h3 className="text-lg font-bold text-gray-800 mb-4">{result.exam}</h3>
                
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Qualified:</span>
                    <span className="font-semibold text-emerald-600">{result.qualified}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Top Rank:</span>
                    <span className="font-semibold text-blue-600">{result.topRank}</span>
                  </div>
                  <div className="border-t pt-3">
                    <div className="text-sm text-gray-600">Top Performer:</div>
                    <div className="font-semibold text-gray-800">{result.student}</div>
                    <div className="text-sm text-emerald-600">{result.percentage}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Academic Achievements</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className={`w-16 h-16 bg-gradient-to-r ${achievement.color} rounded-2xl flex items-center justify-center text-white mx-auto mb-6`}>
                  {achievement.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{achievement.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{achievement.description}</p>
                <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-medium">
                  {achievement.year}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Results
