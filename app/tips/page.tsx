"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const categories = ["All", "Photography", "Coding", "Life Hacks"];
const tipsData = [
  {
    id: 1,
    category: "Photography",
    title: "Lighting Rahasia",
    desc: "Cara edit fotomu biar makin kelihatan berkelas.",
    color: "bg-blue-500", 
    size: "col-span-1 row-span-1",
    icon: "📸",
    url:"https://youtube.com/@infofotografi?si=fBDf1aI2ysk6FQs_"
  },
  {
    id: 2,
    category: "Laptop rusak/nge hank ?",
    title: "All about PC",
    desc: "Semua solusi terbaik&aman buat naikin kenyamanan laptopmu.",
    color: "bg-purple-500", 
    size: "col-span-1 md:col-span-2 row-span-1", 
    icon: "💻",
    url : "https://youtube.com/@doctopjkt?si=ofXBAFjLa9PCFmjy"
  },
  {
    id: 3,
    category: "Life Hacks",
    title: "Penuh simpel tips dan Inovatif",
    desc: "Seputar Life hacks,biar produktivitasmu makin Maksimal.",
    color: "bg-green-500", 
    size: "col-span-1 row-span-1",
    icon: "🍅",
    url: "https://youtube.com/@5minutecraftsyoutube?si=ILqsLu7hmypKDcU6"
  },
  {
    id: 4,
    category: "Help Code",
    title: "VS Code shortcuts",
    desc: "Buat Codingmu jadi 2x lebih cepat.",
    color: "bg-indigo-500",
    size: "col-span-1 row-span-2", 
    icon: "⚛️",
    url: "https://youtube.com/@fireship?si=_9t6kXRj2I0AT5eK"
  },
  {
    id: 5,
    category: "Tutor JAGO Ngedit",
    title: "Editing CapCut",
    desc: "Transisi mulus tanpa plugin mahal.",
    color: "bg-pink-500",
    size: "col-span-1 row-span-1",
    icon: "🎬",
    url: "https://youtu.be/vTKKF6LPhaA?si=wfG9f34M9esmyXDS"
  },
  {
    id: 6,
    category: "Health Tips",
    title: "Lagi sakit? Coba cara ini!",
    desc: "Biar badan sehat dan gak stress lagi.",
    color: "bg-orange-500",
    size: "col-span-1 row-span-1",
    icon: "💤",
    url:"https://www.healthline.com"
  },
];

const promoLinks = [
  { name: "Toko Shopee Saya", url: "https://shopee.co.id/andi1woody", icon: "🛍️", desc: "Khusus Area Terdekat > FREE ONGKIR!!" },
  { name: "Traktir Kopi (Saweria)", url: "https://saweria.co/iMDe", icon: "☕", desc: "Biar tambah Good Mood buat bantu kamu tiap hari" },
  { name: "Join Discord Komunitas", url: "https://discord.gg/motionime", icon: "👾", desc: "Belajar bareng dengan 800.000+ member" },
];

export default function TipsPage() {
  const [activeCat, setActiveCat] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const filteredTips = tipsData.filter((item) => {
    const matchCategory = activeCat === "All" || item.category === activeCat;
    const matchSearch = 
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
      item.desc.toLowerCase().includes(searchTerm.toLowerCase());

    return matchCategory && matchSearch;
  });

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-blue-500">
      
      <nav className="fixed top-0 w-full z-50 bg-black/60 backdrop-blur-xl border-b border-white/10 pt-12 pb-4 px-6">
        <div className="flex justify-between items-center max-w-5xl mx-auto">
          <Link href="/home" className="flex items-center text-blue-500 hover:text-blue-400 transition">
             <span className="text-2xl mr-1">‹</span> Home
          </Link>
          <span className="font-semibold text-lg">Tips & Library</span>
          <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-xs">0o0</div>
        </div>
      </nav>

      <main className="pt-32 pb-20 px-4 md:px-6 max-w-5xl mx-auto">
        
        <div className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                Be Modern in <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">5 Menit.</span>
            </h1>
            
            <div className="relative max-w-md mx-auto group">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                </div>
                <input 
                    type="text" 
                    value={searchTerm} 
                    onChange={(e) => setSearchTerm(e.target.value)} 
                    placeholder="Cari tips (ex: Coding, Foto)..." 
                    className="block w-full pl-10 pr-3 py-3 rounded-xl bg-gray-900 border border-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-gray-800 transition-all"
                />
            </div>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map((cat) => (
                <button
                    key={cat}
                    onClick={() => setActiveCat(cat)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                        activeCat === cat 
                        ? "bg-white text-black shadow-lg scale-105" 
                        : "bg-gray-900 text-gray-400 hover:bg-gray-800"
                    }`}
                >
                    {cat}
                </button>
            ))}
        </div>
        <motion.div 
            layout 
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[180px]"
        >
            <AnimatePresence>
              {filteredTips.length > 0 ? (
                filteredTips.map((tip) => (
                    <motion.div
                        layout
                        initial={{ opacity: 0, scale: 0.9 }} 
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        key={tip.id}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        transition={{ duration: 0.3 }}
                        onClick={() => window.open(tip.url, "_blank")}
                        className={`${tip.size} relative rounded-[2rem] p-6 flex flex-col justify-between overflow-hidden cursor-pointer group bg-neutral-900 border border-white/5`}
                    >
                        <div className={`absolute inset-0 ${tip.color} opacity-20 group-hover:opacity-30 transition-opacity`} />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                        <div className="relative z-10 flex justify-between items-start">
                            <span className="text-3xl bg-white/10 w-10 h-10 flex items-center justify-center rounded-full backdrop-blur-md">
                                {tip.icon}
                            </span>
                            <span className="text-xs font-bold uppercase tracking-wider text-white/60 bg-black/40 px-2 py-1 rounded-md">
                                {tip.category}
                            </span>
                        </div>

                        <div className="relative z-10">
                            <h3 className="text-xl font-bold leading-tight mb-1 text-white">{tip.title}</h3>
                            <p className="text-sm text-gray-300 line-clamp-2">{tip.desc}</p>
                        </div>
                    </motion.div>
                ))
              ) : (
                <motion.div 
                   initial={{ opacity: 0 }} 
                   animate={{ opacity: 1 }}
                   className="col-span-1 md:col-span-4 flex flex-col items-center justify-center py-20 text-gray-500"
                >
                   <span className="text-4xl mb-2">🔍</span>
                   <p>Tidak ada tips yang cocok dengan "{searchTerm}"</p>
                </motion.div>
              )}
            </AnimatePresence>
        </motion.div>
        <div className="mt-24 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-6 pl-4 border-l-4 border-blue-500">Rekomendasi</h3>
            <div className="bg-gray-900 rounded-2xl overflow-hidden border border-gray-800">
                {promoLinks.map((link, idx) => (
                    <a 
                        key={idx} 
                        href={link.url} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center p-4 hover:bg-gray-800 transition-colors ${
                            idx !== promoLinks.length - 1 ? "border-b border-gray-800" : ""
                        }`}
                    >
                        <div className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center text-xl mr-4 border border-gray-700">
                            {link.icon}
                        </div>
                        <div className="flex-1">
                            <h4 className="font-semibold text-white">{link.name}</h4>
                            <p className="text-xs text-gray-400">{link.desc}</p>
                        </div>
                        <div className="text-gray-500">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                        </div>
                    </a>
                ))}
            </div>
            <p className="text-center text-xs text-gray-500 mt-4">Link di atas berupa afiliasi resmi & produk original.</p>
        </div>

      </main>
    </div>
  );
}