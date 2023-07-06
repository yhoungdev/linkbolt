import Logo from "../../atoms/logo";

const DashboardHeader = () => {
  return (
    <div className="flex align-middle  justify-between">
      <Logo />

      <div className="bg-secondary h-[50px] w-[50px] rounded-full "></div>
    </div>
  );
};
export default DashboardHeader;
