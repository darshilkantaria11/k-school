import ApplicationForm from '../../nopage/career/career3'; // Adjust the import path

export default async function Page({ params }) {
  const param = await params;
  return (
    <>
     
      <ApplicationForm initialRole={param.slug} /> {/* Pass the slug as initialRole */}
    </>
  );
}
