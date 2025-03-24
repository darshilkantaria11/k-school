import Head from "next/head";
import Toddler1 from "../../nopage/toddler/toddler1";
import Toddler2 from "../../nopage/toddler/toddler2";

export default function Page() {
  return (
    <>
      <Head>
        <title>Toddler Program - Knottin Daycare Centre | Best Toddler Care in Okotoks</title>
        <meta
          name="description"
          content="Knottin Daycare Centre offers a nurturing toddler program in Okotoks, Canada. Safe, engaging, and development-focused early childcare for your little one."
        />
        <meta
          name="keywords"
          content="toddler care Okotoks, Knottin Daycare Centre, early childhood education, daycare in Alberta, best toddler programs, child care services"
        />
        <meta name="author" content="Knottin Daycare Centre" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://knottindaycarecentre.com/program/toddler" />

        {/* Open Graph for Facebook & LinkedIn */}
        <meta property="og:title" content="Toddler Program - Knottin Daycare Centre | Best Toddler Care in Okotoks" />
        <meta
          property="og:description"
          content="Enroll your toddler at Knottin Daycare Centre in Okotoks for a structured, fun, and safe early childhood learning experience."
        />
        <meta property="og:url" content="https://knottindaycarecentre.com/program/toddler" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Knottin Daycare Centre" />
        <meta property="og:image" content="https://knottindaycarecentre.com/Logo.png" />
        <meta property="og:locale" content="en_CA" />

        {/* Twitter Meta */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Toddler Program - Knottin Daycare Centre | Best Toddler Care in Okotoks" />
        <meta
          name="twitter:description"
          content="Explore the best toddler care and early learning programs at Knottin Daycare Centre, Okotoks, Canada."
        />
        <meta name="twitter:image" content="https://knottindaycarecentre.com/Logo.png" />
      </Head>

      <Toddler1 />
      <Toddler2 />
    </>
  );
}
