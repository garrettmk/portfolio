import isCapital from "@/util/is-capital";
import { HTMLAttributes } from "react";

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
              <span className="special-highlight">{firstLetter}</span>
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