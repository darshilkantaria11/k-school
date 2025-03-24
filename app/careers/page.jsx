import Head from "next/head";
import Career1 from "../nopage/career/career1";
import Career2 from "../nopage/career/career2";
import Career3 from "../nopage/career/career3";

export default function Page() {
  return (
    <>
      <Head>
        <title>Careers at Knottin Daycare Centre | Join Our Team in Okotoks</title>
        <meta
          name="description"
          content="Explore exciting career opportunities at Knottin Daycare Centre in Okotoks. Join our passionate team dedicated to early childhood education."
        />
        <meta
          name="keywords"
          content="Knottin Daycare Centre careers, daycare jobs Okotoks, preschool teacher jobs, childcare careers, join our team"
        />
        <meta name="author" content="Knottin Daycare Centre" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://knottindaycarecentre.com/careers" />

        {/* Open Graph for Facebook & LinkedIn */}
        <meta property="og:title" content="Careers at Knottin Daycare Centre | Join Our Team in Okotoks" />
        <meta
          property="og:description"
          content="Looking for a rewarding career in childcare? Knottin Daycare Centre is hiring passionate educators in Okotoks."
        />
        <meta property="og:url" content="https://knottindaycarecentre.com/careers" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Knottin Daycare Centre" />
        <meta property="og:image" content="https://knottindaycarecentre.com/Logo.png" />
        <meta property="og:locale" content="en_CA" />

        {/* Twitter Meta */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Careers at Knottin Daycare Centre | Join Our Team in Okotoks" />
        <meta
          name="twitter:description"
          content="Knottin Daycare Centre is hiring! Apply today for childcare and preschool teaching positions in Okotoks."
        />
        <meta name="twitter:image" content="https://knottindaycarecentre.com/Logo.png" />
      </Head>

      <Career1 />
      <Career2 />
      {/* <Career3 /> */}
    </>
  );
}
