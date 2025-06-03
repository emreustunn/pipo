'use client';

import { useCart } from '@/context/CartContext';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/translations';
import Image from 'next/image';

export const Cart = () => {
  const { state, dispatch } = useCart();
  const { language } = useLanguage();
  const t = translations[language];

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity < 1) {
      dispatch({ type: 'REMOVE_ITEM', payload: id });
    } else {
      dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });
    }
  };

  if (state.items.length === 0) {
    return (
      <div className="p-4 text-center text-gray-500">
        Sepetiniz boş
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold text-[#3C2415] mb-6">Sepetim</h2>
      <div className="space-y-4">
        {state.items.map((item) => (
          <div key={item.id} className="flex items-center space-x-4 border-b pb-4">
            <div className="relative w-20 h-20">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover rounded"
              />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-[#3C2415]">{item.name}</h3>
              <span className="text-[#3C2415] font-semibold">${(item.price * item.quantity).toFixed(2)}</span>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center"
              >
                -
              </button>
              <span className="w-8 text-center">{item.quantity}</span>
              <button
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center"
              >
                +
              </button>
            </div>
            <button
              onClick={() => dispatch({ type: 'REMOVE_ITEM', payload: item.id })}
              className="text-red-500 hover:text-red-700"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        ))}
      </div>
      <div className="flex justify-between items-center border-t pt-4 mt-4">
        <span className="text-lg font-semibold">{t.total}:</span>
        <span className="text-xl font-bold text-[#3C2415]">${state.total.toFixed(2)}</span>
      </div>
      <div className="mt-6 flex justify-between items-center">
        <button
          onClick={() => dispatch({ type: 'CLEAR_CART' })}
          className="bg-[#2C1810] text-white px-4 py-2 rounded hover:bg-[#3C2415] transition-colors duration-200"
        >
          Sepeti Temizle
        </button>
      </div>
    </div>
  );
}; 