import type React from "react"
import { Calendar, ArrowRight, Bell } from "lucide-react"

const News: React.FC = () => {
  const newsItems = [
    {
      title: "Class XI Direct Admission Link (Session: 2025-26)",
      date: "2024-12-15",
      category: "Admission",
      description:
        "Direct admission process for Class XI students has begun. Apply now for the upcoming academic session.",
      urgent: true,
    },
    {
      title: "Annual Sports Day Celebration",
      date: "2024-12-10",
      category: "Events",
      description: "Join us for our annual sports day featuring various competitions and cultural programs.",
      urgent: false,
    },
    {
      title: "Science Exhibition 2024",
      date: "2024-12-05",
      category: "Academic",
      description: "Students showcase their innovative projects and scientific discoveries.",
      urgent: false,
    },
    {
      title: "Parent-Teacher Meeting Schedule",
      date: "2024-11-28",
      category: "Notice",
      description: "Monthly parent-teacher interaction to discuss student progress and development.",
      urgent: true,
    },
  ]

  return (
    <section id="news" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Latest News & Updates
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay informed about the latest happenings, announcements, and events at our school.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {newsItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 group"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      item.category === "Admission"
                        ? "bg-blue-100 text-blue-800"
                        : item.category === "Events"
                          ? "bg-green-100 text-green-800"
                          : item.category === "Academic"
                            ? "bg-purple-100 text-purple-800"
                            : "bg-orange-100 text-orange-800"
                    }`}
                  >
                    {item.category}
                  </span>
                  {item.urgent && (
                    <div className="flex items-center space-x-1 text-red-500">
                      <Bell size={16} />
                      <span className="text-sm font-medium">Urgent</span>
                    </div>
                  )}
                </div>
                <div className="flex items-center text-gray-500 text-sm">
                  <Calendar size={16} className="mr-1" />
                  {new Date(item.date).toLocaleDateString()}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-blue-600 transition-colors duration-200">
                {item.title}
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">{item.description}</p>

              {/* Read More */}
              <button className="flex items-center space-x-2 text-blue-600 font-medium hover:text-blue-800 transition-colors duration-200">
                <span>Read More</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
              </button>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-200 transform hover:scale-105">
            View All News & Updates
          </button>
        </div>
      </div>
    </section>
  )
}

export default News
