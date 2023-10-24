export const headerOptions = ({ data, method, token = null }) => {
  const headers = {
    "Content-Type": "application/json",
  };

  // If a token is provided, add it to the headers
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  return {
    method,
    headers,
    body: JSON.stringify(data),
  };
};
