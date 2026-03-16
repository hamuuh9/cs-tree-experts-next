'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Phone, ArrowRight, CheckCircle, Star, TreeDeciduous, Scissors, Truck, CloudLightning } from 'lucide-react'

const services = [
  { icon: Scissors, title: 'Tree Trimming', description: 'Professional shaping and pruning' },
  { icon: TreeDeciduous, title: 'Tree Removal', description: 'Safe and efficient removal' },
  { icon: Truck, title: 'Stump Grinding', description: 'Complete stump removal' },
  { icon: CloudLightning, title: 'Storm Damage', description: 'Emergency services' },
]

const stats = [
  { value: '14+', label: 'Years Experience' },
  { value: '2,500+', label: 'Jobs Completed' },
  { value: '100%', label: 'Satisfaction' },
  { value: '24hr', label: 'Response Time' },
]

const reviews = [
  { name: 'James M.', rating: 5, text: 'Chris did an amazing job trimming our large oak trees. Professional and great price!', image: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=400&q=80' },
  { name: 'Sarah L.', rating: 5, text: 'Removed a dead tree leaning toward our house. Fast and clean work!', image: 'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?w=400&q=80' },
  { name: 'Robert K.', rating: 5, text: 'Best tree service in Memphis! Fair pricing and Chris really knows his stuff.', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80' },
]

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden animated-bg">
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block text-lime font-semibold text-lg tracking-wider mb-4"
            >
              MEMPHIS' TRUSTED TREE EXPERTS SINCE 2010
            </motion.span>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
              Your Trees.<br />
              <span className="text-lime">Our Expertise.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/80 mb-10 max-w-2xl mx-auto">
              Professional tree care services in Memphis. From routine trimming to emergency removal, we keep your property safe and beautiful.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/contact"
                  className="btn-pulse bg-lime text-forest px-8 py-4 rounded-full font-bold text-lg"
                >
                  Get Free Estimate
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <a
                  href="tel:+19015550142"
                  className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-forest transition-colors flex items-center gap-2"
                >
                  <Phone className="h-5 w-5" />
                  (901) 555-0142
                </a>
              </motion.div>
            </div>
            
            <div className="flex flex-wrap justify-center gap-8">
              {[
                { icon: CheckCircle, text: 'Licensed & Insured' },
                { icon: CheckCircle, text: 'Free Estimates' },
                { icon: CheckCircle, text: 'Same Day Service' },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-2 text-white/80"
                >
                  <item.icon className="h-5 w-5 text-lime" />
                  <span>{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <ArrowRight className="h-8 w-8 text-white/30 rotate-90" />
          </motion.div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-lime font-semibold tracking-wider">WHAT WE DO</span>
            <h2 className="text-4xl md:text-5xl font-bold text-forest mt-2 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive tree care solutions tailored to your property's needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="card-hover bg-white rounded-3xl p-8 shadow-lg"
              >
                <div className="w-16 h-16 bg-forest rounded-2xl flex items-center justify-center mb-6">
                  <service.icon className="h-8 w-8 text-lime" />
                </div>
                <h3 className="text-xl font-bold text-forest mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-forest font-semibold hover:text-lime transition-colors"
            >
              View All Services <ArrowRight className="h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-forest">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <p className="text-4xl md:text-5xl font-bold text-lime mb-2">{stat.value}</p>
                <p className="text-white/70">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-lime font-semibold tracking-wider">ABOUT US</span>
              <h2 className="text-4xl md:text-5xl font-bold text-forest mt-2 mb-6">
                Expert Tree Care You Can Trust
              </h2>
              <p className="text-xl text-gray-600 mb-6">
                With over 14 years of experience in Memphis, CS & S Tree Experts has built a reputation for quality workmanship.
              </p>
              <p className="text-gray-600 mb-8">
                Owner Chris Sampley brings hands-on expertise to every job. We treat your property like it's our own - with respect, care, and attention to detail.
              </p>
              <div className="flex gap-4">
                <Link
                  href="/about"
                  className="bg-forest text-white px-6 py-3 rounded-full font-semibold hover:bg-forest-light transition-colors"
                >
                  Learn More
                </Link>
                <Link
                  href="/contact"
                  className="border-2 border-forest text-forest px-6 py-3 rounded-full font-semibold hover:bg-forest hover:text-white transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative h-[500px] rounded-3xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80"
                  alt="Tree work professional"
                  fill
                  className="object-cover"
                />
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="absolute -bottom-6 -left-6 bg-lime rounded-2xl p-6 shadow-xl"
              >
                <p className="text-forest font-bold text-lg">Chris Sampley</p>
                <p className="text-forest/70">Owner & Operator</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Reviews Preview */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-lime font-semibold tracking-wider">TESTIMONIALS</span>
            <h2 className="text-4xl md:text-5xl font-bold text-forest mt-2 mb-4">What Our Customers Say</h2>
            <div className="flex items-center justify-center gap-2 mt-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 fill-lime text-lime" />
              ))}
              <span className="text-forest font-semibold ml-2">5.0 Rating</span>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <motion.div
                key={review.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="card-hover bg-white rounded-3xl p-8 shadow-lg"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-lime text-lime" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">"{review.text}"</p>
                <p className="font-bold text-forest">{review.name}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              href="/reviews"
              className="inline-flex items-center gap-2 text-forest font-semibold hover:text-lime transition-colors"
            >
              View All Reviews <ArrowRight className="h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-forest relative overflow-hidden">
        <div className="orb orb-1" style={{ background: '#84cc16', opacity: 0.2 }} />
        <div className="orb orb-2" style={{ background: '#22c55e', opacity: 0.2 }} />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Property?
            </h2>
            <p className="text-xl text-white/80 mb-10">
              Get a free estimate today. We're here to help with all your tree care needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-lime text-forest px-8 py-4 rounded-full font-bold text-lg hover:bg-white transition-colors"
              >
                Get Free Quote
              </Link>
              <a
                href="tel:+19015550142"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-forest transition-colors"
              >
                Call Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
