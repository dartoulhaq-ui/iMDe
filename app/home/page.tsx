"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { FaWhatsapp, FaDiscord, FaInstagram } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
export default function HomePage() {
  const greetings = [
    "Halo, gimana kabarmu?", "안녕하세요. 어떻게 지내세요?", "你好吗？","こんにちは お元気ですか？", "Bonjour, comment ça va?", "Hola, ¿cómo estás?",
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
    { id: 1, user: "Anonim_01", text: "Website ini keren banget bang! 🔥", time: "Baru saja" },
    { id: 2, user: "SiSukaCoding", text: "Tutorial Next.js nya dong...", time: "5 menit lalu" },
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
    const password = prompt("Masukan Password Admin:");
    if (password === "cnn123") {
      setShowAdmin(true);
    } else {
      alert("Akses Ditolak!");
    }
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-x-hidden relative">
      <header className="relative w-full h-[60vh] md:h-[80vh] flex items-center justify-center mt-16 overflow-hidden">
        <video
          autoPlay loop muted playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        >
          <source src="/video1.mp4" type="video/mp4" />
        </video>
        <div className="relative z-10 text-center px-4 w-full max-w-4xl">
          <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-gray-800 py-4 px-6">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-4">
                <motion.div
                  animate={{ rotateY: 360 }}
                  transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
                  className="w-10 h-10 md:w-12 md:h-12 relative"
                >
                  <div className="w-full h-full rounded-full overflow-hidden border-2 border-white/50">
                    <Image src="/profil.png" alt="Profile" width={50} height={50} className="object-cover"/>
                  </div>
                </motion.div>
                <span className="font-bold text-lg text-white">i̵M̵D̵e̵ PAGE</span>
              </div>
              <div className="hidden md:flex gap-8 text-sm font-medium tracking-wide text-gray-300">
                {["Portofolio", "Rekomendasi Film", "Tips & Trick", "Shop"].map((item) => (
                  <a key={item} href={`#${item.replace(/\s/g, '').toLowerCase()}`} className="hover:text-white transition-colors">
                    {item}
                  </a>
                ))}
              </div>
              <button 
                className="md:hidden text-white focus:outline-none"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/></svg>
                ) : (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
                )}
              </button>
            </div>
            <AnimatePresence>
              {isMobileMenuOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="md:hidden mt-4 overflow-hidden bg-gray-900/90 rounded-xl border border-gray-800"
                >
                  <ul className="flex flex-col p-4 gap-4 text-center text-gray-300">
                    {["Portofolio", "Rekomendasi Film", "Tips & Trick", "Shop"].map((item) => (
                      <li key={item}>
                        <a 
                          href={`#${item.replace(/\s/g, '').toLowerCase()}`} 
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="block py-2 hover:text-white hover:bg-white/10 rounded-lg transition"
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
          <div className="h-20 md:h-32 flex items-center justify-center overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.h2
                key={index} 
                initial={{ y: 40, opacity: 0 }} 
                animate={{ y: 0, opacity: 1 }}  
                exit={{ y: -40, opacity: 0 }}  
                transition={{ duration: 0.5, ease: "easeInOut" }} 
                className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent absolute"
              >
                {greetings[index]}
              </motion.h2>
            </AnimatePresence>
          </div>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-gray-300 max-w-lg mx-auto mt-4"
          >
            Scroll ke bawah untuk menjelajahi dunia saya.
          </motion.p>
        </div>
      </header>
      <div className="relative w-full py-20 px-4 md:px-20 overflow-hidden">
        <motion.div style={{ backgroundColor: leftGlowColor, opacity: 0.3 }} className="fixed left-0 top-0 bottom-0 w-1 md:w-2 blur-[20px] z-40" />
        <motion.div style={{ backgroundColor: leftGlowColor, opacity: 0.3 }} className="fixed right-0 top-0 bottom-0 w-1 md:w-2 blur-[20px] z-40" />
        <section id="profil" className="max-w-4xl mx-auto text-center mb-32 relative z-10">
           <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.8 }}
             className="bg-gray-900/50 p-8 rounded-3xl border border-gray-800 backdrop-blur-sm"
           >
             <h3 className="text-2xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
               Tentang Saya
             </h3>
             <p className="text-gray-300 leading-relaxed mb-8 text-sm md:text-base">
                sᴀʏᴀ ᴄᴜᴍᴀ ʀᴀᴋʏᴀᴛ ʙɪᴀsᴀ ʏᴀɴɢ ᴛɪɴɢɢᴀʟ ᴅɪ ᴋᴏɴᴏʜᴀ,sᴇʀᴛᴀ ʜɪᴅᴜᴘ ᴘᴇɴᴜʜ ʟɪᴋᴀ ʟɪᴋᴜ ɴᴀɪᴋ ᴛᴜʀᴜɴ ʏᴀɴɢ ᴍᴇɴᴊᴀᴅɪᴋᴀɴ ʜɪᴅᴜᴘ ɪɴɪ sᴇᴍᴀᴋɪɴ ᴍᴇɴʏᴇɴᴀɴɢᴋᴀɴ. 
               ᴍᴇɴɢʜᴜʙᴜɴɢᴋᴀɴ ɪᴅᴇ ᴀʙsᴛʀᴀᴋ ᴍᴇɴᴊᴀᴅɪ ʀᴇᴀʟɪᴛᴀs ᴅɪɢɪᴛᴀʟ ᴀᴅᴀʟᴀʜ ᴋᴇsᴜᴋᴀᴀɴ sᴀʏᴀ.
               <br></br>(Mau tahu lebih dalam tentang saya ?).
             </p>
             <Link href="/portofolio" className="inline-block px-6 py-3 border border-white text-white rounded-full hover:bg-white hover:text-black transition-all duration-300">
               KLIK INI UNTUK KE PAGE PORTOFOLIO
             </Link>
           </motion.div>
        </section>

        <section id="rekomendasifilm" className="max-w-6xl mx-auto mb-32 flex flex-col md:flex-row items-center gap-10">
           <motion.div 
             initial={{ x: -100, opacity: 0 }}
             whileInView={{ x: 0, opacity: 1 }}
             className="w-full md:w-1/2 aspect-video bg-gray-800 rounded-xl overflow-hidden shadow-2xl"
           >
             <video
               autoPlay loop muted playsInline
               className="w-full h-full object-cover"
             >
               <source src="/video2.mp4" type="video/mp4" />
             </video>
           </motion.div>
           <div className="w-full md:w-1/2 text-left">
             <h3 className="text-3xl font-bold mb-4">Cari Film/Series Free & Aman?</h3>
             <p className="text-gray-400 mb-6">
               Koleksi film terbaik yang memberikan inspirasi visual dan storytelling kelas dunia.
               Bebas request film favoritmu!
             </p>
             <button className="px-6 py-3 bg-blue-600 rounded-lg font-semibold hover:bg-blue-700 transition"><a href="https://lynk.id/imde">
               Lihat Film / Series</a>
             </button>
           </div>
        </section>

        <section className="max-w-6xl mx-auto mb-32 relative z-10 px-4">
          <div className="text-center mb-10">
             <h2 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">Live Chat 💬</h2>
             <p className="text-gray-400">Kirim pesan anonimmu di sini!</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            <div className="md:col-span-2">
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-2xl sticky top-24">
                <form onSubmit={handleSend} className="space-y-4">
                  <div>
                    <label className="block text-xs text-gray-400 mb-1">Nama / Samaran</label>
                    <input 
                      type="text" 
                      maxLength={15}
                      value={inputName}
                      onChange={(e) => setInputName(e.target.value)}
                      placeholder="ex: Fans Berat"
                      className="w-full bg-black/50 border border-gray-700 rounded-lg p-3 text-white focus:outline-none focus:border-blue-500 transition"
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
                      className="w-full bg-black/50 border border-gray-700 rounded-lg p-3 text-white focus:outline-none focus:border-blue-500 transition resize-none"
                      required
                    />
                  </div>
                  <button type="submit" className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 rounded-lg transition">
                    Kirim Pesan 📬
                  </button>
                </form>
              </div>
            </div>

            <div className="md:col-span-3">
              <div className="flex flex-col gap-4 max-h-[400px] overflow-y-auto pr-2">
                <AnimatePresence>
                  {comments.map((comment) => (
                    <motion.div
                      key={comment.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="bg-gray-900/80 border border-gray-800 p-4 rounded-xl flex gap-4 items-start"
                    >
                      <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center font-bold text-white shrink-0">
                        {comment.user.charAt(0).toUpperCase()}
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-bold text-white">{comment.user}</span>
                          <span className="text-[10px] text-gray-500">{comment.time}</span>
                        </div>
                        <p className="text-gray-300 text-sm">{comment.text}</p>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </section>

        <section id="tips&trick" className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-20">
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-gray-900 p-8 rounded-2xl border border-gray-800 text-center"
            >
              <h4 className="text-2xl font-bold mb-2">Tips & Trik</h4>
              <p className="text-gray-400 mb-4 text-sm">Hacks kehidupan dan teknologi terbaru, biar ga gaptek</p>
              <button className="text-blue-400 hover:text-blue-300 font-semibold"><a href="/tips">Buka Halaman →</a></button>
            </motion.div>

            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-gray-900 p-8 rounded-2xl border border-gray-800 text-center"
            >
              <h4 className="text-2xl font-bold mb-2">Marketplace</h4>
              <p className="text-gray-400 mb-4 text-sm">Produk barang physic & digital dan merchandise.</p>
              <button className="text-blue-400 hover:text-blue-300 font-semibold"><a href="https://lynk.id/imde/page/forum-aplikasi-tools">Lihat Katalog → </a></button>
            </motion.div>
        </section>
      </div>

      <footer className="bg-gray-900 text-gray-400 py-12 border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
          <div>
            <h5 className="text-white font-bold mb-4">Hubungi Saya</h5>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <span className="text-gray-500">`</span>sidaffa21@gmail.com
              </li>
            </ul>
          </div>
          <div>
            <h5 className="text-white font-bold mb-4">Mau Mabar ?</h5>
            <ul className="space-y-2">
              <li><a href="https://www.roblox.com/share?code=381c6800a12b5b4a865962136453e2e4&type=Profile&source=ProfileShare&stamp=1769771056280" className="hover:text-white transition">Roblox</a></li>
              <li className="hover:text-white transition">Mobile Legend [ Jack Shannks 969 / ID=1018619209 ]</li>
              <li><a href="#shop" className="hover:text-white transition">Game lainnya bisa Chat di Discord/lainnya </a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-white font-bold mb-4">Social</h5>
            <div className="flex gap-4">
               <a href="https://wa.me/6281332959366" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#25D366] hover:text-white transition-all duration-300 transform hover:-translate-y-1">
                 <FaWhatsapp size={20} />
               </a>
               <a href="https://discord.gg/RZYDNbRp" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#5865F2] hover:text-white transition-all duration-300 transform hover:-translate-y-1">
                 <FaDiscord size={20} />
               </a>
               <a href="https://instagram.com/3dapp.hh" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 hover:text-white transition-all duration-300 transform hover:-translate-y-1">
                 <FaInstagram size={20} />
               </a>
            </div>
          </div>
          
          <div>
             <p className="text-xs mt-4 leading-relaxed">
               © 2026 iMDe. All rights reserved. <br/>
               <span className="opacity-50">Just Beginner</span>
               <span onClick={handleAdminAccess} className="ml-2 cursor-pointer hover:text-white" title="Admin Log">🔒</span>
             </p>
          </div>
        </div>

        {showAdmin && (
          <div className="mt-8 max-w-4xl mx-auto bg-red-900/20 border border-red-500/30 p-6 rounded-xl text-left m-4">
             <div className="flex justify-between items-center mb-4">
                <h3 className="text-red-400 font-bold text-lg">⚠️ ADMIN SECURITY LOG</h3>
                <button onClick={() => setShowAdmin(false)} className="text-xs text-red-400 hover:text-white">Close [x]</button>
             </div>
             <table className="w-full text-sm text-left text-gray-400">
               <thead className="text-xs text-gray-200 uppercase bg-red-900/40">
                 <tr><th className="px-4 py-2">User</th><th className="px-4 py-2">Waktu</th><th className="px-4 py-2">Risiko</th></tr>
               </thead>
               <tbody>
                  {logs.map((log, i) => (
                    <tr key={i} className="border-b border-red-900/30">
                      <td className="px-4 py-2 text-white">{log.user}</td>
                      <td className="px-4 py-2">{log.time}</td>
                      <td className={`px-4 py-2 font-bold ${log.risk === 'High' ? 'text-red-500' : 'text-green-500'}`}>{log.risk}</td>
                    </tr>
                  ))}
                  {logs.length === 0 && <tr><td colSpan={3} className="px-4 py-2 text-center">Belum ada log.</td></tr>}
               </tbody>
             </table>
          </div>
        )}
      </footer>
    </div>
  );
}