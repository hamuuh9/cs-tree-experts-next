'use client'

import { motion } from 'framer-motion'
import { Phone, MapPin, Mail, Clock, Send, CheckCircle } from 'lucide-react'

const contactInfo = [
  {
    icon: Phone,
    title: 'Phone',
    value: '(901) 555-0142',
    description: 'Call us for immediate assistance',
  },
  {
    icon: Mail,
    title: 'Email',
    value: 'info@cstreeexperts.com',
    description: 'Send us a message anytime',
  },
  {
    icon: MapPin,
    title: 'Service Area',
    value: 'Memphis, TN',
    description: 'Memphis & surrounding areas',
  },
  {
    icon: Clock,
    title: 'Hours',
    value: 'Mon-Sat: 7AM - 6PM',
    description: 'Emergency service available',
  },
]

const serviceAreas = [
  'Memphis', 'Germantown', 'Bartlett', 'Collierville', 
  'Cordova', 'East Memphis', 'Midtown', 'Whitehaven'
]

export default function ContactPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative pt-32 pb-20 animated-bg min-h-[60vh] flex items-center">
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <span className="text-lime font-semibold tracking-wider">GET IN TOUCH</span>
            <h1 className="text-5xl md:text-7xl font-bold text-white mt-2 mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Ready to get a free estimate? Fill out the form or give us a call!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-forest mb-6">Request a Free Quote</h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Name *</label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-forest focus:ring-2 focus:ring-forest/20 outline-none transition"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone *</label>
                    <input
                      type="tel"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-forest focus:ring-2 focus:ring-forest/20 outline-none transition"
                      placeholder="(901) 555-0100"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-forest focus:ring-2 focus:ring-forest/20 outline-none transition"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Service Needed *</label>
                  <select
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-forest focus:ring-2 focus:ring-forest/20 outline-none transition"
                  >
                    <option value="">Select a service</option>
                    <option>Tree Trimming</option>
                    <option>Tree Removal</option>
                    <option>Stump Grinding</option>
                    <option>Storm Damage</option>
                    <option>Lot Clearing</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Address / Location</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-forest focus:ring-2 focus:ring-forest/20 outline-none transition"
                    placeholder="Your address or neighborhood"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Describe Your Project</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-forest focus:ring-2 focus:ring-forest/20 outline-none transition"
                    placeholder="Tell us about your tree care needs..."
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-forest text-white py-4 rounded-xl font-bold text-lg hover:bg-forest-dark transition-colors flex items-center justify-center gap-2"
                >
                  <Send className="h-5 w-5" />
                  Request Free Quote
                </motion.button>

                <div className="flex items-center gap-2 text-sm text-gray-500 justify-center">
                  <CheckCircle className="h-4 w-4 text-lime" />
                  <span>We typically respond within 24 hours</span>
                </div>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-forest mb-6">Get In Touch</h2>
              <p className="text-gray-600 mb-8">
                Prefer to talk to us directly? Here's how you can reach us.
              </p>

              <div className="space-y-6 mb-12">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-14 h-14 bg-forest rounded-2xl flex items-center justify-center flex-shrink-0">
                      <info.icon className="h-6 w-6 text-lime" />
                    </div>
                    <div>
                      <p className="font-semibold text-forest">{info.title}</p>
                      <p className="text-gray-600">{info.value}</p>
                      <p className="text-sm text-gray-500">{info.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Service Areas */}
              <div className="bg-white rounded-3xl p-8 shadow-lg">
                <h3 className="text-xl font-bold text-forest mb-4">Service Areas</h3>
                <div className="flex flex-wrap gap-2">
                  {serviceAreas.map((area) => (
                    <span
                      key={area}
                      className="bg-cream text-forest px-4 py-2 rounded-full text-sm font-medium"
                    >
                      {area}
                    </span>
                  ))}
                </div>
                <p className="text-sm text-gray-500 mt-4">
                  Don't see your area? Call us! We may be able to serve you.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[400px] bg-forest-light relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <MapPin className="h-16 w-16 text-lime mx-auto mb-4" />
            <p className="text-white text-xl font-semibold">Serving Memphis & Surrounding Areas</p>
            <p className="text-white/70">Click to view on Google Maps</p>
          </div>
        </div>
      </section>
    </main>
  )
}
