import Head from "next/head";
import Program1 from "../nopage/programs/program1";
import Program2 from "../nopage/programs/program2";
// import Program3 from "../nopage/programs/program3";

export default function Page() {
  return (
    <>
      <Head>
        <title>Programs - Knottin Daycare Centre | Preschool in Okotoks</title>
        <meta
          name="description"
          content="Explore our preschool programs at Knottin Daycare Centre in Okotoks, Canada. We offer nurturing and engaging early childhood education programs."
        />
        <meta
          name="keywords"
          content="preschool programs Okotoks, Knottin Daycare Centre, childcare programs, early education, best daycare in Alberta"
        />
        <meta name="author" content="Knottin Daycare Centre" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://knottindaycarecentre.com/programs" />

        {/* Open Graph for Facebook & LinkedIn */}
        <meta property="og:title" content="Programs - Knottin Daycare Centre | Preschool in Okotoks" />
        <meta
          property="og:description"
          content="Discover our early childhood education programs at Knottin Daycare Centre in Okotoks, Canada."
        />
        <meta property="og:url" content="https://knottindaycarecentre.com/programs" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Knottin Daycare Centre" />
        <meta property="og:image" content="https://knottindaycarecentre.com/Logo.png" />
        <meta property="og:locale" content="en_CA" />

        {/* Twitter Meta */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Programs - Knottin Daycare Centre | Preschool in Okotoks" />
        <meta
          name="twitter:description"
          content="Learn more about our daycare and preschool programs in Okotoks, Alberta."
        />
        <meta name="twitter:image" content="https://knottindaycarecentre.com/Logo.png" />
      </Head>

      <Program1 />
      <Program2 />
      {/* <Program3 /> */}
    </>
  );
}
