"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";

const galleryFilters = ["Tümü", "Pastalar", "Macaronlar", "Mekan", "Etkinlikler"];

const galleryItems = [
  { id: 1, title: "Opera Cake Detay", category: "Pastalar", aspect: "aspect-[3/4]" },
  { id: 2, title: "Renkli Macaronlar", category: "Macaronlar", aspect: "aspect-square" },
  { id: 3, title: "Pastane İçi", category: "Mekan", aspect: "aspect-[4/3]" },
  { id: 4, title: "Düğün Pastası", category: "Etkinlikler", aspect: "aspect-[3/4]" },
  { id: 5, title: "Paris-Brest", category: "Pastalar", aspect: "aspect-square" },
  { id: 6, title: "Lavanta Macaron", category: "Macaronlar", aspect: "aspect-[4/3]" },
  { id: 7, title: "Atölye Çalışması", category: "Etkinlikler", aspect: "aspect-[3/4]" },
  { id: 8, title: "Vitrin", category: "Mekan", aspect: "aspect-square" },
  { id: 9, title: "Tarte Tatin", category: "Pastalar", aspect: "aspect-[4/3]" },
  { id: 10, title: "Çikolata Macaronlar", category: "Macaronlar", aspect: "aspect-[3/4]" },
  { id: 11, title: "Oturma Alanı", category: "Mekan", aspect: "aspect-square" },
  { id: 12, title: "Doğum Günü Pastası", category: "Etkinlikler", aspect: "aspect-[4/3]" },
];

export default function GaleriPage() {
  const [activeFilter, setActiveFilter] = useState("Tümü");
  const [lightboxItem, setLightboxItem] = useState<typeof galleryItems[0] | null>(null);

  const filteredItems =
    activeFilter === "Tümü"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter);

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-20 sm:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <span className="font-[family-name:var(--font-great-vibes)] text-3xl text-sand mb-4 block">
              Görsel Dünyamız
            </span>
            <h1 className="font-[family-name:var(--font-playfair-display)] text-4xl sm:text-5xl lg:text-6xl text-dark-brown mb-6">
              Galeri
            </h1>
            <p className="text-dark-brown/60 text-lg max-w-2xl mx-auto">
              Lezzetlerimizin ve mekanımızın görsel hikayesi.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 sm:py-20 bg-warm-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
            {galleryFilters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 sm:px-6 py-2.5 min-h-[44px] rounded-sm text-sm font-medium tracking-wide transition-all duration-300 ${
                  activeFilter === filter
                    ? "bg-chocolate text-warm-white"
                    : "bg-cream text-dark-brown/70 hover:bg-sand/30 hover:text-dark-brown"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Masonry Grid */}
          <motion.div layout className="columns-1 sm:columns-2 lg:columns-3 gap-3 sm:gap-4 space-y-3 sm:space-y-4">
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="break-inside-avoid cursor-pointer group"
                  onClick={() => setLightboxItem(item)}
                >
                  <div className={`placeholder-img ${item.aspect} rounded-lg overflow-hidden relative`}>
                    <span className="relative z-10 text-warm-white/80 text-sm">{item.title}</span>
                    <div className="absolute inset-0 bg-dark-brown/0 group-hover:bg-dark-brown/30 transition-colors duration-500 flex items-center justify-center">
                      <svg
                        className="w-10 h-10 text-warm-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                      </svg>
                    </div>
                  </div>
                  <p className="mt-2 text-sm text-dark-brown/60">{item.title}</p>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-dark-brown/90 backdrop-blur-sm p-4 overflow-hidden"
            onClick={() => setLightboxItem(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-4xl w-full max-h-[90vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="placeholder-img aspect-[4/3] rounded-lg">
                <span className="relative z-10 text-warm-white text-lg">{lightboxItem.title}</span>
              </div>
              <div className="mt-4 text-center">
                <p className="text-warm-white font-[family-name:var(--font-playfair-display)] text-xl">
                  {lightboxItem.title}
                </p>
                <p className="text-warm-white/50 text-sm mt-1">{lightboxItem.category}</p>
              </div>
              <button
                onClick={() => setLightboxItem(null)}
                className="absolute top-2 right-2 sm:-top-4 sm:-right-4 w-11 h-11 min-w-[44px] min-h-[44px] bg-warm-white rounded-full flex items-center justify-center text-dark-brown hover:bg-sand transition-colors duration-300 z-20"
                aria-label="Kapat"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
