import { ReactNode } from "react";

type TechTagProps = {
  children: ReactNode;
};

export default function TechTag({ children }: TechTagProps) {
  return (
    <span className="inline-block bg-primary-light/20 dark:bg-primary-dark/30 text-primary-dark dark:text-primary-light text-xs font-medium px-2.5 py-0.5 rounded-full">
      {children}
    </span>
  );
}
