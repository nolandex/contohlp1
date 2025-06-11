"use client";

import siteContent from "@/data/site-content.json";
import {
  ZapIcon,
  ChartSplineIcon,
  LifeBuoyIcon,
  PaletteIcon,
  ShieldCheckIcon,
  WaypointsIcon,
} from "lucide-react";

const iconMap = {
  ZapIcon: ZapIcon,
  ChartSplineIcon: ChartSplineIcon,
  LifeBuoyIcon: LifeBuoyIcon,
  PaletteIcon: PaletteIcon,
  ShieldCheckIcon: ShieldCheckIcon,
  WaypointsIcon: WaypointsIcon,
};

const Perks = () => {
  const perks = siteContent["perks.ts"].PERKS;

  return (
    <section className="w-full py-12 bg-background">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-foreground">
          Mengapa Memilih Kami
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {perks.map((perk, index) => {
            const Icon = iconMap[perk.icon];
            return (
              <div
                key={index}
                className="flex items-start gap-4 p-6 bg-card rounded-lg border border-foreground/10"
              >
                <Icon className="w-8 h-8 text-primary" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    {perk.title}
                  </h3>
                  <p className="text-sm text-foreground/80">
                    {perk.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Perks;
