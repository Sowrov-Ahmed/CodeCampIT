import { IoCheckmark } from "react-icons/io5";

interface Expectation {
  title: string;
}

interface ExpectationsProps {
  expectations: Expectation[];
}

const ExpectationsOverview: React.FC<ExpectationsProps> = ({ expectations }) => {
  

  return (
    <>
      {expectations?.map((expectation: Expectation, idx: number) => (
        <div key={idx} className="flex items-start gap-4">
          <div className="bg-magenta w-4 h-4 uws:w-8 uws:h-8 text-white rounded-full flex items-center justify-center">
            <IoCheckmark />
          </div>
          <p>{expectation?.title}</p>
        </div>
      ))}
    </>
  );
};

export default ExpectationsOverview;