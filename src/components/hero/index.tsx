import clsx from "clsx";
import React, { HTMLAttributes } from "react";

export type HeroProps = HTMLAttributes<HTMLDivElement>;

export default function Hero(props: HeroProps) {
  const { className, children, ...divProps } = props;

  return (
    <div 
      className={clsx('h-80 flex flex-col justify-center items-center px-16', className)} 
      {...divProps}
    >
      {children}
    </div>
  );
}