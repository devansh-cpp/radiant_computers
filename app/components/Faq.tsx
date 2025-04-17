// components/FAQ.tsx
import { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

type FAQItem = {
  question: string;
  answer: string;
};

export default function FAQ({ data }: { data: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="py-24 px-8 max-w-5xl mx-auto flex flex-col md:flex-row gap-12">
      <div className="flex flex-col text-left basis-1/2">
        <p className="inline-block font-semibold text-primary mb-4">Insurance FAQ</p>
        <p className="sm:text-4xl text-3xl font-extrabold text-base-content">Frequently Asked Questions</p>
      </div>
      <ul className="basis-1/2">
        {data.map((item, index) => (
          <li key={index}>
            <button
              className="relative flex gap-2 items-center w-full py-5 text-base font-semibold text-left border-t md:text-lg border-base-content/10"
              aria-expanded={openIndex === index}
              onClick={() => toggleFAQ(index)}
            >
              <span className="flex-1 text-base-content">{item.question}</span>
              {openIndex === index ? (
                <AiOutlineMinus className="w-5 h-5 text-base-content" />
              ) : (
                <AiOutlinePlus className="w-5 h-5 text-base-content" />
              )}
            </button>
            <div
              className={`transition-all duration-300 ease-in-out overflow-hidden ${
                openIndex === index ? "max-h-40" : "max-h-0"
              }`}
            >
              <div className="pb-5 leading-relaxed">
                <div className="space-y-2 leading-relaxed">{item.answer}</div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
