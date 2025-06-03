'use client';

import { useEffect, useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';

const languages = [
  { code: 'tr', label: 'Türkçe', flag: '🇹🇷' },
  { code: 'en', label: 'English', flag: '🇬🇧' },
  { code: 'zh', label: '中文', flag: '🇨🇳' }
];

export default function LanguageSelector() {
  const { language, setLanguage } = useLanguage();
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Tarayıcıda daha önce dil seçimi yapılmış mı kontrol et
    const hasSelectedLanguage = localStorage.getItem('selectedLanguage');
    if (!hasSelectedLanguage) {
      setShowModal(true);
    }
  }, []);

  const handleLanguageSelect = (langCode: string) => {
    setLanguage(langCode as 'tr' | 'en' | 'zh');
    localStorage.setItem('selectedLanguage', langCode);
    setShowModal(false);
  };

  if (!showModal) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full mx-4 transform transition-all">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Welcome to Dulger Meerschaum</h2>
          <p className="text-gray-600">Please select your preferred language</p>
        </div>

        <div className="space-y-3">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLanguageSelect(lang.code)}
              className="w-full flex items-center space-x-4 p-4 rounded-xl border border-gray-200 hover:border-red-500 hover:bg-red-50 transition-all duration-200 group"
            >
              <span className="text-2xl">{lang.flag}</span>
              <span className="text-lg font-medium text-gray-900 group-hover:text-red-900">
                {lang.label}
              </span>
            </button>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            You can change your language preference anytime from the header
          </p>
        </div>
      </div>
    </div>
  );
} 