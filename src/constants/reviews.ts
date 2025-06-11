"use client";

import siteContent from "@/data/site-content.json";
import Image from "next/image";

const Reviews = () => {
  const reviews = siteContent["reviews.ts"].REVIEWS;

  return (
    <section className="w-full py-12 bg-background">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-foreground">
          Apa Kata Pengguna Kami
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="border border-foreground/10 rounded-lg p-6 bg-card shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-4 mb-4">
                <Image
                  src={review.img}
                  alt={review.name}
                  width={48}
                  height={48}
                  className="rounded-full"
                />
                <div>
                  <h3 className="font-semibold text-foreground">{review.name}</h3>
                  <p className="text-sm text-accent-foreground/60">
                    {review.username}
                  </p>
                </div>
              </div>
              <p className="text-sm text-foreground/80">{review.review}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
