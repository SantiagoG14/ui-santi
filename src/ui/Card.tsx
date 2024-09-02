import type { ComponentProps, PropsWithChildren } from "react";

interface CardProps extends PropsWithChildren, ComponentProps<"div">{}
export function Card({children, ...rest}: CardProps) {
  return <div {...rest}>{children}</div>
}
