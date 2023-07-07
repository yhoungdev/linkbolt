import { BiHomeSmile } from "react-icons/bi";
import { TbMessage2Bolt } from "react-icons/tb";
import { PiLinkSimpleHorizontalBold } from "react-icons/pi";
import MyLinks from "../../popup/page/myLinks";
import Message from "../../popup/page/message";
import IndexPage from "../../popup/page";

export const tabNavigations = [
  // {
  //   id: 1,
  //   name: "Home",
  //   icon: <BiHomeSmile />,
  //   paths: IndexPage,
  // },
  {
    id: 2,
    name: "Links",
    icon: <PiLinkSimpleHorizontalBold />,
    paths: MyLinks,
  },
  {
    id: 3,
    name: "Message",
    icon: <TbMessage2Bolt />,
    paths: Message,
  },
];
