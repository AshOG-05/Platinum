import type React from "react"
import { useState } from "react"
import { Briefcase, GraduationCap, Users, Clock, MapPin, Mail, Phone, Send } from "lucide-react"

const Careers: React.FC = () => {
  const [selectedDepartment, setSelectedDepartment] = useState("All")

  const jobOpenings = [
    {
      id: 1,
      title: "Mathematics Teacher",
      department: "Academic",
      type: "Full-time",
      experience: "3-5 years",
      location: "Gurgaon Campus",
      description: "Seeking an experienced Mathematics teacher for Classes IX-XII with strong conceptual knowledge and innovative teaching methods.",
      requirements: [
        "M.Sc. Mathematics with B.Ed.",
        "Minimum 3 years teaching experience",
        "CBSE curriculum knowledge",
        "Strong communication skills"
      ],
      posted: "2024-01-15",
      deadline: "2024-02-15"
    },
    {
      id: 2,
      title: "Computer Science Teacher",
      department: "Academic",
      type: "Full-time",
      experience: "2-4 years",
      location: "Gurgaon Campus",
      description: "Looking for a dynamic Computer Science teacher to teach programming, AI, and robotics to middle and high school students.",
      requirements: [
        "M.Tech/MCA in Computer Science",
        "Programming expertise in Python, Java",
        "Knowledge of AI/ML concepts",
        "Experience with robotics preferred"
      ],
      posted: "2024-01-10",
      deadline: "2024-02-10"
    },
    {
      id: 3,
      title: "Sports Coach",
      department: "Sports",
      type: "Full-time",
      experience: "2-3 years",
      location: "Sports Complex",
      description: "Experienced sports coach for basketball, football, and athletics with proven track record in competitive sports.",
      requirements: [
        "Bachelor's in Physical Education",
        "Coaching certification",
        "Experience in competitive sports",
        "First aid certification"
      ],
      posted: "2024-01-08",
      deadline: "2024-02-08"
    },
    {
      id: 4,
      title: "School Counselor",
      department: "Student Services",
      type: "Full-time",
      experience: "3-5 years",
      location: "Gurgaon Campus",
      description: "Qualified counselor to provide academic and career guidance to students and support their emotional well-being.",
      requirements: [
        "M.A. in Psychology/Counseling",
        "Counseling certification",
        "Experience with adolescents",
        "Strong interpersonal skills"
      ],
      posted: "2024-01-05",
      deadline: "2024-02-05"
    },
    {
      id: 5,
      title: "Librarian",
      department: "Academic Support",
      type: "Full-time",
      experience: "2-4 years",
      location: "Library",
      description: "Experienced librarian to manage digital and physical resources, conduct research workshops, and support student learning.",
      requirements: [
        "M.Lib.Sc. or equivalent",
        "Digital library management",
        "Research methodology knowledge",
        "Technology proficiency"
      ],
      posted: "2024-01-03",
      deadline: "2024-02-03"
    },
    {
      id: 6,
      title: "Administrative Assistant",
      department: "Administration",
      type: "Full-time",
      experience: "1-3 years",
      location: "Main Office",
      description: "Organized professional to support administrative operations, manage communications, and assist with student records.",
      requirements: [
        "Bachelor's degree",
        "MS Office proficiency",
        "Excellent communication skills",
        "Attention to detail"
      ],
      posted: "2024-01-01",
      deadline: "2024-02-01"
    }
  ]

  const benefits = [
    {
      icon: <GraduationCap size={32} />,
      title: "Professional Development",
      description: "Continuous learning opportunities, workshops, and certification programs.",
      color: "from-blue-500 to-indigo-500"
    },
    {
      icon: <Users size={32} />,
      title: "Collaborative Environment",
      description: "Work with passionate educators in a supportive and innovative team.",
      color: "from-emerald-500 to-teal-500"
    },
    {
      icon: <Briefcase size={32} />,
      title: "Competitive Package",
      description: "Attractive salary, performance bonuses, and comprehensive benefits.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Clock size={32} />,
      title: "Work-Life Balance",
      description: "Flexible schedules, paid time off, and family-friendly policies.",
      color: "from-orange-500 to-red-500"
    }
  ]

  const departments = ["All", "Academic", "Sports", "Student Services", "Academic Support", "Administration"]

  const filteredJobs = selectedDepartment === "All" 
    ? jobOpenings 
    : jobOpenings.filter(job => job.department === selectedDepartment)

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    experience: "",
    coverLetter: ""
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Application submitted:", formData)
  }

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
            Join Our Team
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
            Be part of our mission to shape young minds and create future leaders. 
            Discover exciting career opportunities in education at Platinum Academy.
          </p>
          <button className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            View Open Positions
          </button>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Why Choose Platinum Academy?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join a community of dedicated educators committed to excellence in teaching and student development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="text-center bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${benefit.color} rounded-2xl flex items-center justify-center text-white mx-auto mb-6`}>
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-emerald-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Current Openings</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our current job opportunities and find the perfect role to advance your career in education.
            </p>
          </div>

          {/* Department Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {departments.map((dept) => (
              <button
                key={dept}
                onClick={() => setSelectedDepartment(dept)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedDepartment === dept
                    ? "bg-emerald-600 text-white shadow-lg"
                    : "bg-white text-gray-700 hover:bg-emerald-100 hover:text-emerald-600 shadow-md"
                }`}
              >
                {dept}
              </button>
            ))}
          </div>

          {/* Job Listings */}
          <div className="space-y-6">
            {filteredJobs.map((job) => (
              <div key={job.id} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <div className="flex flex-wrap items-center gap-4 mb-4">
                      <h3 className="text-2xl font-bold text-gray-800">{job.title}</h3>
                      <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium">
                        {job.department}
                      </span>
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                        {job.type}
                      </span>
                    </div>

                    <p className="text-gray-600 mb-6 leading-relaxed">{job.description}</p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                      <div className="flex items-center text-gray-600">
                        <Clock className="w-4 h-4 mr-2 text-emerald-500" />
                        <span className="text-sm">{job.experience}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <MapPin className="w-4 h-4 mr-2 text-emerald-500" />
                        <span className="text-sm">{job.location}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Clock className="w-4 h-4 mr-2 text-emerald-500" />
                        <span className="text-sm">Deadline: {job.deadline}</span>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">Requirements:</h4>
                      <ul className="space-y-2">
                        {job.requirements.map((req, idx) => (
                          <li key={idx} className="flex items-start text-gray-600">
                            <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-sm">{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex flex-col justify-between">
                    <div className="text-center lg:text-right mb-6">
                      <div className="text-sm text-gray-500 mb-2">Posted: {job.posted}</div>
                      <button className="w-full lg:w-auto bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300">
                        Apply Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Apply for a Position</h2>
              <p className="text-xl text-gray-600">
                Submit your application and join our team of dedicated educators.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Position Applied For *</label>
                  <select
                    name="position"
                    value={formData.position}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    required
                  >
                    <option value="">Select Position</option>
                    {jobOpenings.map(job => (
                      <option key={job.id} value={job.title}>{job.title}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2">Years of Experience *</label>
                <input
                  type="text"
                  name="experience"
                  value={formData.experience}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  placeholder="e.g., 3-5 years"
                  required
                />
              </div>

              <div className="mb-8">
                <label className="block text-gray-700 font-medium mb-2">Cover Letter *</label>
                <textarea
                  name="coverLetter"
                  value={formData.coverLetter}
                  onChange={handleInputChange}
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  placeholder="Tell us why you're interested in this position and what makes you a great fit..."
                  required
                ></textarea>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-12 py-4 rounded-xl font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center mx-auto"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Submit Application
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Contact HR */}
      <section className="py-20 bg-gradient-to-r from-emerald-500 to-teal-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Have Questions?</h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
            Our HR team is here to help you with any questions about career opportunities at Platinum Academy.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center text-emerald-100">
            <div className="flex items-center justify-center">
              <Phone className="w-5 h-5 mr-2" />
              <span>+91 98765 43220 (HR Department)</span>
            </div>
            <div className="flex items-center justify-center">
              <Mail className="w-5 h-5 mr-2" />
              <span>careers@platinumacademy.edu</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Careers
