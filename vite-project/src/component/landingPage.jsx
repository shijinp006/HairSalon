import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import heroImage from "../assets/pexels-th2city-2068672.webp";
import logo from "../assets/logo.webp";
import AboutImage1 from "../assets/AboutImage1.webp";
import AboutImage2 from "../assets/AboutImage2.webp";
import { Scissors, Sparkles, Brush } from "lucide-react";
import { Clock } from "lucide-react";
import { ArrowRight, Star } from "lucide-react";
export const LandingPage = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isVideoOpen, setIsVideoOpen] = useState(false);

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

    const services = [
        {
            icon: <Scissors size={40} />,
            title: "Haircut Style",
            desc: "Professional haircut styles tailored to your personality and look.",
        },
        {
            icon: <Brush size={40} />,
            title: "Shaving Style",
            desc: "Premium shaving service with modern techniques and precision.",
        },
        {
            icon: <Sparkles size={40} />,
            title: "Hair Coloring",
            desc: "Transform your appearance with trendy and classic hair colors.",
        },
    ];

    const prices = [
        {
            service: "Haircuts",
            desc: "Clean & Simple 30-40 Minutes",
            price: "125$",
        },
        {
            service: "Skin Fade",
            desc: "Haircut Blends To Skin",
            price: "145$",
        },
        {
            service: "Buzz Cut",
            desc: "Clippers Only Cut All Over",
            price: "75$",
        },
        {
            service: "Chap Haircut",
            desc: "Junior Under 14",
            price: "75$",
        },
        {
            service: "Colouring",
            desc: "Premium Hair Color Service",
            price: "225$",
        },
    ];

    const schedule = [
        {
            time: "12:00 AM - 2:00 AM",
            slots: "9 Spaces Available",
            available: false,
        },
        {
            time: "12:00 AM - 2:00 AM",
            slots: "9 Spaces Available",
            available: true,
        },
        {
            time: "12:00 AM - 2:00 AM",
            slots: "9 Spaces Available",
            available: false,
        },
        {
            time: "12:00 AM - 2:00 AM",
            slots: "9 Spaces Available",
            available: true,
        },
    ];


    const images = [
        "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=800",
        "https://images.unsplash.com/photo-1517832606299-7ae9b720a186?w=800",
        "https://images.unsplash.com/photo-1503951458645-643d53bfd90f?w=800",
        "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800",
        "https://images.unsplash.com/photo-1496345875659-11f7dd282d1d?w=800",
        "https://images.unsplash.com/photo-1521119989659-a83eee488004?w=800",
    ];

    const teamMembers = [
        {
            id: 1,
            image:
                "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&auto=format&fit=crop",
            name: "John Smith",
            role: "Hair Stylist",
        },
        {
            id: 2,
            image:
                "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&auto=format&fit=crop",
            name: "David Wilson",
            role: "Barber Expert",
        },
        {
            id: 3,
            image:
                "https://images.unsplash.com/photo-1504593811423-6dd665756598?w=800&auto=format&fit=crop",
            name: "Michael Brown",
            role: "Senior Barber",
        },
        {
            id: 4,
            image:
                "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&auto=format&fit=crop",
            name: "James Anderson",
            role: "Hair Designer",
        },
    ];

    const testimonials = [
        {
            id: 1,
            name: "JAYESH PATIL",
            role: "CEO, Lirante",
            image:
                "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200",
            review:
                "I absolutely love my new hairstyle! The staff are incredibly talented and friendly. They listened carefully and delivered exactly what I wanted.",
        },
        {
            id: 2,
            name: "JAYESH PATIL",
            role: "CEO, Lirante",
            image:
                "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200",
            review:
                "The experience was amazing from start to finish. Professional team, great atmosphere and excellent service.",
        },
        {
            id: 3,
            name: "JAYESH PATIL",
            role: "CEO, Lirante",
            image:
                "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200",
            review:
                "Highly recommended! They paid attention to every detail and made me feel comfortable throughout the process.",
        },
        {
            id: 4,
            name: "JAYESH PATIL",
            role: "CEO, Lirante",
            image:
                "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200",
            review:
                "Fantastic service and excellent results. Definitely coming back again.",
        },
    ];


    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) =>
                prev === testimonials.length - 1 ? 0 : prev + 1
            );
        }, 3000);

        return () => clearInterval(interval);
    }, []);
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
                                className="mt-6 md:mt-8 bg-[#E88B79] hover:bg-[#d87867] text-white px-6 sm:px-8 py-3 md:py-4 uppercase cursor-pointer font-semibold tracking-wider flex items-center gap-3 rounded-sm transition duration-300 rounded-xl"
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
              uppercase tracking-wider font-medium cursor-pointer rounded-xl"
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
                                    src={AboutImage1}
                                    alt="Hair Style"
                                    className="w-full h-[350px] md:h-[500px] lg:h-[600px]
                object-cover rounded-2xl"
                                />
                            </motion.div>

                            <motion.div
                                whileHover={{ y: -10 }}
                                transition={{ duration: 0.3 }}

                            >
                                <img
                                    src={AboutImage2}
                                    alt="Hair Style"
                                    className="w-full h-[350px] md:h-[500px] lg:h-[600px]
                object-cover rounded-2xl"
                                />
                            </motion.div>
                        </motion.div>

                    </div>
                </div>
            </section>
            <section className="  py-5 lg:py-10 px-4 md:px-8 lg:px-20 bg-white overflow-hidden">
                <div className=" mx-auto">
                    {/* Heading */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-oswald font-semibold uppercase tracking-wider">
                            <span className="relative inline-block">
                                What
                                <span className="absolute left-0 bottom-[-6px] w-20 h-1 bg-[#d77b6c]"></span>
                            </span>{" "}
                            We Do
                        </h2>


                    </motion.div>

                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Left Image */}
                        <motion.div
                            initial={{ opacity: 0, x: -80 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1517832606299-7ae9b720a186?w=900"
                                alt="Barber"
                                className="w-full lg:h-[550px] object-cover rounded-xl shadow-lg"
                            />
                        </motion.div>

                        {/* Right Cards */}
                        <div className="space-y-6">
                            {services.map((service, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: 80 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{
                                        duration: 0.6,
                                        delay: index * 0.2,
                                    }}
                                    viewport={{ once: true }}
                                    whileHover={{
                                        y: -5,
                                        scale: 1.02,
                                    }}
                                    className="flex bg-[#f8eeee] rounded-2xl overflow-hidden shadow-md"
                                >
                                    {/* Icon Box */}
                                    <div className="bg-[#de8b7d] min-w-[120px] flex items-center justify-center text-black">
                                        {service.icon}
                                    </div>

                                    {/* Content */}
                                    <div className=" p-3 lg:p-6">
                                        <h3 className="text-xs lg:text-2xl md:text-3xl font-oswald font-semibold uppercase tracking-wide mb-3">
                                            {service.title}
                                        </h3>

                                        <p className="text-gray-600 leading-relaxed">
                                            {service.desc}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 px-4 md:px-8 lg:px-20 bg-[#f5f5f5]">
                <div className=" mx-auto">
                    <div className="grid lg:grid-cols-2 gap-8 items-stretch">

                        {/* PRICE SECTION */}
                        <motion.div
                            initial={{ opacity: 0, x: -80 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7 }}
                            viewport={{ once: true }}
                        >
                            <div className="mb-6">
                                <h2 className="font-oswald text-3xl md:text-4xl lg:text-5xl uppercase font-semibold">
                                    Our Fair Prices
                                </h2>

                                <div className="w-10 h-1 bg-[#d77b6c] mt-3"></div>
                            </div>

                            {/* PRICE CARD */}
                            <div
                                className="relative rounded-xl overflow-hidden min-h-[400px] lg:min-h-[450px]"
                                style={{
                                    backgroundImage:
                                        "url('https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=1200')",
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                }}
                            >
                                <div className="absolute inset-0 bg-black/65"></div>

                                <div className="relative p-4 md:p-5 h-full">
                                    {prices.map((item, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, y: 25 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{
                                                duration: 0.4,
                                                delay: index * 0.1,
                                            }}
                                            viewport={{ once: true }}
                                            className="py-4 border-b border-white/20"
                                        >
                                            <div className="flex justify-between items-center">
                                                <h3 className="font-oswald uppercase text-white text-lg">
                                                    {item.service}
                                                </h3>

                                                <span className="font-oswald text-white text-lg">
                                                    {item.price}
                                                </span>
                                            </div>

                                            <p className="text-white/80 mt-1 text-sm">
                                                {item.desc}
                                            </p>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>

                        {/* SCHEDULE SECTION */}
                        <motion.div
                            initial={{ opacity: 0, x: 80 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7 }}
                            viewport={{ once: true }}
                        >
                            <div className="mb-6">
                                <h2 className="font-oswald text-3xl md:text-4xl lg:text-5xl uppercase font-semibold">
                                    Our Schedule
                                </h2>

                                <div className="w-10 h-1 bg-[#d77b6c] mt-3"></div>
                            </div>

                            {/* SCHEDULE CARD */}
                            <div
                                className="relative rounded-xl overflow-hidden min-h-[400px] lg:min-h-[462px]"
                                style={{
                                    backgroundImage:
                                        "url('https://images.unsplash.com/photo-1517832606299-7ae9b720a186?w=1200')",
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                }}
                            >
                                <div className="absolute inset-0 bg-black/65"></div>

                                <div className="relative p-4  md:p-5 h-full">
                                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-white mb-5">
                                        <h3 className="font-oswald uppercase text-lg">
                                            Available Appointments
                                        </h3>

                                        <span className="font-oswald uppercase text-sm">
                                            Calendar
                                        </span>
                                    </div>

                                    {schedule.map((item, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, y: 25 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{
                                                duration: 0.4,
                                                delay: index * 0.1,
                                            }}
                                            viewport={{ once: true }}
                                            className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 py-4 border-t border-white/20"
                                        >
                                            <div>
                                                <div className="flex items-center gap-2 text-white">
                                                    <Clock size={16} />

                                                    <span className="font-oswald uppercase text-xl">
                                                        {item.time}
                                                    </span>
                                                </div>

                                                <p className="text-white/80 mt-1 text-xm">
                                                    {item.slots}
                                                </p>
                                            </div>

                                            {item.available ? (
                                                <button className="border border-white text-white px-5 py-2 rounded-md font-oswald uppercase text-xs hover:bg-white hover:text-black transition">
                                                    Book Appointment
                                                </button>
                                            ) : (
                                                <button className="bg-[#d77b6c] text-white px-5 py-2 rounded-md font-oswald uppercase text-xs">
                                                    Unavailable
                                                </button>
                                            )}
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </section>

            <section className="w-full bg-black h-screen text-white">
                <div className="grid lg:grid-cols-2 min-h-[500px]">

                    {/* LEFT CONTENT */}
                    <motion.div
                        initial={{ opacity: 0, x: -80 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                        className="flex items-center justify-center px-6 md:px-12 lg:px-20 py-12"
                    >
                        <div >

                            {/* TITLE */}
                            <h2 className="font-oswald text-3xl md:text-4xl lg:text-5xl uppercase tracking-wider">
                                OFFER PROMOTION
                            </h2>

                            <div className="w-12 h-[3px] bg-[#d77b6c] mt-3 mb-6"></div>

                            {/* SUB TITLE */}
                            <h3 className="font-oswald text-lg md:text-xl text-[#d77b6c] uppercase mb-4">
                                Our Special Hand Made Creme
                            </h3>

                            {/* DESCRIPTION */}
                            <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-8">
                                There are many variations of passages of Lorem Ipsum majority
                                have suffered alteration in that some form believable.
                            </p>

                            {/* BUTTON AREA */}
                            <div className="flex items-center gap-6">
                                <span className="text-[#d77b6c] font-oswald text-lg">
                                    $60.00
                                </span>

                                <button className="border border-white px-6 py-2 flex items-center gap-3 uppercase font-oswald cursor-pointer text-sm hover:bg-white hover:text-black transition">
                                    More
                                    <span className="text-lg">→</span>
                                </button>
                            </div>

                        </div>
                    </motion.div>

                    {/* RIGHT IMAGE */}
                    <motion.div
                        initial={{ opacity: 0, x: 80 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=1200"
                            alt="barber"
                            className="w-full h-screen object-cover"
                        />

                        {/* Optional overlay like design */}
                        <div className="absolute inset-0 bg-black/10"></div>
                    </motion.div>

                </div>
            </section>
            <section className="bg-[#f5f5f5] mt-80 lg:mt-0 md:mt-80  py-16 lg:px-20 md:px-8 px-4">
                {/* Top Section */}
                <div className="grid lg:grid-cols-2 gap-10 items-center">
                    {/* Images */}
                    <div className="grid grid-cols-2 gap-4">
                        <div className="overflow-hidden rounded-2xl">
                            <img
                                src={images[0]}
                                alt="work"
                                className="w-full h-[320px] object-cover"
                            />
                        </div>

                        <div className="overflow-hidden rounded-2xl">
                            <img
                                src={images[1]}
                                alt="work"
                                className="w-full h-[320px] object-cover"
                            />
                        </div>
                    </div>

                    {/* Content */}
                    <div>
                        <h2
                            className="font-bold uppercase text-black
            text-3xl md:text-4xl lg:text-5xl"
                            style={{ fontFamily: "Oswald, sans-serif" }}
                        >
                            Discover Our Works
                        </h2>

                        <div className="w-14 h-[3px] bg-[#d59a8d] mt-3 mb-6"></div>

                        <p className="text-gray-700 text-base md:text-lg leading-relaxed max-w-[500px]">
                            There are many variations of passages of lorem ipsum the injected
                            humour randomised word.
                        </p>

                        <button
                            className="mt-8 border border-[#d59a8d]
            px-8 py-3 uppercase text-sm tracking-wide
            hover:bg-[#d59a8d] hover:text-white
            transition-all duration-300 cursor-pointer rounded-xl"
                            style={{ fontFamily: "Oswald, sans-serif" }}
                        >
                            All Work
                        </button>
                    </div>
                </div>

                {/* Bottom Gallery */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
                    {images.slice(2).map((img, index) => (
                        <div
                            key={index}
                            className="overflow-hidden rounded-2xl group"
                        >
                            <img
                                src={img}
                                alt={`gallery-${index}`}
                                className="w-full h-[240px] lg:h-[400px] object-cover cursor-pointer transition duration-500 group-hover:scale-110"
                            />
                        </div>
                    ))}
                </div>
            </section>

            <section className="bg-[#f4f4f4] py-16 px-4 md:px-8 lg:px-20 overflow-hidden">
                <div className="grid lg:grid-cols-2 gap-10 items-end">
                    {/* Left Side */}
                    <div>
                        <h2
                            className="text-black uppercase font-bold
            text-3xl md:text-4xl lg:text-5xl"
                            style={{ fontFamily: "Oswald, sans-serif" }}
                        >
                            Dedicate Our Team
                        </h2>

                        <div className="w-12 h-[3px] bg-[#d49084] mt-3"></div>

                        <p className="mt-6 text-gray-800 text-base md:text-lg leading-relaxed max-w-[550px]">
                            There are many variations of passages of lorem ipsum the injected
                            humour randomised word.
                        </p>

                        {/* Team Cards */}
                        <div className="grid grid-cols-2 gap-4 md:gap-6 mt-10">
                            {teamMembers.map((member) => (
                                <div
                                    key={member.id}
                                    className="bg-white rounded-2xl overflow-hidden"
                                >
                                    <div className="h-[260px] md:h-[320px]">
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>


                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Side Image */}
                    <div className="flex justify-center lg:justify-end">
                        <img
                            src="https://images.pexels.com/photos/17542178/pexels-photo-17542178.jpeg"
                            alt="Featured Team"
                            className="
              w-full
              max-w-[500px]
              md:max-w-[600px]
              lg:max-w-full
             lg:h-200
              object-contain
            "
                        />
                    </div>
                </div>
            </section>
            <section className="bg-[#f8f8f8] py-16 md:py-16 lg:py-16 overflow-hidden">
                {/* Header */}
                <div className="px-4 md:px-8 lg:px-20">
                    <div className="flex flex-col items-center justify-center md:flex-row md:items-center md:justify-between lg:flex-row lg:items-center lg:justify-between gap-8 mb-14">
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7 }}
                            viewport={{ once: true }}
                        >
                            <h2
                                className="text-3xl md:text-5xl font-semibold uppercase text-black"
                                style={{ fontFamily: "Oswald, sans-serif" }}
                            >
                                What Clients Says
                            </h2>

                            <div className="w-10 h-[3px] bg-[#E58A78] mt-3 mb-6"></div>

                            <p className="max-w-lg text-gray-700 text-base lg:text-2xl md:text-2xl">
                                There are many variations of passages of lorem ipsum the
                                injected humour randomised word.
                            </p>
                        </motion.div>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="border border-[#E58A78] px-8 py-3 flex items-center gap-3 uppercase text-sm w-fit cursor-pointer rounded-xl"
                            style={{ fontFamily: "Oswald, sans-serif" }}
                        >
                            See More
                            <ArrowRight size={18} />
                        </motion.button>
                    </div>
                </div>

                {/* MOBILE ONLY */}
                <div className="md:hidden px-4">
                    <div className="bg-[#7A7A7A] rounded-2xl p-6 text-white">
                        <motion.div
                            key={activeIndex}
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="flex items-center gap-4 mb-5">
                                <img
                                    src={testimonials[activeIndex].image}
                                    alt={testimonials[activeIndex].name}
                                    className="w-14 h-14 rounded-full object-cover"
                                />

                                <div>
                                    <h3
                                        className="text-lg font-medium"
                                        style={{ fontFamily: "Oswald, sans-serif" }}
                                    >
                                        {testimonials[activeIndex].name}
                                    </h3>

                                    <p className="text-gray-200 text-sm">
                                        {testimonials[activeIndex].role}
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-1 mb-4">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <Star
                                        key={star}
                                        size={18}
                                        className="fill-orange-400 text-orange-400"
                                    />
                                ))}

                                <span className="ml-2 text-white">5.0</span>
                            </div>

                            <p className="text-sm text-gray-100 leading-relaxed">
                                "{testimonials[activeIndex].review}"
                            </p>
                        </motion.div>

                        {/* Dots */}
                        <div className="flex justify-center gap-2 mt-6">
                            {testimonials.map((_, index) => (
                                <div
                                    key={index}
                                    className={`h-2 rounded-full transition-all duration-300 ${activeIndex === index
                                        ? "w-8 bg-[#E58A78]"
                                        : "w-2 bg-gray-400"
                                        }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                {/* TABLET + DESKTOP */}
                <div className="hidden md:block overflow-hidden">
                    <motion.div
                        className="flex gap-5 w-max"
                        animate={{
                            x: ["0%", "-50%"],
                        }}
                        transition={{
                            duration: 25,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                    >
                        {[...testimonials, ...testimonials].map((item, index) => (
                            <div
                                key={index}
                                className="
            min-w-[500px]
            lg:min-w-[520px]
            bg-[#7A7A7A]
            rounded-2xl
            p-6
            text-white
          "
                            >
                                <div className="flex items-center gap-4 mb-5">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-14 h-14 rounded-full object-cover"
                                    />

                                    <div>
                                        <h3
                                            className="text-lg font-medium"
                                            style={{ fontFamily: "Oswald, sans-serif" }}
                                        >
                                            {item.name}
                                        </h3>

                                        <p className="text-gray-200 text-sm">{item.role}</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-1 mb-4">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <Star
                                            key={star}
                                            size={18}
                                            className="fill-orange-400 text-orange-400"
                                        />
                                    ))}

                                    <span className="ml-2 text-white">5.0</span>
                                </div>

                                <p className="text-sm text-gray-100 leading-relaxed">
                                    "{item.review}"
                                </p>
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* Desktop Dots */}
                <div className="hidden md:flex justify-center gap-3 mt-12">
                    <div className="w-10 h-2 rounded-full bg-gray-300"></div>
                    <div className="w-10 h-2 rounded-full bg-[#E58A78]"></div>
                    <div className="w-10 h-2 rounded-full bg-gray-300"></div>
                </div>
            </section>
            <>
                <section
                    className="relative py-28 px-4 md:px-8 lg:px-20 bg-center bg-cover overflow-hidden"
                    style={{
                        backgroundImage:
                            "url('https://images.pexels.com/photos/1813272/pexels-photo-1813272.jpeg')",
                    }}
                >
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/50"></div>

                    {/* Content */}
                    <div className="relative z-10 flex flex-col items-center justify-center text-center">
                        {/* Play Button */}
                        <button
                            onClick={() => setIsVideoOpen(true)}
                            className="
              w-32 h-32
              md:w-40 md:h-40
              bg-white
              rounded-full
              flex
              items-center
              justify-center
              shadow-2xl
              transition-all
              duration-300
              hover:scale-105
              cursor-pointer
            "
                        >
                            <div
                                className="
                w-0 h-0
                border-t-[22px]
                border-b-[22px]
                border-l-[35px]
                border-t-transparent
                border-b-transparent
                border-l-[#D88A7B]
                ml-2
              "
                            />
                        </button>

                        {/* Title */}
                        <h2
                            className="
              mt-8
              text-white
              uppercase
              text-4xl
              md:text-5xl
              font-semibold
            "
                            style={{ fontFamily: "Oswald, sans-serif" }}
                        >
                            Intro Video
                        </h2>

                        {/* Description */}
                        <p className="mt-4 text-white text-base md:text-xl max-w-2xl leading-relaxed">
                            There are many variations of passages of lorem ipsum the injected
                            humour randomised word.
                        </p>
                    </div>
                </section>

                {/* VIDEO MODAL */}
                {isVideoOpen && (
                    <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
                        <div className="relative w-full max-w-5xl">

                            <button
                                onClick={() => setIsVideoOpen(false)}
                                className="
          absolute
          -top-5
          -right-5
          z-50
          w-12
          h-12
          bg-white
          rounded-full
          flex
          items-center
          justify-center
          text-black
          text-2xl
          font-bold
          shadow-lg
          hover:scale-110
          transition-all
          duration-300
          cursor-pointer
        "
                            >
                                ×
                            </button>

                            <iframe
                                className="w-full aspect-video rounded-xl"
                                src="https://www.youtube.com/embed/-FnrCZJw6TE?autoplay=1"
                                title="Intro Video"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                a
                            />
                        </div>
                    </div>
                )}
            </>
        </div>
    );
};