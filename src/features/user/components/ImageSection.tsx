import Image from "next/image";

export default function ImageSection({
  username,
  src,
}: {
  username: string;
  src?: string;
}) {
  return (
    <div className="relative w-full mb-6 h-48 bg-[#162329] rounded-lg overflow-hidden">
      {src && (
        <Image
          src={src}
          width={300}
          height={300}
          className="object-cover w-full h-full"
          alt="Profile Image"
        />
      )}
      <p className="text-white font-bold absolute bottom-2 left-2">
        @{username}
      </p>
    </div>
  );
}
