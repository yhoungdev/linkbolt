import { FC, useEffect } from "react";
import { BiCopyAlt } from "react-icons/bi";
import { copyToClipboard } from "../../../../../utils/copy_to_clipboard";
import { RiDeleteBin5Line } from "react-icons/ri";
import moment from "moment";
import { goTo } from "react-chrome-extension-router";

import DeleteLink from "../../../../page/links/delete_link";
import { useDispatch } from "react-redux";
import { updateDelete } from "../../../../../redux/slice/linkSlice";

interface IDisplay {
  url?: any;
  name?: string;
  id: string;
  timeStamp: Date;
  onClick?: () => void;
}

const DisplayLink: FC<IDisplay> = ({ name, url, id, timeStamp }) => {
  const dispatch = useDispatch();
  const data = {
    name: name,
    _id: id,
  };

  useEffect(() => {
    dispatch(updateDelete(data));
  }, []);
  return (
    <div className="flex justify-between w-full px-3 py-2 my-3 rounded-md bg-secondary">
      <div>
        <h4>{name}</h4>
        <small>{moment(timeStamp).fromNow()}</small>
      </div>

      <div className="flex gap-4 ">
        <RiDeleteBin5Line
          cursor="pointer"
          color="red"
          onClick={() => goTo(DeleteLink)}
        />
        <BiCopyAlt
          cursor={"pointer"}
          color={"#F46412"}
          onClick={() => copyToClipboard(url)}
        />
      </div>
    </div>
  );
};

export default DisplayLink;
