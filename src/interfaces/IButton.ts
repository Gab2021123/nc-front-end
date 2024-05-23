import { MouseEventHandler } from "react";

export interface IButton {
  children: string;
  className: string;
  click: MouseEventHandler<HTMLButtonElement>;
  left: boolean;
  right: boolean;
}
