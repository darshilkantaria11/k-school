import Head from "next/head";
import Osc1 from "../nopage/osc/osc1";
import Osc2 from "../nopage/osc/osc2";
import Osc3 from "../nopage/osc/osc3";
import Osc4 from "../nopage/osc/osc4";

export default function Page() {
  return (
    <>
      <Head>
        <title>Out of School Care - Knottin Daycare Centre | OSC Program in Okotoks</title>
        <meta
          name="description"
          content="Knottin Daycare Centre provides a safe and engaging Out of School Care (OSC) program in Okotoks, Canada. Enroll your child for after-school learning and fun!"
        />
        <meta
          name="keywords"
          content="out of school care Okotoks, OSC program Okotoks, Knottin Daycare Centre, after school care, daycare in Alberta, before and after school program"
        />
        <meta name="author" content="Knottin Daycare Centre" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://knottindaycarecentre.com/osc" />

        {/* Open Graph for Facebook & LinkedIn */}
        <meta property="og:title" content="Out of School Care - Knottin Daycare Centre | OSC Program in Okotoks" />
        <meta
          property="og:description"
          content="Enroll your child in Knottin Daycare Centre's Out of School Care (OSC) program in Okotoks. Safe, structured, and engaging after-school activities."
        />
        <meta property="og:url" content="https://knottindaycarecentre.com/osc" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Knottin Daycare Centre" />
        <meta property="og:image" content="https://knottindaycarecentre.com/Logo.svg" />
        <meta property="og:locale" content="en_CA" />

        {/* Twitter Meta */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Out of School Care - Knottin Daycare Centre | OSC Program in Okotoks" />
        <meta
          name="twitter:description"
          content="Knottin Daycare Centre's OSC program offers a secure and engaging environment for after-school learning and fun in Okotoks, Canada."
        />
        <meta name="twitter:image" content="https://knottindaycarecentre.com/Logo.svg" />
      </Head>

      <Osc1 />
      <Osc2 />
      <Osc3 />
      <Osc4 />
    </>
  );
}
