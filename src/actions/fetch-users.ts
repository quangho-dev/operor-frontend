"use server";

export async function fetchUsers(offset: number) {
  const limit = 10;
  const apiUrl = `http://localhost:3000/users?limit=${limit}&offset=${offset}`;
  try {
    const response = await fetch(apiUrl);

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
}
