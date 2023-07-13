import DashboardLayout from "../../layout/dashboardLayout";
import NullData from "../components/atoms/nullData";
import { Link, goTo } from "react-chrome-extension-router";
import Add_new_link from "./links/add_link";

const MyLinks = () => {
  const go_to_link = () => goTo(Add_new_link);

  const add_link = (
    <div
      onClick={go_to_link}
      className="flex  justify-center rounded-full  my-[1em] px-2 py-2 bg-primary h-[60px] w-[60px] cursor-pointer"
    >
      <h1 className="text-4xl text-white">+</h1>
    </div>
  );
  return (
    <DashboardLayout>
      <NullData name="links" />

      {add_link}
    </DashboardLayout>
  );
};
export default MyLinks;
