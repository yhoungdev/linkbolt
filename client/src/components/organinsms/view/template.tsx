import { FC } from "react";

interface ITemplate {
  name: string;
}
export const ViewTemplate: FC<ITemplate> = ({ name }) => {
  return (
    <div>
      <h3>Welcome, {name}</h3>
      <p>
        Welcome aboard! With <span className="font-bold">LinkBot</span>, easily
        share and access your social media links while job hunting on any
        device. Enjoy seamless link sharing and effortless content access
        wherever you go!
      </p>
    </div>
  );
};
