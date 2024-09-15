import { ReactNode } from "react";
import Title from "../../../components/Title";

interface ITitleService {
  title: string;
  children: ReactNode;
  titleSx?: string;
  sx?: string;
}

const TitleSections = ({
  title,
  children,
  titleSx = "text-[#99a298] pl-4",
  sx,
}: ITitleService) => {
  return (
    <div className={`pr-4 mt-16 ${sx ?? ``}`}>
      <Title sx={titleSx}>{title}</Title>
      {children}
    </div>
  );
};

export default TitleSections;
