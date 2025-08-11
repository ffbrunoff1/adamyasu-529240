import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { Mail, MessageSquare, Send, CheckCircle, AlertCircle, User, Sparkles } from 'lucide-react'
import ReCAPTCHA from 'react-google-recaptcha'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [status, setStatus] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const recaptchaRef = useRef(null)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

    const handleSubmit = async (e) => {
    e.preventDefault()
    
    // VERIFICAÇÃO ADICIONADA AQUI
    if (!recaptchaRef.current) {
      console.error("reCAPTCHA a referência não foi inicializada.");
      setStatus('error');
      return; // Impede a execução do resto da função
    }

    setIsSubmitting(true)
    setStatus('')

    try {
      const token = await recaptchaRef.current.executeAsync()
      
      const response = await fetch('https://qotdwocbcoirjlqjkjhq.supabase.co/functions/v1/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          recipientEmail: '', // Você pode querer preencher isso
          token
        } )
      })

      if (response.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch (error) {
      console.error("Erro no envio do formulário ou reCAPTCHA:", error);
      setStatus('error')
    } finally {
      setIsSubmitting(false)
      // VERIFICAÇÃO ADICIONADA AQUI TAMBÉM
      if (recaptchaRef.current) {
        recaptchaRef.current.reset()
      }
    }
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "Contato Editorial",
      description: "Para propostas editoriais e parcerias literárias",
      action: "Enviar E-mail"
    },
    {
      icon: MessageSquare,
      title: "Feedback dos Leitores",
      description: "Compartilhe suas impressões sobre as obras",
      action: "Deixar Mensagem"
    }
  ]

  return (
    <section id="contato" className="section-padding bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ rotate: 360, scale: [1, 1.1, 1] }}
          transition={{ 
            rotate: { duration: 60, repeat: Infinity, ease: "linear" },
            scale: { duration: 8, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute top-20 right-10 w-32 h-32 bg-gradient-to-br from-accent-200 to-accent-300 rounded-full opacity-15 blur-3xl"
        />
        <motion.div
          animate={{ rotate: -360, y: [0, -20, 0] }}
          transition={{ 
            rotate: { duration: 45, repeat: Infinity, ease: "linear" },
            y: { duration: 6, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute bottom-32 left-16 w-24 h-24 bg-gradient-to-br from-primary-300 to-primary-400 rounded-full opacity-20 blur-2xl"
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
            <span className="text-sm font-medium uppercase tracking-wider">Entre em Contato</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-primary-800 mb-6">
            Vamos <span className="text-gradient">Conversar</span>
          </h2>
          <p className="text-xl text-primary-600 max-w-3xl mx-auto leading-relaxed">
            Seja para propostas editoriais, feedback sobre as obras ou simplesmente para 
            compartilhar sua paixão pela literatura, estou sempre aberto ao diálogo.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-primary-800 mb-6">
                Como Podemos Nos Conectar
              </h3>
              
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-6 border border-primary-200 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-accent-500 to-accent-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      {React.createElement(info.icon, { className: 'w-6 h-6 text-white' })}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-primary-800 mb-2">{info.title}</h4>
                      <p className="text-primary-600 text-sm leading-relaxed mb-3">
                        {info.description}
                      </p>
                      <span className="inline-flex items-center text-accent-600 font-medium text-sm hover:text-accent-700 transition-colors duration-200">
                        {info.action}
                        <Send className="w-4 h-4 ml-1" />
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Quote Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary-700 to-primary-900 rounded-2xl p-6 text-white relative overflow-hidden"
            >
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-0 right-0 w-20 h-20 bg-white opacity-10 rounded-full blur-2xl"
              />
              
              <div className="relative z-10">
                <MessageSquare className="w-8 h-8 text-accent-400 mb-4" />
                <blockquote className="text-lg font-medium italic mb-4">
                  "Cada mensagem dos leitores é uma fonte de inspiração para novas narrativas."
                </blockquote>
                <cite className="text-primary-200 text-sm">— Adam Yasu</cite>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 shadow-2xl border border-primary-100"
          >
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-primary-800 mb-2">Envie sua Mensagem</h3>
              <p className="text-primary-600">Preencha o formulário abaixo e retornaremos em breve</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <label htmlFor="name" className="block text-sm font-medium text-primary-700 mb-2">
                  Nome Completo
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-primary-400" />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full pl-10 pr-4 py-3 border border-primary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all duration-300"
                    placeholder="Seu nome completo"
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <label htmlFor="email" className="block text-sm font-medium text-primary-700 mb-2">
                  E-mail
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-primary-400" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full pl-10 pr-4 py-3 border border-primary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all duration-300"
                    placeholder="seu@email.com"
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <label htmlFor="message" className="block text-sm font-medium text-primary-700 mb-2">
                  Mensagem
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-primary-400" />
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full pl-10 pr-4 py-3 border border-primary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Compartilhe sua mensagem, feedback ou proposta..."
                  />
                </div>
              </motion.div>

              {/* reCAPTCHA */}
              <div className="mt-4 flex justify-center">
                <ReCAPTCHA
                  ref={recaptchaRef}
                  size="invisible"
                  sitekey="6Lc7xpsrAAAAAKh0I1boee2JN1oO8iF_yd0ihl79"
                />
              </div>

              <motion.button
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-accent-500 to-accent-600 text-white font-semibold py-4 px-6 rounded-lg hover:from-accent-600 hover:to-accent-700 transform transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {isSubmitting ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                  />
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Enviar Mensagem
                  </>
                )}
              </motion.button>

              {/* Status Messages */}
              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center space-x-2 text-green-600 bg-green-50 p-4 rounded-lg border border-green-200"
                >
                  <CheckCircle className="w-5 h-5" />
                  <span>Mensagem enviada com sucesso! Retornaremos em breve.</span>
                </motion.div>
              )}

              {status === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center space-x-2 text-red-600 bg-red-50 p-4 rounded-lg border border-red-200"
                >
                  <AlertCircle className="w-5 h-5" />
                  <span>Erro ao enviar mensagem. Tente novamente.</span>
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}