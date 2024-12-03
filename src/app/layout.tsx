import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner"
import { Analytics } from "@vercel/analytics/react"

const description = "mspaint é um hub simples para roblox com suporte para diversos jogos.";

const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: {
    default: "msdoors",
    template: "%s | msdoors",
  },
  description: description,
  openGraph: {
    description: description,
		images: 'https://raw.githubusercontent.com/Msdoors/Msdoors.gg/refs/heads/main/imagens/web/favcon-no.png',
	},
  keywords: [
    "msdoors",
    "roblox",
    "script",
    "doors",
    "e mais...",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning suppressContentEditableWarning>
      <body
        className={`${inter.className} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          forcedTheme="dark"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
          <Toaster richColors />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
