const API_URL = process.env.REACT_APP_API_URL;

export const getMessage = async () => {
  try {
    const response = await fetch(`${API_URL}/api/message`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  } catch (err) {
    console.error("Error fetching backend data:", err);
    return { message: "Backend unavailable" };
  }
};