import { HTMLAttributes } from "react";

export type HeroSpecialTextProps = HTMLAttributes<HTMLSpanElement> & {};

export function HeroSpecialText(props: HeroSpecialTextProps) {
  const { className, ...rest } = props;

  return (
    <span 
      className="special-highlight"
      {...rest}
    />
  );
}