"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import AnimatedSection from "@/components/AnimatedSection";
import SectionTitle from "@/components/SectionTitle";

const signatureProducts = [
  {
    name: "Paris-Brest",
    description: "Karamelize fındık pralin krema ile klasik choux hamuru halkası",
    price: "320 TL",
    image: "/images/paris-brest.png",
  },
  {
    name: "Ispahan",
    description: "Gül, litchi ve frambuaz üçlemesi ile Pierre Hermé ilhamı",
    price: "280 TL",
    image: "/images/ispahan.png",
  },
  {
    name: "Opera Cake",
    description: "Kahve ve çikolata katmanlı zarif Fransız pastası",
    price: "350 TL",
    image: "/images/opera-cake.png",
  },
];

const categories = [
  { name: "Pastalar", description: "El yapımı özel gün pastaları", count: "24 çeşit", image: "/images/cat-pastalar.png" },
  { name: "Küçük Pastalar", description: "Bireysel porsiyonlar", count: "18 çeşit", image: "/images/cat-kucuk.png" },
  { name: "Macaronlar", description: "Renkli ve lezzetli", count: "12 çeşit", image: "/images/cat-macaron.png" },
  { name: "Ekmekler", description: "Artisan fırın ürünleri", count: "8 çeşit", image: "/images/cat-ekmek.png" },
];

const testimonials = [
  {
    name: "Elif Yılmaz",
    text: "Düğün pastamızı Maison Délice yaptı. Hem görseli hem lezzeti muhteşemdi. Tüm misafirlerimiz hayran kaldı.",
    role: "Gelin",
  },
  {
    name: "Ahmet Kaya",
    text: "Her hafta sonu croissant almaya geliyorum. Paris'teki patisserilerin kalitesini İstanbul'da bulmak harika.",
    role: "Düzenli Müşteri",
  },
  {
    name: "Zeynep Demir",
    text: "Doğum günü pastası sipariş verdim. Özel isteklerime birebir uygun, muhteşem bir pasta hazırlandı.",
    role: "Müşteri",
  },
  {
    name: "Can Özkan",
    text: "Macaronları kesinlikle deneyin! Özellikle lavanta ve frambuaz lezzetleri favorim oldu.",
    role: "Gurme Blogger",
  },
];

export default function HomePage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <img
          src="/images/hero-vitrine.png"
          alt="Maison Délice vitrin"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-dark-brown/60" />

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <motion.h1
              className="font-[family-name:var(--font-great-vibes)] text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-warm-white mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Maison Delice
            </motion.h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex items-center justify-center gap-4 mb-8"
          >
            <span className="w-12 h-px bg-sand" />
            <p className="font-[family-name:var(--font-playfair-display)] text-sand text-lg sm:text-xl tracking-[0.3em] uppercase">
              Artisan Patisserie &bull; Istanbul
            </p>
            <span className="w-12 h-px bg-sand" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-warm-white/70 text-base sm:text-lg max-w-xl mx-auto mb-10 leading-relaxed"
          >
            Nişantaşı&apos;nın kalbinde, Fransız patisserie geleneğiyle
            harmanlanmış benzersiz lezzetler.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/menu"
              className="inline-block px-8 py-4 bg-sand text-dark-brown font-medium rounded-sm tracking-wide hover:bg-sand/90 transition-all duration-300 hover:shadow-lg"
            >
              Menüyü Keşfet
            </Link>
            <Link
              href="/siparis"
              className="inline-block px-8 py-4 border border-sand/50 text-sand rounded-sm tracking-wide hover:bg-sand/10 transition-all duration-300"
            >
              Sipariş Ver
            </Link>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-sand/40 rounded-full flex justify-center"
          >
            <motion.div className="w-1 h-2 bg-sand rounded-full mt-2" />
          </motion.div>
        </motion.div>
      </section>

      {/* Signature Products */}
      <section className="py-20 sm:py-28 bg-warm-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Signature Lezzetlerimiz"
            subtitle="Şef'imizin özel tariflerinden doğan, her biri birer sanat eseri olan imza tatlarımız"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {signatureProducts.map((product, index) => (
              <AnimatedSection key={product.name} delay={index * 0.15}>
                <div className="group cursor-pointer">
                  <div className="aspect-[4/5] rounded-lg mb-6 group-hover:shadow-xl transition-shadow duration-500 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-[family-name:var(--font-playfair-display)] text-xl sm:text-2xl text-dark-brown mb-2">
                    {product.name}
                  </h3>
                  <p className="text-dark-brown/60 text-sm leading-relaxed mb-3">
                    {product.description}
                  </p>
                  <span className="text-chocolate font-semibold text-lg">{product.price}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Story Strip */}
      <section className="py-20 sm:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <div className="aspect-[4/3] rounded-lg overflow-hidden">
                <img
                  src="/images/hero-vitrine.png"
                  alt="Maison Délice pastane"
                  className="w-full h-full object-cover"
                />
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <span className="font-[family-name:var(--font-great-vibes)] text-3xl text-sand mb-4 block">
                Hikayemiz
              </span>
              <h2 className="font-[family-name:var(--font-playfair-display)] text-3xl sm:text-4xl text-dark-brown mb-6">
                Paris&apos;ten İstanbul&apos;a Uzanan Bir Tutku
              </h2>
              <p className="text-dark-brown/70 leading-relaxed mb-4">
                2018 yılında, Paris&apos;in en prestijli patisserie okullarından
                mezun Şef Deniz Aydın tarafından kurulan Maison Délice,
                Nişantaşı&apos;na Fransız patisserie sanatının en ince
                detaylarını taşıdı.
              </p>
              <p className="text-dark-brown/70 leading-relaxed mb-8">
                Her gün, taze ve en kaliteli malzemelerle hazırlanan
                ürünlerimiz, geleneksel Fransız tekniklerinin İstanbul&apos;un
                zengin lezzet kültürüyle buluşmasıdır.
              </p>
              <Link
                href="/hakkimizda"
                className="inline-flex items-center gap-2 text-chocolate font-medium hover:text-sand transition-colors duration-300 group"
              >
                Devamını Oku
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 sm:py-28 bg-warm-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Kategorilerimiz"
            subtitle="Her damak tadına uygun, özenle hazırlanmış lezzet seçeneklerimiz"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12">
            {categories.map((cat, index) => (
              <AnimatedSection key={cat.name} delay={index * 0.1}>
                <Link
                  href="/menu"
                  className="group relative block aspect-[16/9] rounded-lg overflow-hidden"
                >
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-dark-brown/50 group-hover:bg-dark-brown/40 transition-colors duration-500" />
                  <div className="relative z-10 h-full flex flex-col items-center justify-center text-center p-6">
                    <h3 className="font-[family-name:var(--font-playfair-display)] text-2xl sm:text-3xl text-warm-white mb-2">
                      {cat.name}
                    </h3>
                    <p className="text-warm-white/70 text-sm mb-2">{cat.description}</p>
                    <span className="text-sand text-xs tracking-wider uppercase">{cat.count}</span>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 sm:py-28 bg-dark-brown">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Misafirlerimizin Yorumları"
            subtitle="Mutlu müşterilerimizden gelen güzel sözler"
            light
          />

          <div className="relative mt-12">
            <AnimatedSection>
              <div className="bg-warm-white/5 backdrop-blur-sm border border-warm-white/10 rounded-lg p-8 sm:p-12 text-center">
                <svg className="w-10 h-10 text-sand/40 mx-auto mb-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-warm-white/80 text-lg sm:text-xl leading-relaxed mb-8 italic">
                  &ldquo;{testimonials[currentTestimonial].text}&rdquo;
                </p>
                <p className="text-sand font-[family-name:var(--font-playfair-display)] text-lg">
                  {testimonials[currentTestimonial].name}
                </p>
                <p className="text-warm-white/40 text-sm mt-1">
                  {testimonials[currentTestimonial].role}
                </p>
              </div>
            </AnimatedSection>

            <div className="flex justify-center gap-3 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    index === currentTestimonial
                      ? "bg-sand w-8"
                      : "bg-warm-white/20 hover:bg-warm-white/40"
                  }`}
                  aria-label={`Yorum ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Instagram */}
      <section className="py-20 sm:py-28 bg-warm-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Instagram'da Biz"
            subtitle="@maisondelice ile bizi takip edin"
          />

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mt-12">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <AnimatedSection key={item} delay={item * 0.08}>
                <a
                  href="#"
                  className="group relative block aspect-square rounded-lg overflow-hidden"
                >
                  <img
                    src={`/images/menu-item-${item}.png`}
                    alt={`Instagram gönderi ${item}`}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-dark-brown/0 group-hover:bg-dark-brown/40 transition-colors duration-500 flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-warm-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </div>
                </a>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
