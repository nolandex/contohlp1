// src/config/content.ts

import {
    ShieldCheck,
    Zap,
    Rocket,
    BarChart,
    MessageSquare,
    Component,
    LucideIcon
} from "lucide-react";

// --- TIPE DATA (Untuk Type-Safety) ---

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
    companyName: "Luro",
    contactEmail: "support@luro.com",
    copyright: `© ${new Date().getFullYear()} Luro. All rights reserved.`,
    currency: "Rp",
    orderBasePath: "/order", // Path dasar untuk halaman pemesanan
};


// --- KONTEN HALAMAN MARKETING ---

// 1. Hero Section
export const heroContent = {
    badge: {
        mainText: "Build for the future",
        subText: "What's new"
    },
    headline: "Your ultimate social media\n marketing tool",
    subheadline: `Elevate your social media presence with AI-powered content creation and scheduling. ${siteConfig.companyName} is the all-in-one solution for your social media marketing needs.`,
    ctaPrimary: {
        text: "Start for free",
        href: "/app"
    },
    ctaSecondary: {
        text: "How it works",
        href: "#"
    }
};

// 2. Perks Section
export const perksContent = {
    badge: "Perks",
    headline: "Discover the benefits",
    subheadline: `Explore the powerful features and advantages that ${siteConfig.companyName} offer to help you grow your social media presence`,
    perks: [
        {
            title: "Advanced Analytics",
            description: "Gain deep insights into your audience and performance with our advanced analytics tools.",
            icon: BarChart,
        },
        {
            title: "AI-Powered Suggestions",
            description: "Let our AI help you craft the perfect posts and schedule them at the optimal times.",
            icon: Zap,
        },
        {
            title: "Seamless Integration",
            description: "Connect all your social media accounts in one place for streamlined management.",
            icon: Component,
        },
        {
            title: "24/7 Customer Support",
            description: "Our dedicated support team is here to help you around the clock.",
            icon: MessageSquare,
        },
        {
            title: "Blazing Fast Performance",
            description: "Experience a fast and responsive platform designed for efficiency.",
            icon: Rocket,
        },
        {
            title: "Top-Tier Security",
            description: "Your data is safe with us. We prioritize security to protect your accounts.",
            icon: ShieldCheck,
        },
    ] as Perk[]
};


// 3. Reviews Section
export const reviewsContent = {
    badge: "Our Customers",
    headline: "What our customers say",
    subheadline: "We are proud to have helped thousands of customers across the globe. Here are some of their stories",
    reviews: [
        {
            img: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
            name: "Jane Doe",
            username: "@janedoe",
            review: "This tool has revolutionized our social media strategy. Highly recommended!",
        },
        {
            img: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
            name: "John Smith",
            username: "@johnsmith",
            review: "Incredible features and so easy to use. The AI suggestions are a game-changer.",
        },
        {
            img: "https://i.pravatar.cc/150?u=a04258114e29026702d",
            name: "Emily White",
            username: "@emilyw",
            review: "Customer support is fantastic. They helped me get set up in no time.",
        },
        {
            img: "https://i.pravatar.cc/150?u=a048581f4e29026701d",
            name: "Michael Brown",
            username: "@mikebrown",
            review: "The analytics are incredibly detailed. I can finally see what's working.",
        },
        // Tambahkan review lain di sini
    ] as Review[]
};


// 4. Pricing Section
export const pricingContent = {
    badge: "Pilih Paket Anda",
    headline: "Harga Simpel dan Transparan",
    subheadline: "Pilih paket yang sesuai dengan kebutuhan website Anda. Tanpa biaya tersembunyi.",
    orderButtonText: "Pesan Sekarang",
    plans: [
        {
            id: 'basic',
            title: "Basic",
            desc: "Ideal untuk pemula dan proyek pribadi yang ingin online.",
            monthlyPrice: 500, // Harga dalam ribuan (500 = 500.000)
            buttonText: "Pilih Paket Basic",
            features: [
                "1 Halaman Website",
                "Desain Responsif",
                "Hosting Gratis",
                "Dukungan Dasar"
            ],
        },
        {
            id: 'pro',
            title: "Pro",
            desc: "Sempurna untuk bisnis kecil dan profesional yang butuh lebih.",
            monthlyPrice: 1200, // Harga dalam ribuan (1200 = 1.200.000)
            badge: "Paling Populer",
            buttonText: "Pilih Paket Pro",
            features: [
                "Hingga 5 Halaman",
                "Fitur SEO",
                "Integrasi Media Sosial",
                "Dukungan Prioritas"
            ],
        },
        {
            id: 'enterprise',
            title: "Enterprise",
            desc: "Solusi lengkap untuk perusahaan dengan kebutuhan kustom.",
            monthlyPrice: 2500, // Harga dalam ribuan (2500 = 2.500.000)
            buttonText: "Hubungi Kami",
            features: [
                "Halaman Tak Terbatas",
                "Fitur Kustom",
                "Manajer Akun Dedikasi",
                "Laporan Analitik Bulanan"
            ],
        },
    ] as Plan[],
    // Slider jenis website
    images: [
        { src: "/images/toko-online.png", alt: "Toko Online", name: "Toko Online", categoryId: "toko-online" },
        { src: "/images/landing-page-jasa.png", alt: "Landing Page Jasa", name: "LP Jasa", categoryId: "landing-jasa" },
        { src: "/images/portofolio-pribadi.png", alt: "Portofolio Pribadi", name: "Portofolio", categoryId: "portofolio" },
        { src: "/images/company-profile.png", alt: "Company Profile", name: "Company Profile", categoryId: "company-profile" },
        { src: "/images/blog.png", alt: "Blog", name: "Blog Web", categoryId: "blog" },
    ] as PricingImage[]
};


// 5. Footer Section
export const footerContent = {
    faqHeadline: "Frequently Asked Questions",
    faqs: [
        {
            question: "What is your product about?",
            answer: `Our product is a powerful tool for managing your social media presence with AI-powered features provided by ${siteConfig.companyName}.`
        },
        {
            question: "How do I get started?",
            answer: "You can get started by signing up for a free account on our website and exploring the dashboard."
        },
        {
            question: "Is there a free trial?",
            answer: "Yes, we offer a 14-day free trial with full access to all features."
        },
        {
            question: "How can I contact support?",
            answer: `You can reach our support team via the Help Center or email at ${siteConfig.contactEmail}.`
        }
    ] as Faq[]
};
