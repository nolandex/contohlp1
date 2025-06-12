import "@/styles/globals.css";
import { cn } from "@/functions"; 
import { inter, satoshi } from "@/constants";
import { Toaster } from "@/components/ui/sonner";
import { Providers } from "@/components";

// ✅ Metadata lengkap untuk SEO & favicon
export const metadata = {
  title: "Bisnovo - Mulai Bisnis Online dengan Cepat dan Lengkap",
  description: "Bisnovo membantu Anda membuat bisnis online lengkap — dari website, chatbot, konten sosmed, hingga sosmed booster untuk meningkatkan penjualan.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background text-foreground antialiased font-default overflow-x-hidden !scrollbar-hide",
          inter.variable,
          satoshi.variable
        )}
      >
        <Toaster richColors theme="dark" position="top-right" />
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
