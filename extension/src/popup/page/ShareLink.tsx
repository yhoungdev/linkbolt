import DashboardLayout from "../../layout/dashboardLayout";
import Input from "../components/atoms/inputs/input";
import Button from "../components/atoms/button";
import { Link } from "react-chrome-extension-router";
import IdentifyUser from "./identifyUser";
const ShareWith = () => {
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

          <textarea
            placeholder="Link (s) to share "
            className="   w-full bg-secondary p-3 outline-[0.6px] outline-primary "
          />

          <Link component={IdentifyUser}>
            <Button>Continue</Button>
          </Link>
        </form>
      </div>
    </DashboardLayout>
  );
};

export default ShareWith;
