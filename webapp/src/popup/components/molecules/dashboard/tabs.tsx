import { Fragment } from "react";
import { tabNavigations } from "../../../../utils/contents/tabNavigations";
import { Link, goTo } from "react-chrome-extension-router";
import IndexPage from "../../../page";
import { BiHomeSmile } from "react-icons/bi";
const DashboardTabs = () => {
  return (
    <div className="flex items-center justify-between text-center ">
      <Link component={IndexPage}>
        <div
          onClick={() => goTo(IndexPage)}
          className="flex flex-col items-center cursor-pointer hover:text-primary"
        >
          <h3>
            <BiHomeSmile />
          </h3>
          <h3>Home</h3>
        </div>
      </Link>
      {tabNavigations.map(({ icon, name, paths }, index) => {
        return (
          <Fragment key={index}>
            <div
              onClick={() => goTo(paths)}
              className="flex flex-col items-center cursor-pointer hover:text-primary"
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
