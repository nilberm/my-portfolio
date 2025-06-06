import { ReactNode } from 'react';

type SectionTitleProps = {
  children: ReactNode;
  className?: string;
};

export default function SectionTitle({ children, className = '' }: SectionTitleProps) {
  return (
    <h2 className={`text-3xl md:text-4xl font-sora font-bold mb-8 md:mb-12 text-center text-light-text dark:text-dark-text ${className}`}>
      {children}
    </h2>
  );
}
