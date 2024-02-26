import isCapital from "@/util/is-capital";
import clsx from "clsx";
import { HTMLAttributes } from "react";

export type SectionHeaderTitleProps = Omit<HTMLAttributes<HTMLHeadingElement>, 'children'> & {
  children?: string;
};

export function SectionHeaderTitle(props: SectionHeaderTitleProps) {
  const { children, className, ...headingProps } = props;
  const words = children?.split(' ') ?? [];

  return (
    <h1 className={clsx("text-6xl font-bold", className)} {...headingProps}>
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