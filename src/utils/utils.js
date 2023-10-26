export const headerOptions = ({ data = null, method, token = null }) => {
  const headers = {
    "Content-Type": "application/json",
  };

  // If a token is provided, add it to the headers
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  const requestBody = {
    method,
    headers,
    ...(data && { body: JSON.stringify(data) }),
  };
  return requestBody;
};

export const autoCalculateFormInputs = [
  { id: 0, input: "Land" },
  { id: 1, input: "Fertilizer" },
  { id: 2, input: "Seeds" },
];
export const intiatePaegable = { page: 0, size: 40 };
