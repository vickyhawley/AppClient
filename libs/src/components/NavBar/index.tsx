import React from "react";
import { ReactNode } from "react";

export interface INavBarProps {
  /**
   * Set the content of the NavBar
   */
  children?: ReactNode;
}

export function NavBar({ children }: INavBarProps) {
  return <div>{children}</div>;
}
