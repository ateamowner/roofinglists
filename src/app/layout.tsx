import type { Metadata } from "next";
import { Source_Sans_3, Source_Serif_4 } from "next/font/google";
import { MobileQuoteCta } from "@/components/mobile-quote-cta";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { site } from "@/config/site";
import "./globals.css";

const sans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source-sans",
  display: "swap",
});

const serif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-source-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — roofing quote directory`,
    template: `%s`,
  },
  description: site.description,
  applicationName: site.name,
  // Verification codes must be pasted by Anthony. Do not invent values.
  // Bing Webmaster Tools: add roofinglists.com, then set
  //   verification.other["msvalidate.01"] = "<code from Bing>"
  // Google Search Console: HTML file /googled3ae2edf58b5b2f8.html may already
  // cover Google. If a meta tag is required instead, set
  //   verification.google = "<code from Google>"
};

const themeVars = Object.entries({
  "--background": site.theme.background,
  "--foreground": site.theme.foreground,
  "--card": site.theme.card,
  "--card-foreground": site.theme.foreground,
  "--primary": site.theme.primary,
  "--primary-foreground": site.theme.primaryForeground,
  "--secondary": site.theme.muted,
  "--secondary-foreground": site.theme.foreground,
  "--muted": site.theme.muted,
  "--muted-foreground": site.theme.mutedForeground,
  "--accent": site.theme.accent,
  "--accent-foreground": site.theme.accentForeground,
  "--border": site.theme.border,
  "--input": site.theme.border,
  "--ring": site.theme.ring,
  "--destructive": "#8b1e1e",
})
  .map(([key, value]) => `${key}: ${value}`)
  .join("; ");

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${sans.variable} ${serif.variable} h-full scroll-smooth antialiased`}
    >
      {/*
        Site verification placeholders — do not invent codes.
        Bing Webmaster: <meta name="msvalidate.01" content="PASTE_FROM_BING_WEBMASTER_TOOLS" />
        Google: <meta name="google-site-verification" content="PASTE_FROM_GOOGLE_SEARCH_CONSOLE" />
        Anthony must add roofinglists.com in Bing Webmaster Tools and paste the real code.
      */}
      <body className="flex min-h-full flex-col bg-background text-foreground">
        <style>{`:root { ${themeVars}; }`}</style>
        <SiteHeader />
        <main className="flex-1 pb-20 lg:pb-0">{children}</main>
        <SiteFooter />
        <MobileQuoteCta />
      </body>
    </html>
  );
}
