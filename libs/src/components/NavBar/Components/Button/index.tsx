import React from "react";
import { MouseEventHandler, ReactNode } from "react";

export interface IButtonProps {
  /**
   * Set the content to be displayed within the button
   */
  children: ReactNode;

  /**
   * Set the function that will be called when the button is pressed
   */
  onClick?: MouseEventHandler | undefined;
}
export function Button({ children, onClick }: IButtonProps) {
  return <button onClick={onClick}>{children}</button>;
}
