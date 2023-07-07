import { FcPackage } from "react-icons/fc";
interface INullData {
  name?: string;
}
const NullData = ({ name }: INullData) => {
  return (
    <div className=" flex items-center flex-col gap-3  my-[4em]">
      <FcPackage size={"5em"} />
      <div>You have no {name || "data "} yet</div>
    </div>
  );
};

export default NullData;
