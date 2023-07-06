// import Button from "../../atoms/button/defaultButton";
// import Inputfield from "../../atoms/input/input";
// import { sendMail } from "../../../utils/sendMail";
// import { useState } from "react";

// const WaitList = () => {
//   const [email, setEmail] = useState("");

//   const submitEmail = async (ev: any) => {
//     await sendMail({
//       email: email,
//       subject: "Booom 💥💥 welcome to LinkBolt 🔗⚡",
//       body: ` <div>
//       <h3>Welcome, ${email.split("@")[0]}</h3>
//       <p>
//         Thank you for joining  <span className="font-bold">LinkBot</span>, easily
//         share and access your social media links while job hunting on any
//         device. Enjoy seamless link sharing and effortless content access
//         wherever you go!
//       </p>
//     </div>`,
//     });
//   };

//   const changeItem = (e: any) => {
//     setEmail(e.target.value);
//   };
//   return (
//     <div id="waitlist">
//       <form
//         className="flex flex-col w-80 gap-3 mx-auto md:w-[300px] launchlist-form"
//         onSubmit={submitEmail}
//         action="https://getlaunchlist.com/s/dL2fIM"
//         method="POST"
//       >
//         <Inputfield
//           name="email"
//           type="email"
//           placeholder="Email address"
//           required={true}
//           onChange={changeItem}
//         />
//         <Button type="submit">Submit email</Button>
//       </form>
//     </div>
//   );
// };

// export default WaitList;
import Button from "../../atoms/button/defaultButton";
import Inputfield from "../../atoms/input/input";
import { sendMail } from "../../../utils/sendMail";
import { useState } from "react";

const WaitList = () => {
  const [email, setEmail] = useState("");

  const submitEmail = async () => {
    await sendMail({
      email: email,
      subject: "Booom 💥💥 welcome to LinkBolt 🔗⚡",
      body: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body {
              font-family: Arial, sans-serif;
              line-height: 1.5;
              color: #333333;
            }
            
            .font-bold {
              font-weight: bold;
            }
          </style>
        </head>
        <body>
          <div>
            <h3>Welcome, ${email.split("@")[0]}</h3>
            <p>
              Thank you for joining <span class="font-bold">LinkBot</span>, easily
              share and access your social media links while job hunting on any
              device. Enjoy seamless link sharing and effortless content access
              wherever you go!
            </p>
          </div>
        </body>
        </html>
      `,
    });
  };

  const changeItem = (e: any) => {
    setEmail(e.target.value);
  };

  return (
    <div id="waitlist">
      <form
        className="flex flex-col w-80 gap-3 mx-auto md:w-[300px] launchlist-form"
        onSubmit={submitEmail}
        action="https://getlaunchlist.com/s/dL2fIM"
        method="POST"
      >
        <Inputfield
          name="email"
          type="email"
          placeholder="Email address"
          required={true}
          onChange={changeItem}
        />
        <Button type="submit">Submit email</Button>
      </form>
    </div>
  );
};

export default WaitList;
