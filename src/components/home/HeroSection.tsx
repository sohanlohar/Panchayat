"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const SLIDES = [
    {
        id: 1,
        image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2813&auto=format&fit=crop", // Sustainable Farming/Nature
        title: "Empowering Rural Development",
        description: "Building a stronger, self-sufficient community together.",
    },
    {
        id: 2,
        image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?q=80&w=2670&auto=format&fit=crop", // Camping/Rural life (Generic nice landscape)
        title: "Digital Services at Your Doorstep",
        description: "Access birth certificates, tax payments, and more online.",
    },
    {
        id: 3,
        image: "https://images.unsplash.com/photo-1464618663641-bbdd760ae84a?q=80&w=2670&auto=format&fit=crop", // Village/Nature
        title: "Transparent Governance",
        description: "Information and schemes accessible to every citizen.",
    },
];

export default function HeroSection() {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % SLIDES.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const nextSlide = () => setCurrent((prev) => (prev + 1) % SLIDES.length);
    const prevSlide = () => setCurrent((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);

    return (
        <section className="relative h-[80vh] w-full overflow-hidden bg-black/20" aria-label="Hero Carousel">
            <AnimatePresence mode="wait">
                <motion.div
                    key={current}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8 }}
                    className="absolute inset-0 z-0"
                >
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/40 z-10" />
                    {/* Background Image */}
                    <Image
                        src={SLIDES[current].image}
                        alt={SLIDES[current].title}
                        fill
                        priority={current === 0}
                        className="object-cover"
                        sizes="100vw"
                        quality={90}
                    />
                </motion.div>
            </AnimatePresence>

            <div className="relative z-20 h-full container mx-auto px-4 md:px-6 flex flex-col justify-center items-center text-center text-white">
                <motion.div
                    key={current + "-text"}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="max-w-3xl space-y-6"
                >
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight drop-shadow-md">
                        {SLIDES[current].title}
                    </h1>
                    <p className="text-lg md:text-xl text-gray-100 drop-shadow-sm max-w-2xl mx-auto">
                        {SLIDES[current].description}
                    </p>
                    <div className="flex flex-wrap justify-center gap-4 pt-4">
                        <button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full font-semibold transition-transform hover:scale-105 flex items-center gap-2">
                            Our Services <ArrowRight className="w-5 h-5" />
                        </button>
                        <button className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white px-8 py-3 rounded-full font-semibold transition-all">
                            Contact Us
                        </button>
                    </div>
                </motion.div>
            </div>

            {/* Navigation arrows */}
            <button
                onClick={prevSlide}
                aria-label="Previous Slide"
                className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2 bg-black/20 hover:bg-black/40 rounded-full text-white backdrop-blur-sm transition-colors md:left-8"
            >
                <ChevronLeft className="w-8 h-8" />
            </button>
            <button
                onClick={nextSlide}
                aria-label="Next Slide"
                className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2 bg-black/20 hover:bg-black/40 rounded-full text-white backdrop-blur-sm transition-colors md:right-8"
            >
                <ChevronRight className="w-8 h-8" />
            </button>

            {/* Dots */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-2">
                {SLIDES.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrent(index)}
                        aria-label={`Go to slide ${index + 1}`}
                        className={`w-3 h-3 rounded-full transition-all ${index === current ? "bg-primary w-8" : "bg-white/50 hover:bg-white"
                            }`}
                    />
                ))}
            </div>
        </section>
    );
}

