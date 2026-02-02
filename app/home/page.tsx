"use client";
import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { FaWhatsapp, FaDiscord, FaInstagram } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  const greetings = [
    "Halo, gimana kabarmu?", "안녕하세요. 어떻게 지내세요?", "你好吗？",
    "こんにちは お元気ですか？", "Bonjour, comment ça va?", "Hola, ¿cómo estás?",
    "Hallo, wie geht es dir?", "Hello, how are you?",
  ];
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % greetings.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const { scrollYProgress } = useScroll();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const leftGlowColor = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["#8b5cf6", "#3b82f6", "#ffffff"]
  );
  const [comments, setComments] = useState([
    { id: 1, user: "Fufufafa", text: "Mana AI-nya?", time: "Baru saja" },
    { id: 2, user: "Inisial S", text: "Humm...", time: "3 hari yang lalu" },
  ]);
  const [inputName, setInputName] = useState("");
  const [inputMsg, setInputMsg] = useState("");
  const [logs, setLogs] = useState<{user: string, time: string, risk: string}[]>([]);
  const [showAdmin, setShowAdmin] = useState(false);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputName || !inputMsg) return;
    const newComment = {
      id: Date.now(),
      user: inputName,
      text: inputMsg,
      time: "Baru saja"
    };
    setComments([newComment, ...comments]);
    const newLog = {
      user: inputName,
      time: new Date().toLocaleTimeString(),
      risk: inputMsg.toLowerCase().includes("kasar") ? "High" : "Low"
    };
    setLogs([newLog, ...logs]);

    setInputName("");
    setInputMsg("");
  };
  const handleAdminAccess = () => {
    const password = prompt("Mending Bobol Punya Pemerintah");
    if (password === "c#++") {
      setShowAdmin(true);
    } else {
      alert("Warning!");
    }
  };
  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-x-hidden relative selection:bg-blue-500">
      <nav className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <div className="flex items-center gap-3">
              <motion.div
                animate={{ rotateY: 360 }}
                transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
                className="w-8 h-8 md:w-10 md:h-10 relative shrink-0"
              >
                <div className="w-full h-full rounded-full overflow-hidden border border-white/50">
                  <Image src="/profil.png" alt="Profile" width={40} height={40} className="object-cover"/>
                </div>
              </motion.div>
              <span className="font-bold text-base md:text-xl tracking-wider">i̵M̵D̵e̵ PAGE</span>
            </div>
            <div className="hidden md:flex gap-6 text-sm font-medium text-gray-300">
              {["Portofolio", "Rekomendasi Film", "Tips & Trick", "Shop"].map((item) => (
                <a key={item} href={`#${item.replace(/\s/g, '').toLowerCase()}`} className="hover:text-white hover:underline transition-all">
                  {item}
                </a>
              ))}
            </div>
            <button 
              className="md:hidden text-gray-300 hover:text-white p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/></svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
              )}
            </button>
          </div>
        </div>
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden bg-gray-900 border-t border-gray-800 overflow-hidden"
            >
              <ul className="flex flex-col p-4 gap-2 text-center text-sm text-gray-300">
                {["Portofolio", "Rekomendasi Film", "Tips & Trick", "Shop"].map((item) => (
                  <li key={item}>
                    <a 
                      href={`#${item.replace(/\s/g, '').toLowerCase()}`} 
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block py-3 hover:text-white hover:bg-white/5 rounded-lg transition"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
      <header className="relative w-full h-[85vh] flex items-center justify-center overflow-hidden pt-16">
        <video
          autoPlay loop muted playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-50 z-0"
        >
          <source src="/video1.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black z-0" />

        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto flex flex-col items-center justify-center h-full">
          <div className="h-24 md:h-32 flex items-center justify-center relative w-full">
            <AnimatePresence mode="wait">
              <motion.h2
                key={index} 
                initial={{ y: 20, opacity: 0 }} 
                animate={{ y: 0, opacity: 1 }}  
                exit={{ y: -20, opacity: 0 }}  
                transition={{ duration: 0.5 }} 
                className="text-2xl md:text-5xl font-bold bg-gradient-to-r from-white via-gray-200 to-gray-500 bg-clip-text text-transparent absolute w-full"
              >
                {greetings[index]}
              </motion.h2>
            </AnimatePresence>
          </div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-gray-300 text-sm md:text-lg mt-2 max-w-md mx-auto leading-relaxed"
          >
            Scroll ke bawah untuk menjelajahi dunia digital saya.
          </motion.p>
        </div>
      </header>
      <div className="relative w-full py-10 px-4 md:px-20 overflow-hidden">
        <motion.div style={{ backgroundColor: leftGlowColor, opacity: 0.2 }} className="fixed left-0 top-0 bottom-0 w-4 blur-[40px] z-0 pointer-events-none" />
        <motion.div style={{ backgroundColor: leftGlowColor, opacity: 0.2 }} className="fixed right-0 top-0 bottom-0 w-4 blur-[40px] z-0 pointer-events-none" />
        <section id="profil" className="max-w-4xl mx-auto text-center mb-24 relative z-10 scroll-mt-24">
           <motion.div
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
             className="bg-gray-900/60 p-6 md:p-10 rounded-3xl border border-gray-800 backdrop-blur-md shadow-2xl"
           >
             <h3 className="text-2xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
               Tentang Saya
             </h3>
             <p className="text-gray-300 leading-loose mb-8 text-sm md:text-base text-justify md:text-center">
                Saya cuma rakyat biasa yang tinggal di Konoha, serta hidup penuh lika liku naik turun yang menjadikan hidup ini semakin menyenangkan. 
               Menghubungkan ide abstrak menjadi realitas digital adalah kesukaan saya.
               <br/><span className="text-gray-500 text-xs mt-2 block">(Mau tahu lebih dalam tentang saya?)</span>
             </p>
             <Link href="/portofolio" className="inline-block px-6 py-3 border border-white/30 bg-white/5 rounded-full text-sm font-semibold hover:bg-white hover:text-black transition-all duration-300 shadow-lg hover:shadow-white/20">
               Lihat Portofolio Saya
             </Link>
           </motion.div>
        </section>
        <section id="rekomendasifilm" className="max-w-6xl mx-auto mb-32 flex flex-col md:flex-row items-center gap-8 scroll-mt-24">
           <motion.div 
             initial={{ opacity: 0, x: -50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="w-full md:w-1/2 aspect-video bg-gray-800 rounded-xl overflow-hidden shadow-2xl border border-gray-700"
           >
             <video autoPlay loop muted playsInline className="w-full h-full object-cover">
               <source src="/video2.mp4" type="video/mp4" />
             </video>
           </motion.div>
           <div className="w-full md:w-1/2 text-center md:text-left">
             <h3 className="text-2xl md:text-3xl font-bold mb-4">Cari Film/Series yang Free & Aman?</h3>
             <p className="text-gray-400 mb-6 text-sm md:text-base">
               Koleksi film terbaik yang memberikan inspirasi visual. Bebas request film favoritmu tanpa bayar!
             </p>
             <a href="https://lynk.id/imde" target="_blank" className="inline-block px-8 py-3 bg-blue-600 rounded-lg font-bold text-sm hover:bg-blue-500 transition shadow-lg shadow-blue-900/50">
               Klik Sini 🍿
             </a>
           </div>
        </section>

        <section className="max-w-6xl mx-auto mb-32 relative z-10">
          <div className="text-center mb-10">
             <h2 className="text-2xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">Live Chat 💬</h2>
             <p className="text-gray-400 text-xs md:text-sm">Kirim pesan anonim. Tampil seketika di sini!</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            <div className="md:col-span-2 order-2 md:order-1">
              <div className="bg-gray-900/80 backdrop-blur-xl border border-gray-700 p-6 rounded-2xl">
                <form onSubmit={handleSend} className="space-y-4">
                  <div>
                    <label className="block text-xs text-gray-400 mb-1">Nama / Samaran</label>
                    <input 
                      type="text" 
                      maxLength={15}
                      value={inputName}
                      onChange={(e) => setInputName(e.target.value)}
                      placeholder="ex: Bahlulz"
                      className="w-full bg-black/50 border border-gray-600 rounded-lg p-3 text-sm text-white focus:outline-none focus:border-blue-500 transition"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-400 mb-1">Pesan Kamu</label>
                    <textarea 
                      rows={3}
                      maxLength={100}
                      value={inputMsg}
                      onChange={(e) => setInputMsg(e.target.value)}
                      placeholder="Tulis sesuatu..."
                      className="w-full bg-black/50 border border-gray-600 rounded-lg p-3 text-sm text-white focus:outline-none focus:border-blue-500 transition resize-none"
                      required
                    />
                  </div>
                  <button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-bold py-3 rounded-lg transition text-sm">
                    Kirim
                  </button>
                </form>
              </div>
            </div>
            <div className="md:col-span-3 order-1 md:order-2">
              <div className="flex flex-col gap-3 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                <AnimatePresence>
                  {comments.map((comment) => (
                    <motion.div
                      key={comment.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-gray-800/50 border border-gray-700 p-4 rounded-xl flex gap-3 items-start"
                    >
                      <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center font-bold text-white text-xs shrink-0">
                        {comment.user.charAt(0).toUpperCase()}
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-bold text-sm text-white">{comment.user}</span>
                          <span className="text-[10px] text-gray-500">{comment.time}</span>
                        </div>
                        <p className="text-gray-300 text-xs md:text-sm leading-relaxed">{comment.text}</p>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </section>
        <section id="tips&trick" className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto mb-20 scroll-mt-24">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-gray-900 p-6 md:p-8 rounded-2xl border border-gray-800 text-center shadow-xl"
            >
              <h4 className="text-xl md:text-2xl font-bold mb-2">99+ Tips & Trik</h4>
              <p className="text-gray-400 mb-4 text-xs md:text-sm">Hacks kehidupan dan teknologi terbaru.</p>
              <Link href="/tips" className="text-blue-400 text-sm font-semibold hover:text-blue-300">Buka Halaman →</Link>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-gray-900 p-6 md:p-8 rounded-2xl border border-gray-800 text-center shadow-xl"
            >
              <h4 className="text-xl md:text-2xl font-bold mb-2" id="shop">Marketplace</h4>
              <p className="text-gray-400 mb-4 text-xs md:text-sm">Produk barang physic & digital.</p>
              <a href="https://lynk.id/imde/page/forum-aplikasi-tools" className="text-blue-400 text-sm font-semibold hover:text-blue-300">Lihat Katalog → </a>
            </motion.div>
        </section>
      </div>
      <footer className="bg-gray-900 text-gray-400 py-10 border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
          <div>
            <h5 className="text-white font-bold mb-3">Hubungi Saya</h5>
            <p className="text-xs">sidaffa21@gmail.com</p>
          </div>
          <div>
            <h5 className="text-white font-bold mb-3">Game ID</h5>
            <ul className="space-y-1 text-xs">
              <li>MLBB: Jack Shannks 969 / 1018619209</li>
              <li>Roblox:<a href="https://www.roblox.com/share?code=381c6800a12b5b4a865962136453e2e4&type=Profile&source=ProfileShare&stamp=1769771056280"> Tinggal Klik Ini!</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-white font-bold mb-3">SosMed</h5>
            <div className="flex gap-3">
               <a href="https://wa.me/6281332959366" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-800 rounded-full hover:bg-green-600 hover:text-white transition"><FaWhatsapp/></a>
               <a href="https://discord.gg/RZYDNbRp" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-800 rounded-full hover:bg-indigo-600 hover:text-white transition"><FaDiscord/></a>
               <a href="https://instagram.com/3dapp.hh" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-800 rounded-full hover:bg-pink-600 hover:text-white transition"><FaInstagram/></a>
            </div>
          </div>
          <div>
             <p className="text-xs mt-4">
               © 2026 iMDe. <br/>
               <span onClick={handleAdminAccess} className="cursor-pointer hover:text-white text-[10px] opacity-50 hover:opacity-100">~</span>
             </p>
          </div>
        </div>

        {showAdmin && (
          <div className="mt-8 mx-4 md:mx-auto max-w-4xl bg-red-900/20 border border-red-500/30 p-4 rounded-xl">
             <div className="flex justify-between items-center mb-4">
                <h3 className="text-red-400 font-bold text-sm">⚠️ ADMIN LOG</h3>
                <button onClick={() => setShowAdmin(false)} className="text-xs text-red-400 border border-red-400 px-2 rounded">Close</button>
             </div>
             <div className="overflow-x-auto">
               <table className="w-full text-xs text-left text-gray-400 min-w-[300px]">
                 <thead className="bg-red-900/40 text-white">
                   <tr><th className="px-2 py-2">User</th><th className="px-2 py-2">Waktu</th><th className="px-2 py-2">Risk</th></tr>
                 </thead>
                 <tbody>
                    {logs.map((log, i) => (
                      <tr key={i} className="border-b border-red-900/30">
                        <td className="px-2 py-2 text-white">{log.user}</td>
                        <td className="px-2 py-2">{log.time}</td>
                        <td className={`px-2 py-2 font-bold ${log.risk === 'High' ? 'text-red-500' : 'text-green-500'}`}>{log.risk}</td>
                      </tr>
                    ))}
                 </tbody>
               </table>
             </div>
          </div>
        )}
      </footer>
    </div>
  );
}