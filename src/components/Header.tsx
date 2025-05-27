'use client';

import { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/translations';
import Link from 'next/link';

type Language = 'tr' | 'en' | 'zh';

export default function Header() {
  const { language, setLanguage } = useLanguage();
  const t = translations[language];
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const languages = [
    { code: 'tr' as Language, label: '🇹🇷 TR' },
    { code: 'en' as Language, label: '🇬🇧 EN' },
    { code: 'zh' as Language, label: '🇨🇳 中文' }
  ];

  return (
    <header className="bg-[#800020] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Navigation Links */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="nav-link">
              {t.home}
            </Link>
            <Link href="/about" className="nav-link">
              {t.about}
            </Link>
            <Link href="/contact" className="nav-link">
              {t.contact}
            </Link>
            <Link href="/shop" className="nav-link">
              {t.shop}
            </Link>
          </nav>

          {/* Language Selector */}
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-white/10 transition-colors duration-200"
            >
              <span>{languages.find(lang => lang.code === language)?.label}</span>
              <svg
                className={`w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-32 bg-white rounded-lg shadow-lg py-1 z-50">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setLanguage(lang.code);
                      setIsDropdownOpen(false);
                    }}
                    className="w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100 flex items-center space-x-2"
                  >
                    <span>{lang.label}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
} 