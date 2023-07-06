import ContainerLayout from "../../../layouts/containerLayout";
import Card from "../../atoms/card/card";
import WailtList from "../../molecules/wailtlist";
import { EncryptedSvg, GloalSvg, ServerSvg } from "./featureSvg";

const Features = () => {
  const features = [
    {
      icon: GloalSvg,
      title: "Share Links Across Devices",
      content: `Effortlessly connect and share links between devices, streamlining collaboration and communication.`,
    },
    {
      icon: ServerSvg,
      title: "Unify Social links",
      content: `Gather your social linnks in a single place when searching / applying for jobs online`,
    },
    {
      icon: EncryptedSvg,
      title: "Encrypted Links",
      content: `Protect your data with encrypted links, enabling seamless and secure sharing across all your devices. All your links are encrypted`,
    },
  ];
  return (
    <div className="py-5 mt-10 ">
      <ContainerLayout>
        <h1 className="my-10    mx-auto text-4xl font-bold leading-[1.5em] text-center md:w-[600px] md:text-7xl md:leading-[1.3em]">
          Unify Your Links, <span className="gradient-text">Everywhere</span>
        </h1>
        <div className="flex flex-col gap-[2em] sm:flex-row px-small lg:px-large md:px-[2em]">
          {features?.map(({ title, content, icon }, index) => {
            return (
              <Card key={index}>
                <div>
                  {/* <div className="p-8 bg-black rounded-full w-fit"></div> */}
                  {icon}
                </div>
                <h1 className="mt-[1em] font-bold">{title}</h1>
                <p className="my-2">{content}</p>
              </Card>
            );
          })}
        </div>

        <div className=" my-[2em] flex justify-center">
          {/* <Button px={"px-[3em]"}>Comming soon</Button> */}
        </div>

        <WailtList />
      </ContainerLayout>
    </div>
  );
};

export default Features;
