"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, PenSquare } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { UserProfile } from "../schema/type";
import { createProfile } from "../server/createProfile";
import AboutInput from "./component/component/AboutInput";
import { getProfile } from "../server/getProfile";

export default function AboutSection(props: UserProfile) {
  const { name, birthday, height, weight, zodiac, horoscope } = props;

  const [profileData, setProfileData] = useState({
    name,
    birthday,
    height,
    weight,
  });

  const [step, setStep] = useState(
    localStorage.getItem("step") as number | null
  );

  const condition = (step: number) => {
    localStorage.setItem("step", step.toString());
  };

  useEffect(() => {
    if (localStorage.getItem("step") === null) {
      localStorage.setItem("step", "1");
    }

    setStep(parseInt(localStorage.getItem("step")!));
  }, [step]);

  return (
    <>
      <div className="space-y-6 bg-[#0E191F] px-6 py-4 mb-3 rounded-lg">
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-gray-300">About</h2>
            {step === 1 ? (
              <button
                onClick={() => {
                  condition(2);
                  setStep(2);
                }}
                className="text-gray-400"
              >
                <PenSquare className="w-4 h-4" />
              </button>
            ) : (
              <button
                onClick={async () => {
                  condition(1);
                  await createProfile(profileData);
                  setStep(1);
                }}
                className="text-sm font-medium text-yellow-500"
              >
                Save & Update
              </button>
            )}
          </div>

          {step == 1 ? (
            <>
              {step !== 1 ? (
                <p className="text-sm text-gray-300">
                  Add in your you to help others know you better
                </p>
              ) : (
                <div className="space-y-4">
                  <div className="space-y-1">
                    <div className="space-y-2 text-sm text-gray-400">
                      <p>
                        Birthday: <span className="text-white">{birthday}</span>
                      </p>
                      <p>
                        Horoscope:{" "}
                        <span className="text-white">{horoscope}</span>
                      </p>
                      <p>
                        Zodiac: <span className="text-white">{zodiac}</span>
                      </p>
                      <p>
                        Height: <span className="text-white">{height} cm</span>
                      </p>
                      <p>
                        Weight: <span className="text-white"> {weight} kg</span>
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </>
          ) : (
            <div className="space-y-6">
              <div className="space-y-6">
                <div className="space-y-4">
                  <AboutInput label="Display name:">
                    <Input
                      name="name"
                      className="bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-500 flex-1 py-2 "
                      defaultValue={name}
                      onChange={(e) => {
                        setProfileData((prev) => ({
                          ...prev,
                          name: e.target.value,
                        }));
                      }}
                    />
                  </AboutInput>

                  <AboutInput label="Gender:">
                    <Select
                      onValueChange={(value) =>
                        setProfileData((prev) => ({ ...prev, gender: value }))
                      }
                    >
                      <SelectTrigger className="bg-gray-800/50  flex-1 border-gray-700 text-white">
                        <SelectValue placeholder="Gender" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="male">Male</SelectItem>
                        <SelectItem value="female">Female</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </AboutInput>

                  <AboutInput label="Birthday:">
                    <Input
                      type="date"
                      placeholder="Birthday:"
                      className="bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-500 flex-1 py-2"
                      value={profileData.birthday}
                      onChange={(e) =>
                        setProfileData((prev) => ({
                          ...prev,
                          birthday: e.target.value,
                        }))
                      }
                    />
                  </AboutInput>

                  <AboutInput label="Horoscope:">
                    <Input
                      placeholder="Horoscope"
                      className="bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-500 flex-1 py-2"
                      value={horoscope}
                      disabled
                    />
                  </AboutInput>

                  <AboutInput label="Zodiac:">
                    <Input
                      placeholder="Zodiac"
                      className="bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-500 flex-1 py-2"
                      value={zodiac}
                      disabled
                    />
                  </AboutInput>

                  <AboutInput label="Height:">
                    <Input
                      type="number"
                      placeholder="Height"
                      className="bg-gray-800/50 py-2 flex-1 border-gray-700 text-white placeholder:text-gray-500"
                      value={profileData.height}
                      onChange={(e) =>
                        setProfileData((prev) => ({
                          ...prev,
                          height: Number(e.target.value),
                        }))
                      }
                    />
                  </AboutInput>

                  <AboutInput label="Weight:">
                    <Input
                      type="number"
                      placeholder="Weight"
                      className="bg-gray-800/50 py-2 flex-1 border-gray-700 text-white placeholder:text-gray-500"
                      value={profileData.weight}
                      onChange={(e) =>
                        setProfileData((prev) => ({
                          ...prev,
                          weight: Number(e.target.value),
                        }))
                      }
                    />
                  </AboutInput>
                </div>
              </div>
            </div>
          )}

          {/* <div className="space-y-6"> */}
          {/* {profileData.image && (
                <div className="relative w-full h-48">
                  <Image
                  src={profileData.image}
                  alt="Profile"
                  fill
                  className="object-cover rounded-lg"
                />
                  <div className="absolute bottom-4 left-4 flex items-center gap-2">
                    <span className="text-white text-sm">Male</span>
                    <span className="text-white text-sm">•</span>
                    <span className="text-white text-sm">Virgo</span>
                    <span className="text-white text-sm">•</span>
                    <span className="text-white text-sm">Pig</span>
                  </div>
                </div>
              )} */}

          {/* </div> */}
        </div>
      </div>
    </>
  );
}
