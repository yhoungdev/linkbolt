import DashboardLayout from "../../../layout/dashboardLayout";
import Input from "../../components/atoms/inputs/input";
import Button from "../../components/atoms/button";

const Add_new_link = () => {
  return (
    <DashboardLayout>
      <div>
        <form>
          <Input
            type={"email"}
            label="Receiver's Email"
            placeholder="link@bolt.click"
            name="user_email"
          />

          <Button>Add Link</Button>
        </form>
      </div>
    </DashboardLayout>
  );
};

export default Add_new_link;
