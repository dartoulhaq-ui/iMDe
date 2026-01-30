"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, 
      delayChildren: 0.4,
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { type: "spring", stiffness: 120 }
  },
};

export default function PortofolioPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-blue-500 selection:text-white">
      
      <nav className="fixed top-0 w-full z-50 bg-black/70 backdrop-blur-xl border-b border-white/10 py-4 px-6 flex justify-between items-center">
        <Link href="/home" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">
          &larr; Kembali 
        </Link>
        <span className="font-semibold tracking-tight">Portofolio.</span>
      </nav>

      <main className="pt-32 pb-20 px-4 md:px-10 max-w-7xl mx-auto">
    
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-16 text-center md:text-left"
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4 bg-gradient-to-br from-white via-gray-200 to-gray-600 bg-clip-text text-transparent">
            Karya & Dedikasi.
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl font-light">
            Kumpulan proyek terpilih yang menggabungkan estetika dan fungsionalitas.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6"
        >
          
          <motion.div 
            variants={itemVariants}
            className="md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-[2rem] bg-neutral-900 border border-neutral-800"
          >
            <div className="absolute inset-0 z-0">
                <Image 
                  src="/profile.png"
                  alt="My Profile"
                  fill
                  className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"/>
            </div>
            
            <div className="relative z-10 h-full flex flex-col justify-end p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-2">Architect of Digital Dreams</h2>
              <p className="text-gray-300 mb-6 max-w-md">
                Saya Muhammad Daffa D, senang dalam menciptakan pengalaman digital yang imersif. 
                Fokus pada perubahan Teknologi yang terus berkembang, saya menggabungkan desain inovatif dengan pengembangan fungsional untuk menghadirkan solusi digital yang memukau dan efektif.
              </p>
              <div className="flex gap-3">
                 <li className="flex items-center gap-2">
                <span className="text-gray-500"></span><a href="https://www.linkedin.com/in/muhammad-daffa-775036386" className="hover:text-white transition">Linkedin.com</a>
              </li>
                 <span className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-md text-xs border border-white/20">Engineer</span>
                 <span className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-md text-xs border border-white/20">Development</span>
              </div>
            </div>
          </motion.div>
          <motion.div 
            variants={itemVariants}
            className="p-8 rounded-[2rem] bg-neutral-900 border border-neutral-800 flex flex-col justify-center items-center text-center hover:bg-neutral-800 transition-colors"
          >
            <h3 className="text-5xl font-bold text-blue-500 mb-2">1+</h3>
            <p className="text-gray-400 font-medium">Tahun Pengalaman</p>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="relative p-8 rounded-[2rem] bg-gradient-to-br from-blue-900 to-black border border-blue-800 overflow-hidden group cursor-pointer"
          >
            <div className="absolute inset-0 bg-blue-600/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-2 text-white">Proposal Proyek</h3>
                <p className="text-blue-200 text-sm mb-6">Unduh detail selengkapnya mengenai visi, timeline, dan estimasi biaya.</p>              
                <a 
  href="/proposal.pdf" 
  download="Proposal_Proyek_NamaAnda.pdf" 
  className="flex items-center gap-2 px-5 py-3 bg-white text-black rounded-full font-semibold text-sm hover:bg-gray-200 transition-colors w-fit"
>
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
  </svg>
  Unduh PDF
</a>
            </div>
          </motion.div>
        </motion.div>
        <div className="mt-20">
            <h3 className="text-2xl font-bold mb-8 text-gray-200">Proyek Unggulan</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="group relative h-80 rounded-3xl overflow-hidden bg-gray-900 border border-gray-800 cursor-pointer"
                >
                    <Image src="/projek.png" alt="Project 1" fill className="object-cover opacity-50 group-hover:scale-110 transition-transform duration-500"/> 
                    <div className="absolute bottom-0 p-8">
                        <h4 className="text-xl font-bold">Algae TECH BIOVENT</h4>
                        <p className="text-gray-400 text-sm">ON PROGRES</p>
                    </div>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="group relative h-80 rounded-3xl overflow-hidden bg-gray-900 border border-gray-800 cursor-pointer"
                >
                    <div className="absolute inset-0 bg-gray-800" /> {/* Placeholder background */}
                    <div className="absolute bottom-0 p-8">
                        <h4 className="text-xl font-bold">Sertifikat</h4>
                        <p className="text-gray-400 text-sm">SAMSUNG,DNCC,DOSCOM</p>
                    </div>
                </motion.div>

            </div>
        </div>

      </main>

      {/* --- FOOTER SIMPLE --- */}
      <footer className="py-8 text-center text-gray-600 text-sm border-t border-gray-900">
        <p>&copy; 2024 Designed by You.</p>
      </footer>

    </div>
  );
}