import FAQItem from "./faqItem";

interface FAQ {
  question: string;
  answer: string;
}

interface CourseFAQProps {
  courseFAQ: FAQ[];
}
const CourseFaq: React.FC<CourseFAQProps> = ({ courseFAQ }) => {


  return (
    <>
      {courseFAQ?.map((courseFAQ: FAQ, idx: number) => (
        <FAQItem
          key={idx}
          question={courseFAQ?.question}
          answer={courseFAQ?.answer}
        />
      ))}
    </>
  );
};

export default CourseFaq;