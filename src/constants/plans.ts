"use client";

import siteContent from "@/data/site-content.json";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Plans = () => {
  const plans = siteContent["plans.ts"].PLANS;

  return (
    <section className="w-full py-12 bg-background">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-foreground">
          Pilih Paket yang Tepat untuk Anda
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="border border-foreground/10 rounded-lg p-6 bg-card shadow-sm hover:shadow-md transition-shadow relative"
            >
              {plan.badge && (
                <span className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-bl-lg rounded-tr-lg">
                  {plan.badge}
                </span>
              )}
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {plan.title}
              </h3>
              <p className="text-sm text-accent-foreground/60 mb-4">
                {plan.desc}
              </p>
              <div className="mb-4">
                <span className="text-2xl font-bold text-foreground">
                  ${plan.monthlyPrice}
                </span>
                <span className="text-sm text-accent-foreground/60">
                  /bulan
                </span>
                <p className="text-sm text-accent-foreground/60">
                  atau ${plan.yearlyPrice}/tahun
                </p>
              </div>
              <ul className="space-y-2 mb-6">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-foreground/80">
                    <span className="text-primary">✓</span> {feature}
                  </li>
                ))}
              </ul>
              <Button asChild size="lg" className="w-full">
                <Link href={plan.link} prefetch={false}>
                  {plan.buttonText}
                </Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Plans;
