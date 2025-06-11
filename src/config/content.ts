// src/config/content.ts

import {
    LucideIcon,
    Coffee,
    Wind,
    Wifi,
    Smile,
    Award,
    Leaf
} from "lucide-react";

// ===================================================================================
// --- BAGIAN INI WAJIB ADA ---
// Ini adalah definisi "kamus" atau "blueprint" untuk data kita.
// TypeScript memerlukan ini untuk memeriksa apakah data yang kita masukkan sudah benar.
// ===================================================================================

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


// --- KONFIGURASI GLOBAL WEBSITE ---

export const siteConfig = {
    companyName: "Kopi Senja",
    contactEmail: "halo@kopisenja.id",
    copyright: `© ${new Date().getFullYear()} Kopi Senja. All rights reserved.`,
    currency: "Rp",
    orderBasePath: "/pesan-online",
};


// --- KONTEN HALAMAN MARKETING ---

// 1. Hero Section
export const heroContent = {
    badge: {
        mainText: "Diskon Spesial Hari Ini!",
        subText: "Lihat Promo"
    },
    headline: "Secangkir Ketenangan\n di Setiap Tegukan",
    subheadline: `Nikmati kopi terbaik dari biji pilihan dan suasana hangat di ${siteConfig.companyName}. Tempat sempurna untuk bersantai atau bekerja.`,
    ctaPrimary: {
        text: "Lihat Menu Kami",
        href: "/menu"
    },
    ctaSecondary: {
        text: "Kunjungi Kami",
        href: "/lokasi"
    }
};

// 2. Perks Section -> Diubah menjadi "Keunggulan Kami"
export const perksContent = {
    badge: "Keunggulan Kami",
    headline: "Lebih dari Sekadar Kopi",
    subheadline: `Kami bangga menyajikan pengalaman terbaik bagi setiap pelanggan yang datang ke ${siteConfig.companyName}.`,
    perks: [
        {
            title: "Biji Kopi Premium",
            description: "Kami hanya menggunakan biji kopi grade A dari dataran tinggi Indonesia untuk rasa yang otentik.",
            icon: Leaf,
        },
        {
            title: "Suasana Nyaman",
            description: "Desain interior yang hangat dan musik yang menenangkan, cocok untuk fokus bekerja atau sekadar bersantai.",
            icon: Wind,
        },
        {
            title: "Wi-Fi Super Cepat",
            description: "Tetap produktif dengan koneksi internet gratis dan kencang untuk semua pengunjung.",
            icon: Wifi,
        },
        {
            title: "Barista Berpengalaman",
            description: "Staf kami yang ramah dan terlatih siap menyajikan kopi terbaik sesuai selera Anda.",
            icon: Smile,
        },
        {
            title: "Banyak Penghargaan",
            description: "Terpilih sebagai kedai kopi favorit oleh komunitas dan berbagai penghargaan kuliner.",
            icon: Award,
        },
        {
            title: "Harga Terjangkau",
            description: "Kualitas premium tidak harus mahal. Nikmati kopi terbaik dengan harga yang bersahabat.",
            icon: Coffee,
        },
    ] as Perk[] // <-- TypeScript sekarang akan mengenali 'Perk' dari definisi di atas
};


// 3. Reviews Section
export const reviewsContent = {
    badge: "Kata Pelanggan",
    headline: "Apa Kata Mereka Tentang Kami",
    subheadline: "Kami senang bisa menjadi bagian dari hari-hari mereka. Lihat cerita dari para pelanggan setia kami.",
    reviews: [
        {
            img: "https://i.pravatar.cc/150?u=budi",
            name: "Budi Santoso",
            username: "@budifoodie",
            review: "Cappuccino di Kopi Senja terenak yang pernah saya coba! Tempatnya juga cozy banget buat kerja.",
        },
        {
            img: "https://i.pravatar.cc/150?u=siti",
            name: "Siti Aminah",
            username: "@sitijalan",
            review: "Suka banget sama Americano-nya, pas! Baristanya ramah-ramah, jadi betah nongkrong lama.",
        },
        {
            img: "https://i.pravatar.cc/150?u=dewi",
            name: "Dewi Lestari",
            username: "@dewibaca",
            review: "Tempat favorit buat nulis sambil minum kopi. Wi-Fi kencang, suasananya mendukung buat fokus.",
        },
        {
            img: "https://i.pravatar.cc/150?u=eko",
            name: "Eko Prasetyo",
            username: "@ekongopi",
            review: "Sebagai penikmat kopi, saya akui biji kopi mereka berkualitas. Wajib coba V60-nya!",
        },
    ] as Review[] // <-- TypeScript sekarang akan mengenali 'Review'
};


// 4. Pricing Section -> Diubah menjadi "Paket Spesial"
export const pricingContent = {
    badge: "Paket Spesial",
    headline: "Nikmati Lebih, Hemat Lebih",
    subheadline: "Pilih paket hemat kami untuk menemani harimu, baik sendiri maupun bersama teman.",
    orderButtonText: "Pesan Paket Ini",
    plans: [
        {
            id: 'basic',
            title: "Paket Santai",
            desc: "Sempurna untuk menikmati waktu sendiri dengan secangkir kopi dan camilan ringan.",
            monthlyPrice: 50,
            buttonText: "Pilih Paket Santai",
            features: [
                "1 Kopi Pilihan (All Variants)",
                "1 Pastry (Croissant/Donat)",
                "Air Mineral Gratis"
            ],
        },
        {
            id: 'pro',
            title: "Paket Kerja",
            desc: "Untuk kamu yang butuh fokus dan energi ekstra saat bekerja di kafe kami.",
            monthlyPrice: 75,
            badge: "Paling Laris",
            buttonText: "Pilih Paket Kerja",
            features: [
                "2 Kopi Pilihan (All Variants)",
                "1 Makanan Berat (Nasi Goreng)",
                "Voucher Wi-Fi Premium 2 Jam"
            ],
        },
        {
            id: 'enterprise',
            title: "Paket Ramean",
            desc: "Ajak teman-temanmu dan nikmati kebersamaan dengan paket super hemat untuk berempat.",
            monthlyPrice: 150,
            buttonText: "Pilih Paket Ramean",
            features: [
                "4 Kopi Pilihan (All Variants)",
                "2 Kentang Goreng",
                "1 Pizza Ukuran Medium"
            ],
        },
    ] as Plan[], // <-- TypeScript sekarang akan mengenali 'Plan'
    images: [
        { src: "/images/kopi-susu.png", alt: "Kopi Susu Gula Aren", name: "Kopi Susu Gula Aren", categoryId: "kopi-susu" },
        { src: "/images/croissant.png", alt: "Croissant Cokelat", name: "Croissant Cokelat", categoryId: "croissant" },
        { src: "/images/v60.png", alt: "Manual Brew V60", name: "Manual Brew V60", categoryId: "v60" },
    ] as PricingImage[] // <-- TypeScript sekarang akan mengenali 'PricingImage'
};


// 5. Footer Section
export const footerContent = {
    faqHeadline: "Pertanyaan Umum",
    faqs: [
        {
            question: "Di mana lokasi Kopi Senja?",
            answer: `Kami berada di Jl. Kenangan No. 123, Jakarta. Anda bisa menemukan kami di Google Maps dengan mencari "${siteConfig.companyName}".`
        },
        {
            question: "Apa saja jam buka kedai?",
            answer: "Kami buka setiap hari dari jam 08:00 pagi hingga 22:00 malam."
        },
        {
            question: "Apakah tersedia area outdoor atau smoking area?",
            answer: "Ya, kami menyediakan area outdoor yang nyaman di bagian belakang kedai yang juga bisa digunakan sebagai smoking area."
        },
        {
            question: "Bagaimana cara menghubungi untuk reservasi?",
            answer: `Anda bisa menghubungi kami melalui email di ${siteConfig.contactEmail} atau telepon di nomor yang tertera di halaman kontak kami.`
        }
    ] as Faq[] // <-- TypeScript sekarang akan mengenali 'Faq'
};
