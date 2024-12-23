import { ChevronLeft, PenSquare } from "lucide-react";
import Link from "next/link";
import { UserProfile } from "../schema/type";

export default function InterestSection({
  name,
  birthday,
  height,
  weight,
  zodiac,
  horoscope,
  interest,
}: UserProfile) {
  return (
    <div className="space-y-6 bg-[#0E191F] px-6 py-4 rounded-lg">
      <div className="flex items-center justify-between">
        <h2 className="text-gray-300">Interest</h2>
        <Link className="text-gray-400" href="/profile/interest">
          <PenSquare className="w-4 h-4" />
        </Link>
      </div>
      <p className="text-sm text-gray-400">
        Add in your interest to find a better match
      </p>
    </div>
  );
}
