import DashboardLayout from "../../../layout/dashboardLayout";
import Button from "../../components/atoms/button";
import { useSelector } from "react-redux";
import { deleteData } from "../../../utils/request";
import { goBack, goTo } from "react-chrome-extension-router";
import MyLinks from "../myLinks";
import { useAuth } from "../../../hooks/useAuth";
import { FcDeleteDatabase } from "react-icons/fc";
import { useState } from "react";
const DeleteLink = () => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
  const { isAuthenticated } = useAuth();
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
  const { isDeleteId } = useSelector((state) => state?.links);
  const [loader, setLoader] = useState(false);
  const removeLink = async () => {
    try {
      setLoader(true);
      await deleteData(`/user/delete/link/${isDeleteId?.id}`, isAuthenticated);
      setTimeout(() => goTo(MyLinks), 1000);
    } catch (err) {
      console.log(err);
    } finally {
      setLoader(false);
    }
  };

  return (
    <DashboardLayout>
      <div className="flex justify-center items-center my-[2em] flex-col">
        <FcDeleteDatabase size={"3em"} />
        <p className="text-center px-[2em] my-[.6em]">
          {isDeleteId?.name} will be deleted ?
        </p>
        <div className="flex w-full gap-3">
          <Button onClick={goBack} bg={"bg-secondary"}>
            Cancel
          </Button>
          <Button onClick={removeLink} loading={loader}>
            Continue
          </Button>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default DeleteLink;
