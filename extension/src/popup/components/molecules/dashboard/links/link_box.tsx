import { FC } from "react";
import { BiCopyAlt } from "react-icons/bi";
import { copyToClipboard } from "../../../../../utils/copy_to_clipboard";

interface IDisplay {
  url?: string;
  name?: string;
  onClick?: () => void;
}

const DisplayLink: FC<IDisplay> = ({ name, url }) => {
  return (
    <div className="flex justify-between w-full px-3 py-2 my-3 rounded-md bg-secondary">
      <h4>{name}</h4>
      <BiCopyAlt
        cursor={"pointer"}
        color={"#F46412"}
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        
        onClick={() => copyToClipboard(url)}
      />
    </div>
  );
};

export default DisplayLink;
