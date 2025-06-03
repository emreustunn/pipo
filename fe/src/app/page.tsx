'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/translations';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const { language } = useLanguage();
  const t = translations[language];
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: '/images/next.jpg',
      title: t.classicPipe,
      description: t.classicPipeDesc
    },
    {
      image: '/images/next.jpg',
      title: t.modernPipe,
      description: t.modernPipeDesc
    },
    {
      image: '/images/next.jpg',
      title: t.handmadePipe,
      description: t.handmadePipeDesc
    },
    {
      image: '/images/next.jpg',
      title: t.collectionPipe,
      description: t.collectionPipeDesc
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <main className="min-h-screen">
      <div className="relative h-[65vh] bg-gradient-to-b from-[#3C2415] to-[#2C1810]">
        {/* Premium Smoke Effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <svg className="absolute inset-0 w-full h-full opacity-30">
            <filter id="smoke">
              <feTurbulence type="fractalNoise" baseFrequency="0.01" numOctaves="5" seed="1">
                <animate attributeName="baseFrequency" values="0.01;0.02;0.01" dur="30s" repeatCount="indefinite" />
              </feTurbulence>
              <feDisplacementMap in="SourceGraphic" scale="30" />
            </filter>
            <rect width="100%" height="100%" filter="url(#smoke)" fill="#3C2415" />
          </svg>
        </div>

        {/* Hero Section */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <div className="flex items-center space-x-4 mb-8">
            <Image
              src="/images/red_header_logo.avif"
              alt="Dulger Meerschaum Logo"
              width={80}
              height={80}
              className="rounded-full shadow-lg"
            />
            <h1 className="text-4xl md:text-6xl font-bold text-amber-50">
              {t.brandName}
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-amber-100 max-w-2xl mb-8">
            {t.heroSubtitle}
          </p>
          <div className="flex gap-4">
            <Link
              href="/about"
              className="bg-[#3C2415] hover:bg-[#2C1810] text-amber-50 px-8 py-3 rounded-full transition-colors duration-300"
            >
              {t.learnMore}
            </Link>
            <Link
              href="/contact"
              className="bg-amber-50 hover:bg-amber-100 text-[#3C2415] px-8 py-3 rounded-full transition-colors duration-300"
            >
              {t.contactUs}
            </Link>
          </div>
        </div>
      </div>

      {/* Promotional Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-32 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Premium Quality */}
          <div className="bg-white rounded-xl shadow-lg p-6 transform hover:scale-105 transition-all duration-300">
            <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-[#3C2415]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-[#3C2415] mb-2">{t.premiumQuality}</h3>
            <p className="text-[#2C1810]">{t.premiumQualityDesc}</p>
          </div>

          {/* Years Experience */}
          <div className="bg-white rounded-xl shadow-lg p-6 transform hover:scale-105 transition-all duration-300">
            <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-[#3C2415]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-[#3C2415] mb-2">{t.yearsExperience}</h3>
            <p className="text-[#2C1810]">{t.yearsExperienceDesc}</p>
          </div>

          {/* Unique Designs */}
          <div className="bg-white rounded-xl shadow-lg p-6 transform hover:scale-105 transition-all duration-300">
            <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-[#3C2415]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-[#3C2415] mb-2">{t.uniqueDesigns}</h3>
            <p className="text-[#2C1810]">{t.uniqueDesignsDesc}</p>
          </div>

          {/* Worldwide Shipping */}
          <div className="bg-white rounded-xl shadow-lg p-6 transform hover:scale-105 transition-all duration-300">
            <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-[#3C2415]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-[#3C2415] mb-2">{t.worldwideShipping}</h3>
            <p className="text-[#2C1810]">{t.worldwideShippingDesc}</p>
          </div>
        </div>
      </div>

      {/* Enhanced Slider Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="relative h-[600px] rounded-2xl shadow-2xl overflow-hidden">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-1000 transform ${
                index === currentSlide 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 translate-x-full'
              }`}
            >
              <div className="relative h-full">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />
                <div className="absolute inset-0 flex items-center">
                  <div className="max-w-2xl mx-auto px-8 text-center text-white">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 transform transition-all duration-1000 delay-300">
                      {slide.title}
                    </h2>
                    <p className="text-xl md:text-2xl text-red-200 transform transition-all duration-1000 delay-500">
                      {slide.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
          
          {/* Navigation Arrows */}
          <button
            onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-all duration-200 backdrop-blur-sm"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-all duration-200 backdrop-blur-sm"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Navigation Dots */}
          <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-white scale-125' 
                    : 'bg-white/50 hover:bg-white/75'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Featured Products Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-[#3C2415] mb-8 text-center">{t.featuredProducts}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Product 1 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="relative h-64">
              <Image
                src="/images/next.jpg"
                alt="Classic Meerschaum Pipe"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-[#3C2415] mb-2">{t.classicPipe}</h3>
              <p className="text-[#2C1810] mb-4">{t.classicPipeDesc}</p>
              <button className="w-full bg-[#3C2415] text-amber-50 py-2 rounded-lg hover:bg-[#2C1810] transition-colors duration-200">
                {t.viewDetails}
              </button>
            </div>
          </div>

          {/* Product 2 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="relative h-64">
              <Image
                src="/images/next.jpg"
                alt="Modern Meerschaum Pipe"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-[#3C2415] mb-2">{t.modernPipe}</h3>
              <p className="text-[#2C1810] mb-4">{t.modernPipeDesc}</p>
              <button className="w-full bg-[#3C2415] text-amber-50 py-2 rounded-lg hover:bg-[#2C1810] transition-colors duration-200">
                {t.viewDetails}
              </button>
            </div>
          </div>

          {/* Product 3 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="relative h-64">
              <Image
                src="/images/next.jpg"
                alt="Handmade Meerschaum Pipe"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-[#3C2415] mb-2">{t.handmadePipe}</h3>
              <p className="text-[#2C1810] mb-4">{t.handmadePipeDesc}</p>
              <button className="w-full bg-[#3C2415] text-amber-50 py-2 rounded-lg hover:bg-[#2C1810] transition-colors duration-200">
                {t.viewDetails}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-amber-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#3C2415] mb-8 text-center">{t.testimonials}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <span className="text-xl text-[#3C2415]">JD</span>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-[#3C2415]">John Doe</h4>
                  <p className="text-[#2C1810]">Collector</p>
                </div>
              </div>
              <p className="text-[#2C1810]">{t.testimonial1}</p>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <span className="text-xl text-[#3C2415]">MS</span>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-[#3C2415]">Mary Smith</h4>
                  <p className="text-[#2C1810]">Enthusiast</p>
                </div>
              </div>
              <p className="text-[#2C1810]">{t.testimonial2}</p>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <span className="text-xl text-[#3C2415]">RJ</span>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-[#3C2415]">Robert Johnson</h4>
                  <p className="text-[#2C1810]">Artist</p>
                </div>
              </div>
              <p className="text-[#2C1810]">{t.testimonial3}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-[#3C2415] to-[#2C1810] rounded-2xl p-8 md:p-12">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-amber-50 mb-4">{t.newsletterTitle}</h2>
            <p className="text-amber-100 mb-8">{t.newsletterDesc}</p>
            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder={t.emailPlaceholder}
                className="flex-1 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-amber-50 text-[#3C2415] font-semibold rounded-lg hover:bg-amber-100 transition-colors duration-200"
              >
                {t.subscribe}
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}

// Add this to your global CSS file or create a new style tag
const styles = `
@keyframes float {
  0% {
    transform: translateY(0) translateX(0);
    opacity: 0;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    transform: translateY(-100px) translateX(20px);
    opacity: 0;
  }
}
`; 