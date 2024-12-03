import { auth } from "@/auth";
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { isUserAllowedOnDashboard } from "@/server/authutils";
import { maskEmail } from "@/server/stringutil";
import { Metadata, Viewport } from "next";
import { notFound, redirect } from "next/navigation";

const description = "msdoors é um script simples para jogos do Roblox como portas, Natural Disaster dentre outros. OBS: ESTÁ EM ALPHA!";

export const metadata: Metadata = {
  title: {
    default: "dashboard",
    template: "%s - dashboard",
  },
  description: description,
  manifest: "/dashboard/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "mspaint dashboard",
  },
  openGraph: {
    description: description,
		images: 'https://raw.githubusercontent.com/Msdoors/Msdoors.gg/refs/heads/main/imagens/web/favcon-no.png',
	},
  keywords: [
    "msdoors",
    "roblox",
    "script",
    "doors",
  ],
};

export const viewport: Viewport = {
  themeColor: "#000000",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();

  if (session && session.user) {
    const isAuthorized = await isUserAllowedOnDashboard();

    if (!isAuthorized ) {
      return notFound();
    }
  } else {
    return redirect("/signin");
  }

  return <SidebarProvider>
    <AppSidebar
        session_data={{
            name: session.user.name ?? "unknown",
            email: maskEmail(session.user.email ?? "example@upio.dev"),
            avatar: session.user.image ?? "https://avatar.vercel.sh/42",
        }}
    />
    <SidebarInset>
      {children}
    </SidebarInset>
  </SidebarProvider>
}
