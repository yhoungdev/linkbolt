import { FC } from "react";
import { BiCopyAlt } from "react-icons/bi";
import { copyToClipboard } from "../../../../../utils/copy_to_clipboard";
import { RiDeleteBin5Line } from "react-icons/ri";
import { deleteData } from "../../../../../utils/request";
import { useAuth } from "../../../../../hooks/useAuth";

interface IDisplay {
  url?: string;
  name?: string;
  id: string;
  onClick?: () => void;
}

const DisplayLink: FC<IDisplay> = ({ name, url, id }) => {
  const { isAuthenticated } = useAuth();
  const removeLink = async () => {
    const data = await deleteData(`/user/delete/link/${id}`, isAuthenticated);
    console.log(data, " this is delete in action ");
  };

  return (
    <div className="flex justify-between w-full px-3 py-2 my-3 rounded-md bg-secondary">
      <h4>{name}</h4>

      <div className="flex gap-4 ">
        <BiCopyAlt
          cursor={"pointer"}
          color={"#F46412"}
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          //@ts-ignore

          onClick={() => copyToClipboard(url)}
        />
        <RiDeleteBin5Line cursor="pointer" color="red" onClick={removeLink} />
      </div>
    </div>
  );
};

export default DisplayLink;
