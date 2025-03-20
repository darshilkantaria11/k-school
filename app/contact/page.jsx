import Head from "next/head";
import Contact1 from "../nopage/contact/contact1";
import Contact2 from "../nopage/contact/contact2";

export default function Page() {
  return (
    <>
      <Head>
        <title>Contact Knottin Daycare Centre - Okotoks, Canada</title>
        <meta
          name="description"
          content="Get in touch with Knottin Daycare Centre in Okotoks, Alberta. Call (587) 364-0011 or email knottin_schoolcare@live.com for inquiries about our preschool services."
        />
        <meta
          name="keywords"
          content="contact Knottin Daycare Centre, preschool in Okotoks, daycare contact, childcare services, Alberta preschool, Knottin daycare address"
        />
        <meta name="author" content="Knottin Daycare Centre" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://knottindaycarecentre.com/contact" />

        {/* Open Graph Meta for Facebook & LinkedIn */}
        <meta property="og:title" content="Contact Knottin Daycare Centre - Okotoks, Canada" />
        <meta
          property="og:description"
          content="Reach out to Knottin Daycare Centre for preschool and daycare services in Okotoks, Alberta."
        />
        <meta property="og:url" content="https://knottindaycarecentre.com/contact" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Knottin Daycare Centre" />
        <meta property="og:image" content="https://knottindaycarecentre.com/Logo.svg" />
        <meta property="og:locale" content="en_CA" />

        {/* Twitter Meta */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Knottin Daycare Centre - Okotoks, Canada" />
        <meta
          name="twitter:description"
          content="Have questions? Contact Knottin Daycare Centre in Okotoks for daycare and preschool inquiries."
        />
        <meta name="twitter:image" content="https://knottindaycarecentre.com/Logo.svg" />
      </Head>

      <Contact1 />
      <Contact2 />
    </>
  );
}
