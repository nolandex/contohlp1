import {
  LucideIcon,
  Rocket,
  Bot,
  Smartphone,
  PenTool,
  Users,
  Zap
} from "lucide-react";

// ===================================================================================
// --- BAGIAN INI WAJIB ADA ---
// Definisi "kamus" atau "blueprint" untuk data kita.
// TypeScript memerlukan ini untuk memeriksa apakah data yang kita masukkan sudah benar.
// ===================================================================================

interface Plan {
  id: 'basic' | 'pro' | 'reseller';
  title: string;
  desc: string;
  monthlyPrice: number;
  badge?: string;
  buttonText: string;
  features: string[];
}

interface Perk {
  title: string;
  description: string;
  icon: LucideIcon;
}

interface Review {
  img: string;
  name: string;
  username: string;
  review: string;
}

interface Faq {
  question: string;
  answer: string;
}

// --- KONFIGURASI GLOBAL WEBSITE ---

export const siteConfig = {
  companyName: "Bisnovo",
  contactEmail: "halo@bisnovo.id",
  copyright: `© ${new Date().getFullYear()} Bisnovo. All rights reserved.`,
  currency: "Rp",
  orderBasePath: "/pesan-sekarang",
};

// --- KONTEN HALAMAN MARKETING ---

// 1. Hero Section
export const heroContent = {
  badge: {
    mainText: "Mulai Bisnis Online Hari Ini!",
    subText: "Lihat Paket Kami",
  },
  headline: "Jualan Online Jadi Gampang\ndengan Bisnovo",
  subheadline: `Bangun bisnis digitalmu tanpa ribet dengan ${siteConfig.companyName}. Dapatkan website, chatbot, dan konten siap pakai untuk mulai jualan hari ini!`,
  ctaPrimary: {
    text: "Lihat Paket Kami",
    href: "/paket",
  },
  ctaSecondary: {
    text: "Gabung Reseller",
    href: "/reseller",
  },
};

// 2. Perks Section -> "Keunggulan Bisnovo"
export const perksContent = {
  badge: "Keunggulan Bisnovo",
  headline: "Semua yang Kamu Butuh untuk Jualan Online",
  subheadline: `Dengan ${siteConfig.companyName}, kamu mendapatkan solusi lengkap untuk memulai bisnis digital tanpa perlu paham teknis.`,
  perks: [
    {
      title: "Website Profesional",
      description: "Website responsif dan cepat, siap pakai dengan brandmu sendiri, dilengkapi fitur keranjang dan CTA WhatsApp.",
      icon: Rocket,
    },
    {
      title: "Chatbot 24/7",
      description: "Otomatis jawab pertanyaan pelanggan di WhatsApp dan Instagram, bantu jualan kapan saja.",
      icon: Bot,
    },
    {
      title: "Konten Sosial Media",
      description: "30 hari desain dan caption siap posting untuk Instagram dan TikTok, cocok untuk branding.",
      icon: Smartphone,
    },
    {
      title: "Copywriting Menarik",
      description: "Kalimat promosi yang memikat, template DM, dan penawaran yang sudah teruji.",
      icon: PenTool,
    },
    {
      title: "Strategi Promosi",
      description: "Panduan langkah demi langkah untuk promosi organik, tanpa perlu iklan mahal.",
      icon: Zap,
    },
    {
      title: "Reseller Tanpa Modal",
      description: "Gabung gratis, dapat website jualan, dan komisi hingga Rp50.000 per penjualan.",
      icon: Users,
    },
  ] as Perk[],
};

// 3. Reviews Section
export const reviewsContent = {
  badge: "Kata Pelanggan",
  headline: "Cerita Sukses Bersama Bisnovo",
  subheadline: "Lihat bagaimana Bisnovo membantu ribuan orang memulai bisnis online mereka dengan mudah.",
  reviews: [
    {
      img: "https://i.pravatar.cc/150?u=ani",
      name: "Ani Rahayu",
      username: "@aniolshop",
      review: "Paket dari Bisnovo bikin jualan onlineku langsung jalan! Website dan chatbotnya super membantu, pelanggan jadi lebih mudah beli.",
    },
    {
      img: "https://i.pravatar.cc/150?u=rio",
      name: "Rio Pratama",
      username: "@riojualan",
      review: "Sebagai reseller, saya bisa dapat penghasilan tambahan tanpa modal. Tim Bisnovo support banget!",
    },
    {
      img: "https://i.pravatar.cc/150?u=sari",
      name: "Sari Wulandari",
      username: "@sarifashion",
      review: "Konten sosial media dari Bisnovo bikin Instagramku lebih hidup. Penjualan naik dalam sebulan!",
    },
    {
      img: "https://i.pravatar.cc/150?u=dedi",
      name: "Dedi Setiawan",
      username: "@dedibisnis",
      review: "Strategi promosinya gampang diikuti, cocok buat pemula kayak saya. Sekarang bisnis onlineku mulai ramai!",
    },
  ] as Review[],
};

// 4. Pricing Section -> "Paket Bisnovo"
export const pricingContent = {
  badge: "Paket Bisnovo",
  headline: "Pilih Paket untuk Bisnismu",
  subheadline: "Dapatkan semua yang kamu butuh untuk jualan online dengan harga terjangkau, sekali bayar.",
  orderButtonText: "Pesan Paket Ini",
  plans: [
    {
      id: 'basic',
      title: "Paket Starter",
      desc: "Cocok untuk pemula yang ingin mulai jualan online dengan cepat dan hemat.",
      monthlyPrice: 200,
      buttonText: "Pilih Paket Starter",
      features: [
        "Website Bisnis Siap Pakai",
        "Chatbot WhatsApp",
        "Konten Sosial Media 15 Hari",
        "Template Copywriting Dasar",
        "Panduan Promosi Dasar",
      ],
    },
    {
      id: 'pro',
      title: "Paket Pro",
      desc: "Solusi lengkap untuk UMKM yang ingin bisnis online-nya lebih profesional.",
      monthlyPrice: 350,
      badge: "Paling Populer",
      buttonText: "Pilih Paket Pro",
      features: [
        "Website Bisnis Premium",
        "Chatbot WhatsApp & Instagram",
        "Konten Sosial Media 30 Hari",
        "Template Copywriting Lengkap",
        "Strategi Promosi + Booster",
      ],
    },
    {
      id: 'reseller',
      title: "Paket Reseller",
      desc: "Gabung gratis sebagai reseller, dapat website jualan, dan komisi per penjualan.",
      monthlyPrice: 0,
      buttonText: "Gabung Reseller",
      features: [
        "Website Reseller Pribadi",
        "Komisi Rp20.000–Rp50.000/Penjualan",
        "Support Tim Bisnovo",
        "Panduan Jualan Reseller",
        "Akses Materi Promosi",
      ],
    },
  ] as Plan[],
};

// 5. Footer Section
export const footerContent = {
  faqHeadline: "Pertanyaan Umum",
  faqs: [
    {
      question: "Apa itu Bisnovo?",
      answer: `Bisnovo adalah penyedia jasa setup bisnis online lengkap, membantu pemula dan UMKM membangun bisnis digital dengan website, chatbot, dan konten siap pakai.`,
    },
    {
      question: "Bagaimana cara memesan paket?",
      answer: `Kunjungi halaman paket, pilih paket yang diinginkan, dan ikuti langkah pemesanan di ${siteConfig.orderBasePath}. Tim kami akan segera menghubungi Anda.`,
    },
    {
      question: "Apa saja keuntungan jadi reseller?",
      answer: "Reseller Bisnovo bisa bergabung gratis, mendapatkan website jualan sendiri, dan komisi hingga Rp50.000 per penjualan tanpa perlu modal.",
    },
    {
      question: "Berapa lama setup website selesai?",
      answer: "Website bisnis Anda akan siap dalam 1–3 hari kerja setelah pemesanan dan konfirmasi detail brand Anda.",
    },
  ] as Faq[],
};
