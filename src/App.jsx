import { Typewriter } from "react-simple-typewriter";
import DataImage from "/data";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./index.css";
import Lanyard from "./components/Lanyard";
import ProfileCard from "./components/ProfileCard";
import avatar from "./assets/avatar.png";
import gmail from "./assets/gmail.png";

import {
  gambarhtml,
  gambarReactJS,
  gambarphp,
  gambarlaravel,
  gambarcisco,
  gambarnodejs,
  gambarmysql,
  gambarmikrotik,
  gambaradobeai,
  gambaradobepr,
  gambarexcel,
  gambarTailwind,
  gambarFigma,
  porto1,
  porto2,
  porto3,
  porto4,
  porto5,
  porto6,
  cvku,
} from "../data";

// Reusable component for fade-in on scroll
const FadeInWhenVisible = ({ children, delay = 0, duration = 0.8, y = 20 }) => {
  const { ref, inView } = useInView({
    triggerOnce: false, // ubah dari true ke false!
    threshold: 0.2, // biar tidak terlalu sensitif
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
};

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800, // durasi animasi (ms)
      once: true, // animasi hanya sekali
      delay: 0, // delay awal
      offset: 100, // jarak scroll dari elemen baru mulai animasi
    });
  }, []);

  const skills = [
    { img: gambarReactJS, label: "ReactJS" },
    { img: gambarlaravel, label: "Laravel" },
    { img: gambarTailwind, label: "TailwindCSS" },
    { img: gambarmysql, label: "MySQL" },
    { img: gambarFigma, label: "Figma" },
    { img: gambarhtml, label: "HTML" },
    { img: gambarphp, label: "PHP" },
    { img: gambarnodejs, label: "NodeJS" },
    { img: gambarcisco, label: "Cisco" },
    { img: gambarmikrotik, label: "Mikrotik" },
    { img: gambaradobeai, label: "Illustrator" },
    { img: gambaradobepr, label: "Premiere Pro" },
    { img: gambarexcel, label: "Excel" },
    { img: gambarexcel, label: "Excel" },
  ];

  const expericence = [
    {
      img2: porto2,
      label2: "Web Aplikasi Stuntcare",
      deskripsi2:
        "Stuntcare adalah web aplikasi yang dirancang untuk mendukung pencegahan stunting pada anak. Aplikasi ini memiliki fitur pemantauan gizi, konsultasi dengan dokter, serta penyediaan artikel informatif seputar gizi anak. Dalam web app, dokter dapat menulis artikel, menambah jadwal konsultasi, serta mengelola dan mengonfirmasi konsultasi dari pengguna",
      link2: "https://stuntcare.online/",
    },
    {
      img2: porto1,
      label2: "UI/UX Aplikasi SiBook",
      deskripsi2:
        "Prototype SiBook di atas merupakan aplikasi baca buku digital yang dirancang untuk meningkatkan literasi di Indonesia. SiBook menyediakan layanan baca buku online, pencarian cerdas berbasis AI Deep Learning, serta fitur AI Interactive Storytelling yang membuat pengalaman membaca lebih menarik. Selain itu, tersedia fitur medsos bagi para pengguna",
      link2:
        "https://www.figma.com/proto/DsKUrJ7c7tMifYtfjKPUYb/SiBook-UNMA?page-id=0%3A1&node-id=1-4243&viewport=-7052%2C-11549%2C1.36&t=iHejZaS0DC7DlLJy-1&scaling=contain&content-scaling=fixed&starting-point-node-id=1%3A4060",
    },
    {
      img2: porto5,
      label2: "UI/UX Web Aplikasi StuntCare",
      deskripsi2:
        "UI/UX ini merupakan perancangan dari web aplikasi Stuntcare. Proses perancangan dilakukan melalui observasi langsung terhadap kebutuhan pengguna, termasuk wawancara dengan orang tua dan tenaga kesehatan. Desain difokuskan pada kemudahan akses, kejelasan informasi pertumbuhan anak, serta interaksi saat menggunakan fitur konsultasi dan pemantauan",
      link2:
        "https://www.figma.com/design/waErSEnIKRVxEX8WGUsYJS/STUNTCARE?node-id=0-1&t=0QBWTW6yBRFXmHxV-1",
    },

    {
      img2: porto6,
      label2: "UI/UX Mars Kebugaran",
      deskripsi2:
        "Prototype Mars Kebugaran merupakan rancangan aplikasi layanan kebugaran jasmani yang mencakup aktivitas seperti renang, pijat, dan senam. Aplikasi ini menyediakan fitur pemesanan jasa pelatih, baik untuk kunjungan ke rumah maupun ke lokasi layanan. Selain itu, tersedia juga video edukatif yang memudahkan pengguna untuk praktek mandiri",
      link2:
        "https://www.figma.com/design/BxcwY69ULxzb1uSalqVwdQ/P2MW?node-id=125-1383&t=DkCnBTX9A6WWqAzQ-1",
    },
    {
      img2: porto3,
      label2: "UI/UX Aplikasi Sweethy",
      deskripsi2:
        "Prototype Sweethy saat ini masih dalam proses pengembangan. Aplikasi ini dirancang untuk membantu pemantauan kesehatan gula darah, mengingat tingginya kasus gula darah di Indonesia. Sweethy akan dikolaborasikan dengan alat pengukur gula darah untuk memudahkan pengguna dalam memantau kadar gula secara real-time",
    },
    {
      img2: porto4,
      label2: "UI/UX Aplikasi Bisnis UD Putri Laut",
      deskripsi2:
        "UI/UX sistem ini masih dalam proses pengembangan, dengan tujuan utama untuk menghadirkan pengalaman pengguna yang mudah digunakan oleh tim dari UD Putri Laut. Sistem ini mencakup berbagai fitur kompleks mulai dari input data pemasok, kelola pembelian dan penjualan, proses produksi, transaksi umum, akuntansi, hingga penyusunan laporan.",
      link2:
        "https://www.figma.com/design/CCMfsHoygJRqeEHItCY9oe/Untitled?node-id=34-1441&t=l0xhyYqjzGhU6GXo-1",
    },
  ];

  return (
    <div className="">
      <div className="mt-6 bg-gradient-to-br from-[#000000] via-[#1a1a1a] to-[#380032] text-white pt-16 pb-2 px-4 relative overflow-hidden font-sans rounded-4xl mx-4 sm:mx-6 md:mx-0">
        {/* Hiasan background blur */}
        <div className="absolute -top-32 -left-32 w-80 h-80 bg-purple-600 opacity-30 rounded-full blur-3xl z-0" />
        <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-pink-500 opacity-30 rounded-full blur-3xl z-0" />

        <FadeInWhenVisible delay={0.2}>
          {/* Konten utama */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 items-center gap-10 h-full max-w-6xl mx-auto">
            {/* Kiri: Teks */}
            <div className="space-y-4 md:space-y-6 px-2 md:px-0">
              <p className="text-base md:text-lg text-gray-200">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.2 }}
                >
                  Hello, i'am
                </motion.h1>
              </p>

              <h1 className="text-3xl md:text-5xl font-bold leading-tight text-white">
                <Typewriter
                  words={["Humam Nasywa Fawazi"]}
                  loop={false}
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                  startDelay={1500}
                />
              </h1>

              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1 }}
              >
                <div className="flex gap-2 flex-wrap mt-4">
                  <span className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1.5 rounded-full text-xs md:text-sm font-semibold">
                    UI/UX Designer
                  </span>
                  <span className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1.5 rounded-full text-xs md:text-sm font-semibold">
                    Software Engineer
                  </span>
                </div>
              </motion.span>

              <p className="text-gray-200 text-sm md:text-base leading-relaxed text-justify max-w-xl mt-6">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 1.1 }}
                >
                  Halo! Saya Humam Nasywa Fawazi, seorang mahasiswa yang sedang
                  belajar pengembangan perangkat lunak dengan minat mendalam
                  dalam UI/UX Design dan Software Development. Saya berdedikasi
                  menciptakan solusi digital yang fungsional dan estetis, dengan
                  pengalaman membangun aplikasi web yang responsif dan ramah
                  pengguna.
                </motion.h1>
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="group w-fit md:w-auto rounded-3xl overflow-hidden shadow-lg"
                >
                  <a href={cvku} download className="inline-block p-[2px] mt-2">
                    <p className="block text-white text-md md:text-md font-bold transition-all duration-300 ease-in-out group-hover:scale-101 group-hover:tracking-wide">
                      Download CV{" "}
                      <i className="bi bi-file-earmark-arrow-down"></i>
                    </p>
                  </a>
                </motion.h1>
              </p>
            </div>

            {/* Kanan: ID Card */}
            <div className="flex justify-center items-center h-full ">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                whileHover={{
                  scale: 1.1,
                  transition: { duration: 0.2, ease: [0.4, 0, 0.2, 1] },
                }}
                whileTap={{ scale: 0.95 }}
                className="w-70 md:w- rounded-3xl overflow-hidden shadow-lg bg-white/10 border border-white/10 backdrop-blur"
              >
                <img
                  src={DataImage.HeroImage}
                  alt="Humam ID"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </div>
        </FadeInWhenVisible>

        {/* About Me */}
        <div
          id="aboutme"
          className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Kolom kiri - Lanyard */}
            <div className="order-2 md:order-1 flex justify-center">
              <FadeInWhenVisible delay={0.2}>
                <motion.div
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 0.8 }}
                  className="App"
                >
                  <Lanyard />
                </motion.div>
              </FadeInWhenVisible>
            </div>

            {/* Kolom kanan - Teks (About Me & Activities) */}
            <div className="order-1 md:order-2 flex flex-col items-start md:items-center">
              <FadeInWhenVisible delay={0.2}>
                <motion.h2
                  className="text-3xl font-bold"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.3 }}
                >
                  About Me
                </motion.h2>
              </FadeInWhenVisible>

              <FadeInWhenVisible delay={0.4}>
                <motion.p
                  className="text-gray-300 leading-relaxed text-justify mt-2 max-w-xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.4 }}
                >
                  Saya adalah mahasiswa Universitas Negeri Semarang yang
                  memiliki ketertarikan besar pada bidang UI/UX Design,
                  Front-End Development, dan Software Engineering. Saya senang
                  menciptakan antarmuka yang menarik secara visual, sekaligus
                  memastikan pengalaman pengguna yang intuitif dan efisien.
                  Tujuan saya adalah mengembangkan solusi digital yang tidak
                  hanya berfungsi, tetapi juga menyenangkan digunakan.
                </motion.p>
              </FadeInWhenVisible>

              <FadeInWhenVisible delay={0.6}>
                <motion.h2
                  className="text-3xl font-bold mt-10"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.5 }}
                >
                  Recently Activities
                </motion.h2>
              </FadeInWhenVisible>

              <FadeInWhenVisible delay={0.8}>
                <motion.ul
                  className="space-y-2 text-sm text-gray-300 mt-4 max-w-xl list-none"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.6 }}
                >
                  <li>
                    <i className="bi bi-mortarboard-fill text-purple-400 mr-2"></i>
                    IPK 3.77 selama 4 semester.
                  </li>
                  <li>
                    <i className="bi bi-code-slash text-purple-400 mr-2"></i>
                    Aktif mengikuti pelatihan dan bootcamp Front-End
                    Development.
                  </li>
                  <li>
                    <i className="bi bi-trophy-fill text-purple-400 mr-2"></i>
                    Aktif mengikuti berbagai perlombaan.
                  </li>
                  <li>
                    <i className="bi bi-camera-fill text-purple-400 mr-2"></i>
                    Anggota UKM Fotografi Universitas Negeri Semarang (2024 –
                    sekarang).
                  </li>
                  <li>
                    <i className="bi bi-people-fill text-purple-400 mr-2"></i>
                    Aktif di organisasi Remaja Masjid dan Karang Taruna.
                  </li>
                  <li>
                    <i className="bi bi-briefcase-fill text-purple-400 mr-2"></i>
                    Freelancer: UI/UX Designer, Software Engineer, vector art,
                    fotografi/videografi.
                  </li>
                  <li>
                    <i className="bi bi-window-stack text-purple-400 mr-2"></i>
                    Proyek terakhir: Web aplikasi pencegahan stunting.
                  </li>
                  <li>
                    <i className="bi bi-window-stack text-purple-400 mr-2"></i>
                    Proyek saat ini: Web aplikasi UD Putri Laut
                  </li>
                </motion.ul>
              </FadeInWhenVisible>
            </div>
          </div>
        </div>
      </div>
      {/* Skills */}
      <div
        id="skills"
        className="mt-6 bg-gradient-to-bl from-[#2b0022] via-[#1a1a1a] to-[#320147] text-white py-16 px-4 relative overflow-hidden font-sans rounded-4xl mx-4 sm:mx-6 md:mx-0"
      >
        <div className="absolute -top-20 -left-32 w-80 h-80 bg-purple-600 opacity-30 rounded-full blur-3xl z-0" />

        <FadeInWhenVisible delay={0.2}>
          <p className="font-bold text-3xl mb-8 text-center">My Skills</p>
        </FadeInWhenVisible>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {skills.map((item, index) => (
            <FadeInWhenVisible delay={index * 0.1} key={index}>
              <motion.div
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] },
                }}
                className="bg-white/20 p-4 rounded-2xl flex flex-col items-center justify-center text-center h-auto min-h-[140px] w-full shadow-md hover:shadow-xl"
              >
                <div className="flex items-center justify-center h-20">
                  <img
                    className="w-12 sm:w-14 md:w-16 object-contain"
                    src={item.img}
                    alt={`${item.label} Logo`}
                  />
                </div>
                <p className="font-semibold text-sm sm:text-base md:text-lg leading-tight text-white mt-3">
                  {item.label}
                </p>
              </motion.div>
            </FadeInWhenVisible>
          ))}
        </div>
      </div>
      {/* Experience */}
      <div
        id="experience"
        className=" mt-6 bg-gradient-to-bl from-[#2b0022] via-[#1a1a1a] to-[#320147] text-white py-16 px-4 relative overflow-hidden font-sans rounded-4xl mx-4 sm:mx-6 md:mx-0"
      >
        <FadeInWhenVisible delay={0.2}>
          <p className="font-bold text-3xl mb-8 text-center">My Experiences</p>
        </FadeInWhenVisible>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {expericence.map((item, index) => (
            <FadeInWhenVisible delay={index * 0.1} key={index}>
              <a
                href={item.link2}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <motion.div
                  whileHover={{
                    scale: 1.02,
                    transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] },
                  }}
                  className="group relative bg-white/20 p-4 rounded-3xl flex flex-col items-center justify-between text-center h-[420px] w-full shadow-md hover:shadow-xl border border-transparent hover:border-white transition duration-300 overflow-hidden"
                >
                  {/* Blur wrapper */}
                  <div className="group-hover:blur-sm transition duration-300 w-full flex flex-col items-center">
                    {/* Gambar */}
                    <div className="w-full h-48 flex items-center justify-center overflow-hidden rounded-xl bg-black/40 border mb-3">
                      <img
                        className="max-h-full max-w-full object-contain rounded-xl"
                        src={item.img2}
                        alt={`${item.label2} portofolio`}
                      />
                    </div>

                    {/* Judul */}
                    <p className="font-semibold text-base md:text-lg leading-tight text-white">
                      {item.label2}
                    </p>

                    {/* Deskripsi */}
                    <p className="text-white text-sm mt-2 break-words whitespace-normal line-clamp-7 text-justify">
                      {item.deskripsi2}
                    </p>
                  </div>

                  {/* Overlay muncul saat hover */}
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 rounded-3xl">
                    <p className="text-white font-semibold text-center text-sm md:text-base px-4">
                      Klik untuk melihat portofolio
                    </p>
                  </div>
                </motion.div>
              </a>
            </FadeInWhenVisible>
          ))}
        </div>
      </div>
      {/*contact */}
      <div
        id="contact"
        className="mt-6 mb-20 bg-gradient-to-bl from-[#2b0022] via-[#1a1a1a] to-[#320147] text-white py-16 px-4 relative overflow-hidden font-sans rounded-4xl mx-4 sm:mx-6 md:mx-0"
      >
        <FadeInWhenVisible delay={0.2}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl w-full px-4 mx-auto items-center">
            {/* Profile Card */}
            <div className="w-full flex justify-center md:block">
              {" "}
              <ProfileCard
                name="Humam Nasywa"
                title="Software Engineer"
                handle="humamfawazi"
                status="Mahasiswa"
                contactText="Contact Me"
                avatarUrl={avatar}
                showUserInfo={true}
                enableTilt={true}
                showBehindGradient={false}
                onContactClick={() => console.log("Contact clicked")}
              />
            </div>

            <div className="flex flex-col gap-6">
              {/* Email Card */}
              <FadeInWhenVisible delay={0.2}>
                <p className="font-bold text-3xl mb-4 text-center">
                  Contact Me
                </p>
              </FadeInWhenVisible>

              <motion.a
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] },
                }}
                href="https://mail.google.com/mail/?view=cm&fs=1&to=humamfawazi2399@students.unnes.ac.id&su=Halo&body=Halo%2C%20saya%20tertarik%20dengan%20portofolio%20Anda."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-4 rounded-3xl flex items-center gap-4 shadow-md hover:shadow-xl border border-transparent hover:border-white transition duration-300"
              >
                <div className="w-14 h-14 flex items-center justify-center rounded-full bg-white">
                  <img src={gmail} alt="Email" className="w-6" />
                </div>
                <div>
                  <p className="font-semibold text-lg">Email</p>
                  <p className="text-sm text-white/80 break-all">
                    humamfawazi2399@students.unnes.ac.id
                  </p>
                </div>
              </motion.a>

              {/* WhatsApp Card */}
              <motion.a
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] },
                }}
                href="https://wa.me/6281233048485?text=Halo%2C%20saya%20tertarik%20dengan%20portofolio%20Anda."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-4 rounded-3xl flex items-center gap-4 shadow-md hover:shadow-xl border border-transparent hover:border-white transition duration-300"
              >
                <div className="w-14 h-14 flex items-center justify-center rounded-full bg-green-500">
                  <i class="bi bi-whatsapp"></i>
                  {/* <img
                    src="/whatsapp-icon.svg"
                    alt="WhatsApp"
                    className="w-6 h-6"
                  /> */}
                </div>
                <div>
                  <p className="font-semibold text-lg">WhatsApp</p>
                  <p className="text-sm text-white/80">+62 812-3304-8485</p>
                </div>
              </motion.a>
            </div>
          </div>
        </FadeInWhenVisible>
      </div>
    </div>
  );
}

export default App;
