import type React from "react"
import { Trophy, Music, Palette, Users, Heart, Star } from "lucide-react"

const StudentLife: React.FC = () => {
  const activities = [
    {
      icon: <Trophy size={32} />,
      title: "Sports & Athletics",
      description: "Cricket, Football, Basketball, Badminton, Athletics, and more competitive sports.",
      image: "/placeholder.svg?height=200&width=300&text=Sports",
      color: "from-blue-500 to-indigo-500",
    },
    {
      icon: <Music size={32} />,
      title: "Music & Dance",
      description: "Classical and modern music, dance forms, choir, and musical instrument training.",
      image: "/placeholder.svg?height=200&width=300&text=Music",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: <Palette size={32} />,
      title: "Arts & Crafts",
      description: "Painting, drawing, sculpture, pottery, and various creative art forms.",
      image: "/placeholder.svg?height=200&width=300&text=Arts",
      color: "from-emerald-500 to-teal-500",
    },
    {
      icon: <Users size={32} />,
      title: "Clubs & Societies",
      description: "Science club, literary society, debate club, environmental club, and more.",
      image: "/placeholder.svg?height=200&width=300&text=Clubs",
      color: "from-amber-500 to-orange-500",
    },
  ]

  const events = [
    {
      title: "Annual Sports Day",
      description: "Inter-house competitions, athletic meets, and sports celebrations.",
      date: "December 2024",
      image: "/placeholder.svg?height=150&width=200&text=Sports+Day",
    },
    {
      title: "Cultural Festival",
      description: "Music, dance, drama performances, and cultural exhibitions.",
      date: "January 2025",
      image: "/placeholder.svg?height=150&width=200&text=Cultural+Fest",
    },
    {
      title: "Science Exhibition",
      description: "Student projects, innovations, and scientific demonstrations.",
      date: "February 2025",
      image: "/placeholder.svg?height=150&width=200&text=Science+Fair",
    },
    {
      title: "Annual Day Celebration",
      description: "Grand celebration showcasing student talents and achievements.",
      date: "March 2025",
      image: "/placeholder.svg?height=150&width=200&text=Annual+Day",
    },
  ]

  const houses = [
    { name: "Ashoka House", color: "bg-red-500", motto: "Courage & Leadership" },
    { name: "Chandragupta House", color: "bg-blue-500", motto: "Wisdom & Strategy" },
    { name: "Vikramaditya House", color: "bg-green-500", motto: "Justice & Valor" },
    { name: "Harsha House", color: "bg-yellow-500", motto: "Knowledge & Peace" },
  ]

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
            Student Life
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
            Beyond academics, we believe in nurturing well-rounded individuals through diverse extracurricular
            activities, sports, cultural programs, and character-building initiatives.
          </p>
        </div>
      </section>

      {/* Activities */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
            Extracurricular Activities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {activities.map((activity, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative">
                  <img
                    src={activity.image || "/placeholder.svg"}
                    alt={activity.title}
                    className="w-full h-48 object-cover"
                  />
                  <div
                    className={`absolute top-4 left-4 w-12 h-12 bg-gradient-to-r ${activity.color} rounded-xl flex items-center justify-center text-white shadow-lg`}
                  >
                    {activity.icon}
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-gray-800">{activity.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{activity.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* House System */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-emerald-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
            House System
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Our house system promotes healthy competition, leadership skills, and team spirit among students.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {houses.map((house, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 text-center"
              >
                <div
                  className={`w-16 h-16 ${house.color} rounded-2xl flex items-center justify-center text-white mx-auto mb-6 shadow-lg`}
                >
                  <Star size={32} />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">{house.name}</h3>
                <p className="text-gray-600 italic">"{house.motto}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Annual Events */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
            Annual Events & Celebrations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {events.map((event, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <img src={event.image || "/placeholder.svg"} alt={event.title} className="w-full h-40 object-cover" />
                <div className="p-6">
                  <div className="text-emerald-600 font-semibold text-sm mb-2">{event.date}</div>
                  <h3 className="text-xl font-bold mb-3 text-gray-800">{event.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values & Character Building */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Character Building & Values
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We believe that education extends beyond textbooks. Our comprehensive approach to character development
                helps students develop strong moral values, leadership qualities, and social responsibility.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Heart className="text-emerald-500 flex-shrink-0" size={24} />
                  <span className="text-gray-700 font-medium">Community Service & Social Responsibility</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="text-emerald-500 flex-shrink-0" size={24} />
                  <span className="text-gray-700 font-medium">Leadership Development Programs</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Star className="text-emerald-500 flex-shrink-0" size={24} />
                  <span className="text-gray-700 font-medium">Moral & Ethical Education</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Trophy className="text-emerald-500 flex-shrink-0" size={24} />
                  <span className="text-gray-700 font-medium">Recognition & Award Programs</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-emerald-100 to-teal-100 rounded-3xl p-8 shadow-2xl">
                <img
                  src="/placeholder.svg?height=400&width=500&text=Student+Activities"
                  alt="Student Activities"
                  className="w-full h-80 object-cover rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default StudentLife
