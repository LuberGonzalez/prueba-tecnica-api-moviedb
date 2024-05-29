import { AxiosResponse } from "axios";
import { instance } from "../constants";

interface ApiResponse<T> {
  data: T;
}

export const getData = async <T>(endpoint: string): Promise<T> => {
  try {
    const response: AxiosResponse<ApiResponse<T>> =
      await instance.get(endpoint);
    return response.data.data;
  } catch (error) {
    console.error("Error fetching data", error);
    throw error;
  }
};
