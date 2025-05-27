'use client';

import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { useCart } from '@/context/CartContext';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/translations';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

type CartDrawerProps = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

export const CartDrawer = ({ isOpen, setIsOpen }: CartDrawerProps) => {
  const { state, dispatch } = useCart();
  const { language } = useLanguage();
  const t = translations[language];
  const router = useRouter();

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity < 1) {
      dispatch({ type: 'REMOVE_ITEM', payload: id });
    } else {
      dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });
    }
  };

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={setIsOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-40 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col bg-white shadow-xl">
                    <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                      <div className="flex items-start justify-between">
                        <Dialog.Title className="text-2xl font-bold text-[#3C2415]">
                          {t.cart}
                        </Dialog.Title>
                        <button
                          type="button"
                          className="relative -m-2 p-2 text-gray-600 hover:text-gray-800"
                          onClick={() => setIsOpen(false)}
                        >
                          <span className="sr-only">Kapat</span>
                          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </div>

                      {state.items.length === 0 ? (
                        <div className="mt-8 text-center text-gray-500">
                          Sepetiniz boş
                        </div>
                      ) : (
                        <div className="mt-8">
                          <div className="flow-root">
                            <ul role="list" className="-my-6 divide-y divide-gray-200">
                              {state.items.map((item) => (
                                <li key={item.id} className="flex py-6">
                                  <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-md">
                                    <Image
                                      src={item.image}
                                      alt={item.name}
                                      fill
                                      className="object-cover object-center"
                                    />
                                  </div>

                                  <div className="ml-4 flex flex-1 flex-col">
                                    <div>
                                      <div className="flex justify-between text-base font-medium text-[#3C2415]">
                                        <h3>{item.name}</h3>
                                        <p className="ml-4">${(item.price * item.quantity).toFixed(2)}</p>
                                      </div>
                                    </div>
                                    <div className="flex flex-1 items-end justify-between text-sm">
                                      <div className="flex items-center space-x-2">
                                        <button
                                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                          className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-[#3C2415] hover:bg-gray-200 transition"
                                        >
                                          -
                                        </button>
                                        <span className="w-8 text-center">{item.quantity}</span>
                                        <button
                                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                          className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-[#3C2415] hover:bg-gray-200 transition"
                                        >
                                          +
                                        </button>
                                      </div>

                                      <button
                                        type="button"
                                        onClick={() => dispatch({ type: 'REMOVE_ITEM', payload: item.id })}
                                        className="font-medium text-red-600 hover:text-red-800"
                                      >
                                        Sil
                                      </button>
                                    </div>
                                  </div>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      )}
                    </div>

                    {state.items.length > 0 && (
                      <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                        <div className="flex justify-between text-base font-medium text-[#3C2415]">
                          <p>{t.total}</p>
                          <p>${state.total.toFixed(2)}</p>
                        </div>
                        <div className="mt-6 space-y-3">
                          <button
                            onClick={() => {
                              setIsOpen(false);
                              router.push('/cart');
                            }}
                            className="flex w-full items-center justify-center rounded-md border border-[#3C2415] bg-white px-6 py-3 text-base font-medium text-[#3C2415] hover:bg-gray-50"
                          >
                            Sepeti Görüntüle
                          </button>
                          <button
                            onClick={() => {
                              setIsOpen(false);
                              router.push('/checkout');
                            }}
                            className="flex w-full items-center justify-center rounded-md bg-[#3C2415] px-6 py-3 text-base font-medium text-white hover:bg-[#2C1810]"
                          >
                            Ödeme Yap
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}; 