import { Link } from "react-chrome-extension-router";
import { PiCaretRightBold } from "react-icons/pi";
import ShareWith from "../../../../page/ShareLink";
const ShareLinks = () => {
  return (
    <Link component={ShareWith}>
      <div className="my-3 bg-night  p-3 rounded-xl cursor-pointer hover:bg-secondary">
        <h4 className="text-lg font-bold my-3">Tap to share links</h4>
        <div className="flex align-middle justify-between">
          <div>
            <div className={"flex "}>
              {[1, 2, 4].map((items) => {
                return (
                  <div className="bg-secondary  left-1 border-2 border-primary h-[45px] w-[45px] rounded-full "></div>
                );
              })}
            </div>
          </div>
          <div>
            <PiCaretRightBold />
          </div>
        </div>
      </div>
    </Link>
  );
};
export default ShareLinks;
