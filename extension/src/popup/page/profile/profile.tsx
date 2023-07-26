import { IoMdExit } from "react-icons/io";
import { useSelector } from "react-redux";
import DashboardLayout from "../../../layout/dashboardLayout";

const Profile = () => {
  const { profileData } = useSelector((state: any) => state.profile);
  const defaultImage =
    "https://res.cloudinary.com/dhdqt4xwu/image/upload/v1690355786/linkSync/mfnwzadauofmatsqxjsl.svg";
  const styles = {
    backgroundImage: `url(${profileData?.picture || defaultImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  const profileImg = (
    <div
      className={`bg-secondary ring-1 cursor-hand  ring-primary h-[80px] w-[80px] ${
        profileData?.picture ? "rounded-md" : "rounded-full"
      } `}
      style={styles}
    ></div>
  );

  const handleLogout = () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    chrome.storage.local.clear();
    window.location.reload();
  };

  return (
    <DashboardLayout>
      <div className="my-[5em] text-center flex justify-center ">
        <div>
          <center>{profileImg}</center>

          <div className="my-[1em] leading-[1.5em]">
            <h3 className="font-semibold text-center">{profileData?.name}</h3>

            <h5>{profileData?.email}</h5>

            <div
              className="flex items-center justify-center gap-2 font-bold text-red-600 cursor-pointer"
              onClick={handleLogout}
            >
              <IoMdExit /> <p>Logout</p>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Profile;
