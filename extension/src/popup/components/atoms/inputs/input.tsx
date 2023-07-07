import { FC, useRef } from "react";
import { ITextField } from "../../../../interface/components";

const Input: FC<ITextField<string>> = ({
  value,
  onChange,
  required,
  name,
  placeholder,
  label,
  type,
}: ITextField<string>) => {
  const input = useRef(null);

  return (
    <div className="my-4">
      <h4>{label}</h4>
      <input
        type={type ? type : "text"}
        value={value}
        name={name}
        ref={input}
        placeholder={placeholder}
        className={
          " my-[1px] px-[16px] outline-none  py-[8px] w-[100%] bg-secondary"
        }
        onChange={onChange}
        required={required}
      />
    </div>
  );
};
export default Input;
