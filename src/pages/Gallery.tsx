import type React from "react"
import { useState } from "react"
import { X, ChevronLeft, ChevronRight, Camera, Play, Download, Share2 } from "lucide-react"

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [activeTab, setActiveTab] = useState("photos")

  const photoGallery = [
    {
      src: "https://images.unsplash.com/photo-1527891751199-7225231a68dd?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Beautiful aerial view of campus",
      category: "Campus",
      title: "Aerial Campus View",
      date: "2024-12-01"
    },
    {
      src: "https://images.unsplash.com/photo-1622646992037-9114dc01dd03?q=80&w=2350&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Students presenting science projects",
      category: "Events",
      title: "Annual Science Fair 2024",
      date: "2024-11-15"
    },
    {
      src: "https://images.unsplash.com/photo-1621998014874-a6edfb5f9bc7?q=80&w=2338&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Students participating in sports",
      category: "Sports",
      title: "Inter-House Sports Championship",
      date: "2024-10-20"
    },
    {
      src: "https://images.unsplash.com/photo-1463592177119-bab2a00f3ccb?q=80&w=2338&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Cultural performance by students",
      category: "Cultural",
      title: "Annual Cultural Festival",
      date: "2024-12-15"
    },
    {
      src: "https://images.unsplash.com/photo-1591218214141-45545921d2d9?q=80&w=2342&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Graduation ceremony",
      category: "Academic",
      title: "Class XII Graduation 2024",
      date: "2024-03-30"
    },
    {
      src: "https://images.unsplash.com/photo-1602114324271-08ea0e9f7a95?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Students reading in library",
      category: "Academic",
      title: "Library Study Session",
      date: "2024-09-10"
    },
    {
      src: "https://plus.unsplash.com/premium_photo-1683140765647-e3d53b88e69c?q=80&w=2342&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Student art exhibition",
      category: "Cultural",
      title: "Student Art Exhibition",
      date: "2024-08-25"
    },
    {
      src: "https://images.unsplash.com/photo-1719159381981-1327b22aff9b?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Students in computer lab",
      category: "Academic",
      title: "Computer Programming Class",
      date: "2024-07-15"
    },
    {
      src: "https://plus.unsplash.com/premium_photo-1703618159183-0e34e2304a5c?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "School music concert",
      category: "Cultural",
      title: "Annual Music Concert",
      date: "2024-06-20"
    },
    {
      src: "https://plus.unsplash.com/premium_photo-1683841528606-c51a3d7002ba?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "",
      category: "Events",
      title: "Educational Field Trip",
      date: "2024-05-10"
    },
    {
      src: "https://images.unsplash.com/photo-1560090995-01632a28895b?q=80&w=2338&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Swimming competition",
      category: "Sports",
      title: "Swimming Championship",
      date: "2024-04-18"
    },
    {
      src: "https://plus.unsplash.com/premium_photo-1716396589811-69274847ce9f?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Robotics club activity",
      category: "Academic",
      title: "Robotics Club Workshop",
      date: "2024-03-12"
    },
  ]

  const videoGallery = [
    {
      thumbnail: "/placeholder.svg?height=300&width=400&text=School+Tour+Video",
      title: "Virtual Campus Tour 2024",
      duration: "5:30",
      category: "Campus",
      date: "2024-12-01"
    },
    {
      thumbnail: "https://images.unsplash.com/photo-1621998014874-a6edfb5f9bc7?q=80&w=2338&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Annual Day Celebration Highlights",
      duration: "12:45",
      category: "Events",
      date: "2024-12-15"
    },
    {
      thumbnail: "https://images.unsplash.com/photo-1553079358-a1f7fdc539c5?q=80&w=2348&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Sports Championship Highlights",
      duration: "8:20",
      category: "Sports",
      date: "2024-10-20"
    },
    {
      thumbnail: "https://images.unsplash.com/photo-1514720822943-e1625ae92198?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Science Fair 2024 - Student Innovations",
      duration: "15:10",
      category: "Academic",
      date: "2024-11-15"
    },
  ]

  const categories = ["All", "Campus", "Academic", "Events", "Sports", "Cultural"]
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredPhotos = activeCategory === "All" 
    ? photoGallery 
    : photoGallery.filter(img => img.category === activeCategory)

  const filteredVideos = activeCategory === "All" 
    ? videoGallery 
    : videoGallery.filter(video => video.category === activeCategory)

  const openLightbox = (index: number) => {
    setSelectedImage(index)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredPhotos.length)
    }
  }

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? filteredPhotos.length - 1 : selectedImage - 1)
    }
  }

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
            School Gallery
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
            Explore our vibrant school life through photos and videos capturing memorable moments, 
            achievements, and the dynamic learning environment at Platinum Academy.
          </p>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-center mb-8">
            <div className="bg-gray-100 rounded-xl p-1">
              <button
                onClick={() => setActiveTab("photos")}
                className={`px-8 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeTab === "photos"
                    ? "bg-white text-emerald-600 shadow-md"
                    : "text-gray-600 hover:text-emerald-600"
                }`}
              >
                Photos ({photoGallery.length})
              </button>
              <button
                onClick={() => setActiveTab("videos")}
                className={`px-8 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeTab === "videos"
                    ? "bg-white text-emerald-600 shadow-md"
                    : "text-gray-600 hover:text-emerald-600"
                }`}
              >
                Videos ({videoGallery.length})
              </button>
            </div>
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
        </div>
      </section>

      {/* Gallery Content */}
      <section className="py-12 bg-gradient-to-br from-gray-50 to-emerald-50">
        <div className="container mx-auto px-4">
          {activeTab === "photos" ? (
            /* Photo Gallery */
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredPhotos.map((photo, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
                  onClick={() => openLightbox(index)}
                >
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="inline-block px-3 py-1 bg-emerald-600 text-white text-xs rounded-full mb-2">
                        {photo.category}
                      </span>
                      <h3 className="text-white font-semibold text-sm">{photo.title}</h3>
                      <p className="text-white/80 text-xs">{photo.date}</p>
                    </div>
                    <div className="absolute top-4 right-4">
                      <Camera className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* Video Gallery */
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredVideos.map((video, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="relative">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <Play className="w-8 h-8 text-white ml-1" />
                      </div>
                    </div>
                    <div className="absolute top-4 left-4 bg-emerald-600 text-white px-2 py-1 rounded text-xs">
                      {video.category}
                    </div>
                    <div className="absolute bottom-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-xs">
                      {video.duration}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-800 mb-2">{video.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{video.date}</p>
                    <div className="flex gap-2">
                      <button className="flex-1 bg-emerald-600 text-white py-2 px-4 rounded-lg hover:bg-emerald-700 transition-colors duration-300 text-sm">
                        Watch Now
                      </button>
                      <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-300">
                        <Share2 className="w-4 h-4 text-gray-600" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Lightbox for Photos */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <img
              src={filteredPhotos[selectedImage].src}
              alt={filteredPhotos[selectedImage].alt}
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
              <div className="flex items-center justify-between">
                <div>
                  <span className="inline-block px-3 py-1 bg-emerald-600 text-white text-xs rounded-full mb-2">
                    {filteredPhotos[selectedImage].category}
                  </span>
                  <h3 className="text-white font-semibold text-lg">{filteredPhotos[selectedImage].title}</h3>
                  <p className="text-white/80 text-sm">{filteredPhotos[selectedImage].date}</p>
                </div>
                <div className="flex gap-2">
                  <button className="p-2 bg-white/20 backdrop-blur-sm rounded-lg text-white hover:bg-white/30 transition-colors duration-200">
                    <Download size={16} />
                  </button>
                  <button className="p-2 bg-white/20 backdrop-blur-sm rounded-lg text-white hover:bg-white/30 transition-colors duration-200">
                    <Share2 size={16} />
                  </button>
                </div>
              </div>
              <p className="text-white/80 text-sm mt-2">
                {selectedImage + 1} of {filteredPhotos.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Gallery
