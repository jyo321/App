const API_URL ="http://test-dev-1425348621.us-east-1.elb.amazonaws.com/api/message";

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