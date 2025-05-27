'use client';

import { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { useCart } from '@/context/CartContext';
import { translations } from '@/translations';
import Link from 'next/link';
import Image from 'next/image';
import { CartDrawer } from './CartDrawer';

type Language = 'tr' | 'en' | 'zh';

export default function Header() {
  const { language, setLanguage } = useLanguage();
  const { state } = useCart();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const t = translations[language];

  const languages: { code: Language; label: string; flag: string }[] = [
    { code: 'tr', label: 'TR', flag: '🇹🇷' },
    { code: 'en', label: 'EN', flag: '🇬🇧' },
    { code: 'zh', label: '中文', flag: '🇨🇳' }
  ];

  const cartItemCount = state.items.reduce((total, item) => total + item.quantity, 0);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#2C1810] shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center">
                <Image
                  src="/images/red_header_logo.avif"
                  alt="Dulger Meerschaum Logo"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <span className="ml-2 text-amber-50 font-semibold text-lg">
                  {t.brand}
                </span>
              </Link>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex space-x-8">
              <Link
                href="/"
                className="text-amber-50 hover:text-amber-200 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                {t.home}
              </Link>
              <Link
                href="/about"
                className="text-amber-50 hover:text-amber-200 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                {t.about}
              </Link>
              <Link
                href="/contact"
                className="text-amber-50 hover:text-amber-200 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                {t.contact}
              </Link>
              <Link
                href="/shop"
                className="text-amber-50 hover:text-amber-200 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                {t.shop}
              </Link>
            </nav>

            <div className="flex items-center space-x-4">
              {/* Cart Icon */}
              <button
                onClick={() => setIsCartOpen(true)}
                className="relative text-amber-50 hover:text-amber-200"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                {cartItemCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {cartItemCount}
                  </span>
                )}
              </button>

              {/* Language Selector */}
              <div className="relative">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center text-amber-50 hover:text-amber-200 focus:outline-none"
                >
                  <span className="mr-2">{language.toUpperCase()}</span>
                  <svg
                    className={`w-4 h-4 transition-transform duration-200 ${
                      isDropdownOpen ? 'transform rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-amber-50 ring-1 ring-black ring-opacity-5">
                    <div
                      className="py-1"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="language-menu"
                    >
                      <button
                        onClick={() => setLanguage('tr')}
                        className="block w-full text-left px-4 py-2 text-sm text-[#2C1810] hover:bg-amber-100"
                        role="menuitem"
                      >
                        Türkçe
                      </button>
                      <button
                        onClick={() => setLanguage('en')}
                        className="block w-full text-left px-4 py-2 text-sm text-[#2C1810] hover:bg-amber-100"
                        role="menuitem"
                      >
                        English
                      </button>
                      <button
                        onClick={() => setLanguage('zh')}
                        className="block w-full text-left px-4 py-2 text-sm text-[#2C1810] hover:bg-amber-100"
                        role="menuitem"
                      >
                        中文
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>

      <CartDrawer isOpen={isCartOpen} setIsOpen={setIsCartOpen} />
    </>
  );
} 