'use client'

import Link from 'next/link'
import { TreeDeciduous, Phone, MapPin, Mail, Clock } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-forest-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-6">
              <TreeDeciduous className="h-9 w-9 text-lime" />
              <span className="text-white font-bold text-xl">CS & S Tree Experts</span>
            </div>
            <p className="text-white/70 mb-6 leading-relaxed">
              Memphis' trusted tree care professionals since 2010. Quality service at fair prices with a satisfaction guarantee.
            </p>
            <div className="flex gap-4">
              {['facebook', 'instagram', 'twitter'].map((social) => (
                <motion.a
                  key={social}
                  href="#"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-10 h-10 bg-forest-light rounded-full flex items-center justify-center text-white/70 hover:text-lime hover:bg-forest transition-colors"
                >
                  <span className="sr-only">{social}</span>
                  <div className="w-5 h-5 bg-current rounded-sm" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="font-bold text-lg mb-6 text-lime">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'Services', 'About', 'Reviews', 'Contact'].map((link) => (
                <li key={link}>
                  <Link
                    href={link === 'Home' ? '/' : `/${link.toLowerCase()}`}
                    className="text-white/70 hover:text-lime transition-colors"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-bold text-lg mb-6 text-lime">Services</h4>
            <ul className="space-y-3">
              {[
                'Tree Trimming',
                'Tree Removal',
                'Stump Grinding',
                'Storm Damage',
                'Lot Clearing',
              ].map((service) => (
                <li key={service}>
                  <Link
                    href="/services"
                    className="text-white/70 hover:text-lime transition-colors"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="font-bold text-lg mb-6 text-lime">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-white/70">
                <Phone className="h-5 w-5 text-lime flex-shrink-0" />
                <a href="tel:+19015550142" className="hover:text-lime transition-colors">
                  (901) 555-0142
                </a>
              </li>
              <li className="flex items-center gap-3 text-white/70">
                <MapPin className="h-5 w-5 text-lime flex-shrink-0" />
                <span>Memphis, TN</span>
              </li>
              <li className="flex items-center gap-3 text-white/70">
                <Mail className="h-5 w-5 text-lime flex-shrink-0" />
                <a href="mailto:info@cstreeexperts.com" className="hover:text-lime transition-colors">
                  info@cstreeexperts.com
                </a>
              </li>
              <li className="flex items-center gap-3 text-white/70">
                <Clock className="h-5 w-5 text-lime flex-shrink-0" />
                <span>Mon-Sat: 7AM - 6PM</span>
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-white/50 text-sm">
            © {currentYear} CS & S Tree Experts. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-white/50">
            <a href="#" className="hover:text-lime transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-lime transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-lime transition-colors">Licensed & Insured</a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
