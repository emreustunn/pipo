export type Language = 'tr' | 'en' | 'zh';

export type Translation = {
  home: string;
  about: string;
  contact: string;
  shop: string;
  brand: string;
  tagline: string;
  brandName: string;
  heroSubtitle: string;
  learnMore: string;
  contactUs: string;
  premiumQuality: string;
  premiumQualityDesc: string;
  yearsExperience: string;
  yearsExperienceDesc: string;
  uniqueDesigns: string;
  uniqueDesignsDesc: string;
  worldwideShipping: string;
  worldwideShippingDesc: string;
  classicPipe: string;
  classicPipeDesc: string;
  modernPipe: string;
  modernPipeDesc: string;
  handmadePipe: string;
  handmadePipeDesc: string;
  collectionPipe: string;
  collectionPipeDesc: string;
  viewDetails: string;
  featuredProducts: string;
  testimonials: string;
  testimonial1: string;
  testimonial2: string;
  testimonial3: string;
  newsletterTitle: string;
  newsletterDesc: string;
  emailPlaceholder: string;
  subscribe: string;
  footerDescription: string;
  quickLinks: string;
  newsletter: string;
  allRightsReserved: string;
  privacyPolicy: string;
  termsOfService: string;
  aboutTitle: string;
  aboutDescription: string;
  craftsmanship: string;
  craftsmanshipDesc: string;
  heritage: string;
  heritageDesc: string;
  quality: string;
  qualityDesc: string;
  innovation: string;
  innovationDesc: string;
  contactDescription: string;
  namePlaceholder: string;
  messagePlaceholder: string;
  contactInfo: string;
  addressValue: string;
  phoneValue: string;
  emailValue: string;
  sendMessage: string;
  addToCart: string;
  total: string;
};

export const translations: Record<Language, Translation> = {
  tr: {
    footerDescription: "Dulger Meerschaum, 1960'dan beri en kaliteli lüle pipoları üretmektedir. Geleneksel el işçiliği ve modern tasarımı bir araya getirerek, pipo tutkunlarına benzersiz bir deneyim sunuyoruz.",
    quickLinks: "Hızlı Bağlantılar",
    newsletter: "Bülten",
    newsletterDesc: "Yeni ürünler ve özel tekliflerden haberdar olmak için bültenimize abone olun.",
    allRightsReserved: "Tüm hakları saklıdır.",
    privacyPolicy: "Gizlilik Politikası",
    termsOfService: "Kullanım Koşulları",
    brandName: "Dulger Meerschaum",
    heroSubtitle: "1960'dan beri en kaliteli lüle pipoları üretmektedir",
    learnMore: "Daha Fazla Bilgi",
    home: "Ana Sayfa",
    about: "Hakkımızda",
    contact: "İletişim",
    shop: "Mağaza",
    brand: "Dulger Meerschaum",
    tagline: "En kaliteli lüle pipoları",
    contactUs: "Bize Ulaşın",
    premiumQuality: "Premium Kalite",
    premiumQualityDesc: "En kaliteli malzemeler ve işçilik ile üretilen pipolar",
    yearsExperience: "60+ Yıl Deneyim",
    yearsExperienceDesc: "1960'dan beri süregelen uzmanlık ve tecrübe",
    uniqueDesigns: "Benzersiz Tasarımlar",
    uniqueDesignsDesc: "Her biri özel olarak tasarlanmış eşsiz pipolar",
    worldwideShipping: "Dünya Çapında Teslimat",
    worldwideShippingDesc: "Güvenli ve hızlı kargo ile dünyanın her yerine teslimat",
    classicPipe: "Klasik Lüle Pipo",
    classicPipeDesc: "Geleneksel tasarımlı, el yapımı lüle pipolar",
    modernPipe: "Modern Lüle Pipo",
    modernPipeDesc: "Çağdaş tasarımlı, yenilikçi lüle pipolar",
    handmadePipe: "El Yapımı Lüle Pipo",
    handmadePipeDesc: "Usta ellerden çıkan özel seri pipolar",
    collectionPipe: "Koleksiyon Lüle Pipo",
    collectionPipeDesc: "Sınırlı sayıda üretilen koleksiyon pipoları",
    viewDetails: "Detayları Gör",
    featuredProducts: "Öne Çıkan Ürünler",
    testimonials: "Müşteri Yorumları",
    testimonial1: "Dulger Meerschaum'un pipoları gerçekten eşsiz. Kalite ve işçilik mükemmel.",
    testimonial2: "Yıllardır kullandığım en iyi pipolar. Kesinlikle tavsiye ederim.",
    testimonial3: "Koleksiyonumun en değerli parçaları Dulger Meerschaum'dan.",
    newsletterTitle: "Bültenimize Abone Olun",
    emailPlaceholder: "E-posta adresiniz",
    subscribe: "Abone Ol",
    aboutTitle: "Dulger Meerschaum Hakkında",
    aboutDescription: "1960'dan beri, Dulger Meerschaum en kaliteli lüle pipolarını üretmektedir. Geleneksel zanaatkarlık ve modern tasarımı bir araya getirerek, her bir pipoyu benzersiz bir sanat eserine dönüştürüyoruz.",
    craftsmanship: "Geleneksel Zanaatkarlık",
    craftsmanshipDesc: "Her pipo, ustalarımızın yılların deneyimiyle şekillendirdiği el işçiliğinin bir ürünüdür.",
    heritage: "Zengin Miras",
    heritageDesc: "60 yılı aşkın süredir, aile geleneğimizi ve zanaatkarlık mirasımızı yaşatıyoruz.",
    quality: "Üstün Kalite",
    qualityDesc: "En kaliteli lüle taşı ve malzemeler kullanarak, dayanıklı ve estetik pipolar üretiyoruz.",
    innovation: "Modern Tasarım",
    innovationDesc: "Geleneksel teknikleri modern tasarımlarla birleştirerek, çağdaş pipo koleksiyonları yaratıyoruz.",
    contactDescription: "Bizimle iletişime geçin, size en iyi hizmeti sunalım.",
    namePlaceholder: "Adınız Soyadınız",
    messagePlaceholder: "Mesajınızı buraya yazın...",
    contactInfo: "İletişim Bilgileri",
    addressValue: "Taksim Meydanı, Beyoğlu, İstanbul",
    phoneValue: "+90 (212) 123 45 67",
    emailValue: "info@dulgermeerschaum.com",
    sendMessage: "Mesaj Gönder",
    addToCart: "Sepete Ekle",
    total: 'Toplam'
  },
  en: {
    footerDescription: "Dulger Meerschaum has been producing the highest quality meerschaum pipes since 1960. We combine traditional craftsmanship with modern design to offer pipe enthusiasts a unique experience.",
    quickLinks: "Quick Links",
    newsletter: "Newsletter",
    newsletterDesc: "Subscribe to our newsletter to stay updated on new products and special offers.",
    allRightsReserved: "All rights reserved.",
    privacyPolicy: "Privacy Policy",
    termsOfService: "Terms of Service",
    brandName: "Dulger Meerschaum",
    heroSubtitle: "Producing the highest quality meerschaum pipes since 1960",
    learnMore: "Learn More",
    home: "Home",
    about: "About",
    contact: "Contact",
    shop: "Shop",
    brand: "Dulger Meerschaum",
    tagline: "Highest quality meerschaum pipes",
    contactUs: "Contact Us",
    premiumQuality: "Premium Quality",
    premiumQualityDesc: "Pipes crafted with the finest materials and workmanship",
    yearsExperience: "60+ Years Experience",
    yearsExperienceDesc: "Expertise and experience since 1960",
    uniqueDesigns: "Unique Designs",
    uniqueDesignsDesc: "Each pipe is uniquely designed and crafted",
    worldwideShipping: "Worldwide Shipping",
    worldwideShippingDesc: "Safe and fast delivery worldwide",
    classicPipe: "Classic Meerschaum Pipe",
    classicPipeDesc: "Traditional design, handmade meerschaum pipes",
    modernPipe: "Modern Meerschaum Pipe",
    modernPipeDesc: "Contemporary design, innovative meerschaum pipes",
    handmadePipe: "Handmade Meerschaum Pipe",
    handmadePipeDesc: "Special series pipes from master craftsmen",
    collectionPipe: "Collection Meerschaum Pipe",
    collectionPipeDesc: "Limited edition collection pipes",
    viewDetails: "View Details",
    featuredProducts: "Featured Products",
    testimonials: "Testimonials",
    testimonial1: "Dulger Meerschaum's pipes are truly unique. The quality and craftsmanship are perfect.",
    testimonial2: "The best pipes I've used in years. Highly recommended.",
    testimonial3: "The most valuable pieces in my collection are from Dulger Meerschaum.",
    newsletterTitle: "Subscribe to Our Newsletter",
    emailPlaceholder: "Your email address",
    subscribe: "Subscribe",
    aboutTitle: "About Dulger Meerschaum",
    aboutDescription: "Since 1960, Dulger Meerschaum has been crafting the finest meerschaum pipes. We combine traditional craftsmanship with modern design to create unique works of art.",
    craftsmanship: "Traditional Craftsmanship",
    craftsmanshipDesc: "Each pipe is a product of our master artisans' years of experience and dedication.",
    heritage: "Rich Heritage",
    heritageDesc: "For over 60 years, we have been preserving our family tradition and craftsmanship legacy.",
    quality: "Superior Quality",
    qualityDesc: "Using the finest meerschaum and materials, we create durable and aesthetic pipes.",
    innovation: "Modern Design",
    innovationDesc: "We create contemporary pipe collections by combining traditional techniques with modern designs.",
    contactDescription: "Get in touch with us, let us provide you with the best service.",
    namePlaceholder: "Your Full Name",
    messagePlaceholder: "Write your message here...",
    contactInfo: "Contact Information",
    addressValue: "Taksim Square, Beyoglu, Istanbul",
    phoneValue: "+90 (212) 123 45 67",
    emailValue: "info@dulgermeerschaum.com",
    sendMessage: "Send Message",
    addToCart: "Add to Cart",
    total: 'Total'
  },
  zh: {
    footerDescription: "自1960年以来，Dulger Meerschaum一直生产最高品质的海泡石烟斗。我们将传统工艺与现代设计相结合，为烟斗爱好者提供独特的体验。",
    quickLinks: "快速链接",
    newsletter: "通讯",
    newsletterDesc: "订阅我们的通讯，了解新产品和特别优惠。",
    allRightsReserved: "保留所有权利。",
    privacyPolicy: "隐私政策",
    termsOfService: "服务条款",
    brandName: "Dulger Meerschaum",
    heroSubtitle: "自1960年以来生产最高品质的海泡石烟斗",
    learnMore: "了解更多",
    home: "首页",
    about: "关于我们",
    contact: "联系我们",
    shop: "商店",
    brand: "Dulger Meerschaum",
    tagline: "最高品质的海泡石烟斗",
    contactUs: "联系我们",
    premiumQuality: "优质品质",
    premiumQualityDesc: "使用最优质的材料和工艺制作的烟斗",
    yearsExperience: "60多年经验",
    yearsExperienceDesc: "自1960年以来的专业知识和经验",
    uniqueDesigns: "独特设计",
    uniqueDesignsDesc: "每支烟斗都是独特设计和制作",
    worldwideShipping: "全球配送",
    worldwideShippingDesc: "安全快速的全球配送服务",
    classicPipe: "经典海泡石烟斗",
    classicPipeDesc: "传统设计，手工制作的海泡石烟斗",
    modernPipe: "现代海泡石烟斗",
    modernPipeDesc: "现代设计，创新的海泡石烟斗",
    handmadePipe: "手工海泡石烟斗",
    handmadePipeDesc: "来自大师工匠的特别系列烟斗",
    collectionPipe: "收藏海泡石烟斗",
    collectionPipeDesc: "限量版收藏烟斗",
    viewDetails: "查看详情",
    featuredProducts: "特色产品",
    testimonials: "客户评价",
    testimonial1: "Dulger Meerschaum的烟斗确实独特。质量和工艺都很完美。",
    testimonial2: "多年来使用过的最好的烟斗。强烈推荐。",
    testimonial3: "我收藏中最有价值的作品来自Dulger Meerschaum。",
    newsletterTitle: "订阅我们的通讯",
    emailPlaceholder: "您的电子邮件地址",
    subscribe: "订阅",
    aboutTitle: "关于Dulger海泡石",
    aboutDescription: "自1960年以来，Dulger海泡石一直在制作最优质的海泡石烟斗。我们将传统工艺与现代设计相结合，创造独特的艺术品。",
    craftsmanship: "传统工艺",
    craftsmanshipDesc: "每个烟斗都是我们大师级工匠多年经验和奉献的结晶。",
    heritage: "丰富传统",
    heritageDesc: "60多年来，我们一直在传承家族传统和工艺遗产。",
    quality: "卓越品质",
    qualityDesc: "使用最优质的海泡石和材料，我们创造耐用且美观的烟斗。",
    innovation: "现代设计",
    innovationDesc: "我们通过将传统技术与现代设计相结合，创造当代烟斗系列。",
    contactDescription: "与我们联系，让我们为您提供最好的服务。",
    namePlaceholder: "您的全名",
    messagePlaceholder: "在此处写下您的留言...",
    contactInfo: "联系信息",
    addressValue: "塔克西姆广场，贝伊奥卢，伊斯坦布尔",
    phoneValue: "+90 (212) 123 45 67",
    emailValue: "info@dulgermeerschaum.com",
    sendMessage: "发送消息",
    addToCart: "加入购物车",
    total: '总计'
  }
}; 