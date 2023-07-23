import { IoMdExit } from "react-icons/io";
import { useSelector } from "react-redux";
import DashboardLayout from "../../../layout/dashboardLayout";

const Profile = () => {
  const { profileData } = useSelector((state: any) => state.profile);
  const styles = {
    backgroundImage: `url(${profileData?.picture})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  const profileImg = (
    <div
      className="bg-secondary ring-1 cursor-hand  ring-primary h-[80px] w-[80px] rounded-md "
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
          <h3 className="text-center my-[1em] font-semibold">
            {profileData?.name}
          </h3>
          <div
            className="flex items-center justify-center gap-2 font-bold text-red-600 cursor-pointer"
            onClick={handleLogout}
          >
            <IoMdExit /> <p>Logout</p>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Profile;
