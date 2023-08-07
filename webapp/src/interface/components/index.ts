import { ChangeEvent, ReactNode } from "react";

export interface IButton {
  children: ReactNode;
  bg?: string;
  border?: string;
  onClick?: (event: any) => void;
  type?: "submit" | "reset" | "button";
  loading?: boolean;
}

export interface ITextField<T> {
  value?: T;
  name: string;
  placeholder?: string;
  required?: boolean;
  label?: string;
  type?: string;
  error?: ReactNode;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

export interface IPictures {
  src: string | ReactNode;
  alt: string | ReactNode;
  width?: string | number;
  height?: string | number;
}
