'use client'

import { motion } from 'framer-motion'
import { TreeDeciduous, Scissors, Truck, CloudLightning, Ruler, Leaf, Shield, Clock } from 'lucide-react'

const services = [
  {
    icon: Scissors,
    title: 'Tree Trimming',
    description: 'Professional shaping and pruning to enhance the health and appearance of your trees. Our expert trimming promotes healthy growth and improves the overall look of your landscape.',
    features: ['Crown thinning', 'Crown reduction', 'Deadwood removal', 'Shape & aesthetics'],
    image: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&q=80',
  },
  {
    icon: TreeDeciduous,
    title: 'Tree Removal',
    description: 'Safe and efficient removal of dead, diseased, or hazardous trees of any size. We handle complex removals with precision and safety.',
    features: ['Complete tree removal', 'Stump extraction', 'Emergency removal', 'Lot clearing'],
    image: 'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?w=800&q=80',
  },
  {
    icon: Truck,
    title: 'Stump Grinding',
    description: 'Complete stump removal to clear your yard and prevent pest infestations. We grind stumps below ground level for a clean finish.',
    features: ['Below-ground grinding', 'Stump removal', 'Debris cleanup', 'Ground restoration'],
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
  },
  {
    icon: CloudLightning,
    title: 'Storm Damage',
    description: 'Emergency services for storm-damaged trees. We respond quickly to restore safety and clean up after severe weather.',
    features: ['24/7 emergency service', 'Storm cleanup', 'Fallen tree removal', 'Property protection'],
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80',
  },
]

const whyChooseUs = [
  { icon: Shield, title: 'Fully Insured', description: 'Complete liability coverage for your peace of mind' },
  { icon: Clock, title: 'On-Time Service', description: 'We show up when we say we will' },
  { icon: Leaf, title: 'Eco-Friendly', description: 'Responsible disposal and recycling of debris' },
  { icon: Ruler, title: 'Free Estimates', description: 'No obligations, detailed quotes' },
]

export default function ServicesPage() {
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
            <span className="text-lime font-semibold tracking-wider">PROFESSIONAL TREE CARE</span>
            <h1 className="text-5xl md:text-7xl font-bold text-white mt-2 mb-6">
              Our Services
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Comprehensive tree care solutions tailored to your property's unique needs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`mb-24 last:mb-0 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''} flex flex-col lg:flex-row gap-12 items-center`}
            >
              <div className="lg:w-1/2">
                <div className="relative h-[400px] rounded-3xl overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${service.image})` }}
                  />
                  <div className="absolute inset-0 bg-forest/20" />
                </div>
              </div>
              
              <div className="lg:w-1/2">
                <div className="w-16 h-16 bg-lime rounded-2xl flex items-center justify-center mb-6">
                  <service.icon className="h-8 w-8 text-forest" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-forest mb-4">{service.title}</h2>
                <p className="text-lg text-gray-600 mb-6">{service.description}</p>
                <ul className="grid grid-cols-2 gap-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-gray-700">
                      <span className="w-2 h-2 bg-lime rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-lime font-semibold tracking-wider">WHY CHOOSE US</span>
            <h2 className="text-4xl md:text-5xl font-bold text-forest mt-2">The CS & S Difference</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="card-hover bg-cream rounded-2xl p-8 text-center"
              >
                <div className="w-14 h-14 bg-forest rounded-xl flex items-center justify-center mx-auto mb-4">
                  <item.icon className="h-7 w-7 text-lime" />
                </div>
                <h3 className="font-bold text-forest mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-forest">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Need a Custom Solution?
            </h2>
            <p className="text-white/80 mb-8">
              Contact us for custom jobs and specialized tree care services.
            </p>
            <a
              href="tel:+19015550142"
              className="inline-block bg-lime text-forest px-8 py-4 rounded-full font-bold text-lg hover:bg-white transition-colors"
            >
              Call (901) 555-0142
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
