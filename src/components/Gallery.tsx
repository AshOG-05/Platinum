import type React from "react"
import { useState } from "react"
import { X, ChevronLeft, ChevronRight, Camera } from "lucide-react"

const GalleryComponent: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&h=400&fit=crop&crop=center",
      alt: "Beautiful aerial view of Platinum Academy campus",
      category: "Campus",
      title: "Main Campus Building"
    },
    {
      src: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=600&h=400&fit=crop&crop=center",
      alt: "Modern science laboratory at Platinum Academy",
      category: "Facilities",
      title: "Advanced Science Laboratory"
    },
    {
      src: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&h=400&fit=crop&crop=center",
      alt: "Students studying in the well-equipped library",
      category: "Facilities",
      title: "Digital Library & Resource Center"
    },
    {
      src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop&crop=center",
      alt: "Sports facilities and activities",
      category: "Sports",
      title: "Olympic Standard Sports Complex"
    },
    {
      src: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=600&h=400&fit=crop&crop=center",
      alt: "Smart interactive classroom",
      category: "Academics",
      title: "Smart Interactive Classrooms"
    },
    {
      src: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=600&h=400&fit=crop&crop=center",
      alt: "Art and craft classroom",
      category: "Activities",
      title: "Creative Arts Studio"
    },
    {
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop&crop=center",
      alt: "School auditorium",
      category: "Facilities",
      title: "Multi-Purpose Auditorium"
    },
    {
      src: "/science-experiment.png",
      alt: "Students conducting science experiments",
      category: "Technology",
      title: "Advanced Computer Laboratory"
    },
    {
      src: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=600&h=400&fit=crop&crop=center",
      alt: "School playground",
      category: "Sports",
      title: "Outdoor Sports Ground"
    },
    {
      src: "https://images.unsplash.com/photo-1567521464027-f127ff144326?w=600&h=400&fit=crop&crop=center",
      alt: "School cafeteria",
      category: "Facilities",
      title: "Hygienic Cafeteria"
    },
    {
      src: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop&crop=center",
      alt: "Music room",
      category: "Activities",
      title: "Music & Dance Studio"
    },
    {
      src: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&h=400&fit=crop&crop=center",
      alt: "School garden",
      category: "Campus",
      title: "Botanical Garden"
    },
  ]

  const categories = ["All", "Campus", "Facilities", "Academics", "Sports", "Activities", "Technology"]
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredImages = activeCategory === "All"
    ? galleryImages
    : galleryImages.filter(img => img.category === activeCategory)

  const openLightbox = (index: number) => {
    setSelectedImage(index)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredImages.length)
    }
  }

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? filteredImages.length - 1 : selectedImage - 1)
    }
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Campus <span className="text-emerald-600">Gallery</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Take a virtual tour of our beautiful campus and state-of-the-art facilities that create an inspiring learning environment.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${activeCategory === category
                  ? "bg-emerald-600 text-white shadow-lg"
                  : "bg-gray-100 text-gray-700 hover:bg-emerald-100 hover:text-emerald-600"
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
              onClick={() => openLightbox(index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-48 sm:h-56 md:h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-block px-3 py-1 bg-emerald-600 text-white text-xs rounded-full mb-2">
                    {image.category}
                  </span>
                  <h3 className="text-white font-semibold">{image.title}</h3>
                </div>
                <div className="absolute top-4 right-4">
                  <Camera className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-full">
              <img
                src={filteredImages[selectedImage].src}
                alt={filteredImages[selectedImage].alt}
                className="max-w-full max-h-full object-contain rounded-lg"
              />

              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-200"
              >
                <X size={20} />
              </button>

              {/* Navigation Buttons */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-200"
              >
                <ChevronLeft size={24} />
              </button>

              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-200"
              >
                <ChevronRight size={24} />
              </button>

              {/* Image Info */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/20 backdrop-blur-sm rounded-lg p-4">
                <span className="inline-block px-3 py-1 bg-emerald-600 text-white text-xs rounded-full mb-2">
                  {filteredImages[selectedImage].category}
                </span>
                <h3 className="text-white font-semibold text-lg">{filteredImages[selectedImage].title}</h3>
                <p className="text-white/80 text-sm mt-1">
                  {selectedImage + 1} of {filteredImages.length}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default GalleryComponent
