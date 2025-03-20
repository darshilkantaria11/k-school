import Head from "next/head";
import Preschool1 from "../../nopage/preschool/preschool1";
import Preschool2 from "../../nopage/preschool/preschool2";

export default function Page() {
  return (
    <>
      <Head>
        <title>Preschool - Knottin Daycare Centre | Best Preschool in Okotoks</title>
        <meta
          name="description"
          content="Knottin Daycare Centre offers a nurturing preschool program in Okotoks, Canada. Enroll your child in our top-rated early education program today!"
        />
        <meta
          name="keywords"
          content="preschool Okotoks, Knottin Daycare Centre, early learning, childcare, daycare in Alberta, best preschool programs"
        />
        <meta name="author" content="Knottin Daycare Centre" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://knottindaycarecentre.com/program/preschool" />

        {/* Open Graph for Facebook & LinkedIn */}
        <meta property="og:title" content="Preschool - Knottin Daycare Centre | Best Preschool in Okotoks" />
        <meta
          property="og:description"
          content="Enroll your child in our preschool program at Knottin Daycare Centre, providing high-quality early childhood education in Okotoks, Canada."
        />
        <meta property="og:url" content="https://knottindaycarecentre.com/program/preschool" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Knottin Daycare Centre" />
        <meta property="og:image" content="https://knottindaycarecentre.com/Logo.svg" />
        <meta property="og:locale" content="en_CA" />

        {/* Twitter Meta */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Preschool - Knottin Daycare Centre | Best Preschool in Okotoks" />
        <meta
          name="twitter:description"
          content="Explore our preschool program at Knottin Daycare Centre, Okotoks, and provide your child with the best early learning experience."
        />
        <meta name="twitter:image" content="https://knottindaycarecentre.com/Logo.svg" />
      </Head>

      <Preschool1 />
      <Preschool2 />
    </>
  );
}
