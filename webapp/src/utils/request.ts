import axios from "axios";
import cogoToast from "cogo-toast";
import { useEffect, useState } from "react";
import { useAuth } from "../hooks/useAuth";

interface IRequest {
  url: string;
  body?: any;
  params?: any;
}

// export const defaultUrl = "https://linkbolt.onrender.com/api";
export const defaultUrl = "https://linkbolt.onrender.com/api";
// const headers = {
//   authourization: `Bearer ${isAuthenticated}`
// }

export const postData = async ({ url, body, params }: IRequest) => {
  try {
    const request = await axios.post(`${defaultUrl}/${url}`, body, {
      headers: {
        Authorization: `Bearer ${params}`,
      },
    });
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
        const response = await axios.get(`${defaultUrl}${url}`, {
          headers: {
            Authorization: `Bearer ${params}`,
          },
        });
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

//function to delete
export const deleteData = async (url: string, params: any) => {
  try {
    const deleteItem = await axios.delete(`${defaultUrl}${url}`, {
      headers: {
        Authorization: `Bearer ${params}`,
      },
    });

    const data = await deleteItem;
    if (data.status === 200) {
      cogoToast.success("Successfully deleted");
    }
  } catch (err) {
    cogoToast.error("Error deleting link");
  }
};
