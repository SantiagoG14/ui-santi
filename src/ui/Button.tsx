import type { PropsWithChildren, ComponentProps } from 'react'
interface ButtonProps extends PropsWithChildren, ComponentProps<"button"> { }

export function Button({ children, ...rest }: ButtonProps) {
  return <button {...rest}>{children}</button>
}
