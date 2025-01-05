import { ReactNode } from "react";
import { Button } from "../Button";
import React from "react";

export interface INavBarItemProps {
  label: string;
  children?: ReactNode;
  route?: string;
}
export function NavBarItem({ label, children, route }: INavBarItemProps) {
  return <Button>{label}</Button>;
}
