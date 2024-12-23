export default function Heading({
  heading,
  subHeading,
}: {
  heading: string;
  subHeading?: string;
}) {
  return (
    <>
      {subHeading && <h3 className="font-semibold">{subHeading}</h3>}
      <h2 className="text-2xl font-bold text-white mb-7 ml-3">{heading}</h2>
    </>
  );
}
