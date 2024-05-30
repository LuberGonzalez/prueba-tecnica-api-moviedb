import { AxiosResponse } from "axios";
import { instance } from "../constants";

export const getData = async <T>(endpoint: string): Promise<T> => {
  try {
    const response: AxiosResponse = await instance.get(endpoint);
    return response.data;
  } catch (error) {
    console.error("Error fetching data", error);
    throw error;
  }
};
