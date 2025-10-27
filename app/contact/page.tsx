"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import Header from "@/components/header"
import CursorSpotlight from "@/components/cursor-spotlight"
import ScrollToTop from "@/components/scroll-to-top"

const services = ["Website Development", "Web Design", "UX / Product Design", "Mobile App Development"]
const budgets = ["20-30K", "30-50K", "50-75K", "100K +"]

export default function ContactPage() {
  const [selectedServices, setSelectedServices] = useState<string[]>([])
  const [selectedBudget, setSelectedBudget] = useState("")
  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState("")
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

  const handleSubmit = async () => {
    // Validate required fields before submission
    if (!formData.name.trim()) {
      setSubmitStatus('error')
      setErrorMessage('Please enter your name.')
      return
    }
    if (!formData.email.trim()) {
      setSubmitStatus('error')
      setErrorMessage('Please enter your email address.')
      return
    }
    if (!formData.project.trim()) {
      setSubmitStatus('error')
      setErrorMessage('Please describe your project.')
      return
    }
    if (selectedServices.length === 0) {
      setSubmitStatus('error')
      setErrorMessage('Please select at least one service.')
      return
    }
    if (!selectedBudget) {
      setSubmitStatus('error')
      setErrorMessage('Please select a budget range.')
      return
    }

    setIsSubmitting(true)
    setSubmitStatus('idle')
    setErrorMessage("")

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          company: formData.company.trim(),
          email: formData.email.trim(),
          project: formData.project.trim(),
          selectedServices,
          selectedBudget,
        }),
      })

      const result = await response.json()

      if (response.ok && result.success) {
        setSubmitStatus('success')
        // Reset form
        setFormData({ name: "", company: "", email: "", project: "" })
        setSelectedServices([])
        setSelectedBudget("")
        setCurrentStep(1)
      } else {
        setSubmitStatus('error')
        setErrorMessage(result.message || result.errors?.join(', ') || 'Something went wrong. Please try again.')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
      setErrorMessage('Network error. Please check your connection and try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <CursorSpotlight />
      <ScrollToTop />

      <div className="min-h-screen bg-[#F5F1E8] text-black">
        <Header />

        <main className="pt-32 pb-20">
          <div className="max-w-4xl mx-auto px-8 text-center">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="mb-16"
            >
              <h1 className="text-6xl md:text-8xl font-light mb-8 italic">Let's chat</h1>
              <p className="text-lg opacity-70">Tell us more about what you're building and how we can help.</p>
            </motion.div>

            {/* Success Message */}
            {submitStatus === 'success' && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mb-8 p-6 bg-green-50 border border-green-200 rounded-lg"
              >
                <h3 className="text-xl font-light text-green-800 mb-2">Thank you!</h3>
                <p className="text-green-700">We've received your message and will get back to you soon.</p>
              </motion.div>
            )}

            {/* Error Message */}
            {submitStatus === 'error' && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mb-8 p-6 bg-red-50 border border-red-200 rounded-lg"
              >
                <h3 className="text-xl font-light text-red-800 mb-2">Oops! Validation failed</h3>
                <p className="text-red-700">{errorMessage}</p>
                <button
                  onClick={() => {
                    setSubmitStatus('idle')
                    setErrorMessage("")
                  }}
                  className="mt-2 text-sm text-red-600 underline hover:no-underline"
                >
                  Dismiss
                </button>
              </motion.div>
            )}

            {/* Step 1: Service Selection */}
            {currentStep === 1 && (
              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                <h2 className="text-2xl font-light mb-8">Select the services you are looking to partner with us on.</h2>
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

            {/* Step 2: Budget Selection */}
            {currentStep === 2 && (
              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                <h2 className="text-2xl font-light mb-8">What's the budget you have set aside for this project?</h2>
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
                <div className="flex gap-4 justify-center">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setCurrentStep(1)}
                    className="bg-gray-200 text-black px-6 py-3 rounded-full text-lg font-light"
                  >
                    BACK
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setCurrentStep(3)}
                    disabled={!selectedBudget}
                    className="bg-black text-white px-8 py-4 rounded-full text-lg font-light disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    ONE LAST BIT OF INFO →
                  </motion.button>
                </div>
              </motion.div>
            )}

            {/* Step 3: Final Form */}
            {currentStep === 3 && (
              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                <h2 className="text-2xl font-light mb-12">Let's grab some general info</h2>

                <div className="max-w-2xl mx-auto space-y-8">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    <input
                      type="text"
                      placeholder="YOUR NAME *"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      className={`w-full bg-transparent border-b-2 pb-3 text-lg focus:outline-none transition-colors placeholder-gray-400 ${
                        submitStatus === 'error' && !formData.name.trim() 
                          ? 'border-red-500' 
                          : 'border-black focus:border-blue-600'
                      }`}
                      required
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <input
                      type="text"
                      placeholder="COMPANY NAME"
                      value={formData.company}
                      onChange={(e) => handleInputChange("company", e.target.value)}
                      className="w-full bg-transparent border-b-2 border-black pb-3 text-lg focus:outline-none focus:border-blue-600 transition-colors placeholder-gray-400"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <input
                      type="email"
                      placeholder="EMAIL *"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className={`w-full bg-transparent border-b-2 pb-3 text-lg focus:outline-none transition-colors placeholder-gray-400 ${
                        submitStatus === 'error' && !formData.email.trim() 
                          ? 'border-red-500' 
                          : 'border-black focus:border-blue-600'
                      }`}
                      required
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <textarea
                      placeholder="BRIEFLY TELL US ABOUT YOUR PROJECT *"
                      rows={4}
                      value={formData.project}
                      onChange={(e) => handleInputChange("project", e.target.value)}
                      className={`w-full bg-transparent border-b-2 pb-3 text-lg focus:outline-none transition-colors resize-none placeholder-gray-400 ${
                        submitStatus === 'error' && !formData.project.trim() 
                          ? 'border-red-500' 
                          : 'border-black focus:border-blue-600'
                      }`}
                      required
                    />
                  </motion.div>

                  <div className="flex gap-4 justify-center pt-8">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setCurrentStep(2)}
                      disabled={isSubmitting}
                      className="bg-gray-200 text-black px-6 py-3 rounded-full text-lg font-light disabled:opacity-50"
                    >
                      BACK
                    </motion.button>
                    <motion.button
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={handleSubmit}
                      disabled={!formData.name || !formData.email || isSubmitting}
                      className="bg-black text-white px-8 py-4 rounded-full text-lg font-light disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          SENDING...
                        </>
                      ) : (
                        'SEND MESSAGE'
                      )}
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </main>
      </div>
    </>
  )
}
