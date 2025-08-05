import type React from "react"
import { FileText, UserCheck, CreditCard, CheckCircle, Calendar, Phone, Mail, Download } from "lucide-react"
import { Link } from "react-router-dom"

const AdmissionProcess: React.FC = () => {
  const steps = [
    {
      icon: FileText,
      title: "Application Form",
      description: "Fill out the online application form with student and parent details.",
      details: ["Personal information", "Academic records", "Previous school details", "Medical information"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: UserCheck,
      title: "Document Verification",
      description: "Submit required documents for verification and review.",
      details: ["Birth certificate", "Previous school records", "Transfer certificate", "Medical certificate"],
      color: "from-emerald-500 to-teal-500",
    },
    {
      icon: Calendar,
      title: "Interaction Session",
      description: "Student and parent interaction with our admission team.",
      details: ["Student assessment", "Parent counseling", "School tour", "Program discussion"],
      color: "from-purple-500 to-indigo-500",
    },
    {
      icon: CreditCard,
      title: "Fee Payment",
      description: "Complete the admission process with fee payment.",
      details: ["Admission fee", "Security deposit", "First term fee", "Activity charges"],
      color: "from-orange-500 to-red-500",
    },
    {
      icon: CheckCircle,
      title: "Confirmation",
      description: "Receive admission confirmation and welcome kit.",
      details: ["Admission letter", "Student handbook", "Uniform details", "Academic calendar"],
      color: "from-green-500 to-emerald-500",
    },
  ]

  const requirements = [
    "Birth Certificate (Original + 2 copies)",
    "Previous School Transfer Certificate",
    "Academic Records/Report Cards",
    "Medical Certificate",
    "Passport Size Photographs (6 copies)",
    "Address Proof",
    "Parent ID Proof",
    "Caste Certificate (if applicable)",
  ]

  const feeStructure = [
    { grade: "Classes I - V", admission: "₹15,000", annual: "₹85,000", total: "₹1,00,000" },
    { grade: "Classes VI - VIII", admission: "₹20,000", annual: "₹95,000", total: "₹1,15,000" },
    { grade: "Classes IX - X", admission: "₹25,000", annual: "₹1,05,000", total: "₹1,30,000" },
    { grade: "Classes XI - XII", admission: "₹30,000", annual: "₹1,15,000", total: "₹1,45,000" },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Admission <span className="text-emerald-600">Process</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join our academic community through a simple and transparent admission process designed to welcome new students and families.
          </p>
        </div>

        {/* Process Steps */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12">Step-by-Step Process</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 text-center">
                  <div className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center mb-4 mx-auto`}>
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="mb-4">
                    <span className="text-sm font-bold text-emerald-600 bg-emerald-100 px-3 py-1 rounded-full">
                      Step {index + 1}
                    </span>
                  </div>
                  <h4 className="text-lg font-bold text-gray-800 mb-3">{step.title}</h4>
                  <p className="text-gray-600 text-sm mb-4">{step.description}</p>
                  <div className="space-y-1">
                    {step.details.map((detail, idx) => (
                      <div key={idx} className="text-xs text-gray-500 flex items-center justify-center">
                        <div className="w-1 h-1 bg-emerald-500 rounded-full mr-2"></div>
                        {detail}
                      </div>
                    ))}
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <div className="w-8 h-0.5 bg-emerald-300"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Required Documents */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <FileText className="w-6 h-6 text-emerald-600 mr-3" />
              Required Documents
            </h3>
            <div className="space-y-3">
              {requirements.map((requirement, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-emerald-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{requirement}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-6 border-t border-gray-200">
              <button className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium">
                <Download className="w-4 h-4 mr-2" />
                Download Document Checklist
              </button>
            </div>
          </div>

          {/* Fee Structure */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <CreditCard className="w-6 h-6 text-emerald-600 mr-3" />
              Fee Structure
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 text-sm font-semibold text-gray-700">Grade</th>
                    <th className="text-right py-3 text-sm font-semibold text-gray-700">Admission</th>
                    <th className="text-right py-3 text-sm font-semibold text-gray-700">Annual</th>
                    <th className="text-right py-3 text-sm font-semibold text-gray-700">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {feeStructure.map((fee, index) => (
                    <tr key={index} className="border-b border-gray-100">
                      <td className="py-3 text-sm text-gray-700">{fee.grade}</td>
                      <td className="py-3 text-sm text-gray-700 text-right">{fee.admission}</td>
                      <td className="py-3 text-sm text-gray-700 text-right">{fee.annual}</td>
                      <td className="py-3 text-sm font-semibold text-emerald-600 text-right">{fee.total}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-4 text-xs text-gray-500">
              * Fees include tuition, activities, and basic facilities. Additional charges may apply for optional services.
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="mt-16 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Apply?</h3>
          <p className="text-emerald-100 mb-6 max-w-2xl mx-auto">
            Start your child's journey with us today. Our admission team is here to guide you through every step of the process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <Link
              to="/admission"
              className="inline-flex items-center justify-center px-8 py-3 bg-white text-emerald-600 font-semibold rounded-xl hover:bg-gray-100 transition-colors duration-300"
            >
              Apply Online
            </Link>
            <button className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-emerald-600 transition-colors duration-300">
              Schedule Visit
            </button>
          </div>
          <div className="flex flex-col sm:flex-row gap-6 justify-center text-emerald-100">
            <div className="flex items-center justify-center">
              <Phone className="w-4 h-4 mr-2" />
              +91 98765 43210
            </div>
            <div className="flex items-center justify-center">
              <Mail className="w-4 h-4 mr-2" />
              admissions@platinumacademy.edu
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AdmissionProcess
