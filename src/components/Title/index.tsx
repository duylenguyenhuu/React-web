import { ReactNode } from "react";

interface ITitleProps {
  children?: ReactNode;
  sx?: string;
}

const Title = ({ sx, children }: ITitleProps) => {
  return (
    <p
      className={`${sx} text-xl leading-3 font-bold tracking-wider uppercase mb-6`}
    >
      {children}
    </p>
  );
};

export default Title;
