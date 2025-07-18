"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"

const services = ["BRANDING", "WEB DESIGN", "UX / PRODUCT DESIGN", "DEVELOPMENT"]
const budgets = ["$25-30K", "$30-50K", "$50-75K", "$100K +"]

export default function ContactSection() {
  const [selectedServices, setSelectedServices] = useState<string[]>([])
  const [selectedBudget, setSelectedBudget] = useState("")
  const [currentStep, setCurrentStep] = useState(0) // Start at 0 for initial CTA
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    project: "",
  })

  const toggleService = (service: string) => {
    setSelectedServices((prev) => (prev.includes(service) ? prev.filter((s) => s !== service) : [...prev, service]))
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = () => {
    console.log("Form submitted:", { formData, selectedServices, selectedBudget })
    // Add your form submission logic here
    alert("Thank you! We'll get back to you soon.")
  }

  return (
    <section className="py-20 bg-[#F5F1E8]">
      <div className="max-w-4xl mx-auto px-8 text-center">
        <AnimatePresence mode="wait">
          {currentStep === 0 && (
            <motion.div
              key="cta"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center justify-center gap-4 text-lg mb-8">
                <span>Ready to build something with us?</span>
                <motion.button
                  whileHover={{ x: 10, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setCurrentStep(1)}
                  className="flex items-center gap-2 text-4xl md:text-6xl font-light italic"
                >
                  Let's Chat
                  <motion.span
                    animate={{ x: [0, 10, 0] }}
                    transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
                  >
                    →
                  </motion.span>
                </motion.button>
              </div>
            </motion.div>
          )}

          {currentStep === 1 && (
            <motion.div
              key="form-intro"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-6xl md:text-8xl font-light mb-8 italic">Let's chat</h2>
              <p className="text-lg opacity-70 mb-12">Tell us more about what you're building and how we can help.</p>

              <h3 className="text-2xl font-light mb-8">Select the services you are looking to partner with us on.</h3>
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                {services.map((service) => (
                  <motion.button
                    key={service}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => toggleService(service)}
                    className={`px-6 py-3 rounded-full border-2 transition-all duration-300 ${
                      selectedServices.includes(service)
                        ? "bg-black text-white border-black"
                        : "bg-transparent text-black border-black hover:bg-black hover:text-white"
                    }`}
                  >
                    {service}
                  </motion.button>
                ))}
              </div>
              <p className="text-sm opacity-60 mb-8">DON'T LIKE FORMS AND WOULD RATHER JUST EMAIL US, THAT'S OK.</p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setCurrentStep(2)}
                disabled={selectedServices.length === 0}
                className="bg-black text-white px-8 py-4 rounded-full text-lg font-light disabled:opacity-50 disabled:cursor-not-allowed"
              >
                CONTINUE
              </motion.button>
            </motion.div>
          )}

          {currentStep === 2 && (
            <motion.div
              key="budget"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-6xl md:text-8xl font-light mb-8 italic">Let's chat</h2>
              <p className="text-lg opacity-70 mb-12">Tell us more about what you're building and how we can help.</p>

              <h3 className="text-2xl font-light mb-8">What's the budget you have set aside for this project?</h3>
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                {budgets.map((budget) => (
                  <motion.button
                    key={budget}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedBudget(budget)}
                    className={`px-6 py-3 rounded-full border-2 transition-all duration-300 ${
                      selectedBudget === budget
                        ? "bg-blue-600 text-white border-blue-600"
                        : "bg-transparent text-black border-black hover:bg-black hover:text-white"
                    }`}
                  >
                    {budget}
                  </motion.button>
                ))}
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setCurrentStep(3)}
                disabled={!selectedBudget}
                className="bg-black text-white px-8 py-4 rounded-full text-lg font-light disabled:opacity-50 disabled:cursor-not-allowed"
              >
                ONE LAST BIT OF INFO →
              </motion.button>
            </motion.div>
          )}

          {currentStep === 3 && (
            <motion.div
              key="final-form"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-6xl md:text-8xl font-light mb-8 italic">Let's chat</h2>
              <p className="text-lg opacity-70 mb-12">Tell us more about what you're building and how we can help.</p>

              <h3 className="text-2xl font-light mb-12">Let's grab some general info</h3>

              <div className="max-w-2xl mx-auto space-y-8">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
                  <input
                    type="text"
                    placeholder="YOUR NAME"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    className="w-full bg-transparent border-b-2 border-black pb-3 text-lg focus:outline-none focus:border-blue-600 transition-colors placeholder-gray-400"
                  />
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                  <input
                    type="text"
                    placeholder="COMPANY NAME"
                    value={formData.company}
                    onChange={(e) => handleInputChange("company", e.target.value)}
                    className="w-full bg-transparent border-b-2 border-black pb-3 text-lg focus:outline-none focus:border-blue-600 transition-colors placeholder-gray-400"
                  />
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                  <input
                    type="email"
                    placeholder="EMAIL"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="w-full bg-transparent border-b-2 border-black pb-3 text-lg focus:outline-none focus:border-blue-600 transition-colors placeholder-gray-400"
                  />
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
                  <textarea
                    placeholder="BRIEFLY TELL US ABOUT YOUR PROJECT"
                    rows={4}
                    value={formData.project}
                    onChange={(e) => handleInputChange("project", e.target.value)}
                    className="w-full bg-transparent border-b-2 border-black pb-3 text-lg focus:outline-none focus:border-blue-600 transition-colors resize-none placeholder-gray-400"
                  />
                </motion.div>

                <motion.button
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleSubmit}
                  disabled={!formData.name || !formData.email}
                  className="bg-black text-white px-8 py-4 rounded-full text-lg font-light mt-8 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  SEND MESSAGE
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
