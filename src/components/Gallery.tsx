import type React from "react"
import { useState } from "react"
import { X, ChevronLeft, ChevronRight, Camera } from "lucide-react"

const GalleryComponent: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const galleryImages = [
    {
      src: "/placeholder.svg?height=400&width=600&text=Campus+View",
      alt: "Beautiful campus view",
      category: "Campus",
      title: "Main Campus Building"
    },
    {
      src: "/placeholder.svg?height=400&width=600&text=Science+Lab",
      alt: "Modern science laboratory",
      category: "Facilities",
      title: "Advanced Science Laboratory"
    },
    {
      src: "/placeholder.svg?height=400&width=600&text=Library",
      alt: "Well-equipped library",
      category: "Facilities",
      title: "Digital Library & Resource Center"
    },
    {
      src: "/placeholder.svg?height=400&width=600&text=Sports+Complex",
      alt: "Sports facilities",
      category: "Sports",
      title: "Olympic Standard Sports Complex"
    },
    {
      src: "/placeholder.svg?height=400&width=600&text=Classroom",
      alt: "Smart classroom",
      category: "Academics",
      title: "Smart Interactive Classrooms"
    },
    {
      src: "/placeholder.svg?height=400&width=600&text=Art+Room",
      alt: "Art and craft room",
      category: "Activities",
      title: "Creative Arts Studio"
    },
    {
      src: "/placeholder.svg?height=400&width=600&text=Auditorium",
      alt: "School auditorium",
      category: "Facilities",
      title: "Multi-Purpose Auditorium"
    },
    {
      src: "/placeholder.svg?height=400&width=600&text=Computer+Lab",
      alt: "Computer laboratory",
      category: "Technology",
      title: "Advanced Computer Laboratory"
    },
    {
      src: "/placeholder.svg?height=400&width=600&text=Playground",
      alt: "School playground",
      category: "Sports",
      title: "Outdoor Sports Ground"
    },
    {
      src: "/placeholder.svg?height=400&width=600&text=Cafeteria",
      alt: "School cafeteria",
      category: "Facilities",
      title: "Hygienic Cafeteria"
    },
    {
      src: "/placeholder.svg?height=400&width=600&text=Music+Room",
      alt: "Music room",
      category: "Activities",
      title: "Music & Dance Studio"
    },
    {
      src: "/placeholder.svg?height=400&width=600&text=Garden",
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
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category
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
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
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
