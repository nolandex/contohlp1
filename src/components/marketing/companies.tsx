// src/components/marketing/companies.tsx (atau di mana pun file Anda berada)

// Impor komponen Image dari Next.js dan Marquee
import Image from "next/image";
import Marquee from "../ui/marquee";

const Companies = () => {
    // Membuat array logo secara dinamis untuk 10 gambar
    const logos = Array.from({ length: 10 }, (_, i) => ({
        src: `/logos/${i + 1}.jpg`, // Path ke gambar di folder public
        alt: `Logo Perusahaan ${i + 1}`,
    }));

    return (
        <div className="flex w-full py-20">
            <div className="flex flex-col items-center justify-center text-center w-full py-2">
                <h2 className="text-xl heading">
                    Companies that trust us
                </h2>
                <div className="mt-16 w-full relative overflow-hidden">
                    <Marquee pauseOnHover className="[--duration:30s]">
                        {/* Menggunakan div pembungkus di dalam Marquee adalah praktik yang baik
                          agar styling lebih konsisten.
                        */}
                        <div className="flex gap-8 md:gap-12">
                            {logos.map((logo, index) => (
                                // --- PERUBAHAN DI SINI ---
                                // Mengganti <img> dengan komponen <Image> dari Next.js
                                <Image
                                    key={index}
                                    src={logo.src}
                                    alt={logo.alt}
                                    width={96}  // w-24 di Tailwind = 6rem = 96px
                                    height={32} // h-8 di Tailwind = 2rem = 32px
                                    className="object-contain" // object-contain tetap berguna
                                />
                            ))}
                        </div>
                    </Marquee>
                    {/* Efek gradien di sisi kiri dan kanan */}
                    <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
                    <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
                </div>
            </div>
        </div>
    );
};

export default Companies;
