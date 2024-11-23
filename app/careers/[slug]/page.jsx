import ApplicationForm from '../../nopage/career/career3'; // Adjust the import path

export default function Page({ params }) {
  return (
    <>
     
      <ApplicationForm initialRole={params.slug} /> {/* Pass the slug as initialRole */}
    </>
  );
}
