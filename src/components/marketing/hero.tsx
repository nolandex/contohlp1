"use client";

import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import { BlurText } from "../ui/blur-text";
import { Button } from "../ui/button";
import siteContent from "../../data/site-content.json";

const Hero = () => {
  const heroContent = siteContent["Hero.tsx"].structure.container;

  return (
    <div className={heroContent.className}>
      {/* Badge */}
      <div className={heroContent.children[0].badge.className}>
        <div className={heroContent.children[0].badge.children[0].indicator.className}>
          <div
            className={
              heroContent.children[0].badge.children[0].indicator.children[0].ping.className
            }
          ></div>
          <div
            className={
              heroContent.children[0].badge.children[0].indicator.children[1].dot.className
            }
          ></div>
        </div>
        <span className={heroContent.children[0].badge.children[1].text.className}>
          {heroContent.children[0].badge.children[1].text.content}
          <span
            className={heroContent.children[0].badge.children[1].text.badge.className}
          >
            {heroContent.children[0].badge.children[1].text.badge.content}
            <ArrowRightIcon
              className={
                heroContent.children[0].badge.children[1].text.badge.icon.className
              }
            />
          </span>
        </span>
      </div>

      {/* Headline */}
      <BlurText
        word={heroContent.children[1].headline.props.word}
        className={heroContent.children[1].headline.props.className}
      />

      {/* Subtitle */}
      <p className={heroContent.children[2].subtitle.className}>
        {heroContent.children[2].subtitle.content}
      </p>

      {/* CTA Buttons */}
      <div className={heroContent.children[3].ctaButtons.className}>
        <Button
          asChild
          size={heroContent.children[3].ctaButtons.buttons[0].props.size}
        >
          <Link
            href={heroContent.children[3].ctaButtons.buttons[0].link.href}
            prefetch={heroContent.children[3].ctaButtons.buttons[0].link.prefetch}
          >
            {heroContent.children[3].ctaButtons.buttons[0].link.content}
          </Link>
        </Button>
        <Button
          asChild
          size={heroContent.children[3].ctaButtons.buttons[1].props.size}
          variant={heroContent.children[3].ctaButtons.buttons[1].props.variant}
          className={heroContent.children[3].ctaButtons.buttons[1].props.className}
        >
          <Link
            href={heroContent.children[3].ctaButtons.buttons[1].link.href}
            prefetch={heroContent.children[3].ctaButtons.buttons[1].link.prefetch}
          >
            {heroContent.children[3].ctaButtons.buttons[1].link.content}
          </Link>
        </Button>
      </div>

      {/* Icon */}
      <div
        className={heroContent.children[4].dollarIcon.className}
        aria-hidden={heroContent.children[4].dollarIcon["aria-hidden"]}
      >
        {heroContent.children[4].dollarIcon.content}
      </div>

      {/* Styles */}
      <style jsx>{`
        @keyframes shine {
          0% {
            background-position: ${heroContent.children[5].styles.shineAnimation.keyframes["0%"]["background-position"]};
          }
          100% {
            background-position: ${heroContent.children[5].styles.shineAnimation.keyframes["100%"]["background-position"]};
          }
        }
        .${heroContent.children[5].styles.shineAnimation.className} {
          animation: ${heroContent.children[5].styles.shineAnimation.animation};
        }
      `}</style>
    </div>
  );
};

export default Hero;
