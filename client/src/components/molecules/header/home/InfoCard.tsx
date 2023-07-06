import ContainerLayout from "../../../../layouts/containerLayout";
import Card from "../../../atoms/card/card";

const InfoCard = () => {
  return (
    <ContainerLayout>
      <Card>
        <div className="flex items-center gap-5 ">
          <div className="p-8 bg-black rounded-full w-fit nft_svg"> </div>
          <div>
            <p>0x456061F47628bA</p>
            <p>Nakamoto</p>
          </div>
        </div>

        <div className="my-5">
          <p>
            Effortlessly connect and share links across devices for seamless
            collaboration." "Instantly share links between devices for
            convenient and uninterrupted information flow.
          </p>
        </div>
      </Card>
    </ContainerLayout>
  );
};
export default InfoCard;
