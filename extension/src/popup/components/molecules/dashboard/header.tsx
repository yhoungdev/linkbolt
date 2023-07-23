import Index from "../../../page";
import Logo from "../../atoms/logo";
import { Link } from "react-chrome-extension-router";
import { useSelector } from "react-redux";

const DashboardHeader = () => {
  const { profileData } = useSelector((state: any) => state.profile);
  const styles = {
    backgroundImage: `url(${profileData?.picture})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  return (
    <div className="flex items-center justify-between">
      <Link component={Index}>
        <Logo />
      </Link>

      <div
        className="bg-secondary ring-1  ring-primary h-[50px] w-[50px] rounded-full "
        style={styles}
      ></div>
    </div>
  );
};
export default DashboardHeader;
