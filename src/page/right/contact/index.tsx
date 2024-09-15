import React from "react";

interface IContacts {
  icons: React.ReactNode;
  texts: string;
}

const Contacts = ({ icons, texts }: IContacts) => {
  return (
    <div className="mt-4 text-[#3e423d]">
      <span className="font-mono font-semibold">{icons}</span>
      <span className="ml-5">{texts}</span>
    </div>
  );
};

export default Contacts;
