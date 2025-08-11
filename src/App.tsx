import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Phone, MessageCircle } from "lucide-react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import About from "./pages/About"
import Admission from "./pages/Admission"
import Academics from "./pages/Academics"
import StudentLife from "./pages/StudentLife"
import News from "./pages/News"
import Contact from "./pages/Contact"
import Faculty from "./pages/Faculty"
import Facilities from "./pages/Facilities"
import Events from "./pages/Events"
import Gallery from "./pages/Gallery"
import Results from "./pages/Results"
import Careers from "./pages/Careers"
import "./App.css"

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/admission" element={<Admission />} />
            <Route path="/academics" element={<Academics />} />
            <Route path="/student-life" element={<StudentLife />} />
            <Route path="/faculty" element={<Faculty />} />
            <Route path="/facilities" element={<Facilities />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/events" element={<Events />} />
            <Route path="/results" element={<Results />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/news" element={<News />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />

        {/* Floating mobile quick actions (independent) */}
        <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-3 md:hidden">
          {/* Call popup */}
          <details className="group relative">
            <summary className="list-none cursor-pointer select-none">
              <div className="w-12 h-12 rounded-full bg-emerald-500 shadow-lg flex items-center justify-center hover:bg-emerald-600 active:scale-95 transition-transform">
                <Phone className="text-white" size={20} />
              </div>
            </summary>
            <div className="absolute bottom-14 right-0 w-48 rounded-xl border border-gray-200 bg-white shadow-xl overflow-hidden">
              <a href="tel:+919876543210" className="block px-4 py-3 text-gray-700 hover:bg-emerald-50">Call Main Office</a>
              <a href="tel:+919876543211" className="block px-4 py-3 text-gray-700 hover:bg-emerald-50">Call Admissions</a>
            </div>
          </details>

          {/* WhatsApp popup */}
          <details className="group relative">
            <summary className="list-none cursor-pointer select-none">
              <div className="w-12 h-12 rounded-full bg-green-500 shadow-lg flex items-center justify-center hover:bg-green-600 active:scale-95 transition-transform">
                <MessageCircle className="text-white" size={20} />
              </div>
            </summary>
            <div className="absolute bottom-14 right-0 w-56 rounded-xl border border-gray-200 bg-white shadow-xl overflow-hidden">
              <a
                href="https://wa.me/919876543210?text=Hello%20Brightwood%20Academy"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-3 text-gray-700 hover:bg-green-50"
              >
                WhatsApp: Admissions
              </a>
              <a
                href="https://wa.me/919876543212?text=Hello%20Brightwood%20Academy%20Support"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-3 text-gray-700 hover:bg-green-50"
              >
                WhatsApp: Support
              </a>
            </div>
          </details>
        </div>
      </div>
    </Router>
  )
}

export default App
