import { ChangeEvent, ReactNode } from "react";

export interface IButton {
  children: ReactNode;
  background?: string;
  border?: string;
  type?: string;
}

export interface ITextField<T> {
  value?: T;
  required?: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export interface IPictures {
  src: string | ReactNode;
  alt: string | ReactNode;
  width?: string | number;
  height?: string | number;
}
