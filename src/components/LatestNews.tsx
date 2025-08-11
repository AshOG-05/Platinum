import type React from "react"
import { Link } from "react-router-dom"
import { Calendar, ArrowRight, Bell } from "lucide-react"

const LatestNews: React.FC = () => {
  const newsItems = [
    {
      title: "Class XI Admission Open for Session 2025-26",
      date: "2024-12-15",
      category: "Admission",
      description: "Direct admission process for Class XI students has begun. Limited seats available.",
      urgent: true,
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=250&fit=crop&crop=center",
    },
    {
      title: "Annual Sports Day & Cultural Fest 2024",
      date: "2024-12-20",
      category: "Events",
      description: "Join us for our grand annual celebration featuring sports competitions and cultural programs.",
      urgent: false,
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=250&fit=crop&crop=center",
    },
    {
      title: "Outstanding Board Results 2024",
      date: "2024-12-10",
      category: "Achievement",
      description: "Our students achieved 95% pass rate in CBSE Class X and XII examinations.",
      urgent: false,
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=250&fit=crop&crop=center",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-emerald-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
            Latest News & Updates
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest happenings, achievements, and announcements from our school
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {newsItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative">
                <img src={item.image || "/placeholder.svg"} alt={item.title} className="w-full h-40 sm:h-48 object-cover" />
                {item.urgent && (
                  <div className="absolute top-4 left-4 flex items-center space-x-1 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    <Bell size={14} />
                    <span>Urgent</span>
                  </div>
                )}
                <div className="absolute top-4 right-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${item.category === "Admission"
                        ? "bg-emerald-100 text-emerald-700"
                        : item.category === "Events"
                          ? "bg-blue-100 text-blue-700"
                          : "bg-amber-100 text-amber-700"
                      }`}
                  >
                    {item.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center text-gray-500 text-sm mb-3">
                  <Calendar size={16} className="mr-2" />
                  {new Date(item.date).toLocaleDateString("en-IN", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </div>

                <h3 className="text-xl font-bold mb-3 text-gray-800 hover:text-emerald-600 transition-colors duration-200">
                  {item.title}
                </h3>

                <p className="text-gray-600 mb-4 leading-relaxed">{item.description}</p>

                <button className="flex items-center space-x-2 text-emerald-600 font-medium hover:text-emerald-700 transition-colors duration-200 group">
                  <span>Read More</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/news"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold rounded-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            View All News & Updates
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default LatestNews
