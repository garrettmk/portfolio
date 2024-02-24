'use client';

import useSpecialHighlight from "@/hooks/use-special-highlight";
import { HTMLAttributes, useRef } from "react";

export type HeroSpecialTextProps = HTMLAttributes<HTMLSpanElement> & {};

export function HeroSpecialText(props: HeroSpecialTextProps) {
  const { className, ...rest } = props;
  const ref = useRef<HTMLSpanElement>(null);
  const styles = useSpecialHighlight(ref);

  return (
    <span 
      ref={ref}
      style={styles}
      {...rest}
    />
  );
}