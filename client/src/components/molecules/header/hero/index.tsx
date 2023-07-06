import ContainerLayout from "../../../../layouts/containerLayout";
import Button from "../../../atoms/button/defaultButton";

const IndexHero = () => {
  const goToBottom = () =>
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });

  return (
    <ContainerLayout>
      <div className="flex flex-col-reverse items-center justify-center gap-3 my-20 link-font_dm-sans md:flex-row">
        <div className="text-center md:w-1/2 md:text-left ">
          <h1 className="my-5 text-4xl font-bold leading-[1.5em] text-center md:text-left md:text-7xl md:leading-[1.3em]">
            Seamless Link Sharing{" "}
            <span className="gradient-text">Connecting Devices.</span>
          </h1>

          <Button onClick={goToBottom}>Get started</Button>
        </div>
        <div className="bg-white-100 w-50 ">
          <img
            src="https://res.cloudinary.com/dhdqt4xwu/image/upload/v1686073566/linkSync/IMAGE_zhrecj.svg"
            alt="Link Sync"
            className="w-full max-w-xs mt-6 md:max-w-none md:w-auto rotate-item"
          />
        </div>
      </div>
    </ContainerLayout>
  );
};

export default IndexHero;
