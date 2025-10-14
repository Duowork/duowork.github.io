import Fetchfully, { type FetchfullyConfig, type FetchfullyInstance } from "fetchfully";

/* ----------------------------------- */

export const apiClient = Fetchfully.create({
  baseURL: "https://public.herotofu.com",
  headers: {
    "Content-Type": "application/json",
  },
} as FetchfullyConfig);