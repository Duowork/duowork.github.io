import Fetchfully, {
  type FetchfullyConfig,
  type FetchfullyInstance,
} from "fetchfully";

/* ----------------------------------- */

export const apiClient = Fetchfully.create({
  baseURL: "https://jazzy-conkies-6e143d.netlify.app",
  headers: {
    "Content-Type": "application/json",
  },
} as FetchfullyConfig);
