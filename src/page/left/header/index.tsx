interface IHeader {
  PersonName: string;
  jobTitle: string;
}

const Header = ({ PersonName, jobTitle }: IHeader) => {
  return (
    <div className="pr-64 pl-4">
      <h1 className="text-5xl">{PersonName}</h1>
      <p className="italic text-center mr-20">{jobTitle}</p>
    </div>
  );
};
export default Header;
