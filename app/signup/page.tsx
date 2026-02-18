'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import { Mail, Lock, Eye, EyeOff, User, Phone, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion'; // Ajout de l'import

export default function SignUpPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    agreeTerms: false
  });

  const handleChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    console.log('Sign Up:', formData);
  };

  // Variantes d'animation
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.08 // Apparition rapide et fluide des champs
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 py-12 relative overflow-hidden" style={{ backgroundColor: "#0A400C" }}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Sign Up Card */}
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="relative w-full max-w-md"
      >
        {/* Decorative elements */}
        <div className="absolute -top-4 -left-4 w-24 h-24 bg-green-500 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-yellow-400 rounded-full blur-3xl opacity-20"></div>

        <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 p-8 md:p-10">
          {/* Header */}
          <div className="text-center mb-8">
            <motion.div 
              whileHover={{ rotate: -5, scale: 1.05 }}
              className="inline-flex items-center justify-center w-20 h-20 rounded-2xl mb-4 shadow-lg" 
              style={{ backgroundColor: "#0A400C" }}
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center">
                <Image
                  src="/RAJA CLUB ATHLETIC RCA LOGO.svg"
                  alt="Raja Club Athletic"
                  width={100}
                  height={100}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
            </motion.div>
            <motion.h1 variants={itemVariants} className="text-3xl font-bold text-white mb-2">Rejoignez-nous</motion.h1>
            <motion.p variants={itemVariants} className="text-green-200">Créez votre compte Raja Club Athletic</motion.p>
          </div>

          {/* Form */}
          <div className="space-y-5">
            {[ 
              { id: 'fullName', label: 'Nom complet', icon: User, type: 'text', placeholder: 'John Doe' },
              { id: 'email', label: 'Email', icon: Mail, type: 'email', placeholder: 'votre@email.com' },
              { id: 'phone', label: 'Téléphone', icon: Phone, type: 'tel', placeholder: '+212 6XX XXX XXX' }
            ].map((field) => (
              <motion.div key={field.id} variants={itemVariants} className="space-y-2">
                <label className="text-sm font-medium text-green-100 block">{field.label}</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <field.icon className="text-green-300" size={20} />
                  </div>
                  <input
                    type={field.type}
                    value={(formData as any)[field.id]}
                    onChange={(e) => handleChange(field.id, e.target.value)}
                    placeholder={field.placeholder}
                    className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-green-300/50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                  />
                </div>
              </motion.div>
            ))}

            {/* Password Inputs */}
            <motion.div variants={itemVariants} className="space-y-2">
              <label className="text-sm font-medium text-green-100 block">Mot de passe</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Lock className="text-green-300" size={20} />
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={formData.password}
                  onChange={(e) => handleChange('password', e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-12 pr-12 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-green-300/50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-green-300 hover:text-green-200 transition-colors"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-2">
              <label className="text-sm font-medium text-green-100 block">Confirmer le mot de passe</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Lock className="text-green-300" size={20} />
                </div>
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  value={formData.confirmPassword}
                  onChange={(e) => handleChange('confirmPassword', e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-12 pr-12 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-green-300/50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-green-300 hover:text-green-200 transition-colors"
                >
                  {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </motion.div>

            {/* Terms Checkbox */}
            <motion.div variants={itemVariants} className="flex items-start space-x-2">
              <input
                type="checkbox"
                checked={formData.agreeTerms}
                onChange={(e) => handleChange('agreeTerms', e.target.checked)}
                className="w-4 h-4 mt-1 rounded border-white/20 bg-white/10 text-green-500 focus:ring-2 focus:ring-green-500 focus:ring-offset-0 cursor-pointer"
              />
              <label className="text-sm text-green-200 cursor-pointer select-none">
                J'accepte les <Link href="/terms" className="text-white font-medium hover:text-green-300">conditions</Link> et la <Link href="/privacy" className="text-white font-medium hover:text-green-300">politique</Link>
              </label>
            </motion.div>

            {/* Submit Button */}
            <motion.button
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleSubmit}
              className="w-full bg-transparent px-5 py-3 text-[#D4AF37] font-bold border-2 border-[#D4AF37] rounded-xl hover:bg-[#D4AF37] hover:text-[#0A400C] transition-all duration-300 shadow-lg flex items-center justify-center space-x-2 group"
            >
              <span>Créer mon compte</span>
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </motion.button>
          </div>

          {/* Social Sign Up Animé */}
          <motion.div variants={itemVariants}>
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-white/20"></div></div>
              <div className="relative flex justify-center text-sm"><span className="px-4 bg-transparent text-green-200">ou s'inscrire avec</span></div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {['Google', 'Facebook'].map((social) => (
                <motion.button 
                  key={social}
                  whileHover={{ y: -2 }}
                  className="flex items-center justify-center space-x-2 py-3 px-4 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl transition-all"
                >
                  {/* SVG contents remain same */}
                  <span className="text-white font-medium">{social}</span>
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Login Link */}
          <motion.p variants={itemVariants} className="text-center mt-6 text-green-200">
            Vous avez déjà un compte?{' '}
            <Link href="/login" className="text-white font-bold hover:text-green-300 transition-colors">Se connecter</Link>
          </motion.p>
        </div>

        <motion.p 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 1.2 }}
          className="text-center mt-6 text-green-300/70 text-sm"
        >
          Fier, Ambitieux, Légendaire - Raja Club Athletic
        </motion.p>
      </motion.div>
    </div>
  );
}