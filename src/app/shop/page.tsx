'use client';

import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/translations';
import Image from 'next/image';
import Link from 'next/link';

export default function Shop() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <main className="min-h-screen py-16">
      {/* Hero Section */}
      <section className="relative bg-[#8B4513] text-amber-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{t.shopTitle}</h1>
            <p className="text-xl text-amber-100 max-w-3xl mx-auto">{t.shopSubtitle}</p>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#8B4513] mb-4">{t.categories}</h2>
            <p className="text-[#654321] max-w-3xl mx-auto">{t.categoriesSubtitle}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="relative h-64">
                <Image
                  src="/images/shop/classic.jpg"
                  alt="Classic Pipes"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#8B4513] mb-2">{t.classicPipes}</h3>
                <p className="text-[#654321] mb-4">{t.classicPipesDesc}</p>
                <Link
                  href="/shop/classic"
                  className="inline-block bg-[#8B4513] text-amber-50 px-6 py-2 rounded-md hover:bg-[#654321] transition-colors duration-300"
                >
                  {t.viewCollection}
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="relative h-64">
                <Image
                  src="/images/shop/artisan.jpg"
                  alt="Artisan Pipes"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#8B4513] mb-2">{t.artisanPipes}</h3>
                <p className="text-[#654321] mb-4">{t.artisanPipesDesc}</p>
                <Link
                  href="/shop/artisan"
                  className="inline-block bg-[#8B4513] text-amber-50 px-6 py-2 rounded-md hover:bg-[#654321] transition-colors duration-300"
                >
                  {t.viewCollection}
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="relative h-64">
                <Image
                  src="/images/shop/limited.jpg"
                  alt="Limited Edition"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#8B4513] mb-2">{t.limitedEdition}</h3>
                <p className="text-[#654321] mb-4">{t.limitedEditionDesc}</p>
                <Link
                  href="/shop/limited"
                  className="inline-block bg-[#8B4513] text-amber-50 px-6 py-2 rounded-md hover:bg-[#654321] transition-colors duration-300"
                >
                  {t.viewCollection}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 bg-[#FFF8DC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#8B4513] mb-4">{t.featuredProducts}</h2>
            <p className="text-[#654321] max-w-3xl mx-auto">{t.featuredProductsSubtitle}</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((product) => (
              <div key={product} className="bg-white rounded-lg overflow-hidden shadow-lg">
                <div className="relative h-64">
                  <Image
                    src={`/images/shop/product${product}.jpg`}
                    alt={`Product ${product}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[#8B4513] mb-2">{t[`product${product}Name`]}</h3>
                  <p className="text-[#654321] mb-4">{t[`product${product}Desc`]}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-[#8B4513] font-bold">{t[`product${product}Price`]}</span>
                    <button className="bg-[#8B4513] text-amber-50 px-4 py-2 rounded-md hover:bg-[#654321] transition-colors duration-300">
                      {t.addToCart}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#8B4513] mb-4">{t.whyChooseUs}</h2>
            <p className="text-[#654321] max-w-3xl mx-auto">{t.whyChooseUsSubtitle}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="text-[#8B4513] text-4xl mb-4">✨</div>
              <h3 className="text-xl font-semibold text-[#8B4513] mb-2">{t.qualityTitle}</h3>
              <p className="text-[#654321]">{t.qualityDesc}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="text-[#8B4513] text-4xl mb-4">🚚</div>
              <h3 className="text-xl font-semibold text-[#8B4513] mb-2">{t.shippingTitle}</h3>
              <p className="text-[#654321]">{t.shippingDesc}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="text-[#8B4513] text-4xl mb-4">🛡️</div>
              <h3 className="text-xl font-semibold text-[#8B4513] mb-2">{t.warrantyTitle}</h3>
              <p className="text-[#654321]">{t.warrantyDesc}</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 