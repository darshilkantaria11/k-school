import Home1 from "./nopage/home/home1";
import Home2 from "./nopage/home/home2";
import Home3 from "./nopage/home/home3";
import Home4 from "./nopage/home/home4";
import Home5 from "./nopage/home/home5";
import Home6 from "./nopage/home/home6";
import Home7 from "./nopage/home/home7";
import Home8 from "./nopage/home/home8";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Knottin Daycare Centre - Trusted Preschool in Okotoks, Canada</title>
        <meta
          name="description"
          content="Knottin Daycare Centre offers high-quality preschool and childcare services in Okotoks, Alberta. Safe and nurturing environment for early childhood learning."
        />
        <meta
          name="keywords"
          content="preschool in Okotoks, daycare in Okotoks, Knottin Daycare Centre, childcare services, early childhood education, Alberta daycare"
        />
        <meta name="author" content="Knottin Daycare Centre" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://knottindaycarecentre.com/" />

        {/* Open Graph Meta for Facebook & LinkedIn */}
        <meta property="og:title" content="Knottin Daycare Centre - Trusted Preschool in Okotoks, Canada" />
        <meta
          property="og:description"
          content="Knottin Daycare Centre provides a nurturing space for early childhood learning in Okotoks, Alberta. Enroll your child today!"
        />
        <meta property="og:url" content="https://knottindaycarecentre.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Knottin Daycare Centre" />
        <meta property="og:image" content="https://knottindaycarecentre.com/Logo.svg" />
        <meta property="og:locale" content="en_CA" />

        {/* Twitter Meta */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Knottin Daycare Centre - Trusted Preschool in Okotoks" />
        <meta
          name="twitter:description"
          content="Knottin Daycare Centre offers top-rated daycare and preschool services in Okotoks, Alberta."
        />
        <meta name="twitter:image" content="https://knottindaycarecentre.com/Logo.svg" />

        
      </Head>

      <Home1 />
      <Home2 />
      <Home3 />
      <Home4 />
      <Home5 />
      <Home6 />
      <Home7 />
      <Home8 />
    </>
  );
}
