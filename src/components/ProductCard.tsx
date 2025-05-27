'use client';

import { useState } from 'react';
import { useCart } from '@/context/CartContext';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/translations';
import type { Product } from '@/data/products';

type ProductCardProps = Product;

export const ProductCard = ({ id, name, price, image, description }: ProductCardProps) => {
  const { dispatch } = useCart();
  const { language } = useLanguage();
  const t = translations[language];
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        id,
        name,
        price,
        image,
        quantity,
      },
    });
    setQuantity(1);
  };

  return (
    <div className="p-4">
      <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
        {/* Görsel */}
        <div className="h-[280px] relative overflow-hidden group">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
          />
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
        </div>

        {/* İçerik */}
        <div className="flex flex-col justify-between flex-grow p-4">
          {/* Başlık + Açıklama (sabit yükseklik) */}
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-[#3C2415] mb-1 line-clamp-1">{name}</h3>
            <p className="text-sm text-gray-600 line-clamp-2 min-h-[40px]">
              {description}
            </p>
          </div>

          {/* Fiyat + Adet + Buton (her zaman en altta) */}
          <div className="mt-auto">
            <div className="flex justify-between items-center mb-3">
              <span className="text-xl font-bold text-[#3C2415]">${price}</span>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-[#3C2415] hover:bg-gray-200 transition"
                >
                  -
                </button>
                <span className="w-8 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-[#3C2415] hover:bg-gray-200 transition"
                >
                  +
                </button>
              </div>
            </div>

            <button
              onClick={handleAddToCart}
              className="w-full bg-[#3C2415] text-white py-2 rounded hover:bg-[#2C1810] transition flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span>{t.addToCart}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
