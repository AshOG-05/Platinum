import type React from "react"
import { CheckCircle, Award, Users, BookOpen, Target, Heart } from "lucide-react"
import Testimonials from "../components/Testimonials"

const About: React.FC = () => {
  const achievements = [
    "CBSE Affiliated Institution (Affiliation No: 3430XXX)",
    "29+ Years of Educational Excellence",
    "State-of-the-art Smart Classrooms",
    "Well-equipped Science & Computer Labs",
    "Experienced & Qualified Faculty",
    "Sports & Cultural Activities",
    "Career Guidance & Counseling",
    "Regular Parent-Teacher Interactions",
  ]

  const values = [
    {
      icon: <Target size={32} />,
      title: "Excellence",
      description: "Striving for the highest standards in education and character development.",
    },
    {
      icon: <Heart size={32} />,
      title: "Compassion",
      description: "Nurturing empathy, kindness, and social responsibility in our students.",
    },
    {
      icon: <Users size={32} />,
      title: "Community",
      description: "Building strong relationships between students, parents, and educators.",
    },
    {
      icon: <BookOpen size={32} />,
      title: "Learning",
      description: "Fostering curiosity, critical thinking, and lifelong learning habits.",
    },
  ]

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              About Brightwood Academy
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Established in 1995, Brightwood Academy has been a beacon of educational excellence in Gurgaon,
              Haryana, committed to empowering minds and shaping futures through world-class education.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Content */}
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-800">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Founded with a vision to provide world-class education that prepares students for global success, Brightwood Academy began its journey in
                1995 with just a handful of students and dedicated teachers. Today, we stand proud as one of the most
                respected educational institutions in the NCR region.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our commitment goes beyond academic excellence. We believe in holistic development that encompasses
                intellectual growth, emotional maturity, physical fitness, and moral values. Every student who walks
                through our doors is nurtured to become a confident, capable, and compassionate global citizen.
              </p>

              {/* Achievements Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="text-emerald-500 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="bg-gradient-to-br from-emerald-100 to-teal-100 rounded-3xl p-8 shadow-2xl">
                <img
                  src="/modern-school-campus.png"
                  alt="Brightwood Academy Campus"
                  className="w-full h-80 object-cover rounded-2xl shadow-lg"
                />
              </div>
              <div className="absolute -top-6 -right-6 bg-white p-6 rounded-2xl shadow-xl">
                <Award className="text-emerald-500 mb-2" size={32} />
                <div className="text-2xl font-bold text-gray-800">29+</div>
                <div className="text-sm text-gray-600">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-emerald-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do and shape the character of our students
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center text-white mx-auto mb-6 shadow-lg">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl p-8 shadow-lg">
              <h3 className="text-3xl font-bold mb-6 text-emerald-600">Our Mission</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                To provide quality education that empowers students with knowledge, skills, and values necessary for
                success in life. We are committed to creating a nurturing environment where every child can discover
                their potential and develop into responsible global citizens.
              </p>
            </div>
            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-3xl p-8 shadow-lg">
              <h3 className="text-3xl font-bold mb-6 text-teal-600">Our Vision</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                To be recognized as a leading educational institution that shapes future leaders through innovative
                teaching methods, character development, and holistic growth. We envision our students as confident,
                creative, and compassionate individuals who contribute positively to society.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Component */}
      <Testimonials />
    </div>
  )
}

export default About
