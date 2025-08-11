import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, BookOpen, Heart, Star, Sparkles, User } from 'lucide-react'

export default function Hero() {
  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      const headerHeight = 80
      const elementPosition = element.offsetTop - headerHeight
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      })
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  }

  return (
    <section className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-primary-100 relative overflow-hidden flex items-center">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ 
            rotate: 360,
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            rotate: { duration: 50, repeat: Infinity, ease: "linear" },
            scale: { duration: 8, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-accent-300 to-accent-500 rounded-full opacity-20 blur-3xl"
        />
        <motion.div
          animate={{ 
            rotate: -360,
            y: [0, -20, 0]
          }}
          transition={{ 
            rotate: { duration: 40, repeat: Infinity, ease: "linear" },
            y: { duration: 6, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute bottom-32 left-16 w-24 h-24 bg-gradient-to-br from-primary-300 to-primary-500 rounded-full opacity-30 blur-2xl"
        />
      </div>

      <div className="container-max section-padding relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Column */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            <motion.div variants={itemVariants} className="space-y-4">
              <div className="flex items-center space-x-2 text-primary-600">
                <Sparkles className="w-5 h-5" />
                <span className="text-sm font-medium uppercase tracking-wider">Escritor Contemporâneo</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="text-gradient block">Adam Yasu</span>
                <span className="text-primary-800 text-3xl lg:text-4xl font-medium block mt-2">
                  Romance & Ficção
                </span>
              </h1>
            </motion.div>

            <motion.p 
              variants={itemVariants}
              className="text-xl text-primary-600 leading-relaxed max-w-xl"
            >
              Explore o mundo encantador da ficção com narrativas que capturam a imaginação e mergulham profundamente na psique humana.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('#obras')}
                className="btn-primary group"
              >
                <BookOpen className="w-5 h-5 mr-2" />
                Descubra Minhas Obras
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('#sobre')}
                className="btn-secondary group"
              >
                <User className="w-5 h-5 mr-2" />
                Sobre o Autor
              </motion.button>
            </motion.div>

            <motion.div variants={itemVariants} className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-accent-100 rounded-full mb-3 mx-auto">
                  <Heart className="w-6 h-6 text-accent-600" />
                </div>
                <h3 className="font-semibold text-primary-800">Romance</h3>
                <p className="text-sm text-primary-600">Histórias de amor</p>
              </div>
              
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-primary-100 rounded-full mb-3 mx-auto">
                  <Star className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="font-semibold text-primary-800">Ficção</h3>
                <p className="text-sm text-primary-600">Narrativas cativantes</p>
              </div>
              
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-secondary-100 rounded-full mb-3 mx-auto">
                  <BookOpen className="w-6 h-6 text-secondary-600" />
                </div>
                <h3 className="font-semibold text-primary-800">Contemporâneo</h3>
                <p className="text-sm text-primary-600">Temas atuais</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Visual Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
            className="relative"
          >
            <div className="relative">
              {/* Main Visual Element */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative bg-gradient-to-br from-primary-700 to-primary-900 rounded-3xl p-12 shadow-2xl"
              >
                <div className="text-center text-white space-y-6">
                  <motion.div
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="w-24 h-24 mx-auto mb-6"
                  >
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                      <path 
                        fill="currentColor" 
                        d="M30 85c10-20 24-55 26-80 2-25-7-45-19-42.5-12 2.5-22 30-21 50 1 20 8 51 14 72.5z" 
                      />
                      <path 
                        fill="rgba(255,255,255,0.7)" 
                        d="M35 35c2.5 4 9-40 1-31.5-6 6.5-12 18.5-14 22.5-2 4-2.5 15-2 22.5 0 0 6-7.5 15-13.5z"
                      />
                    </svg>
                  </motion.div>
                  
                  <blockquote className="text-xl font-medium italic">
                    "Transforme sua leitura em uma jornada inesquecível"
                  </blockquote>
                  
                  <div className="flex items-center justify-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1 + i * 0.1 }}
                      >
                        <Star className="w-5 h-5 fill-accent-400 text-accent-400" />
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Floating Elements */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-4 -right-4 w-8 h-8 bg-accent-400 rounded-full opacity-80"
                />
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute -bottom-6 -left-6 w-6 h-6 bg-white rounded-full opacity-60"
                />
              </motion.div>

              {/* Background decoration */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent-200 to-accent-400 rounded-3xl transform rotate-3 scale-105 -z-10 opacity-20" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center space-y-2 text-primary-600"
        >
          <span className="text-sm font-medium">Explore</span>
          <div className="w-6 h-10 border-2 border-primary-300 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 h-3 bg-primary-400 rounded-full mt-2"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}