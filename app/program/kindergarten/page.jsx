import Head from "next/head";
import Kindergarten1 from "../../nopage/kindergarten/kindergarten1";
import Kindergarten2 from "../../nopage/kindergarten/kindergarten2";

export default function Page() {
  return (
    <>
      <Head>
        <title>Kindergarten - Knottin Daycare Centre | Early Learning in Okotoks</title>
        <meta
          name="description"
          content="Enroll your child in our engaging and nurturing kindergarten program at Knottin Daycare Centre in Okotoks, Canada."
        />
        <meta
          name="keywords"
          content="kindergarten Okotoks, Knottin Daycare Centre, early learning, preschool, childcare Alberta, best kindergarten programs"
        />
        <meta name="author" content="Knottin Daycare Centre" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://knottindaycarecentre.com/program/kindergarten" />

        {/* Open Graph for Facebook & LinkedIn */}
        <meta property="og:title" content="Kindergarten - Knottin Daycare Centre | Early Learning in Okotoks" />
        <meta
          property="og:description"
          content="Explore our kindergarten program designed to support early childhood education in Okotoks, Alberta."
        />
        <meta property="og:url" content="https://knottindaycarecentre.com/program/kindergarten" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Knottin Daycare Centre" />
        <meta property="og:image" content="https://knottindaycarecentre.com/Logo.svg" />
        <meta property="og:locale" content="en_CA" />

        {/* Twitter Meta */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Kindergarten - Knottin Daycare Centre | Early Learning in Okotoks" />
        <meta
          name="twitter:description"
          content="Enroll your child in our kindergarten program at Knottin Daycare Centre, Okotoks, Canada."
        />
        <meta name="twitter:image" content="https://knottindaycarecentre.com/Logo.svg" />
      </Head>

      <Kindergarten1 />
      <Kindergarten2 />
    </>
  );
}
