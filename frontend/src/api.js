const API_URL ="https://d3dlczzys8rvr5.cloudfront.net";

export const getMessage = async () => {
  try {
    const response = await fetch(`${API_URL}/api/message`);

    if (!response.ok) {
      throw new Error("Backend not reachable");
    }

    return response.json();
  } catch (error) {
    console.error("Error:", error);
    return { message: "Backend not connected ❌" };
  }
};