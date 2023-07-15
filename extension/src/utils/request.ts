import axios from "axios";
import cogoToast from "cogo-toast";
import { useEffect, useState } from "react";

interface IRequest {
  url: string;
  body?: any;
}

const defaultUrl = "http://localhost:3000/api";

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

export const useFetch = (url: string) => {
  const [data, setData] = useState<any>(null); // Specify the data type if known

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${defaultUrl}${url}`);
        setData(response.data);
      } catch (err: any) {
        console.log(err);
      }
    };

    fetchData();
  }, [url]);

  return { data };
};
