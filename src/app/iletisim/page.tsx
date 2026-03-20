"use client";

import { useState } from "react";
import AnimatedSection from "@/components/AnimatedSection";

export default function IletisimPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
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
              Bize Ulaşın
            </span>
            <h1 className="font-[family-name:var(--font-playfair-display)] text-4xl sm:text-5xl lg:text-6xl text-dark-brown mb-6">
              İletişim
            </h1>
            <p className="text-dark-brown/60 text-lg max-w-2xl mx-auto">
              Sorularınız, önerileriniz veya siparişleriniz için bizimle iletişime geçin.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 sm:py-20 bg-warm-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left: Info + Map */}
            <AnimatedSection>
              <div className="space-y-8">
                <div>
                  <h3 className="font-[family-name:var(--font-playfair-display)] text-2xl text-dark-brown mb-6">
                    İletişim Bilgileri
                  </h3>

                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-cream flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-chocolate" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-medium text-dark-brown mb-1">Adres</h4>
                        <p className="text-dark-brown/60 text-sm">
                          Abdi İpekçi Cad. No: 42/A<br />
                          Nişantaşı, Şişli, İstanbul 34367
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-cream flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-chocolate" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-medium text-dark-brown mb-1">Telefon</h4>
                        <p className="text-dark-brown/60 text-sm">+90 (212) 555 42 18</p>
                        <p className="text-dark-brown/60 text-sm">+90 (532) 555 42 18 (WhatsApp)</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-cream flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-chocolate" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-medium text-dark-brown mb-1">E-posta</h4>
                        <p className="text-dark-brown/60 text-sm">info@maisondelice.com.tr</p>
                        <p className="text-dark-brown/60 text-sm">siparis@maisondelice.com.tr</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-cream flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-chocolate" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-medium text-dark-brown mb-1">Çalışma Saatleri</h4>
                        <p className="text-dark-brown/60 text-sm">Pazartesi - Cuma: 08:00 - 20:00</p>
                        <p className="text-dark-brown/60 text-sm">Cumartesi: 09:00 - 21:00</p>
                        <p className="text-dark-brown/60 text-sm">Pazar: 09:00 - 19:00</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Map Placeholder */}
                <div className="placeholder-img aspect-[16/10] rounded-lg overflow-hidden">
                  <div className="relative z-10 flex flex-col items-center gap-2">
                    <svg className="w-10 h-10 text-warm-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-warm-white/60 text-sm">Harita Alanı</span>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Right: Form */}
            <AnimatedSection delay={0.2}>
              {submitted ? (
                <div className="bg-cream rounded-lg p-12 text-center h-full flex flex-col items-center justify-center">
                  <svg className="w-16 h-16 text-sand mx-auto mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h3 className="font-[family-name:var(--font-playfair-display)] text-2xl text-dark-brown mb-4">
                    Mesajınız Gönderildi!
                  </h3>
                  <p className="text-dark-brown/60 mb-6">
                    En kısa sürede size dönüş yapacağız. Teşekkür ederiz!
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-3 min-h-[44px] bg-chocolate text-warm-white rounded-sm hover:bg-dark-brown transition-colors duration-300"
                  >
                    Yeni Mesaj
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-cream rounded-lg p-4 sm:p-8 md:p-12 space-y-6 overflow-hidden">
                  <h3 className="font-[family-name:var(--font-playfair-display)] text-2xl text-dark-brown mb-2">
                    Bize Yazın
                  </h3>
                  <p className="text-dark-brown/60 text-sm mb-6">
                    Aşağıdaki formu doldurarak bize mesaj gönderebilirsiniz.
                  </p>

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
                        className="w-full px-4 py-3 min-h-[44px] border border-sand/30 rounded-sm bg-warm-white text-dark-brown focus:outline-none focus:border-sand transition-colors duration-300"
                        placeholder="Adınız Soyadınız"
                      />
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
                        className="w-full px-4 py-3 min-h-[44px] border border-sand/30 rounded-sm bg-warm-white text-dark-brown focus:outline-none focus:border-sand transition-colors duration-300"
                        placeholder="email@ornek.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-dark-brown/70 mb-2">
                      Konu *
                    </label>
                    <select
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 min-h-[44px] border border-sand/30 rounded-sm bg-warm-white text-dark-brown focus:outline-none focus:border-sand transition-colors duration-300"
                    >
                      <option value="">Seçiniz</option>
                      <option value="Genel Bilgi">Genel Bilgi</option>
                      <option value="Sipariş">Sipariş</option>
                      <option value="İş Birliği">İş Birliği</option>
                      <option value="Şikayet/Öneri">Şikayet / Öneri</option>
                      <option value="Diğer">Diğer</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-dark-brown/70 mb-2">
                      Mesajınız *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 min-h-[44px] border border-sand/30 rounded-sm bg-warm-white text-dark-brown focus:outline-none focus:border-sand transition-colors duration-300 resize-none"
                      placeholder="Mesajınızı buraya yazabilirsiniz..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 min-h-[44px] bg-chocolate text-warm-white font-medium rounded-sm hover:bg-dark-brown transition-colors duration-300 tracking-wide"
                  >
                    Mesaj Gönder
                  </button>
                </form>
              )}
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
}
