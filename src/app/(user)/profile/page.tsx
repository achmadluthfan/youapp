import Profile from "@/features/user/components/Profile";

export default async function Page() {
  //   <div className="space-y-6">
  //     <div className="flex items-center justify-between mb-4">
  //       <div className="flex items-center gap-2">
  //         <button onClick={() => setStep(1)} className="text-gray-400">
  //           <ChevronLeft className="w-5 h-5" />
  //         </button>
  //         <span className="text-gray-300">@johndoe123</span>
  //       </div>
  //       <button
  //         onClick={() => setStep(3)}
  //         className="text-sm font-medium text-yellow-500"
  //       >
  //         Save & Update
  //       </button>
  //     </div>

  //     <div className="space-y-6">
  //       <h2 className="text-gray-300">About</h2>

  //       <AvatarUpload onImageSelect={handleImageSelect} />

  //       <div className="space-y-4">
  //         <Input
  //           placeholder="Display name"
  //           className="bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-500"
  //           value={profileData.displayName}
  //           onChange={(e) =>
  //             setProfileData((prev) => ({
  //               ...prev,
  //               displayName: e.target.value,
  //             }))
  //           }
  //         />

  //         <Select
  //           value={profileData.gender}
  //           onValueChange={(value) =>
  //             setProfileData((prev) => ({ ...prev, gender: value }))
  //           }
  //         >
  //           <SelectTrigger className="bg-gray-800/50 border-gray-700 text-white">
  //             <SelectValue placeholder="Gender" />
  //           </SelectTrigger>
  //           <SelectContent>
  //             <SelectItem value="male">Male</SelectItem>
  //             <SelectItem value="female">Female</SelectItem>
  //             <SelectItem value="other">Other</SelectItem>
  //           </SelectContent>
  //         </Select>

  //         <Input
  //           type="date"
  //           placeholder="Birthday"
  //           className="bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-500"
  //           value={profileData.birthday}
  //           onChange={(e) =>
  //             setProfileData((prev) => ({ ...prev, birthday: e.target.value }))
  //           }
  //         />

  //         <Input
  //           placeholder="Horoscope"
  //           className="bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-500"
  //           value={profileData.horoscope}
  //           onChange={(e) =>
  //             setProfileData((prev) => ({ ...prev, horoscope: e.target.value }))
  //           }
  //         />

  //         <Select
  //           value={profileData.zodiac}
  //           onValueChange={(value) =>
  //             setProfileData((prev) => ({ ...prev, zodiac: value }))
  //           }
  //         >
  //           <SelectTrigger className="bg-gray-800/50 border-gray-700 text-white">
  //             <SelectValue placeholder="Zodiac" />
  //           </SelectTrigger>
  //           <SelectContent>
  //             {[
  //               "Aries",
  //               "Taurus",
  //               "Gemini",
  //               "Cancer",
  //               "Leo",
  //               "Virgo",
  //               "Libra",
  //               "Scorpio",
  //               "Sagittarius",
  //               "Capricorn",
  //               "Aquarius",
  //               "Pisces",
  //             ].map((zodiac) => (
  //               <SelectItem key={zodiac} value={zodiac.toLowerCase()}>
  //                 {zodiac}
  //               </SelectItem>
  //             ))}
  //           </SelectContent>
  //         </Select>

  //         <Input
  //           type="number"
  //           placeholder="Height"
  //           className="bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-500"
  //           value={profileData.height}
  //           onChange={(e) =>
  //             setProfileData((prev) => ({ ...prev, height: e.target.value }))
  //           }
  //         />

  //         <Input
  //           type="number"
  //           placeholder="Weight"
  //           className="bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-500"
  //           value={profileData.weight}
  //           onChange={(e) =>
  //             setProfileData((prev) => ({ ...prev, weight: e.target.value }))
  //           }
  //         />
  //       </div>

  //       <div className="space-y-2">
  //         <h2 className="text-gray-300">Interest</h2>
  //         <p className="text-sm text-gray-400">
  //           Add in your interest to find a better match
  //         </p>
  //       </div>
  //     </div>
  //   </div>
  // );

  // const renderStep3 = () => (
  //   <div className="space-y-6">
  //     <div className="flex items-center justify-between mb-4">
  //       <div className="flex items-center gap-2">
  //         <button onClick={() => setStep(2)} className="text-gray-400">
  //           <ChevronLeft className="w-5 h-5" />
  //         </button>
  //         <span className="text-gray-300">@johndoe123</span>
  //       </div>
  //       <button className="text-sm font-medium text-yellow-500">
  //         Save & Update
  //       </button>
  //     </div>

  //     {profileData.image && (
  //       <div className="relative w-full h-48">
  //         <Image
  //           src={profileData.image}
  //           alt="Profile"
  //           fill
  //           className="object-cover rounded-lg"
  //         />
  //         <div className="absolute bottom-4 left-4 flex items-center gap-2">
  //           <span className="text-white text-sm">Male</span>
  //           <span className="text-white text-sm">•</span>
  //           <span className="text-white text-sm">Virgo</span>
  //           <span className="text-white text-sm">•</span>
  //           <span className="text-white text-sm">Pig</span>
  //         </div>
  //       </div>
  //     )}

  //     <div className="space-y-4">
  //       <div className="space-y-1">
  //         <h2 className="text-gray-300">About</h2>
  //         <div className="space-y-2 text-sm text-gray-400">
  //           <p>Birthday: {profileData.birthday || "28/08/1995 (Age 28)"}</p>
  //           <p>Horoscope: {profileData.horoscope || "Virgo"}</p>
  //           <p>Zodiac: {profileData.zodiac || "Pig"}</p>
  //           <p>Height: {profileData.height || "175 cm"}</p>
  //           <p>Weight: {profileData.weight || "65 kg"}</p>
  //         </div>
  //       </div>

  //       <div className="space-y-2">
  //         <h2 className="text-gray-300">Interest</h2>
  //         <p className="text-sm text-gray-400">
  //           Add in your interest to find a better match
  //         </p>
  //       </div>
  //     </div>
  //   </div>
  // );

  // const handleImageSelect = (image: string) => {
  //   setProfileData((prev) => ({ ...prev, image }));
  // };

  // const toggleInterest = (interest: string) => {
  //   setInterests((prev) =>
  //     prev.includes(interest)
  //       ? prev.filter((i) => i !== interest)
  //       : [...prev, interest]
  //   );
  // };

  return <Profile />;
}
