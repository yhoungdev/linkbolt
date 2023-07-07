import { Fragment } from "react";
import { tabNavigations } from "../../../../utils/contents/tabNavigations";
import { Link, goTo } from "react-chrome-extension-router";
import IndexPage from "../../../page";
import { BiHomeSmile } from "react-icons/bi";
const DashboardTabs = () => {
  return (
    <div className="flex justify-between text-center items-center ">
      <Link component={IndexPage}>
        <div
          onClick={() => goTo(IndexPage)}
          className="flex cursor-pointer  flex-col items-center hover:text-primary"
        >
          <h3>
            <BiHomeSmile />
          </h3>
          <h3>Home</h3>
        </div>
      </Link>
      {tabNavigations.map(({ id, icon, name, paths }) => {
        return (
          <Fragment key={id}>
            <div
              onClick={() => goTo(paths)}
              className="flex cursor-pointer  flex-col items-center hover:text-primary"
            >
              <h3>{icon}</h3>
              <h3>{name}</h3>
            </div>
          </Fragment>
        );
      })}
    </div>
  );
};
export default DashboardTabs;
