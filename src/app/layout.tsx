import type { Metadata, Viewport } from "next";
import { Sora, Manrope } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { siteConfig } from "@/data/navigation";

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sora",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-manrope",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8fafc" },
    { media: "(prefers-color-scheme: dark)", color: "#0d141e" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | ${siteConfig.titleSuffix}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.author, url: siteConfig.url }],
  creator: siteConfig.author,
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    title: `${siteConfig.name} | ${siteConfig.titleSuffix}`,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - Full-Stack Developer`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | ${siteConfig.titleSuffix}`,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteConfig.url,
  },
  category: "technology",
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "32x32" },
    ],
    apple: "/apple-icon.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteConfig.url}/#person`,
      name: "Abdullrazak Mohammed Mojahed",
      alternateName: [
        "Abdullrazak Mojahed",
        "Abdulrazak Mojahed",
        "Abood Mojahed",
        "aboodm",
        "عبد الرزاق محمد مجاهد",
        "عبدالرزاق محمد مجاهد",
        "عبد الرزاق مجاهد",
        "عبدالرزاق مجاهد",
        "عبود مجاهد"
      ],
      jobTitle: "Full-Stack Developer (Laravel, NestJS, React)",
      description: siteConfig.description,
      url: siteConfig.url,
      image: `${siteConfig.url}/photo.jpg`,
      alumniOf: {
        "@type": "EducationalOrganization",
        name: "Damascus University"
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Damascus",
        addressCountry: "Syria"
      },
      sameAs: [
        "https://www.linkedin.com/in/abdullrazak-moj"
      ],
      knowsAbout: [
        "Laravel",
        "NestJS",
        "React",
        "PHP",
        "TypeScript",
        "Node.js",
        "MySQL",
        "PostgreSQL",
        "Redis",
        "REST API",
        "WebSockets",
        "Full-Stack Development"
      ]
    },
    {
      "@type": "WebSite",
      "@id": `${siteConfig.url}/#website`,
      url: siteConfig.url,
      name: "Abdullrazak Mohammed Mojahed Portfolio",
      alternateName: ["aboodm.com", "موقع عبد الرزاق مجاهد"],
      description: siteConfig.description,
      publisher: {
        "@id": `${siteConfig.url}/#person`
      },
      inLanguage: ["en", "ar"]
    },
    {
      "@type": "ProfilePage",
      "@id": `${siteConfig.url}/#profilepage`,
      url: siteConfig.url,
      name: "Abdullrazak Mohammed Mojahed - Full-Stack Developer",
      mainEntity: {
        "@id": `${siteConfig.url}/#person`
      }
    }
  ]
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      dir="ltr"
      data-scroll-behavior="smooth"
      suppressHydrationWarning
      className={`${sora.variable} ${manrope.variable} h-full scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        suppressHydrationWarning
        className="min-h-full flex flex-col font-body bg-slate-50 dark:bg-navy-950 text-slate-900 dark:text-slate-100 antialiased selection:bg-teal-500/20 selection:text-teal-700 dark:selection:text-teal-300"
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
        >
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 px-4 py-2 bg-teal-600 text-white font-medium rounded-lg shadow-lg"
          >
            Skip to main content
          </a>
          <Navbar />
          <main id="main-content" className="flex-1 focus:outline-none">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
