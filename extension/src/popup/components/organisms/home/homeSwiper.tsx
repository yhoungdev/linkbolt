import { Fragment } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

const HomeSwiper = () => {
  const devices = (
    <div className="text-center">
      <h1 className="text-3xl my-4">🔗</h1>
      <h3 className="font-bold text-2xl   ">
        Seamless Link Sharing
        <span className="_mixed_text"> Connecting Devices.</span>
      </h3>
    </div>
  );

  const messages = (
    <div className="text-center">
      <h1 className="text-3xl my-4">🔑</h1>
      <h3 className=" font-bold text-2xl   ">
        Send
        <span className="_mixed_text"> Cryptographic </span> Messages
      </h3>
    </div>
  );

  const share = (
    <div className="text-center">
      <h1 className="text-3xl my-4">😎</h1>
      <h3 className=" font-bold text-2xl text-center  ">
        Share
        <span className="_mixed_text"> your links with </span> Friends
      </h3>
    </div>
  );

  const slides = [devices, messages, share];
  return (
    <>
      <Swiper
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <div className="my-10">
          {slides.map((items, index) => {
            return (
              <Fragment key={index}>
                <SwiperSlide>{items}</SwiperSlide>
              </Fragment>
            );
          })}
        </div>
      </Swiper>
    </>
  );
};
export default HomeSwiper;
