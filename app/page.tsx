"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function LandingPage() {
  const router = useRouter();
  const [isExiting, setIsExiting] = useState(false);

  const handleEnter = () => {
    setIsExiting(true);
    setTimeout(() => {
      router.push("/home");
    }, 1000);
  };
  return (
    <div className="relative w-full h-screen overflow-hidden bg-black text-white font-sans">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-80"
      >
        <source src="/video.mp4" type="video/mp4" />
      </video>
      <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-10" />
      <div className="relative z-20 w-full h-full flex flex-col items-center justify-center">
        <motion.h1
          initial={{ opacity: 0, y: -50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-4xl md:text-6xl font-bold tracking-tight mb-12 text-center text-transparent bg-clip-text bg-gradient-to-b from-gray-100 to-gray-400 drop-shadow-2xl"
        >
          Selamat Datang di <br /> iMDe WEB
        </motion.h1>

        <div className="relative flex items-center justify-center w-full max-w-4xl h-40">
          
          <motion.div
            initial={{ x: -500, opacity: 0 }} 
            animate={{ x: -160, opacity: 1 }}
            transition={{ 
              duration: 0.8, 
              type: "spring",
              stiffness: 100 
            }}
            className="absolute z-30 hidden md:block" 
          >
            <Image 
              src="/avatar-left.png" 
              alt="Avatar Kiri" 
              width={200} 
              height={200} 
              className="object-contain drop-shadow-lg"
            />
          </motion.div>
          <motion.button
            onClick={handleEnter}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            whileHover={{ scale: 1.1, boxShadow: "0px 0px 20px rgba(255,255,255,0.5)" }}
            whileTap={{ scale: 0.95 }}
            className="z-40 px-8 py-4 bg-white/10 backdrop-blur-md border border-white/30 rounded-full text-white font-semibold text-lg tracking-wider hover:bg-white hover:text-black transition-colors duration-300"
          >
            Klik Sini buat Lihat"
          </motion.button>
          <motion.div
            initial={{ x: 500, opacity: 0 }} 
            animate={{ x: 160, opacity: 1 }} 
            transition={{ 
              duration: 0.8, 
              type: "spring", 
              stiffness: 100 
            }}
            className="absolute z-30 hidden md:block"
          >
            <Image 
              src="/avatar-right.png" 
              alt="Avatar Kanan" 
              width={200} 
              height={200} 
              className="object-contain drop-shadow-lg transform scale-x-[-1]" 
            />
          </motion.div>

        </div>
      </div>

      {isExiting && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-white z-50 pointer-events-none"
        />
      )}
    </div>
  );
}