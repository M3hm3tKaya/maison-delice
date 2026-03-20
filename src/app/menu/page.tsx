"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import SectionTitle from "@/components/SectionTitle";

const filterCategories = ["Tümü", "Pastalar", "Küçük Pastalar", "Macaronlar", "Ekmekler"];

const menuItems = [
  { name: "Paris-Brest", category: "Pastalar", description: "Fındık pralin kremalı choux hamuru", price: "320 TL", image: "/images/menu-item-1.png" },
  { name: "Opera Cake", category: "Pastalar", description: "Kahve ve çikolata katmanlı klasik", price: "350 TL", image: "/images/menu-item-2.png" },
  { name: "Tarte Tatin", category: "Pastalar", description: "Karamelize elmalı ters tart", price: "280 TL", image: "/images/menu-item-3.png" },
  { name: "Mille-Feuille", category: "Pastalar", description: "Vanilya kremalı çıtır milföy", price: "290 TL", image: "/images/menu-item-4.png" },
  { name: "Ispahan", category: "Küçük Pastalar", description: "Gül, litchi ve frambuaz", price: "180 TL", image: "/images/menu-item-5.png" },
  { name: "Eclair au Chocolat", category: "Küçük Pastalar", description: "Çikolata ganajlı eclair", price: "120 TL", image: "/images/menu-item-6.png" },
  { name: "Tarte au Citron", category: "Küçük Pastalar", description: "Limon kremalı mini tart", price: "140 TL", image: "/images/menu-item-7.png" },
  { name: "Saint-Honoré", category: "Küçük Pastalar", description: "Karamel profiterollü pasta", price: "160 TL", image: "/images/menu-item-8.png" },
  { name: "Macaron Vanille", category: "Macaronlar", description: "Madagaskar vanilyalı", price: "45 TL", image: "/images/menu-item-9.png" },
  { name: "Macaron Pistache", category: "Macaronlar", description: "Antep fıstıklı", price: "50 TL", image: "/images/menu-item-10.png" },
  { name: "Macaron Framboise", category: "Macaronlar", description: "Frambuazlı", price: "45 TL", image: "/images/menu-item-11.png" },
  { name: "Macaron Caramel", category: "Macaronlar", description: "Tuzlu karamelli", price: "50 TL", image: "/images/menu-item-12.png" },
  { name: "Croissant", category: "Ekmekler", description: "Tereyağlı klasik kruvasan", price: "65 TL", image: "/images/menu-item-1.png" },
  { name: "Pain au Chocolat", category: "Ekmekler", description: "Çikolatalı kruvasan", price: "75 TL", image: "/images/menu-item-2.png" },
  { name: "Baguette", category: "Ekmekler", description: "Geleneksel Fransız ekmeği", price: "55 TL", image: "/images/menu-item-3.png" },
  { name: "Brioche", category: "Ekmekler", description: "Tereyağlı zengin ekmek", price: "60 TL", image: "/images/menu-item-4.png" },
];

export default function MenuPage() {
  const [activeFilter, setActiveFilter] = useState("Tümü");

  const filteredItems =
    activeFilter === "Tümü"
      ? menuItems
      : menuItems.filter((item) => item.category === activeFilter);

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-20 sm:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <span className="font-[family-name:var(--font-great-vibes)] text-3xl text-sand mb-4 block">
              Lezzetlerimiz
            </span>
            <h1 className="font-[family-name:var(--font-playfair-display)] text-4xl sm:text-5xl lg:text-6xl text-dark-brown mb-6">
              Menümüz
            </h1>
            <p className="text-dark-brown/60 text-lg max-w-2xl mx-auto">
              Fransız patisserie geleneğinin en seçkin örnekleri, her gün taze ve özenle hazırlanır.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="py-16 sm:py-20 bg-warm-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
            {filterCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 sm:px-6 py-2.5 min-h-[44px] rounded-sm text-sm font-medium tracking-wide transition-all duration-300 ${
                  activeFilter === cat
                    ? "bg-chocolate text-warm-white"
                    : "bg-cream text-dark-brown/70 hover:bg-sand/30 hover:text-dark-brown"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Product Grid */}
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item) => (
                <motion.div
                  key={item.name}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-500 border border-cream"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4 sm:p-6">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <h3 className="font-[family-name:var(--font-playfair-display)] text-lg text-dark-brown">
                        {item.name}
                      </h3>
                      <span className="text-chocolate font-semibold whitespace-nowrap">{item.price}</span>
                    </div>
                    <p className="text-dark-brown/50 text-sm">{item.description}</p>
                    <span className="inline-block mt-3 text-xs text-sand bg-cream px-3 py-1 rounded-full">
                      {item.category}
                    </span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredItems.length === 0 && (
            <p className="text-center text-dark-brown/40 py-12">
              Bu kategoride ürün bulunamadı.
            </p>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-dark-brown text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <SectionTitle
            title="Özel Sipariş Vermek İster Misiniz?"
            subtitle="Doğum günleri, düğünler ve özel etkinlikler için kişiye özel pasta siparişi verin."
            light
          />
          <a
            href="/siparis"
            className="inline-block mt-4 px-6 sm:px-8 py-4 min-h-[44px] bg-sand text-dark-brown font-medium rounded-sm hover:bg-sand/90 transition-all duration-300"
          >
            Sipariş Ver
          </a>
        </div>
      </section>
    </div>
  );
}
