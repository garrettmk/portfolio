import isCapital from "@/util/is-capital";
import { HTMLAttributes } from "react";
import { HeroSpecialText } from "./hero-special-text";
import clsx from "clsx";

export type HeroTitleProps = Omit<HTMLAttributes<HTMLHeadingElement>, 'children'> & {
  children: string;
}

export default function HeroTitle(props: HeroTitleProps) {
  const { children, className, ...headingProps } = props;
  const words = children.split(' ');

  return (
    <h1 className={clsx("text-6xl md:text-8xl font-bold my-4 flex flex-row flex-wrap justify-center", className)} {...headingProps}>
      {words.map((word, idx) => {
        const [firstLetter, ...remainingLetters] = word;

        return (
          <span key={idx}>
            {isCapital(firstLetter) ? (
              <HeroSpecialText>{firstLetter}</HeroSpecialText>
            ) : (
              firstLetter
            )}
            {remainingLetters}
            {idx !== words.length - 1 && <>&nbsp;</>}
          </span>
        );
      })}
    </h1>
  );
}