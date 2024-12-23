import { UserProfile } from "../schema/type";

export async function updateProfile({
  name,
  birthday,
  height,
  weight,
  interests = [""],
}: UserProfile) {
  const token = localStorage.getItem("access_token");
  const createProfile = await fetch(
    "https://techtest.youapp.ai/api/updateProfile",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-access-token": `${token}` || "",
      },
      body: JSON.stringify({
        name,
        birthday,
        height,
        weight,
        interests,
      }),
    }
  );

  const data = await createProfile.json();
  return data;
}
