"use client";

import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import SectionTitle from "@/components/SectionTitle";

const blogPosts = [
  {
    slug: "macaron-yapimi-sirlari",
    title: "Mükemmel Macaron Yapımının 5 Sırrı",
    excerpt:
      "Macaron yapımında başarının anahtarı detaylarda gizli. İşte şeflerimizin yıllardır kullandığı teknikler ve püf noktaları.",
    category: "Tarifler",
    date: "15 Mart 2024",
    readTime: "5 dk",
  },
  {
    slug: "fransiz-patisserie-tarihi",
    title: "Fransız Patisserie Geleneğinin Kısa Tarihi",
    excerpt:
      "Marie Antoinette'den günümüze, Fransız patisserie sanatının evrimini ve dünyaya olan etkisini keşfedin.",
    category: "Kültür",
    date: "8 Mart 2024",
    readTime: "8 dk",
  },
  {
    slug: "cikolata-rehberi",
    title: "Çikolata Seçim Rehberi: Bean to Bar",
    excerpt:
      "Kakao çekirdeğinden çikolata barına uzanan yolculuk. Kaliteli çikolatayı nasıl seçeceğinizi öğrenin.",
    category: "Rehber",
    date: "1 Mart 2024",
    readTime: "6 dk",
  },
  {
    slug: "mevsimsel-tatlar",
    title: "İlkbahar Menümüz: Mevsimsel Tatlar",
    excerpt:
      "Baharın gelişiyle birlikte menümüze eklenen yeni lezzetler: çilek, lavanta ve limon temalı özel tarifler.",
    category: "Haberler",
    date: "22 Şubat 2024",
    readTime: "4 dk",
  },
  {
    slug: "dogum-gunu-pastasi-secimi",
    title: "Doğum Günü Pastası Nasıl Seçilir?",
    excerpt:
      "Kişi sayısından lezzet seçimine, tasarımdan bütçeye kadar mükemmel doğum günü pastası rehberiniz.",
    category: "Rehber",
    date: "14 Şubat 2024",
    readTime: "7 dk",
  },
  {
    slug: "croissant-hikayesi",
    title: "Croissant: Bir Viyanalı Ekmekten Fransız İkonuna",
    excerpt:
      "Dünyanın en sevilen kahvaltılık lezzetinin şaşırtıcı hikayesi ve evde mükemmel croissant yapmanın yolları.",
    category: "Kültür",
    date: "5 Şubat 2024",
    readTime: "6 dk",
  },
];

const categoryColors: Record<string, string> = {
  Tarifler: "bg-sand/20 text-chocolate",
  "Kültür": "bg-cream text-dark-brown",
  Rehber: "bg-chocolate/10 text-chocolate",
  Haberler: "bg-sand/30 text-dark-brown",
};

export default function BlogPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-20 sm:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <span className="font-[family-name:var(--font-great-vibes)] text-3xl text-sand mb-4 block">
              Yazılarımız
            </span>
            <h1 className="font-[family-name:var(--font-playfair-display)] text-4xl sm:text-5xl lg:text-6xl text-dark-brown mb-6">
              Blog
            </h1>
            <p className="text-dark-brown/60 text-lg max-w-2xl mx-auto">
              Tarifler, hikayeler ve patisserie dünyasından ilham veren yazılar.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 sm:py-20 bg-warm-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.map((post, index) => (
              <AnimatedSection key={post.slug} delay={index * 0.1}>
                <article className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-500 border border-cream">
                  <div className="placeholder-img aspect-[16/9]">
                    <span className="relative z-10 text-warm-white/80 text-sm">{post.title}</span>
                  </div>
                  <div className="p-6 sm:p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <span className={`text-xs px-3 py-1 rounded-full ${categoryColors[post.category] || "bg-cream text-dark-brown"}`}>
                        {post.category}
                      </span>
                      <span className="text-dark-brown/40 text-xs">{post.date}</span>
                      <span className="text-dark-brown/40 text-xs">&bull; {post.readTime}</span>
                    </div>
                    <h3 className="font-[family-name:var(--font-playfair-display)] text-xl sm:text-2xl text-dark-brown mb-3 group-hover:text-chocolate transition-colors duration-300">
                      {post.title}
                    </h3>
                    <p className="text-dark-brown/60 text-sm leading-relaxed mb-4">
                      {post.excerpt}
                    </p>
                    <span className="inline-flex items-center gap-2 text-chocolate text-sm font-medium group-hover:text-sand transition-colors duration-300">
                      Devamını Oku
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </div>
                </article>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-dark-brown">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionTitle
            title="Bültenimize Katılın"
            subtitle="Yeni tarifler, özel indirimler ve etkinlik haberlerinden ilk siz haberdar olun."
            light
          />
          <div className="flex flex-col sm:flex-row gap-3 mt-8 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="E-posta adresiniz"
              className="flex-1 px-4 py-3 bg-warm-white/10 border border-warm-white/20 rounded-sm text-warm-white placeholder:text-warm-white/40 focus:outline-none focus:border-sand transition-colors duration-300"
            />
            <button className="px-6 py-3 bg-sand text-dark-brown font-medium rounded-sm hover:bg-sand/90 transition-colors duration-300">
              Abone Ol
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
