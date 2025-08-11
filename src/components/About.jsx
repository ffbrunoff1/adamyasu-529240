import React from 'react'
import { motion } from 'framer-motion'
import { BookOpen, Heart, Users, Award, Pen, Globe, Coffee, Star } from 'lucide-react'

export default function About() {
  const achievements = [
    {
      icon: BookOpen,
      title: "Narrativas Profundas",
      description: "Especializado em histórias que exploram a complexidade das emoções humanas"
    },
    {
      icon: Heart,
      title: "Romance Contemporâneo",
      description: "Criando conexões emocionais através de personagens autênticos e envolventes"
    },
    {
      icon: Users,
      title: "Psique Humana",
      description: "Mergulhando nas profundezas da mente e das relações interpessoais"
    },
    {
      icon: Award,
      title: "Reconhecimento",
      description: "Autor renomado por criar experiências literárias transformadoras"
    }
  ]

  const skills = [
    { name: "Romance", level: 95 },
    { name: "Ficção Contemporânea", level: 92 },
    { name: "Desenvolvimento de Personagens", level: 98 },
    { name: "Narrativa Envolvente", level: 94 }
  ]

  return (
    <section id="sobre" className="section-padding bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 right-20 w-40 h-40 bg-gradient-to-br from-accent-200 to-accent-300 rounded-full opacity-10 blur-3xl"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-40 left-10 w-32 h-32 bg-gradient-to-br from-primary-200 to-primary-300 rounded-full opacity-15 blur-2xl"
        />
      </div>

      <div className="container-max relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center space-x-2 text-primary-600 mb-4">
            <Pen className="w-5 h-5" />
            <span className="text-sm font-medium uppercase tracking-wider">Sobre o Autor</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-primary-800 mb-6">
            Conhece <span className="text-gradient">Adam Yasu</span>
          </h2>
          <p className="text-xl text-primary-600 max-w-3xl mx-auto leading-relaxed">
            Um autor dedicado à arte de contar histórias que tocam o coração e desafiam a mente,
            criando narrativas que ressoam com a experiência humana contemporânea.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-primary-800 flex items-center">
                <Globe className="w-6 h-6 mr-3 text-accent-600" />
                Minha Jornada Literária
              </h3>
              <p className="text-primary-600 leading-relaxed text-lg">
                Adam Yasu é um escritor contemporâneo que se dedica à criação de narrativas 
                envolventes nos gêneros de romance e ficção. Suas obras são conhecidas por 
                mergulhar profundamente na psique humana, explorando as complexidades das 
                emoções e relacionamentos modernos.
              </p>
              <p className="text-primary-600 leading-relaxed text-lg">
                Com um estilo único que combina sensibilidade emocional e técnica narrativa 
                refinada, Adam cria histórias que capturam a imaginação dos leitores e os 
                transportam para mundos ricos em detalhes e autenticidade.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-primary-800 flex items-center">
                <Coffee className="w-5 h-5 mr-2 text-accent-600" />
                Processo Criativo
              </h4>
              <p className="text-primary-600 leading-relaxed">
                Cada história nasce de uma observação cuidadosa da natureza humana e das 
                sutilezas que definem nossos relacionamentos. O processo criativo de Adam 
                envolve uma imersão profunda nos personagens, permitindo que suas vozes 
                autênticas guiem a narrativa.
              </p>
            </div>

            {/* Skills Progress */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-primary-800">Especialidades</h4>
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="space-y-2"
                >
                  <div className="flex justify-between">
                    <span className="font-medium text-primary-700">{skill.name}</span>
                    <span className="text-primary-600">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-primary-100 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1.5, delay: index * 0.2 }}
                      viewport={{ once: true }}
                      className="bg-gradient-to-r from-accent-500 to-accent-600 h-2 rounded-full"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative bg-gradient-to-br from-primary-50 to-primary-100 rounded-3xl p-8 shadow-xl">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="text-center space-y-6"
              >
                <div className="w-32 h-32 mx-auto bg-gradient-to-br from-primary-700 to-primary-900 rounded-full flex items-center justify-center shadow-2xl">
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <Pen className="w-16 h-16 text-white" />
                  </motion.div>
                </div>
                
                <blockquote className="text-xl font-medium text-primary-700 italic">
                  "Cada história é uma janela para a alma humana"
                </blockquote>
                
                <div className="flex justify-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.8 + i * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Star className="w-5 h-5 fill-accent-500 text-accent-500" />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              
              {/* Decorative elements */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 w-8 h-8 bg-accent-400 rounded-full"
              />
              <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-4 -left-4 w-6 h-6 bg-primary-400 rounded-full"
              />
            </div>
          </motion.div>
        </div>

        {/* Achievements Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-primary-100 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-accent-100 to-accent-200 rounded-xl mb-4">
                {React.createElement(achievement.icon, { className: 'w-6 h-6 text-accent-600' })}
              </div>
              <h3 className="font-bold text-primary-800 mb-2">{achievement.title}</h3>
              <p className="text-primary-600 text-sm leading-relaxed">{achievement.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary-700 to-primary-900 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full blur-3xl"
            />
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Pronto para uma Jornada Literária?
              </h3>
              <p className="text-primary-100 mb-8 max-w-2xl mx-auto">
                Descubra histórias que capturam a imaginação e transformam a experiência de leitura 
                em algo verdadeiramente inesquecível.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const element = document.querySelector('#obras')
                  if (element) {
                    const headerHeight = 80
                    const elementPosition = element.offsetTop - headerHeight
                    window.scrollTo({
                      top: elementPosition,
                      behavior: 'smooth'
                    })
                  }
                }}
                className="inline-flex items-center px-8 py-4 bg-white text-primary-800 font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                <BookOpen className="w-5 h-5 mr-2" />
                Explorar Obras
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}