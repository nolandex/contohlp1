// src/components/marketing/hero.tsx

"use client";

import { heroContent } from "@/config/content"; // <-- IMPORT
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import { BlurText } from "../ui/blur-text";
import { Button } from "../ui/button";

const Hero = () => {
  return (
    <div className="flex flex-col items-center text-center w-full max-w-5xl my-16 mx-auto z-40 relative px-4">
      <div className="pl-2 pr-1 py-1 rounded-full border border-foreground/10 hover:border-foreground/15 backdrop-blur-lg cursor-pointer flex items-center gap-2.5 select-none w-max mx-auto">
        <div className="w-3.5 h-3.5 rounded-full bg-primary/40 flex items-center justify-center relative">
          <div className="w-2.5 h-2.5 rounded-full bg-primary/60 flex items-center justify-center animate-ping absolute"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-primary flex items-center justify-center absolute"></div>
        </div>
        <span className="inline-flex items-center justify-center gap-2 bg-[linear-gradient(110deg,#b2a8fd,45%,#8678f9,55%,#c7d2fe)] bg-[length:200%_100%] bg-clip-text text-sm text-transparent animate-background-shine">
          {heroContent.badge.mainText} {/* <-- GANTI */}
          <span className="text-xs text-secondary-foreground px-1.5 py-0.5 rounded-full bg-gradient-to-b from-foreground/20 to-foreground/10 flex items-center justify-center">
            {heroContent.badge.subText} {/* <-- GANTI */}
            <ArrowRightIcon className="w-3.5 h-3.5 ml-1 text-foreground/50" />
          </span>
        </span>
      </div>

      <BlurText
        word={heroContent.headline} {/* <-- GANTI */}
        className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl bg-gradient-to-br from-foreground to-foreground/60 bg-clip-text text-transparent py-2 md:py-0 lg:!leading-snug font-medium mt-6 font-heading"
      />

      <p className="text-sm sm:text-base lg:text-lg mt-4 text-accent-foreground/60 max-w-2xl mx-auto">
        {heroContent.subheadline} {/* <-- GANTI */}
      </p>

      <div className="flex items-center justify-center md:gap-x-6 mt-8">
        <Button asChild size="lg">
          <Link href={heroContent.ctaPrimary.href} prefetch={false}> {/* <-- GANTI */}
            {heroContent.ctaPrimary.text} {/* <-- GANTI */}
          </Link>
        </Button>
        <Button asChild size="lg" variant="outline" className="hidden md:flex">
          <Link href={heroContent.ctaSecondary.href} prefetch={false}> {/* <-- GANTI */}
            {heroContent.ctaSecondary.text} {/* <-- GANTI */}
          </Link>
        </Button>
      </div>

      <div className="mt-16 text-7xl font-bold text-primary animate-pulse" aria-hidden="true">
        $
      </div>

      <style jsx>{`
        @keyframes shine {
          0% {
            background-position: 200% 0;
          }
          100% {
            background-position: -200% 0;
          }
        }

        .animate-background-shine {
          animation: shine 4s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Hero;
