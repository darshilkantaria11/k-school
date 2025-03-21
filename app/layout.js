import localFont from "next/font/local";
import "./globals.css";
import Navbar2 from "./nopage/components/navbar2";
import Navbar1 from "./nopage/components/navbar1";
import Footer from "./nopage/components/footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Knottin Daycare Centre - Best Preschool in Okotoks, Canada",
  description: "Knottin Daycare Centre in Okotoks, Canada, provides a safe and nurturing environment for early childhood education. Enroll your child today!",
  keywords: "preschool in Okotoks, daycare in Okotoks, Knottin Daycare Centre, early childhood education, Canada daycare",
  authors: [{ name: "Knottin Daycare Centre", url: "https://knottindaycarecentre.com" }],
  applicationName: "Knottin Daycare Centre",
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  alternates: {
    canonical: "https://knottindaycarecentre.com",
  },
  openGraph: {
    title: "Knottin Daycare Centre - Best Preschool in Okotoks, Canada",
    description: "Providing high-quality early education in Okotoks, Canada. Safe, nurturing, and fun environment for children.",
    url: "https://knottindaycarecentre.com",
    siteName: "Knottin Daycare Centre",
    locale: "en_CA",
    images: ['https://www.knottindaycarecentre.com/Logo.svg'],
  },
  twitter: {
    card: "summary_large_image",
    title: "Knottin Daycare Centre - Best Preschool in Okotoks",
    description: "Providing high-quality early education in Okotoks, Canada. Safe, nurturing, and fun environment for children.",
    images: ["https://knottindaycarecentre.com/Logo.svg"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="canonical" href="https://knottindaycarecentre.com" />
        <meta name="geo.region" content="CA-AB" />
        <meta name="geo.placename" content="Okotoks, Alberta" />
        <meta name="geo.position" content="50.7252;-113.9753" />
        <meta name="ICBM" content="50.7252, -113.9753" />

        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-E57CDEKGNW"></script>
        <script dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-E57CDEKGNW');
          `,
        }} />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Knottin Daycare Centre",
              url: "https://knottindaycarecentre.com",
              image: "https://knottindaycarecentre.com/Logo.svg",
              telephone: "(587) 364-0011",
              email: "knottin_schoolcare@live.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "101 Cimarron Grove Circle",
                addressLocality: "Okotoks",
                addressRegion: "AB",
                postalCode: "T1S 2E5",
                addressCountry: "CA",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "50.7252",
                longitude: "-113.9753",
              },
            }),
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}>
        <Navbar1 />
        <Navbar2 />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}