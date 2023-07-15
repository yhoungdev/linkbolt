import { FC } from "react";
import { BiCopyAlt } from "react-icons/bi";
import { copyToClipboard } from "../../../../../utils/copy_to_clipboard";

interface IDisplay {
  url?: string;
  name?: string;
  onClick?: () => void;
}

const DisplayLink: FC<IDisplay> = () => {
  return (
    <div className="flex justify-between w-full px-3 py-2 rounded-md bg-secondary">
      <h4>LinkedIn</h4>
      <BiCopyAlt
        cursor={"pointer"}
        color={"#F46412"}
        onClick={() => copyToClipboard()}
      />
    </div>
  );
};

export default DisplayLink;
