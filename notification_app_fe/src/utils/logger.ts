import axios from "axios";

export const Log = async (
  stack: string,
  level: string,
  packageName: string,
  message: string
) => {
  try {
    await axios.post(
      "http://4.224.186.213/evaluation-service/logs",
      {
        stack,
        level,
        package: packageName,
        message,
      },
      {
        headers: {
          Authorization: `Bearer ${
            import.meta.env.VITE_ACCESS_TOKEN
          }`,
        },
      }
    );
  } catch (error) {}
};