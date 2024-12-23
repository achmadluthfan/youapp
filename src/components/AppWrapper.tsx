import Link from "next/link";
import Image from "next/image";
import Heading from "./Heading";

export default function AppWrapper({
  children,
  backLink,
  heading,
  subHeading,
}: {
  children: React.ReactNode;
  backLink?: string;
  heading: string;
  subHeading?: string;
}) {
  return (
    <main className="bg-gradient-custom relative h-screen px-4 py-8">
      <div className="gap-x-3 flex items-center mb-12 mt-6  ">
        <Image src="/arrow-left.svg" width={9} height={9} alt="arrow-left" />
        <Link className="text-white font-bold text-sm" href={`/${backLink}`}>
          Back
        </Link>
      </div>
      <Heading heading={heading} subHeading={subHeading} />
      {children}
    </main>
  );
}
