"use client";
import ImageSection from "./ImageSection";
import AboutSection from "./AboutSection";
import InterestSection from "./InterestSection";
import { getProfile } from "../server/getProfile";
import { useState, useEffect } from "react";

export default function Profile() {
  const [profileData, setProfileData] = useState<any>();

  useEffect(() => {
    const fetchData = async () => {
      const fetchProfile = await getProfile();
      const { message, data } = fetchProfile;
      setProfileData(data);
    };

    fetchData();
  }, []);

  return (
    <div className="bg-[#09141A] min-h-screen p-2">
      {profileData && (
        <>
          <ImageSection username={profileData.username || ""} />
          <AboutSection
            name={profileData.name || ""}
            birthday={profileData.birthday || ""}
            weight={profileData.weight || ""}
            height={profileData.height || ""}
            zodiac={profileData.zodiac || ""}
            horoscope={profileData.horoscope || ""}
          />
          <InterestSection
            name={profileData.name || ""}
            birthday={profileData.birthday || ""}
            weight={profileData.weight || ""}
            height={profileData.height || ""}
            zodiac={profileData.zodiac || ""}
            horoscope={profileData.horoscope || ""}
            interest={profileData.interest || [""]}
          />
        </>
      )}
    </div>
  );
}
