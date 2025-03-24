import Head from "next/head";
import Whyus1 from "../nopage/whyus/whyus1";
import Whyus2 from "../nopage/whyus/whyus2";

export default function Page() {
  return (
    <>
      <Head>
        <title>Why Choose Us? - Knottin Daycare Centre | Best Childcare in Okotoks</title>
        <meta
          name="description"
          content="Discover why parents trust Knottin Daycare Centre in Okotoks, Canada. Our preschool and childcare programs provide a safe, nurturing, and educational environment for kids."
        />
        <meta
          name="keywords"
          content="best daycare Okotoks, why choose Knottin Daycare Centre, trusted childcare Okotoks, preschool education, early childhood learning"
        />
        <meta name="author" content="Knottin Daycare Centre" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://knottindaycarecentre.com/why-us" />

        {/* Open Graph for Facebook & LinkedIn */}
        <meta property="og:title" content="Why Choose Us? - Knottin Daycare Centre | Best Childcare in Okotoks" />
        <meta
          property="og:description"
          content="Find out why Knottin Daycare Centre is the top choice for childcare and preschool education in Okotoks, Canada."
        />
        <meta property="og:url" content="https://knottindaycarecentre.com/why-us" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Knottin Daycare Centre" />
        <meta property="og:image" content="https://knottindaycarecentre.com/Logo.png" />
        <meta property="og:locale" content="en_CA" />

        {/* Twitter Meta */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Why Choose Us? - Knottin Daycare Centre | Best Childcare in Okotoks" />
        <meta
          name="twitter:description"
          content="Learn why Knottin Daycare Centre is the best daycare in Okotoks, providing quality early education and childcare."
        />
        <meta name="twitter:image" content="https://knottindaycarecentre.com/Logo.png" />
      </Head>

      <Whyus1 />
      <Whyus2 />
    </>
  );
}
