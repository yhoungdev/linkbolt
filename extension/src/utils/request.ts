import axios from "axios";
import cogoToast from "cogo-toast";
import { useEffect, useState } from "react";
import { useAuth } from "../hooks/useAuth";

interface IRequest {
  url: string;
  body?: any;
}






const defaultUrl = "http://localhost:3000/api";



// const headers = {
//   authourization: `Bearer ${isAuthenticated}` 
// }

export const postData = async ({ url, body }: IRequest) => {
  try {
    const request = await axios.post(`${defaultUrl}/${url}`, body);
    const response = request;
    const responseData = response?.data?.message;
    cogoToast.success(responseData);
    return { response };
  } catch (err: any) {
    const error = err?.response?.data?.error;
    cogoToast.error(error);
  }
};

export const useFetch = (url: string, params?: any) => {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<any>(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${defaultUrl}${url}`, params);
        setData(response.data);
      } catch (err: any) {
        const error = err;
        setError(error);
        console.log(err?.response?.data);
      }
    };

    fetchData();
  }, [url]);

  return { data, error };
};
