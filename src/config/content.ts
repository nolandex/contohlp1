import {
  LucideIcon,
  Coffee,
  Globe,
  MessageSquare,
  Smartphone,
  TrendingUp,
  FileText,
  Users,
  Zap,
  Award,
  Clock
} from "lucide-react";

interface Plan {
  id: 'basic' | 'pro' | 'enterprise';
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

interface PricingImage {
  src: string;
  alt: string;
  name: string;
  categoryId: string;
}

interface Faq {
  question: string;
  answer: string;
}

export const siteConfig = {
  companyName: "Bisnovo",
  contactEmail: "hello@bisnovo.id",
  copyright: `© ${new Date().getFullYear()} Bisnovo. All rights reserved.`,
  currency: "Rp",
  orderBasePath: "/pesan-sekarang",
};

export const heroContent = {
  badge: {
    mainText: "Promo Launching!",
    subText: "Lihat Penawaran"
  },
  headline: "Bisnis Online Siap Jalan Dalam 1 Hari Saja",
  subheadline: `Dapatkan website, chatbot penjualan, dan konten media sosial siap pakai untuk memulai bisnis online Anda hari ini juga dengan ${siteConfig.companyName}.`,
  ctaPrimary: {
    text: "Lihat Paket Kami",
    href: "#pricing"
  },
  ctaSecondary: {
    text: "Lihat Penawaran",
    href: "#pricing"
  }
};

export const perksContent = {
  badge: "Solusi Lengkap",
  headline: "Semua yang Anda Butuhkan untuk Mulai Bisnis Online",
  subheadline: `${siteConfig.companyName} menyediakan semua tools yang dibutuhkan untuk memulai bisnis online tanpa ribet dan mahal.`,
  perks: [
    {
      title: "Website Profesional",
      description: "Website responsive siap pakai dengan desain modern yang bisa langsung digunakan untuk jualan.",
      icon: Globe,
    },
    {
      title: "Chatbot Otomatis",
      description: "Chatbot WhatsApp & Instagram yang bisa otomatis menangani penjualan 24/7 tanpa operator.",
      icon: MessageSquare,
    },
    {
      title: "Konten Media Sosial",
      description: "30 hari konten siap posting untuk Instagram & TikTok termasuk desain dan caption menarik.",
      icon: Smartphone,
    },
    {
      title: "Strategi Marketing",
      description: "Panduan lengkap promosi organik & berbayar yang sudah terbukti meningkatkan penjualan.",
      icon: TrendingUp,
    },
    {
      title: "Copywriting Menjual",
      description: "Template copywriting siap pakai yang sudah dioptimalkan untuk meningkatkan konversi penjualan.",
      icon: FileText,
    },
    {
      title: "Sistem Reseller",
      description: "Peluang penghasilan tambahan dengan menjadi reseller tanpa modal dan support penuh dari kami.",
      icon: Users,
    },
  ] as Perk[]
};

export const reviewsContent = {
  badge: "Testimoni",
  headline: "Apa Kata Klien Kami",
  subheadline: "Lihat bagaimana Bisnovo telah membantu ratusan pebisnis memulai usaha online mereka.",
  reviews: [
    {
      img: "https://i.pravatar.cc/150?u=reseller1",
      name: "Andi Wijaya",
      username: "@andi_reseller",
      review: "Dengan paket Bisnovo, saya bisa mulai jualan online hanya dalam 1 hari! Sekarang sudah punya 5 reseller bawahannya.",
    },
    {
      img: "https://i.pravatar.cc/150?u=umkm1",
      name: "Siti Rahayu",
      username: "@siti_kue",
      review: "Website dan chatbotnya sangat membantu. Orderan masuk terus bahkan saat saya tidur!",
    },
    {
      img: "https://i.pravatar.cc/150?u=mahasiswa1",
      name: "Budi Santoso",
      username: "@budi_startup",
      review: "Sebagai mahasiswa, paket ini sangat terjangkau. Sekarang bisa punya penghasilan sendiri tanpa ganggu kuliah.",
    },
    {
      img: "https://i.pravatar.cc/150?u=irt1",
      name: "Dewi Lestari",
      username: "@dewi_catering",
      review: "Dulu takut go-online karena tidak paham teknologi. Sekarang bisnis catering saya 80% order dari online!",
    },
  ] as Review[]
};

export const pricingContent = {
  badge: "Paket Lengkap",
  headline: "Hanya Rp200rb untuk Semua Ini",
  subheadline: "Dapatkan semua yang Anda butuhkan untuk mulai bisnis online hari ini juga.",
  orderButtonText: "Pesan Sekarang",
  plans: [
    {
      id: 'basic',
      title: "Paket Starter",
      desc: "Solusi lengkap untuk memulai bisnis online Anda dengan cepat dan mudah.",
      monthlyPrice: 200,
      buttonText: "Mulai Sekarang",
      features: [
        "Website Profesional Siap Pakai",
        "Chatbot WhatsApp & Instagram",
        "30 Konten Media Sosial",
        "Template Copywriting Menjual",
        "Strategi Marketing Step-by-Step",
        "Support 1 Minggu Gratis"
      ],
    },
    {
      id: 'pro',
      title: "Paket Reseller",
      desc: "Untuk Anda yang ingin jadi reseller dan dapat penghasilan tambahan.",
      monthlyPrice: 0,
      badge: "Tanpa Modal",
      buttonText: "Daftar Reseller",
      features: [
        "Website Jualan Sendiri",
        "Komisi Rp20-50rb per Penjualan",
        "Training & Support Lengkap",
        "Tools Marketing Eksklusif",
        "Akses ke Komunitas Reseller",
        "Bisa Dijalankan Sampingan"
      ],
    },
    {
      id: 'enterprise',
      title: "Paket Booster",
      desc: "Tingkatkan penjualan dengan layanan premium dan iklan berbayar.",
      monthlyPrice: 500,
      buttonText: "Konsultasi Gratis",
      features: [
        "Semua Fitur Paket Starter",
        "Setup Iklan Facebook/Instagram",
        "Optimasi SEO Website",
        "Analytics & Reporting",
        "Support 1 Bulan Prioritas",
        "Konsultasi Bisnis Eksklusif"
      ],
    },
  ] as Plan[],
  images: [
    { src: "/images/website-demo.png", alt: "Contoh Website Bisnovo", name: "Website Bisnis", categoryId: "website" },
    { src: "/images/chatbot-demo.png", alt: "Contoh Chatbot Bisnovo", name: "Chatbot Penjualan", categoryId: "chatbot" },
    { src: "/images/content-demo.png", alt: "Contoh Konten Sosial Media", name: "Konten Media Sosial", categoryId: "content" },
  ] as PricingImage[]
};

export const footerContent = {
  faqHeadline: "Pertanyaan Umum",
  faqs: [
    {
      question: "Berapa lama setup paketnya?",
      answer: "Proses setup hanya membutuhkan waktu 6-24 jam setelah pembayaran diterima."
    },
    {
      question: "Apakah perlu technical skill?",
      answer: "Tidak sama sekali! Kami yang akan handle semua setup teknis untuk Anda."
    },
    {
      question: "Bagaimana cara jadi reseller?",
      answer: "Daftar gratis melalui form di halaman reseller, dan Anda akan mendapatkan akses ke semua tools yang dibutuhkan."
    },
    {
      question: "Apakah ada garansi?",
      answer: "Kami memberikan garansi 7 hari uang kembali jika Anda tidak puas dengan layanan kami."
    }
  ] as Faq[]
};
