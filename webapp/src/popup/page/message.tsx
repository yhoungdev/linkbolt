import DashboardLayout from "../../layout/dashboardLayout";
import NullData from "../components/atoms/nullData";

const Message = () => {
  return (
    <DashboardLayout>
      <NullData name="message" content="Comming Soon" />
    </DashboardLayout>
  );
};
export default Message;
