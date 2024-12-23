export async function getProfile() {
  const token = localStorage.getItem("access_token");

  const response = await fetch("https://techtest.youapp.ai/api/getProfile", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "x-access-token": `${token}` || "",
    },
  });

  if (!response.ok) {
    return { message: "Failed to fetch profile" };
  }

  return await response.json();
}
