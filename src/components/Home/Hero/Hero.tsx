'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import heroData from './HeroData';

export const HeroSection = () => {
  const router = useRouter();
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroData.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-[85vh] min-h-[600px] overflow-hidden  shadow-2xl">
      {/* Slides */}
      {heroData.map((item,index) => (
  <div 
    key={item.id}
    className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
  >
    {/* Background Image with Gradient Overlay */}
    <Image
      src={item.image}
      alt={item.title}
      fill
      className="object-cover object-center"
      priority
      quality={100}
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20" />

    {/* Content with Conditional Animation */}
    <div 
      className="container relative h-full flex items-center px-6"
      data-aos={item.id % 2 === 0 ? "fade-up" : "fade-down"}
      data-aos-duration="1000"
      data-aos-delay="200"
    >
      <div className="max-w-2xl mx-auto text-center md:text-left space-y-8">
        <h1 className="text-white text-5xl md:text-6xl font-bold leading-tight tracking-tight drop-shadow-lg">
          <span className="bg-gradient-to-r from-[#FB6B47] to-[#EED060] bg-clip-text text-transparent">
            {item.title}
          </span>
        </h1>

        <div className="flex flex-col sm:flex-row gap-5 justify-center md:justify-start">
          <Button
            data-aos={item.id % 2 === 0 ? "fade-right" : "fade-left"}
            data-aos-delay="400"
            onClick={() => router.push('/about')}
            className="bg-white hover:bg-gray-50 text-gray-900 font-semibold py-5 px-10 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 text-lg"
          >
            More About Us
          </Button>
          <Button
            data-aos={item.id % 2 === 0 ? "fade-left" : "fade-right"}
            data-aos-delay="600"
            onClick={() => router.push('/teachers')}
            className="bg-[#4ade80] hover:bg-[#3bc76f] text-white font-semibold py-5 px-10 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 text-lg"
          >
            Our Teachers
          </Button>
        </div>
      </div>
    </div>
  </div>
))}

      {/* Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {heroData.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-3 w-3 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-white w-6' : 'bg-white/50'}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={() => setCurrentSlide(prev => (prev - 1 + heroData.length) % heroData.length)}
        className="absolute left-8 top-1/2 -translate-y-1/2 z-10 h-14 w-14 rounded-full bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm transition-opacity border-none flex items-center justify-center"
        aria-label="Previous slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 18l-6-6 6-6"/>
        </svg>
      </button>
      <button
        onClick={() => setCurrentSlide(prev => (prev + 1) % heroData.length)}
        className="absolute right-8 top-1/2 -translate-y-1/2 z-10 h-14 w-14 rounded-full bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm transition-opacity border-none flex items-center justify-center"
        aria-label="Next slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 18l6-6-6-6"/>
        </svg>
      </button>
    </section>
  );
};