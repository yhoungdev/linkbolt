import Logo from "../../atoms/logo";

const Loader = () => {
  return (
    <div className="h-[250px] w-full flex items-center justify-center">
      <div>
        <Logo />
        <span className="loader mt-5"></span>
      </div>
    </div>
  );
};
export default Loader;
