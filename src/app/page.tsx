'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/translations';
import Image from 'next/image';

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
      {/* Hero Section with Smoke Effect */}
      <section className="relative h-[500px] bg-gradient-to-r from-[#800020] to-[#9B2D30] overflow-hidden">
        {/* Smoke Effect SVG */}
        <div className="absolute inset-0 opacity-30">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <filter id="smoke" x="-50%" y="-50%" width="200%" height="200%">
                <feTurbulence type="fractalNoise" baseFrequency="0.01" numOctaves="5" seed="1">
                  <animate attributeName="baseFrequency" values="0.01;0.02;0.01" dur="20s" repeatCount="indefinite" />
                </feTurbulence>
                <feDisplacementMap in="SourceGraphic" scale="10" />
                <feGaussianBlur stdDeviation="2" />
                <feColorMatrix type="matrix" values="1 0 0 0 0
                                                    0 1 0 0 0
                                                    0 0 1 0 0
                                                    0 0 0 0.5 0" />
              </filter>
              <linearGradient id="smokeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#ffffff', stopOpacity: 0.8 }} />
                <stop offset="100%" style={{ stopColor: '#ffffff', stopOpacity: 0.2 }} />
              </linearGradient>
            </defs>
            <path
              d="M0,50 Q25,40 50,50 T100,50"
              fill="none"
              stroke="url(#smokeGradient)"
              strokeWidth="0.5"
              filter="url(#smoke)"
            >
              <animate
                attributeName="d"
                values="M0,50 Q25,40 50,50 T100,50;
                        M0,50 Q25,60 50,50 T100,50;
                        M0,50 Q25,40 50,50 T100,50"
                dur="10s"
                repeatCount="indefinite"
              />
            </path>
            <path
              d="M0,60 Q25,50 50,60 T100,60"
              fill="none"
              stroke="url(#smokeGradient)"
              strokeWidth="0.5"
              filter="url(#smoke)"
            >
              <animate
                attributeName="d"
                values="M0,60 Q25,50 50,60 T100,60;
                        M0,60 Q25,70 50,60 T100,60;
                        M0,60 Q25,50 50,60 T100,60"
                dur="12s"
                repeatCount="indefinite"
              />
            </path>
            <path
              d="M0,40 Q25,30 50,40 T100,40"
              fill="none"
              stroke="url(#smokeGradient)"
              strokeWidth="0.5"
              filter="url(#smoke)"
            >
              <animate
                attributeName="d"
                values="M0,40 Q25,30 50,40 T100,40;
                        M0,40 Q25,50 50,40 T100,40;
                        M0,40 Q25,30 50,40 T100,40"
                dur="8s"
                repeatCount="indefinite"
              />
            </path>
          </svg>
        </div>

        {/* Additional Smoke Particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${5 + Math.random() * 5}s linear infinite`,
                animationDelay: `${Math.random() * 5}s`
              }}
            />
          ))}
        </div>

        <div className="absolute inset-0 bg-black/50" />
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <div className="flex items-center justify-between w-full">
            <div className="text-white max-w-2xl">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">{t.brand}</h1>
              <p className="text-xl md:text-2xl text-red-200">{t.tagline}</p>
            </div>
            <div className="relative w-40 h-40 md:w-48 md:h-48 flex-shrink-0">
              <Image
                src="/images/header_logo.avif"
                alt="Dulger Meerschaum Logo"
                fill
                className="object-contain drop-shadow-2xl"
                priority
                style={{ mixBlendMode: 'multiply' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Promotional Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Premium Quality */}
          <div className="bg-white rounded-xl shadow-lg p-6 transform hover:scale-105 transition-all duration-300">
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{t.premiumQuality}</h3>
            <p className="text-gray-600">{t.premiumQualityDesc}</p>
          </div>

          {/* Years Experience */}
          <div className="bg-white rounded-xl shadow-lg p-6 transform hover:scale-105 transition-all duration-300">
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{t.yearsExperience}</h3>
            <p className="text-gray-600">{t.yearsExperienceDesc}</p>
          </div>

          {/* Unique Designs */}
          <div className="bg-white rounded-xl shadow-lg p-6 transform hover:scale-105 transition-all duration-300">
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{t.uniqueDesigns}</h3>
            <p className="text-gray-600">{t.uniqueDesignsDesc}</p>
          </div>

          {/* Worldwide Shipping */}
          <div className="bg-white rounded-xl shadow-lg p-6 transform hover:scale-105 transition-all duration-300">
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{t.worldwideShipping}</h3>
            <p className="text-gray-600">{t.worldwideShippingDesc}</p>
          </div>
        </div>
      </div>

      {/* Enhanced Slider Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
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
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">{t.featuredProducts}</h2>
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
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{t.classicPipe}</h3>
              <p className="text-gray-600 mb-4">{t.classicPipeDesc}</p>
              <button className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition-colors duration-200">
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
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{t.modernPipe}</h3>
              <p className="text-gray-600 mb-4">{t.modernPipeDesc}</p>
              <button className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition-colors duration-200">
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
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{t.handmadePipe}</h3>
              <p className="text-gray-600 mb-4">{t.handmadePipeDesc}</p>
              <button className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition-colors duration-200">
                {t.viewDetails}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">{t.testimonials}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <span className="text-xl text-red-600">JD</span>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-gray-900">John Doe</h4>
                  <p className="text-gray-600">Collector</p>
                </div>
              </div>
              <p className="text-gray-600">{t.testimonial1}</p>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <span className="text-xl text-red-600">MS</span>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-gray-900">Mary Smith</h4>
                  <p className="text-gray-600">Enthusiast</p>
                </div>
              </div>
              <p className="text-gray-600">{t.testimonial2}</p>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <span className="text-xl text-red-600">RJ</span>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-gray-900">Robert Johnson</h4>
                  <p className="text-gray-600">Artist</p>
                </div>
              </div>
              <p className="text-gray-600">{t.testimonial3}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-[#800020] to-[#9B2D30] rounded-2xl p-8 md:p-12">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">{t.newsletterTitle}</h2>
            <p className="text-red-100 mb-8">{t.newsletterDesc}</p>
            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder={t.emailPlaceholder}
                className="flex-1 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-white text-red-600 font-semibold rounded-lg hover:bg-red-50 transition-colors duration-200"
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