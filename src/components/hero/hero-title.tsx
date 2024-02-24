import isCapital from "@/util/is-capital";
import { HTMLAttributes } from "react";
import { HeroSpecialText } from "./hero-special-text";

export type HeroTitleProps = Omit<HTMLAttributes<HTMLHeadingElement>, 'children'> & {
  children: string;
}

export default function HeroTitle(props: HeroTitleProps) {
  const { children, className, ...headingProps } = props;
  const words = children.split(' ');

  return (
    <h1 className="text-8xl font-bold">
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
            {idx !== words.length - 1 && ' '}
          </span>
        );
      })}
    </h1>
  );
}