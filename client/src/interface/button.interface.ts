import { ReactNode } from "react";

export interface IButton {
  children: ReactNode;
  color?: string;
  type?: string;
  width?: string | number;
  px?: string;
  bg?: string;
  onClick?: () => void;
}
