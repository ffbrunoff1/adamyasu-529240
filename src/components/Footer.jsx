import React from 'react'
import { motion } from 'framer-motion'
import { Heart, BookOpen, ArrowUp, Feather, Star } from 'lucide-react'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  const footerLinks = [
    {
      title: "Navegação",
      links: [
        { name: "Sobre", href: "#sobre" },
        { name: "Obras", href: "#obras" },
        { name: "Contato", href: "#contato" }
      ]
    },
    {
      title: "Gêneros",
      links: [
        { name: "Romance", href: "#obras" },
        { name: "Ficção", href: "#obras" },
        { name: "Contemporâneo", href: "#obras" }
      ]
    }
  ]

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

  return (
    <footer className="bg-gradient-to-br from-primary-800 via-primary-900 to-secondary-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ rotate: 360, scale: [1, 1.2, 1] }}
          transition={{ 
            rotate: { duration: 50, repeat: Infinity, ease: "linear" },
            scale: { duration: 8, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute top-10 right-20 w-32 h-32 bg-white opacity-5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ rotate: -360, y: [0, -20, 0] }}
          transition={{ 
            rotate: { duration: 40, repeat: Infinity, ease: "linear" },
            y: { duration: 6, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute bottom-20 left-16 w-24 h-24 bg-accent-400 opacity-10 rounded-full blur-2xl"
        />
      </div>

      <div className="container-max relative z-10">
        {/* Main Footer Content */}
        <div className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-center space-x-3">
                <img 
                  src="https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/imagens.website.creation/adam-yasu/adam-yasu-logo-full-2025-08-11T16-18-38-751Z.svg"
                  alt="Adam Yasu"
                  className="h-12 w-auto filter invert"
                />
              </div>
              
              <p className="text-primary-200 leading-relaxed max-w-md">
                Explore o mundo encantador da ficção com narrativas que capturam a imaginação 
                e mergulham profundamente na psique humana contemporânea.
              </p>
              
              <div className="flex items-center space-x-2 text-accent-400">
                <Heart className="w-5 h-5" />
                <span className="text-sm font-medium">Escritor de Romance & Ficção</span>
              </div>

              {/* Quote */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white/5 rounded-xl p-4 border border-white/10"
              >
                <div className="flex items-start space-x-3">
                  <Feather className="w-5 h-5 text-accent-400 mt-1 flex-shrink-0" />
                  <blockquote className="text-primary-100 italic text-sm">
                    "Cada história é uma janela para a alma humana"
                  </blockquote>
                </div>
              </motion.div>
            </motion.div>

            {/* Links Sections */}
            <div className="grid md:grid-cols-2 gap-8 lg:col-span-2">
              {footerLinks.map((section, index) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="space-y-4"
                >
                  <h3 className="text-lg font-bold text-white flex items-center">
                    <BookOpen className="w-5 h-5 mr-2 text-accent-400" />
                    {section.title}
                  </h3>
                  <ul className="space-y-3">
                    {section.links.map((link, linkIndex) => (
                      <motion.li
                        key={link.name}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 + linkIndex * 0.05 }}
                        viewport={{ once: true }}
                      >
                        <button
                          onClick={() => scrollToSection(link.href)}
                          className="text-primary-300 hover:text-accent-400 transition-colors duration-300 text-sm hover:underline"
                        >
                          {link.name}
                        </button>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-700 py-8 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center space-x-4 text-sm text-primary-300"
            >
              <span>© 2024 Adam Yasu. Todos os direitos reservados.</span>
              <div className="hidden md:flex items-center space-x-1">
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Star className="w-3 h-3 fill-accent-400 text-accent-400" />
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex items-center space-x-6"
            >
              <span className="text-sm text-primary-300">
                Criado com{' '}
                <motion.span
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="inline-block"
                >
                  <Heart className="w-4 h-4 text-accent-400 fill-current inline" />
                </motion.span>
                {' '}por{' '}
                <a 
                  href="https://papum.ai" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-accent-400 hover:text-accent-300 font-medium transition-colors duration-300"
                >
                  Papum
                </a>
              </span>

              <motion.button
                onClick={scrollToTop}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="flex items-center justify-center w-10 h-10 bg-accent-500 hover:bg-accent-600 rounded-full text-white transition-all duration-300 shadow-lg hover:shadow-xl"
                aria-label="Voltar ao topo"
              >
                <ArrowUp className="w-5 h-5" />
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Decorative Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-accent-500 via-accent-400 to-accent-500" />
    </footer>
  )
}