import type React from "react"
import { Star, Quote } from "lucide-react"

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Parent of Class 10 Student",
      image: "/placeholder.svg?height=80&width=80&text=PS",
      content:
        "JVM Shyamali has been instrumental in my daughter's academic and personal growth. The teachers are dedicated and the environment is nurturing.",
      rating: 5,
    },
    {
      name: "Rahul Kumar",
      role: "Alumni, IIT Delhi",
      image: "/placeholder.svg?height=80&width=80&text=RK",
      content:
        "The strong foundation I received at JVM helped me crack JEE and pursue my engineering dreams. Forever grateful to my teachers.",
      rating: 5,
    },
    {
      name: "Dr. Anjali Singh",
      role: "Parent & Local Doctor",
      image: "/placeholder.svg?height=80&width=80&text=AS",
      content:
        "The school's focus on both academics and character building is commendable. My son has developed excellent values along with knowledge.",
      rating: 5,
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
            What Our Community Says
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from parents, students, and alumni about their experience with JVM Shyamali
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 relative"
            >
              <Quote className="absolute top-4 right-4 text-emerald-200" size={32} />

              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4 shadow-lg"
                />
                <div>
                  <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                  <p className="text-emerald-600 text-sm font-medium">{testimonial.role}</p>
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-amber-400 fill-current" size={20} />
                ))}
              </div>

              <p className="text-gray-700 leading-relaxed italic">"{testimonial.content}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
