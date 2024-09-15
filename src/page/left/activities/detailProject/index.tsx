import React from "react";

interface IDetailProjects {
  label: string;
  content: React.ReactNode;
  sx?: string;
}
const DetailProjects = ({ label, content, sx }: IDetailProjects) => {
  return (
    <div className={`mt-2 pl-4  ${sx}`}>
      <span className="font-mono font-semibold">{label}:</span>
      <span className="text-slate-600">{content}</span>
    </div>
  );
};
export default DetailProjects;
