import { Link } from "react-chrome-extension-router";
import { PiCaretRightBold } from "react-icons/pi";
import ShareWith from "../../../../page/ShareLink";
const ShareLinks = () => {
  const images = [
    "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&amp;fit=facearea&amp;facepad=2&amp;w=48&amp;h=48&amp;q=80",
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=facearea&facepad=2&w=48&h=48&q=80",
    "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=facearea&facepad=2&w=48&h=48&q=80",
    "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&fit=facearea&facepad=2&w=48&h=48&q=80",
  ];
  return (
    <Link component={ShareWith}>
      <div className="p-3 my-3 cursor-pointer bg-night rounded-xl hover:bg-secondary">
        <div className="flex items-center justify-between">
          <h4 className="my-3 text-lg font-bold ">Tap to share links</h4>
          <p className="text-primary">Coming Soon</p>
        </div>
        <div className="flex justify-between align-middle">
          <div>
            <div className="flex">
              {images.map((items, index) => {
                const marginLeft = index !== 0 ? "-1em" : 0; // Apply negative margin to all items except the first one

                return (
                  <img
                    className="ring-2  ring-primary  h-[45px] w-[45px] rounded-full"
                    src={items}
                    alt="User images"
                    loading="lazy"
                    decoding="async"
                    style={{ marginLeft }}
                  />
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
