import type React from "react"
import Hero from "../components/Hero"
import Features from "../components/Features"
import AcademicPrograms from "../components/AcademicPrograms"
import Facilities from "../components/Facilities"
import GalleryComponent from "../components/Gallery"
import Stats from "../components/Stats"
import Testimonials from "../components/Testimonials"
import AdmissionProcess from "../components/AdmissionProcess"
import LatestNews from "../components/LatestNews"

const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <Features />
      <AcademicPrograms />
      <Facilities />
      <GalleryComponent />
      <Stats />
      <Testimonials />
      <AdmissionProcess />
      <LatestNews />
    </div>
  )
}

export default Home
