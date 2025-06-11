import "@/styles/globals.css";
// 'generateMetadata' sudah dihapus dari import ini
import { cn } from "@/functions"; 
import { inter, satoshi } from "@/constants";
import { Toaster } from "@/components/ui/sonner";
import { Providers } from "@/components";

// Objek metadata baru ditambahkan langsung di sini
export const metadata = {
  title: "Bisnovo - Mulai Bisnis Online dengan Cepat dan Lengkap",
  description: "Bisnovo membantu Anda membuat bisnis online lengkap — dari website, chatbot, konten sosmed, hingga sosmed booster untuk meningkatkan penjualan.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        // Bahasa diubah ke "id" untuk konten Indonesia
        <html lang="id" suppressHydrationWarning> 
            <body
                className={cn(
                    "min-h-screen bg-background text-foreground antialiased font-default overflow-x-hidden !scrollbar-hide",
                    inter.variable,
                    satoshi.variable
                )}
            >
                <Toaster
                    richColors
                    theme="dark"
                    position="top-right"
                />
                <Providers>
                    {children}
                </Providers>
            </body>
        </html>
    );
}
