import { useState , useEffect } from "react";
import { useFetch } from "../utils/request";
import { useDispatch, useSelector } from "react-redux";
import { updateUserLink } from "../redux/slice/linkSlice";
 
export const GetUserLinks = () => {
    const [ links , setLinks ] = useState([])
    const dispatch = useDispatch(); 
    const { data } = useFetch("/user/links/64b1bd1ebfa735f8870f953d");
    useEffect(() => {
        setLinks(data?.data);
    }, [data, links]);
    dispatch(updateUserLink(links)); 
   
   //user_links?.length || 0

}