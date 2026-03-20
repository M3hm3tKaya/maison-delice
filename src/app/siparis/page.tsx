"use client";

import { useState } from "react";
import AnimatedSection from "@/components/AnimatedSection";

const steps = [
  {
    number: "01",
    title: "Formu Doldurun",
    description: "Etkinlik detaylarınızı ve tercihlerinizi belirtin.",
  },
  {
    number: "02",
    title: "Onay Alın",
    description: "Ekibimiz sizinle iletişime geçerek siparişinizi onaylasın.",
  },
  {
    number: "03",
    title: "Teslim Alın",
    description: "Siparişiniz özenle hazırlanıp belirtilen tarihte teslim edilir.",
  },
];

const cakeFlavors = [
  "Çikolata",
  "Vanilya",
  "Çilek",
  "Red Velvet",
  "Karamel",
  "Limon",
  "Fındık Pralin",
  "Frambuaz",
];

const cakeTiers = ["1 Katlı", "2 Katlı", "3 Katlı", "4+ Katlı"];

const eventTypes = [
  "Doğum Günü",
  "Düğün",
  "Nişan",
  "Baby Shower",
  "Kurumsal Etkinlik",
  "Yıl Dönümü",
  "Diğer",
];

export default function SiparisPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    eventType: "",
    date: "",
    guestCount: "",
    tiers: "",
    flavor: "",
    specialRequest: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-20 sm:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <span className="font-[family-name:var(--font-great-vibes)] text-3xl text-sand mb-4 block">
              Özel Siparişler
            </span>
            <h1 className="font-[family-name:var(--font-playfair-display)] text-4xl sm:text-5xl lg:text-6xl text-dark-brown mb-6">
              Sipariş Ver
            </h1>
            <p className="text-dark-brown/60 text-lg max-w-2xl mx-auto">
              Özel günleriniz için hayalinizdeki pastayı birlikte tasarlayalım.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16 bg-warm-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {steps.map((step, index) => (
              <AnimatedSection key={step.number} delay={index * 0.15}>
                <div className="text-center">
                  <span className="font-[family-name:var(--font-playfair-display)] text-4xl sm:text-5xl text-sand/30 block mb-4">
                    {step.number}
                  </span>
                  <h3 className="font-[family-name:var(--font-playfair-display)] text-xl text-dark-brown mb-2">
                    {step.title}
                  </h3>
                  <p className="text-dark-brown/60 text-sm">{step.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-16 sm:py-20 bg-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            {submitted ? (
              <div className="bg-warm-white rounded-lg p-12 text-center shadow-sm">
                <svg className="w-16 h-16 text-sand mx-auto mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="font-[family-name:var(--font-playfair-display)] text-2xl text-dark-brown mb-4">
                  Siparişiniz Alındı!
                </h3>
                <p className="text-dark-brown/60 mb-6">
                  En kısa sürede sizinle iletişime geçeceğiz. Teşekkür ederiz!
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-3 min-h-[44px] bg-chocolate text-warm-white rounded-sm hover:bg-dark-brown transition-colors duration-300"
                >
                  Yeni Sipariş
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-warm-white rounded-lg p-4 sm:p-8 md:p-12 shadow-sm space-y-6 overflow-hidden">
                <h3 className="font-[family-name:var(--font-playfair-display)] text-2xl text-dark-brown text-center mb-8">
                  Sipariş Formu
                </h3>

                {/* Personal Info */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-sm font-medium text-dark-brown/70 mb-2">
                      İsim Soyisim *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 min-h-[44px] border border-cream rounded-sm bg-warm-white text-dark-brown focus:outline-none focus:border-sand transition-colors duration-300"
                      placeholder="Adınız Soyadınız"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-dark-brown/70 mb-2">
                      Telefon *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 min-h-[44px] border border-cream rounded-sm bg-warm-white text-dark-brown focus:outline-none focus:border-sand transition-colors duration-300"
                      placeholder="+90 (5XX) XXX XX XX"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-dark-brown/70 mb-2">
                    E-posta *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 min-h-[44px] border border-cream rounded-sm bg-warm-white text-dark-brown focus:outline-none focus:border-sand transition-colors duration-300"
                    placeholder="email@ornek.com"
                  />
                </div>

                {/* Event Details */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-sm font-medium text-dark-brown/70 mb-2">
                      Etkinlik Türü *
                    </label>
                    <select
                      name="eventType"
                      required
                      value={formData.eventType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 min-h-[44px] border border-cream rounded-sm bg-warm-white text-dark-brown focus:outline-none focus:border-sand transition-colors duration-300"
                    >
                      <option value="">Seçiniz</option>
                      {eventTypes.map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-dark-brown/70 mb-2">
                      Tarih *
                    </label>
                    <input
                      type="date"
                      name="date"
                      required
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full px-4 py-3 min-h-[44px] border border-cream rounded-sm bg-warm-white text-dark-brown focus:outline-none focus:border-sand transition-colors duration-300"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-sm font-medium text-dark-brown/70 mb-2">
                      Kişi Sayısı *
                    </label>
                    <input
                      type="number"
                      name="guestCount"
                      required
                      min="1"
                      value={formData.guestCount}
                      onChange={handleChange}
                      className="w-full px-4 py-3 min-h-[44px] border border-cream rounded-sm bg-warm-white text-dark-brown focus:outline-none focus:border-sand transition-colors duration-300"
                      placeholder="10"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-dark-brown/70 mb-2">
                      Kat Sayısı
                    </label>
                    <select
                      name="tiers"
                      value={formData.tiers}
                      onChange={handleChange}
                      className="w-full px-4 py-3 min-h-[44px] border border-cream rounded-sm bg-warm-white text-dark-brown focus:outline-none focus:border-sand transition-colors duration-300"
                    >
                      <option value="">Seçiniz</option>
                      {cakeTiers.map((tier) => (
                        <option key={tier} value={tier}>{tier}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-dark-brown/70 mb-2">
                      Lezzet
                    </label>
                    <select
                      name="flavor"
                      value={formData.flavor}
                      onChange={handleChange}
                      className="w-full px-4 py-3 min-h-[44px] border border-cream rounded-sm bg-warm-white text-dark-brown focus:outline-none focus:border-sand transition-colors duration-300"
                    >
                      <option value="">Seçiniz</option>
                      {cakeFlavors.map((flavor) => (
                        <option key={flavor} value={flavor}>{flavor}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-dark-brown/70 mb-2">
                    Özel İstekleriniz
                  </label>
                  <textarea
                    name="specialRequest"
                    rows={4}
                    value={formData.specialRequest}
                    onChange={handleChange}
                    className="w-full px-4 py-3 min-h-[44px] border border-cream rounded-sm bg-warm-white text-dark-brown focus:outline-none focus:border-sand transition-colors duration-300 resize-none"
                    placeholder="Tasarım, tema, alerjiler veya özel notlarınızı yazabilirsiniz..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 min-h-[44px] bg-chocolate text-warm-white font-medium rounded-sm hover:bg-dark-brown transition-colors duration-300 tracking-wide"
                >
                  Sipariş Gönder
                </button>
              </form>
            )}
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
