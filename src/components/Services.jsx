import React from 'react'
import { motion } from 'framer-motion'
import { BookOpen, Heart, Users, Sparkles, Star, ArrowRight, Quote, Feather, Globe } from 'lucide-react'

export default function Services() {
  const genres = [
    {
      icon: Heart,
      title: "Romance Contemporâneo",
      description: "Histórias de amor que exploram as complexidades dos relacionamentos modernos, com personagens autênticos e emoções profundas.",
      features: ["Desenvolvimento emocional", "Personagens realistas", "Narrativas envolventes", "Conexões humanas"],
      color: "from-rose-500 to-pink-600"
    },
    {
      icon: BookOpen,
      title: "Ficção Literária",
      description: "Narrativas sofisticadas que mergulham na psique humana, oferecendo reflexões sobre a condição humana contemporânea.",
      features: ["Prosa elaborada", "Temas profundos", "Análise psicológica", "Estilo único"],
      color: "from-blue-500 to-indigo-600"
    },
    {
      icon: Users,
      title: "Drama Humano",
      description: "Explorações intensas das relações interpessoais, conflitos internos e as jornadas de crescimento pessoal.",
      features: ["Conflitos reais", "Crescimento pessoal", "Relações complexas", "Transformação"],
      color: "from-purple-500 to-violet-600"
    }
  ]

  const writingApproach = [
    {
      icon: Feather,
      title: "Processo Criativo",
      description: "Cada história nasce de uma observação cuidadosa da natureza humana e das sutilezas que definem nossos relacionamentos.",
      stats: "10+ anos de experiência"
    },
    {
      icon: Globe,
      title: "Perspectiva Universal",
      description: "Narrativas que transcendem barreiras culturais, tocando temas universais que ressoam com leitores de diferentes backgrounds.",
      stats: "Alcance global"
    },
    {
      icon: Star,
      title: "Qualidade Literária",
      description: "Compromisso com a excelência na escrita, combinando técnica refinada com sensibilidade emocional autêntica.",
      stats: "Reconhecimento crítico"
    }
  ]

  const testimonials = [
    {
      quote: "As narrativas de Adam Yasu capturam a essência das emoções humanas de forma extraordinária.",
      author: "Crítica Literária Especializada"
    },
    {
      quote: "Histórias que transformam a experiência de leitura em uma jornada emocionalmente rica.",
      author: "Comunidade de Leitores"
    },
    {
      quote: "Um autor que compreende profundamente a complexidade dos relacionamentos modernos.",
      author: "Análise Editorial"
    }
  ]

  return (
    <section id="obras" className="section-padding bg-gradient-to-br from-primary-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ rotate: 360, scale: [1, 1.2, 1] }}
          transition={{ 
            rotate: { duration: 50, repeat: Infinity, ease: "linear" },
            scale: { duration: 10, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute top-32 right-16 w-48 h-48 bg-gradient-to-br from-accent-200 to-accent-300 rounded-full opacity-10 blur-3xl"
        />
        <motion.div
          animate={{ rotate: -360, y: [0, -30, 0] }}
          transition={{ 
            rotate: { duration: 45, repeat: Infinity, ease: "linear" },
            y: { duration: 8, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute bottom-20 left-20 w-32 h-32 bg-gradient-to-br from-primary-300 to-primary-400 rounded-full opacity-15 blur-2xl"
        />
      </div>

      <div className="container-max relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center space-x-2 text-primary-600 mb-4">
            <Sparkles className="w-5 h-5" />
            <span className="text-sm font-medium uppercase tracking-wider">Gêneros Literários</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-primary-800 mb-6">
            Mundos de <span className="text-gradient">Ficção</span>
          </h2>
          <p className="text-xl text-primary-600 max-w-3xl mx-auto leading-relaxed">
            Aventure-se nas páginas com narrativas cativantes que exploram a profundidade 
            das emoções humanas e as complexidades da vida contemporânea.
          </p>
        </motion.div>

        {/* Main Genres Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {genres.map((genre, index) => (
            <motion.div
              key={genre.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white rounded-3xl p-8 shadow-xl border border-primary-100 hover:shadow-2xl transition-all duration-500 group relative overflow-hidden"
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${genre.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                <div className={`w-16 h-16 bg-gradient-to-br ${genre.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {React.createElement(genre.icon, { className: 'w-8 h-8 text-white' })}
                </div>
                
                <h3 className="text-2xl font-bold text-primary-800 mb-4 group-hover:text-primary-900 transition-colors duration-300">
                  {genre.title}
                </h3>
                
                <p className="text-primary-600 leading-relaxed mb-6">
                  {genre.description}
                </p>
                
                <div className="space-y-2">
                  {genre.features.map((feature, featureIndex) => (
                    <motion.div
                      key={feature}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.2 + featureIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center space-x-2"
                    >
                      <div className={`w-2 h-2 bg-gradient-to-r ${genre.color} rounded-full`} />
                      <span className="text-primary-700 text-sm font-medium">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-6 w-full flex items-center justify-center px-6 py-3 bg-primary-50 text-primary-700 font-semibold rounded-xl hover:bg-primary-100 transition-colors duration-300 group/btn"
                >
                  <span>Explorar Gênero</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Writing Approach Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-bold text-primary-800 mb-4">
              Abordagem <span className="text-gradient">Literária</span>
            </h3>
            <p className="text-lg text-primary-600 max-w-2xl mx-auto">
              Uma metodologia única que combina técnica refinada com sensibilidade emocional
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {writingApproach.map((approach, index) => (
              <motion.div
                key={approach.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="text-center bg-white rounded-2xl p-6 shadow-lg border border-primary-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-accent-100 to-accent-200 rounded-xl flex items-center justify-center mx-auto mb-4">
                  {React.createElement(approach.icon, { className: 'w-7 h-7 text-accent-600' })}
                </div>
                
                <h4 className="text-xl font-bold text-primary-800 mb-3">{approach.title}</h4>
                <p className="text-primary-600 text-sm leading-relaxed mb-4">{approach.description}</p>
                
                <div className="inline-flex items-center px-3 py-1 bg-primary-50 text-primary-700 text-xs font-medium rounded-full">
                  {approach.stats}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-bold text-primary-800 mb-4">
              Reconhecimento <span className="text-gradient">Crítico</span>
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-primary-700 to-primary-900 rounded-2xl p-6 text-white relative overflow-hidden"
              >
                <Quote className="w-8 h-8 text-accent-400 mb-4 opacity-80" />
                <blockquote className="text-primary-100 mb-4 italic leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                <div className="text-accent-300 font-medium text-sm">
                  — {testimonial.author}
                </div>
                
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-4 -right-4 w-16 h-16 bg-white opacity-5 rounded-full blur-xl"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-accent-500 to-accent-700 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute top-0 right-0 w-40 h-40 bg-white opacity-10 rounded-full blur-3xl"
            />
            
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Transforme sua Leitura em uma Jornada Inesquecível
              </h3>
              <p className="text-accent-100 mb-8 max-w-2xl mx-auto text-lg">
                Descubra narrativas que capturam a imaginação e exploram as profundezas 
                da experiência humana contemporânea.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center px-8 py-4 bg-white text-accent-700 font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <BookOpen className="w-5 h-5 mr-2" />
                  Explorar Obras
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    const element = document.querySelector('#contato')
                    if (element) {
                      const headerHeight = 80
                      const elementPosition = element.offsetTop - headerHeight
                      window.scrollTo({
                        top: elementPosition,
                        behavior: 'smooth'
                      })
                    }
                  }}
                  className="inline-flex items-center px-8 py-4 bg-transparent text-white font-semibold rounded-lg border-2 border-white/30 hover:border-white/50 hover:bg-white/10 transition-all duration-300"
                >
                  <ArrowRight className="w-5 h-5 mr-2" />
                  Entrar em Contato
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}