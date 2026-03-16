'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Award, Users, Clock, Heart } from 'lucide-react'

const values = [
  {
    icon: Award,
    title: 'Quality Workmanship',
    description: 'We take pride in every job, no matter the size. Quality is never compromised.',
  },
  {
    icon: Users,
    title: 'Customer First',
    description: 'Your satisfaction is our top priority. We listen and deliver what you need.',
  },
  {
    icon: Clock,
    title: 'Reliable Service',
    description: 'On-time, every time. We show up when we say we will.',
  },
  {
    icon: Heart,
    title: 'Local & Loved',
    description: 'Proudly serving Memphis since 2010. We're your neighbors.',
  },
]

const timeline = [
  { year: '2010', title: 'Founded', description: 'CS & S Tree Experts was established in Memphis' },
  { year: '2015', title: 'Growth', description: 'Expanded services to include storm damage response' },
  { year: '2020', title: 'Milestone', description: 'Completed over 2,000 successful jobs' },
  { year: '2024', title: 'Today', description: 'Continuing to serve Memphis with excellence' },
]

export default function AboutPage() {
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
            <span className="text-lime font-semibold tracking-wider">ABOUT US</span>
            <h1 className="text-5xl md:text-7xl font-bold text-white mt-2 mb-6">
              Meet Chris Sampley
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              The face behind Memphis' most trusted tree service
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-lime font-semibold tracking-wider">OUR STORY</span>
              <h2 className="text-4xl md:text-5xl font-bold text-forest mt-2 mb-6">
                A Passion for Trees, A Commitment to Memphis
              </h2>
              <div className="space-y-4 text-lg text-gray-600">
                <p>
                  CS & S Tree Experts was founded with a simple mission: to provide Memphis residents with professional, reliable, and affordable tree care services.
                </p>
                <p>
                  Owner Chris Sampley has been working in the tree service industry for over 14 years. What started as a passion for trees has grown into one of Memphis' most trusted tree care companies.
                </p>
                <p>
                  We treat every property like it's our own - with respect, care, and attention to detail. From small residential trimming to large commercial removals, no job is too big or too small.
                </p>
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
                  alt="Chris Sampley - Tree Expert"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-lime rounded-2xl p-6 shadow-xl">
                <p className="text-forest font-bold text-3xl">14+</p>
                <p className="text-forest/70">Years Experience</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-lime font-semibold tracking-wider">OUR VALUES</span>
            <h2 className="text-4xl md:text-5xl font-bold text-forest mt-2">What We Stand For</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="card-hover bg-cream rounded-2xl p-8 text-center"
              >
                <div className="w-14 h-14 bg-forest rounded-xl flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-7 w-7 text-lime" />
                </div>
                <h3 className="font-bold text-forest mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-forest">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-lime font-semibold tracking-wider">OUR JOURNEY</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-2">Our History</h2>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 -translate-x-1/2 h-full w-1 bg-lime/30" />
            
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={`relative flex items-center mb-12 last:mb-0 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              >
                <div className={`flex-1 ${index % 2 === 0 ? 'text-right pr-12' : 'text-left pl-12'}`}>
                  <div className="bg-forest-light rounded-2xl p-6 inline-block">
                    <p className="text-lime font-bold text-2xl">{item.year}</p>
                    <p className="text-white font-semibold">{item.title}</p>
                    <p className="text-white/70 text-sm mt-1">{item.description}</p>
                  </div>
                </div>
                <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-lime rounded-full" />
                <div className="flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-forest mb-4">Ready to Work With Us?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Contact us today for a free estimate on your tree care needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-forest text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-forest-light transition-colors"
              >
                Get Free Quote
              </a>
              <a
                href="tel:+19015550142"
                className="border-2 border-forest text-forest px-8 py-4 rounded-full font-bold text-lg hover:bg-forest hover:text-white transition-colors"
              >
                Call (901) 555-0142
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
