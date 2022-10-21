export const API_URL =
  process.env.NODE_ENV === "production"
    ? "https://grab-market-server.herokuapp.com"
    : "http://43.201.71.155:8088";
