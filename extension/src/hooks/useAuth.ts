import { useSelector } from "react-redux";

export const useAuth = () => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
  const { auth_jwt } = useSelector((state) => state?.auth);
  const isAuthenticated = auth_jwt;
  return { isAuthenticated };
};


