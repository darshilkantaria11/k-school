import Head from "next/head";
import About1 from "../nopage/about/about1";
import About2 from "../nopage/about/about2";
import About3 from "../nopage/about/about3";
import About4 from "../nopage/about/about4";

export default function Page() {
  return (
    <>
      <Head>
        <title>About Us - Knottin Daycare Centre | Trusted Childcare in Okotoks</title>
        <meta
          name="description"
          content="Learn more about Knottin Daycare Centre in Okotoks, Canada. We provide quality preschool and daycare services in a safe, nurturing environment."
        />
        <meta
          name="keywords"
          content="Knottin Daycare Centre, about us, best daycare Okotoks, trusted childcare, preschool services, early childhood education"
        />
        <meta name="author" content="Knottin Daycare Centre" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://knottindaycarecentre.com/about-us" />

        {/* Open Graph for Facebook & LinkedIn */}
        <meta property="og:title" content="About Us - Knottin Daycare Centre | Trusted Childcare in Okotoks" />
        <meta
          property="og:description"
          content="Knottin Daycare Centre is dedicated to providing top-quality childcare and preschool services in Okotoks, Canada."
        />
        <meta property="og:url" content="https://knottindaycarecentre.com/about-us" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Knottin Daycare Centre" />
        <meta property="og:image" content="https://knottindaycarecentre.com/Logo.png" />
        <meta property="og:locale" content="en_CA" />

        {/* Twitter Meta */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Us - Knottin Daycare Centre | Trusted Childcare in Okotoks" />
        <meta
          name="twitter:description"
          content="Discover how Knottin Daycare Centre in Okotoks provides a caring and safe learning environment for children."
        />
        <meta name="twitter:image" content="https://knottindaycarecentre.com/Logo.png" />
      </Head>

      <About1 />
      <About2 />
      <About3 />
      <About4 />
    </>
  );
}
