import { useAuth } from "../hooks/useAuth";
import axios from "axios";
import { defaultUrl } from "../utils/request";
import { useDispatch } from "react-redux";
import { updateProfileState } from "../redux/slice/userProfileSlice";

export const getProfile = async () => {
  const dispatch = useDispatch();
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
  const { isAuthenticated } = useAuth();
  try {
    const getData = await axios.get(`${defaultUrl}/user/profile`, {
      headers: {
        Authorization: `Bearer ${isAuthenticated}`,
      },
    });

    const response = await getData;
    const data = response?.data?.data;
    dispatch(updateProfileState(data));
  } catch (err) {
    console.log(err);
  }
};
