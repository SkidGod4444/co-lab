import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/global/theme/themer";
import AuthWrapper from "@/components/global/auth/authwrapper";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CO-lab",
  description: "CO-lab by Saidev Dhal",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/assets/COlab-logo.png",
        href: "/assets/COlab-logo.png",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/assets/COlab-dark-logo.png",
        href: "/assets/COlab-dark-logo.png",
      }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <AuthWrapper>
      <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
            storageKey="theme-2"
          >
            {children}
          </ThemeProvider>
          <Toaster />
    </AuthWrapper>
      </body>
    </html>
  );
}
