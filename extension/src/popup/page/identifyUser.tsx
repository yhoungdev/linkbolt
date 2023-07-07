import DashboardLayout from "../../layout/dashboardLayout";
import Button from "../components/atoms/button";

const IdentifyUser = () => {
  return (
    <DashboardLayout>
      <div className="my-4 gap-3 flex flex-col items-center  ">
        <div className="bg-secondary h-[50px] w-[50px] rounded-xl "></div>
        <h3>obiabo@gmail.com</h3>
        <Button>Share Link</Button>
      </div>
    </DashboardLayout>
  );
};
export default IdentifyUser;
