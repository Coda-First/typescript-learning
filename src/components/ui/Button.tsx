import { ReactNode } from "react";

type PropsWithChildren = {
  children?: ReactNode,
}

type ButtonProps = PropsWithChildren<{
  color: string
}>

export const Button = (props: ButtonProps) => {
  return (
    <button style={{
      color: props.color
    }} className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input shadow-sm hover:bg-slate-200 h-10 rounded-md px-8">{props.children}</button>
  )
};

