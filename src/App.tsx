import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
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
      </div>
    </Router>
  )
}

export default App
