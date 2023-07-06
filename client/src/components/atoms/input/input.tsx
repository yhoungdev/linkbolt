import { ChangeEvent, FC } from "react";

interface ITextFie {
  type: string;
  placeholder?: string;
  required?: boolean;
  name: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Inputfield: FC<ITextFie> = ({
  required,
  type,
  placeholder,
  name,
  onChange,
}) => {
  return (
    <div>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full p-2 rounded-lg outline-none"
        color="text-black"
        name={name}
        required={required}
        onChange={onChange}
      />
    </div>
  );
};
export default Inputfield;
