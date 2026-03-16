'use client'

import { motion } from 'framer-motion'
import { Star, Quote, ThumbsUp, Calendar } from 'lucide-react'

const reviews = [
  {
    name: 'James M.',
    rating: 5,
    text: 'Chris did an amazing job trimming our large oak trees. Professional, on time, and great price! Highly recommend to anyone in Memphis looking for tree service.',
    service: 'Tree Trimming',
    date: 'January 2024',
    image: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=400&q=80',
  },
  {
    name: 'Sarah L.',
    rating: 5,
    text: 'Removed a dead tree that was leaning toward our house. Fast and clean work. They even cleaned up all the debris. Highly recommend!',
    service: 'Tree Removal',
    date: 'December 2023',
    image: 'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?w=400&q=80',
  },
  {
    name: 'Robert K.',
    rating: 5,
    text: 'Best tree service in Memphis! Fair pricing and Chris really knows his stuff. Will definitely use them again.',
    service: 'Stump Grinding',
    date: 'November 2023',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80',
  },
  {
    name: 'Michael T.',
    rating: 5,
    text: 'After the storm took down a big tree in our yard, they came same day. Saved my fence from more damage. Great emergency service!',
    service: 'Storm Damage',
    date: 'October 2023',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
  },
  {
    name: 'David W.',
    rating: 5,
    text: 'Cleared our empty lot for construction. Great crew, professional equipment. They finished ahead of schedule.',
    service: 'Lot Clearing',
    date: 'September 2023',
    image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=400&q=80',
  },
  {
    name: 'Linda P.',
    rating: 5,
    text: 'They saved the day! Tree fell on our roof at midnight. Came right away and handled everything. Very grateful!',
    service: 'Emergency Service',
    date: 'August 2023',
    image: 'https://images.unsplash.com/photo-1605117882932-f9e32b03ef3c?w=400&q=80',
  },
  {
    name: 'Jennifer H.',
    rating: 5,
    text: 'Trimming service for several trees in our backyard. Great work, very clean, and reasonable prices. Will use again!',
    service: 'Tree Trimming',
    date: 'July 2023',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=80',
  },
  {
    name: 'Thomas B.',
    rating: 5,
    text: 'Had them remove a large tree near power lines. Nerves were high but they handled it professionally and safely. Impressed!',
    service: 'Tree Removal',
    date: 'June 2023',
    image: 'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?w=400&q=80',
  },
  {
    name: 'Amanda R.',
    rating: 5,
    text: 'Stump grinding was quick and efficient. They ground the stump below ground level and raked up everything. Looks great!',
    service: 'Stump Grinding',
    date: 'May 2023',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80',
  },
]

export default function ReviewsPage() {
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
            <span className="text-lime font-semibold tracking-wider">TESTIMONIALS</span>
            <h1 className="text-5xl md:text-7xl font-bold text-white mt-2 mb-6">
              Customer Reviews
            </h1>
            <div className="flex items-center justify-center gap-2 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-8 w-8 fill-lime text-lime" />
              ))}
            </div>
            <p className="text-xl text-white/80">5.0 Rating • Based on 50+ Reviews</p>
          </motion.div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-forest mb-4">What Our Customers Say</h2>
            <p className="text-xl text-gray-600">Real reviews from real Memphis customers</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <motion.div
                key={review.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -8 }}
                className="card-hover bg-white rounded-3xl overflow-hidden shadow-lg"
              >
                <div className="h-48 relative">
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${review.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest/80 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex gap-1 mb-2">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-lime text-lime" />
                      ))}
                    </div>
                    <p className="text-white font-bold text-lg">{review.name}</p>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                    <span className="bg-lime/20 text-forest px-3 py-1 rounded-full text-xs font-medium">
                      {review.service}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {review.date}
                    </span>
                  </div>
                  <p className="text-gray-700 leading-relaxed">"{review.text}"</p>
                  
                  <div className="flex items-center gap-2 mt-4 pt-4 border-t border-gray-100">
                    <ThumbsUp className="h-4 w-4 text-lime" />
                    <span className="text-sm text-gray-500">Verified Customer</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Google Reviews CTA */}
      <section className="py-20 bg-forest">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Quote className="h-16 w-16 text-lime mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Share Your Experience
            </h2>
            <p className="text-white/80 mb-8">
              Had a great experience with us? We'd love to hear from you! Leave a review on Google to help others in Memphis find reliable tree care.
            </p>
            <a
              href="https://www.google.com/maps/place/CS+%26+S+TREE+EXPERTS-OWNER:+CHRIS+SAMPLEY/@35.149708,-90.7598483,97015m/data=!3m1!1e3!4m10!1m2!2m1!1sTree+Triming+Memphis!3m6!1s0x87d57764e495b881:0x72cd783bbe1f061f!8m2!3d35.149708!4d-90.1830661"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-lime text-forest px-8 py-4 rounded-full font-bold text-lg hover:bg-white transition-colors"
            >
              Leave a Review on Google
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
