import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import heroImage from "../assets/pexels-th2city-2068672.webp";
import logo from "../assets/logo.webp";

export const LandingPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    "HOME",
    "ABOUT US",
    "SERVICES",
    "PORTFOLIO",
    "TEAM",
    "PRICING",
    "BLOGS",
    "CONTACT",
  ];

  return (
    <div>

   
    <section
      className="relative min-h-screen bg-cover bg-center w-full"
      style={{
        backgroundImage: `url(${heroImage})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/55"></div>

      {/* Navbar */}
      <motion.header
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-20 border-b border-white/20"
      >
        <div className="px-4 sm:px-6 md:px-8 lg:px-20 mx-auto">
          <div className="flex items-center justify-between h-20 md:h-24">

            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="flex items-center gap-2 sm:gap-3"
            >
              <img
                src={logo}
                alt="logo"
                className="w-15 h-15 md:w-12 md:h-12 lg:w-20 lg:h-20 object-contain"
              />

              <div>
                <h2 className="text-[#E88B79] text-sm sm:text-base md:text-lg font-semibold uppercase tracking-wider">
                  The Style Loft
                </h2>

                <p
                  className="text-white text-[10px] sm:text-xs"
                  style={{ fontFamily: "cursive" }}
                >
                  Hair Salon
                </p>
              </div>
            </motion.div>

            {/* Desktop Menu */}
            <nav className="hidden lg:flex items-center gap-8">
              {menuItems.map((item) => (
                <motion.a
                  whileHover={{
                    scale: 1.1,
                    color: "#E88B79",
                  }}
                  key={item}
                  href="#"
                  className="text-white text-sm font-semibold tracking-wider"
                >
                  {item}
                </motion.a>
              ))}
            </nav>

            {/* Desktop Icons */}
            <div className="hidden lg:flex items-center gap-5 text-white">
              <motion.div whileHover={{ scale: 1.2 }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 cursor-pointer"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.8"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4"
                  />
                </svg>
              </motion.div>

              <motion.div whileHover={{ scale: 1.2 }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 cursor-pointer"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <circle cx="11" cy="11" r="7" strokeWidth="1.8" />
                  <path
                    strokeLinecap="round"
                    strokeWidth="1.8"
                    d="M20 20l-3-3"
                  />
                </svg>
              </motion.div>
            </div>

            {/* Mobile Button */}
            <button
              className="lg:hidden text-white"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-7 h-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-7 h-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4 }}
            className="lg:hidden relative z-20 bg-black/95 border-b border-white/20 overflow-hidden"
          >
            <nav className="flex flex-col">
              {menuItems.map((item) => (
                <motion.a
                  whileHover={{ x: 10 }}
                  key={item}
                  href="#"
                  className="text-white px-6 py-4 text-sm font-semibold tracking-wider hover:bg-white/10"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Content */}
      <div className="relative z-10 flex items-center min-h-[calc(100vh-80px)] md:min-h-[calc(100vh-96px)] py-10 md:py-0">
        <div className="px-4 sm:px-6 md:px-8 lg:px-20 mx-auto w-full">
          <div className="max-w-2xl">

            <motion.h1
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="
                text-white
                uppercase
                font-extrabold
                leading-[1.2]
                lg:leading-[1.05]
                text-3xl
                sm:text-5xl
                md:text-6xl
                lg:text-[80px]
              "
              style={{
                fontFamily: "Oswald, sans-serif",
              }}
            >
              Collection
              <br />
              Hair & Beard
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 1 }}
              className="mt-4 md:mt-6 text-white/90 text-sm md:text-base leading-relaxed max-w-md md:max-w-lg"
            >
              Discover our exclusive Hair & Beard Collection,
              meticulously crafted to elevate your grooming
              experience. From premium haircuts and styling to
              expert beard trims and treatments, our skilled
              professionals ensure you look and feel your best.
            </motion.p>

            <motion.button
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.95,
              }}
              className="mt-6 md:mt-8 bg-[#E88B79] hover:bg-[#d87867] text-white px-6 sm:px-8 py-3 md:py-4 uppercase font-semibold tracking-wider flex items-center gap-3 rounded-sm transition duration-300"
            >
              All Services
              <span className="text-xl">→</span>
            </motion.button>

          </div>
        </div>
      </div>
    </section>
        <section className="py-16 md:py-20 bg-white overflow-hidden">
      <div className="px-4 md:px-8 lg:px-20 mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Title */}
            <div>
              <h2
                className="text-black uppercase font-bold
                text-3xl md:text-4xl lg:text-5xl"
                style={{
                  fontFamily: "Oswald, sans-serif",
                }}
              >
                About Us
              </h2>

              <div className="w-10 h-[3px] bg-[#E88B79] mt-2"></div>
            </div>

            {/* Short Description */}
            <p className="mt-8 text-gray-800 text-base md:text-lg leading-relaxed max-w-xl">
              Discover our exclusive hair & beard collection,
              meticulously crafted to elevate your grooming
              experience. From premium haircuts and styling to
              expert beard trims and treatments, our skilled
              professionals ensure you look and feel your best.
            </p>

            {/* Main Content */}
            <p className="mt-10 text-gray-900 text-lg leading-relaxed uppercase max-w-xl">
              Discover Our Exclusive Hair & Beard Collection,
              Meticulously Crafted To Elevate Your Grooming
              Experience. From Premium Haircuts And Styling To
              Expert Beard Trims And Treatments, Our Skilled
              Professionals Ensure You Look And Feel Your Best.
              Embrace A Refined, Polished Appearance With Our
              Comprehensive Services Tailored For Modern Gentlemen.
            </p>

            {/* Button */}
            <motion.button
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.95,
              }}
              className="mt-10 border border-[#E88B79]
              text-black px-8 py-4 flex items-center gap-4
              uppercase tracking-wider font-medium"
              style={{
                fontFamily: "Oswald, sans-serif",
              }}
            >
              Contact Us
              <span className="text-xl">→</span>
            </motion.button>
          </motion.div>

          {/* Right Images */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-4 md:gap-6"
          >
            <motion.div
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <img
                // src={img1}
                alt="Hair Style"
                className="w-full h-[350px] md:h-[500px] lg:h-[600px]
                object-cover rounded-2xl"
              />
            </motion.div>

            <motion.div
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
              className="mt-8"
            >
              <img
                // src={img2}
                alt="Hair Style"
                className="w-full h-[350px] md:h-[500px] lg:h-[600px]
                object-cover rounded-2xl"
              />
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
     </div>
  );
};