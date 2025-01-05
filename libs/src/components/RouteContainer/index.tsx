import React from "react";
import { ElementType, ReactNode } from "react";

export interface IRouteContainerProps {
  /**
   * The content of the component
   */
  children?: ReactNode;

  /**
   * The component used for the root node. Either a string to use a HTML element or a component
   */
  component?: ElementType;

  /**
   * If true, loading view will be shown.
   */
  loading?: boolean;

  /**
   * Set additional classes to the route container
   */
  className?: string;
}
export function RouteContainer({
  children,
  className,
  loading,
}: IRouteContainerProps) {
  return (
    <div
      style={{
        flex: 1,
        borderRadius: "8px",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        overflowX: "hidden",
      }}
    >
      {children}
    </div>
  );
}
