import Head from "next/head";
import Feild1 from "../nopage/feild/feild1";

export default function Page() {
  return (
    <>
      <Head>
        <title>Exciting Field Trips - Knottin Daycare Centre | Outdoor Learning in Okotoks</title>
        <meta
          name="description"
          content="Knottin Daycare Centre organizes fun and educational field trips in Okotoks, Canada. Our outdoor learning experiences promote exploration and creativity for children."
        />
        <meta
          name="keywords"
          content="field trips Okotoks, daycare outdoor activities, Knottin Daycare Centre, preschool field trips, educational outings, kids excursions Okotoks"
        />
        <meta name="author" content="Knottin Daycare Centre" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://knottindaycarecentre.com/field-trip" />

        {/* Open Graph for Facebook & LinkedIn */}
        <meta property="og:title" content="Exciting Field Trips - Knottin Daycare Centre | Outdoor Learning in Okotoks" />
        <meta
          property="og:description"
          content="Join Knottin Daycare Centre for engaging and educational field trips in Okotoks. Our outdoor learning activities encourage exploration and fun!"
        />
        <meta property="og:url" content="https://knottindaycarecentre.com/field-trip" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Knottin Daycare Centre" />
        <meta property="og:image" content="https://knottindaycarecentre.com/Logo.png" />
        <meta property="og:locale" content="en_CA" />

        {/* Twitter Meta */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Exciting Field Trips - Knottin Daycare Centre | Outdoor Learning in Okotoks" />
        <meta
          name="twitter:description"
          content="Knottin Daycare Centre offers exciting and educational field trips in Okotoks, Canada. Explore the world with us!"
        />
        <meta name="twitter:image" content="https://knottindaycarecentre.com/Logo.png" />
      </Head>

      <Feild1 />
    </>
  );
}
