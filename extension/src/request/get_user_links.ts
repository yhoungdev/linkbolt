import { useState, useEffect } from "react";
import { defaultUrl, useFetch } from "../utils/request";
import { useDispatch, useSelector } from "react-redux";
import { updateUserTotalLinks } from "../redux/slice/linkSlice";
import { useAuth } from "../hooks/useAuth";
import axios from "axios";

export const GetUserLinks = () => {
  const [links, setLinks] = useState([]);
  const dispatch = useDispatch();
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${defaultUrl}/user/links`, {
          headers: {
            Authorization: `Bearer ${isAuthenticated}`,
          },
        });

        if (response?.data?.data) {
          setLinks(response.data.data);
          dispatch(updateUserTotalLinks(response?.data?.data?.length));
        }
      } catch (error) {
        console.error("Error fetching user links:", error);
      }
    };

    if (isAuthenticated) {
      fetchData();
    }
  }, [isAuthenticated, dispatch]);
};
