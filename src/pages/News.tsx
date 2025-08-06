import type React from "react"
import { Calendar, Bell, ArrowRight, Search, Filter } from "lucide-react"
import LatestNews from "../components/LatestNews"

const News: React.FC = () => {
  const newsItems = [
    {
      id: 1,
      title: "Class XI Direct Admission Link (Session: 2025-26)",
      date: "2024-12-15",
      category: "Admission",
      description:
        "Direct admission process for Class XI students has begun. Limited seats available for Science, Commerce, and Arts streams.",
      urgent: true,
      image: "/placeholder.svg?height=200&width=300&text=Admission+2025",
      content: "The admission process for Class XI has officially started...",
    },
    {
      id: 2,
      title: "Outstanding Board Results 2024 - 95% Success Rate",
      date: "2024-12-10",
      category: "Achievement",
      description:
        "Our students have achieved remarkable success in CBSE Class X and XII examinations with 95% pass rate.",
      urgent: false,
      image: "/placeholder.svg?height=200&width=300&text=Results+2024",
      content: "We are proud to announce exceptional results...",
    },
    {
      id: 3,
      title: "Annual Sports Day & Cultural Fest 2024",
      date: "2024-12-20",
      category: "Events",
      description:
        "Join us for our grand annual celebration featuring sports competitions, cultural programs, and prize distribution.",
      urgent: false,
      image: "/placeholder.svg?height=200&width=300&text=Sports+Day",
      content: "Our annual sports day will be held on...",
    },
    {
      id: 4,
      title: "Science Exhibition 2024 - Innovation Showcase",
      date: "2024-12-05",
      category: "Academic",
      description: "Students from Classes VI-XII will showcase their innovative projects and scientific discoveries.",
      urgent: false,
      image: "/placeholder.svg?height=200&width=300&text=Science+Fair",
      content: "The annual science exhibition will feature...",
    },
    {
      id: 5,
      title: "Parent-Teacher Meeting Schedule - December 2024",
      date: "2024-11-28",
      category: "Notice",
      description: "Monthly parent-teacher interaction to discuss student progress and development.",
      urgent: true,
      image: "/placeholder.svg?height=200&width=300&text=PTM+Schedule",
      content: "The parent-teacher meeting is scheduled for...",
    },
    {
      id: 6,
      title: "Winter Break Holiday Homework Guidelines",
      date: "2024-11-25",
      category: "Academic",
      description: "Guidelines and assignments for students during the winter vacation period.",
      urgent: false,
      image: "/placeholder.svg?height=200&width=300&text=Holiday+Homework",
      content: "During the winter break, students are expected to...",
    },
  ]

  const categories = ["All", "Admission", "Academic", "Events", "Achievement", "Notice"]

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
            News & Updates
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Stay updated with the latest announcements, achievements, events, and important notices from JVM Shyamali
          </p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-8">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search news and updates..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              />
            </div>
            <div className="flex items-center space-x-4">
              <Filter className="text-gray-500" size={20} />
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-emerald-50 hover:border-emerald-300 hover:text-emerald-600 transition-all duration-200"
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsItems.map((item) => (
              <article
                key={item.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative">
                  <img src={item.image || "/placeholder.svg"} alt={item.title} className="w-full h-48 object-cover" />
                  {item.urgent && (
                    <div className="absolute top-4 left-4 flex items-center space-x-1 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      <Bell size={14} />
                      <span>Urgent</span>
                    </div>
                  )}
                  <div className="absolute top-4 right-4">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        item.category === "Admission"
                          ? "bg-emerald-100 text-emerald-700"
                          : item.category === "Events"
                            ? "bg-blue-100 text-blue-700"
                            : item.category === "Academic"
                              ? "bg-purple-100 text-purple-700"
                              : item.category === "Achievement"
                                ? "bg-amber-100 text-amber-700"
                                : "bg-gray-100 text-gray-700"
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

                  <h3 className="text-xl font-bold mb-3 text-gray-800 hover:text-emerald-600 transition-colors duration-200 line-clamp-2">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">{item.description}</p>

                  <button className="flex items-center space-x-2 text-emerald-600 font-medium hover:text-emerald-700 transition-colors duration-200 group">
                    <span>Read Full Article</span>
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
                  </button>
                </div>
              </article>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <button className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              Load More Articles
            </button>
          </div>
        </div>
      </section>

      {/* Latest News Component */}
      <LatestNews />
    </div>
  )
}

export default News
