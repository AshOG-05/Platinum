import type React from "react"
import { useState } from "react"
import { Calendar, Clock, MapPin, Users, Star, Trophy, Music, BookOpen } from "lucide-react"

const Events: React.FC = () => {
  const [activeTab, setActiveTab] = useState("upcoming")

  const upcomingEvents = [
    {
      id: 1,
      title: "Annual Science Fair 2025",
      date: "2025-02-15",
      time: "9:00 AM - 4:00 PM",
      location: "Main Auditorium",
      category: "Academic",
      description: "Students showcase their innovative science projects and experiments.",
      image: "/placeholder.svg?height=300&width=400&text=Science+Fair",
      participants: "All Classes",
      icon: <BookOpen size={20} />,
      color: "from-blue-500 to-indigo-500",
    },
    {
      id: 2,
      title: "Cultural Fest - Platinum Utsav",
      date: "2025-03-10",
      time: "10:00 AM - 6:00 PM",
      location: "School Campus",
      category: "Cultural",
      description: "A grand celebration of arts, music, dance, and cultural diversity.",
      image: "/placeholder.svg?height=300&width=400&text=Cultural+Fest",
      participants: "All Students",
      icon: <Music size={20} />,
      color: "from-purple-500 to-pink-500",
    },
    {
      id: 3,
      title: "Inter-House Sports Championship",
      date: "2025-03-25",
      time: "8:00 AM - 5:00 PM",
      location: "Sports Complex",
      category: "Sports",
      description: "Annual sports competition between different houses with various events.",
      image: "/placeholder.svg?height=300&width=400&text=Sports+Championship",
      participants: "Classes VI-XII",
      icon: <Trophy size={20} />,
      color: "from-emerald-500 to-teal-500",
    },
    {
      id: 4,
      title: "Parent-Teacher Conference",
      date: "2025-04-05",
      time: "9:00 AM - 12:00 PM",
      location: "Respective Classrooms",
      category: "Academic",
      description: "Individual meetings to discuss student progress and development.",
      image: "/placeholder.svg?height=300&width=400&text=Parent+Teacher+Meet",
      participants: "All Parents",
      icon: <Users size={20} />,
      color: "from-orange-500 to-red-500",
    },
  ]

  const pastEvents = [
    {
      id: 5,
      title: "Annual Day Celebration 2024",
      date: "2024-12-15",
      time: "6:00 PM - 9:00 PM",
      location: "Main Auditorium",
      category: "Cultural",
      description: "Grand celebration showcasing student talents and achievements.",
      image: "/placeholder.svg?height=300&width=400&text=Annual+Day",
      participants: "All Students",
      icon: <Star size={20} />,
      color: "from-amber-500 to-orange-500",
    },
    {
      id: 6,
      title: "Mathematics Olympiad",
      date: "2024-11-20",
      time: "10:00 AM - 1:00 PM",
      location: "Computer Lab",
      category: "Academic",
      description: "National level mathematics competition for talented students.",
      image: "/placeholder.svg?height=300&width=400&text=Math+Olympiad",
      participants: "Selected Students",
      icon: <BookOpen size={20} />,
      color: "from-blue-500 to-cyan-500",
    },
  ]

  const eventCategories = [
    { name: "All", count: upcomingEvents.length + pastEvents.length },
    { name: "Academic", count: 3 },
    { name: "Cultural", count: 2 },
    { name: "Sports", count: 1 },
  ]

  const [selectedCategory, setSelectedCategory] = useState("All")

  const filterEvents = (events: any[]) => {
    if (selectedCategory === "All") return events
    return events.filter(event => event.category === selectedCategory)
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    })
  }

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
            School Events
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
            Stay updated with our exciting school events, competitions, celebrations, and activities that make 
            learning fun and memorable for our students.
          </p>
        </div>
      </section>

      {/* Event Categories */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {eventCategories.map((category) => (
              <button
                key={category.name}
                onClick={() => setSelectedCategory(category.name)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.name
                    ? "bg-emerald-600 text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-emerald-100 hover:text-emerald-600"
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-12">
            <div className="bg-gray-100 rounded-xl p-1">
              <button
                onClick={() => setActiveTab("upcoming")}
                className={`px-8 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeTab === "upcoming"
                    ? "bg-white text-emerald-600 shadow-md"
                    : "text-gray-600 hover:text-emerald-600"
                }`}
              >
                Upcoming Events
              </button>
              <button
                onClick={() => setActiveTab("past")}
                className={`px-8 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeTab === "past"
                    ? "bg-white text-emerald-600 shadow-md"
                    : "text-gray-600 hover:text-emerald-600"
                }`}
              >
                Past Events
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-12 bg-gradient-to-br from-gray-50 to-emerald-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filterEvents(activeTab === "upcoming" ? upcomingEvents : pastEvents).map((event) => (
              <div
                key={event.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className={`absolute top-4 left-4 bg-gradient-to-r ${event.color} text-white px-3 py-1 rounded-full text-sm font-medium flex items-center`}>
                    {event.icon}
                    <span className="ml-2">{event.category}</span>
                  </div>
                  {activeTab === "upcoming" && (
                    <div className="absolute top-4 right-4 bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Upcoming
                    </div>
                  )}
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{event.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{event.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-gray-600">
                      <Calendar className="w-4 h-4 mr-3 text-emerald-500" />
                      <span className="text-sm">{formatDate(event.date)}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Clock className="w-4 h-4 mr-3 text-emerald-500" />
                      <span className="text-sm">{event.time}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <MapPin className="w-4 h-4 mr-3 text-emerald-500" />
                      <span className="text-sm">{event.location}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Users className="w-4 h-4 mr-3 text-emerald-500" />
                      <span className="text-sm">{event.participants}</span>
                    </div>
                  </div>

                  {activeTab === "upcoming" && (
                    <button className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300">
                      Register Now
                    </button>
                  )}
                  
                  {activeTab === "past" && (
                    <button className="w-full border-2 border-emerald-500 text-emerald-600 py-3 rounded-xl font-semibold hover:bg-emerald-50 transition-all duration-300">
                      View Gallery
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Calendar CTA */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Never Miss an Event</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Subscribe to our event calendar and get notifications about upcoming events, competitions, and celebrations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-xl transition-all duration-300">
              Subscribe to Calendar
            </button>
            <button className="border-2 border-emerald-500 text-emerald-600 px-8 py-4 rounded-xl font-semibold hover:bg-emerald-50 transition-all duration-300">
              Download Event Calendar
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Events
