"use client";

import AnimatedSection from "@/components/AnimatedSection";
import SectionTitle from "@/components/SectionTitle";

const timelineEvents = [
  { year: "2018", title: "Kuruluş", description: "Şef Deniz Aydın, Paris'ten döndükten sonra Nişantaşı'nda ilk dükkanını açtı." },
  { year: "2019", title: "İlk Ödül", description: "İstanbul Gastronomi Festivali'nde 'En İyi Patisserie' ödülünü kazandık." },
  { year: "2020", title: "Online Sipariş", description: "Pandemi döneminde online sipariş sistemimizi hayata geçirdik." },
  { year: "2021", title: "Atölye Programı", description: "Pastacılık atölyelerimize başladık, 500'den fazla katılımcıya ulaştık." },
  { year: "2022", title: "Genişleme", description: "Dükkanımızı genişleterek oturma alanı ve kahve köşesi ekledik." },
  { year: "2023", title: "Uluslararası Tanınma", description: "Uluslararası patisserie yarışmasında Türkiye'yi temsil ettik." },
  { year: "2024", title: "Bugün", description: "Her gün yüzlerce müşterimize hizmet vermeye devam ediyoruz." },
];

const values = [
  {
    title: "Kalite",
    description: "En kaliteli malzemeleri kullanarak, her ürünümüzde mükemmeliyeti hedefliyoruz. Çikolata Belçika'dan, tereyağı Fransa'dan, vanilyamız Madagaskar'dan gelir.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    title: "Gelenek",
    description: "Fransız patisserie geleneğini korurken, yerel lezzetlerle harmanlayarak benzersiz tatlar yaratıyoruz. Her tarif, kuşaklar boyu aktarılan bilgi birikiminin ürünüdür.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Tutku",
    description: "Her pastada, her ekmekte tutkumuzu hissedeceksiniz. Sabahın erken saatlerinden itibaren, sevgiyle hazırlanan ürünlerimiz günün her saati taze olarak sunulur.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
];

export default function HakkimizdaPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-20 sm:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <span className="font-[family-name:var(--font-great-vibes)] text-3xl text-sand mb-4 block">
              Bizi Tanıyın
            </span>
            <h1 className="font-[family-name:var(--font-playfair-display)] text-4xl sm:text-5xl lg:text-6xl text-dark-brown mb-6">
              Hakkımızda
            </h1>
            <p className="text-dark-brown/60 text-lg max-w-2xl mx-auto">
              Paris&apos;in zarafetini İstanbul&apos;un sıcaklığıyla buluşturan bir hikaye.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 sm:py-28 bg-warm-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Yolculuğumuz"
            subtitle="2018'den bugüne uzanan tutkulu bir yolculuk"
          />

          <div className="relative mt-16">
            {/* Line */}
            <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-sand/30 sm:-translate-x-1/2" />

            {timelineEvents.map((event, index) => (
              <AnimatedSection key={event.year} delay={index * 0.1}>
                <div
                  className={`relative flex items-start gap-4 sm:gap-8 mb-10 sm:mb-12 ${
                    index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-4 sm:left-1/2 w-3 h-3 sm:w-4 sm:h-4 bg-sand rounded-full -translate-x-1/2 border-2 sm:border-4 border-warm-white z-10 mt-1.5 sm:mt-0" />

                  {/* Content */}
                  <div className={`ml-10 sm:ml-0 sm:w-1/2 ${index % 2 === 0 ? "sm:pr-12 sm:text-right" : "sm:pl-12"}`}>
                    <span className="text-sand font-semibold text-lg">{event.year}</span>
                    <h3 className="font-[family-name:var(--font-playfair-display)] text-xl text-dark-brown mt-1 mb-2">
                      {event.title}
                    </h3>
                    <p className="text-dark-brown/60 text-sm leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 sm:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Değerlerimiz"
            subtitle="Her ürünümüzün arkasındaki temel ilkelerimiz"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mt-12">
            {values.map((value, index) => (
              <AnimatedSection key={value.title} delay={index * 0.15}>
                <div className="bg-warm-white rounded-lg p-6 sm:p-8 text-center hover:shadow-lg transition-shadow duration-500 overflow-hidden">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-cream text-chocolate mb-6">
                    {value.icon}
                  </div>
                  <h3 className="font-[family-name:var(--font-playfair-display)] text-xl text-dark-brown mb-4">
                    {value.title}
                  </h3>
                  <p className="text-dark-brown/60 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Chef Profile */}
      <section className="py-20 sm:py-28 bg-warm-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <div className="placeholder-img aspect-[3/4] rounded-lg w-full max-w-sm sm:max-w-md mx-auto lg:mx-0 overflow-hidden">
                <span className="relative z-10 text-warm-white/80 text-sm">Şef Deniz Aydın</span>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <span className="font-[family-name:var(--font-great-vibes)] text-3xl text-sand mb-4 block">
                Baş Şefimiz
              </span>
              <h2 className="font-[family-name:var(--font-playfair-display)] text-3xl sm:text-4xl text-dark-brown mb-6">
                Şef Deniz Aydın
              </h2>
              <p className="text-dark-brown/70 leading-relaxed mb-4">
                Paris&apos;in ünlü Le Cordon Bleu okulundan mezun olan Şef Deniz Aydın,
                kariyerine Fransa&apos;nın en prestijli patisserielerinde başladı.
                Ladurée ve Pierre Hermé gibi dünyaca ünlü markalarda çalıştıktan
                sonra İstanbul&apos;a dönerek Maison Délice&apos;i kurdu.
              </p>
              <p className="text-dark-brown/70 leading-relaxed mb-4">
                &ldquo;Her pasta bir hikaye anlatır. Benim amacım, her lokmada
                Paris&apos;in büyüsünü İstanbul&apos;un sıcaklığıyla birleştirmek.&rdquo;
              </p>
              <div className="flex flex-wrap items-center gap-4 sm:gap-6 mt-8">
                <div className="text-center min-w-[60px]">
                  <span className="block font-[family-name:var(--font-playfair-display)] text-xl sm:text-2xl text-chocolate">15+</span>
                  <span className="text-dark-brown/50 text-xs uppercase tracking-wider">Yıl Deneyim</span>
                </div>
                <div className="w-px h-10 sm:h-12 bg-sand/30" />
                <div className="text-center min-w-[60px]">
                  <span className="block font-[family-name:var(--font-playfair-display)] text-xl sm:text-2xl text-chocolate">50+</span>
                  <span className="text-dark-brown/50 text-xs uppercase tracking-wider">Özel Tarif</span>
                </div>
                <div className="w-px h-10 sm:h-12 bg-sand/30" />
                <div className="text-center min-w-[60px]">
                  <span className="block font-[family-name:var(--font-playfair-display)] text-xl sm:text-2xl text-chocolate">3</span>
                  <span className="text-dark-brown/50 text-xs uppercase tracking-wider">Ödül</span>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
}
