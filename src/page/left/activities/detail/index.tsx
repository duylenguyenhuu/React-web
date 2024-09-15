interface IDetails {
  startDate: string;
  endDate: string;
  project: string;
  cty: string;
  address: string;
  describe?: string;
}

const Details = ({
  startDate,
  endDate,
  project,
  cty,
  address,
  describe,
}: IDetails) => {
  return (
    <div className="grid grid-cols-12 mt-10">
      <div className="col-span-3 relative">
        <div className=" pl-4 before:content-[''] before:bg-[#BFC5BE] before:absolute before:w-[4px]  before:h-[47px] before:left-[-3px] before:rounded-full">
          <time>{startDate}</time> <br />
          <time>{endDate}</time>
        </div>
      </div>
      <div className="col-span-9">
        <p className="text-[#3E423C] font-bold leading-3tracking-wider uppercase text-2xl ">
          {project}
        </p>
        <div className="flex items-center font-mono ">
          <p className="text-lg font-semibold text-[#3e423d] pr-2">{cty}</p>
          <p className="text-[#9FA09E]text-xl border-l-2 pl-2">{address}</p>
        </div>
        {describe && (
          <div className="mt-4">
            <p className="text-[#CACBCA]">{describe}</p>
          </div>
        )}
      </div>
    </div>
  );
};
export default Details;
