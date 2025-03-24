import Head from "next/head";
import Food1 from "../nopage/food/food1";
import Food2 from "../nopage/food/food2";
import Food3 from "../nopage/food/food3";

export default function Page() {
  return (
    <>
      <Head>
        <title>Healthy Meals for Kids - Knottin Daycare Centre | Food Services in Okotoks</title>
        <meta
          name="description"
          content="Knottin Daycare Centre provides nutritious and balanced meals for children in Okotoks, Canada. Our daycare food program ensures healthy eating for growing kids."
        />
        <meta
          name="keywords"
          content="healthy meals for kids, daycare food services Okotoks, Knottin Daycare Centre, child nutrition, preschool meals, nutritious daycare meals"
        />
        <meta name="author" content="Knottin Daycare Centre" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://knottindaycarecentre.com/food-service" />

        {/* Open Graph for Facebook & LinkedIn */}
        <meta property="og:title" content="Healthy Meals for Kids - Knottin Daycare Centre | Food Services in Okotoks" />
        <meta
          property="og:description"
          content="Our daycare food program at Knottin Daycare Centre in Okotoks provides nutritious meals that support child growth and development."
        />
        <meta property="og:url" content="https://knottindaycarecentre.com/food-service" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Knottin Daycare Centre" />
        <meta property="og:image" content="https://knottindaycarecentre.com/Logo.png" />
        <meta property="og:locale" content="en_CA" />

        {/* Twitter Meta */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Healthy Meals for Kids - Knottin Daycare Centre | Food Services in Okotoks" />
        <meta
          name="twitter:description"
          content="Knottin Daycare Centre provides nutritious and balanced meals for children in Okotoks, Canada, promoting healthy eating habits."
        />
        <meta name="twitter:image" content="https://knottindaycarecentre.com/Logo.png" />
      </Head>

      <Food1 />
      <Food2 />
      <Food3 />
    </>
  );
}
