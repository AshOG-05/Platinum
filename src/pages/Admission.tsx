import type React from "react"
import { CheckCircle, Download, Calendar, Users, FileText, CreditCard } from "lucide-react"
import AdmissionProcess from "../components/AdmissionProcess"

const Admission: React.FC = () => {
  const admissionProcess = [
    {
      step: "1",
      title: "Application Form",
      description: "Fill out the online application form or download and submit the physical form.",
      icon: <FileText size={24} />,
    },
    {
      step: "2",
      title: "Document Submission",
      description: "Submit required documents including previous academic records and certificates.",
      icon: <CheckCircle size={24} />,
    },
    {
      step: "3",
      title: "Interaction/Test",
      description: "Attend the interaction session or entrance test as per the class requirements.",
      icon: <Users size={24} />,
    },
    {
      step: "4",
      title: "Fee Payment",
      description: "Complete the admission process by paying the required fees upon selection.",
      icon: <CreditCard size={24} />,
    },
  ]

  const documents = [
    "Birth Certificate (Original + 2 copies)",
    "Previous School Transfer Certificate",
    "Academic Records/Mark Sheets",
    "Passport Size Photographs (6 copies)",
    "Aadhar Card Copy (Student & Parents)",
    "Caste Certificate (if applicable)",
    "Income Certificate (for fee concession)",
    "Medical Certificate",
  ]

  const feeStructure = [
    { class: "Nursery - UKG", admission: "₹25,000", monthly: "₹8,500", annual: "₹1,02,000" },
    { class: "Class I - V", admission: "₹30,000", monthly: "₹9,500", annual: "₹1,14,000" },
    { class: "Class VI - VIII", admission: "₹35,000", monthly: "₹10,500", annual: "₹1,26,000" },
    { class: "Class IX - X", admission: "₹40,000", monthly: "₹11,500", annual: "₹1,38,000" },
    { class: "Class XI - XII", admission: "₹45,000", monthly: "₹12,500", annual: "₹1,50,000" },
  ]

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
            Admission 2025-26
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Join the Platinum Academy family and embark on a journey of academic excellence and holistic development
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              Apply Online Now
            </button>
            <button className="flex items-center justify-center border-2 border-emerald-500 text-emerald-600 px-8 py-4 rounded-xl font-semibold hover:bg-emerald-50 transition-all duration-300">
              <Download className="mr-2" size={20} />
              Download Prospectus
            </button>
          </div>
        </div>
      </section>

      {/* Important Dates */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
            Important Dates
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-6 text-center shadow-lg">
              <Calendar className="text-emerald-500 mx-auto mb-4" size={32} />
              <h3 className="font-bold text-gray-800 mb-2">Application Start</h3>
              <p className="text-emerald-600 font-semibold">January 15, 2025</p>
            </div>
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6 text-center shadow-lg">
              <Calendar className="text-amber-500 mx-auto mb-4" size={32} />
              <h3 className="font-bold text-gray-800 mb-2">Last Date</h3>
              <p className="text-amber-600 font-semibold">March 31, 2025</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 text-center shadow-lg">
              <Calendar className="text-blue-500 mx-auto mb-4" size={32} />
              <h3 className="font-bold text-gray-800 mb-2">Entrance Test</h3>
              <p className="text-blue-600 font-semibold">April 15, 2025</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 text-center shadow-lg">
              <Calendar className="text-purple-500 mx-auto mb-4" size={32} />
              <h3 className="font-bold text-gray-800 mb-2">Session Starts</h3>
              <p className="text-purple-600 font-semibold">April 1, 2025</p>
            </div>
          </div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-emerald-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
            Admission Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {admissionProcess.map((process, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full flex items-center justify-center text-white mx-auto mb-6 shadow-lg">
                    {process.icon}
                  </div>
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-emerald-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                    {process.step}
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-gray-800">{process.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{process.description}</p>
                </div>
                {index < admissionProcess.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-emerald-300 transform -translate-y-1/2"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Required Documents */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Required Documents
              </h2>
              <div className="space-y-4">
                {documents.map((document, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="text-emerald-500 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">{document}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 p-6 bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl border-l-4 border-amber-500">
                <h4 className="font-bold text-amber-800 mb-2">Important Note:</h4>
                <p className="text-amber-700">
                  All documents must be attested by a Gazetted Officer or the Principal of the previous school. Original
                  documents will be verified and returned after admission confirmation.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Fee Structure 2025-26
              </h2>
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white p-4">
                  <div className="grid grid-cols-4 gap-4 font-semibold">
                    <div>Class</div>
                    <div>Admission</div>
                    <div>Monthly</div>
                    <div>Annual</div>
                  </div>
                </div>
                {feeStructure.map((fee, index) => (
                  <div
                    key={index}
                    className={`p-4 border-b border-gray-100 ${index % 2 === 0 ? "bg-gray-50" : "bg-white"}`}
                  >
                    <div className="grid grid-cols-4 gap-4">
                      <div className="font-medium text-gray-800">{fee.class}</div>
                      <div className="text-emerald-600 font-semibold">{fee.admission}</div>
                      <div className="text-gray-700">{fee.monthly}</div>
                      <div className="text-gray-700">{fee.annual}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl">
                <p className="text-blue-700 text-sm">
                  * Additional charges may apply for transport, uniform, books, and extracurricular activities. Fee
                  concessions available for economically weaker sections.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Admission Process Component */}
      <AdmissionProcess />
    </div>
  )
}

export default Admission
