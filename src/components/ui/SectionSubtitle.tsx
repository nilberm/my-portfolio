import { ReactNode } from "react";

type SectionSubtitleProps = {
  children: ReactNode;
  className?: string;
};

export default function SectionSubtitle({
  children,
  className = "",
}: SectionSubtitleProps) {
  return (
    <p
      className={`text-lg md:text-xl text-center text-slate-600 dark:text-slate-400 mb-10 md:mb-16 max-w-2xl mx-auto ${className}`}
    >
      {children}
    </p>
  );
}
