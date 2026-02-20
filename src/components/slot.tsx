
import { HTMLAttributes } from "react";
import { ReactElement } from "react";
import { Children, cloneElement, isValidElement, type PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";


export function Slot (props: PropsWithChildren<HTMLAttributes<HTMLElement>>) {
const children = Children.toArray(props.children).filter(c => isValidElement(c))

if (children.length != 1) {
   throw new Error("Slot must have exactly one child element");

}
const child = children[0] as ReactElement<HTMLAttributes<HTMLElement>>

return cloneElement (child, {   
    ...props,
   
  ...child.props,
  className: (
   (props.className || child.props.className)
      ? twMerge(props.className, child.props.className) 
      : undefined
  )
}
) }
