export const fetchRewardData = async (employeeId: string): Promise<any> => {
  const apiUrl = `https://run.mocky.io/v3/27cd586d-e5f8-403f-8334-8bce38a31433`;
  console.log(employeeId);
  try {
    const response = await fetch(apiUrl, {
      method: "POST",
    });
    if (!response.ok) {
      throw new Error("Failed to fetch reward data");
    }
    return response.json();
  } catch (error) {
    console.error("Error fetching reward data:", error);
    throw error;
  }
};
