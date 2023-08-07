import Index from "../../../page";
import Profile from "../../../page/profile/profile";
import Logo from "../../atoms/logo";
import { Link, goTo } from "react-chrome-extension-router";
import { useSelector } from "react-redux";
import {
  NotificationBell,
  PopoverNotificationCenter,
  useNotificationCenter,
  useNotifications,
} from "@novu/notification-center";
import Skeleton from "react-loading-skeleton";

const DashboardHeader = () => {
  const { profileData } = useSelector((state: any) => state.profile);
  const defaultImage =
    "https://res.cloudinary.com/dhdqt4xwu/image/upload/v1690355786/linkSync/mfnwzadauofmatsqxjsl.svg";
  const styles = {
    backgroundImage: `url(${profileData?.picture || defaultImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  const notifications = useNotifications();

  return (
    <div className="flex items-center justify-between">
      <Link component={Index}>
        <Logo />
      </Link>

      {/* todo: fix re-renderign issues here */}
      <div className="flex items-center gap-2">
        {notifications && notifications.unseenCount !== null ? (
          <PopoverNotificationCenter colorScheme="dark">
            {({ unseenCount }) => (
              <NotificationBell unseenCount={unseenCount} />
            )}
          </PopoverNotificationCenter>
        ) : null}

        <div onClick={() => goTo(Profile)}>
          {!profileData?.picture ? (
            <Skeleton circle={true} height={50} width={50} />
          ) : (
            <div
              className="bg-secondary relative ring-1 cursor-pointer  ring-primary h-[50px] w-[50px] rounded-full "
              style={styles}
            ></div>
          )}
        </div>
      </div>
    </div>
  );
};
export default DashboardHeader;
