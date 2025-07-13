import { useState } from "react";

const faqData = [
  {
    question: "What is BharatSetu?",
    answer:
      "BharatSetu is an AI-powered legal assistant that helps citizens get legal help, document simplification, and region-based legal services easily.",
  },
  {
    question: "Is BharatSetu free to use?",
    answer:
      "Yes, BharatSetu is completely free for citizens to use and access legal support, guidance, and assistance.",
  },
  {
    question: "Can BharatSetu understand different languages?",
    answer:
      "Absolutely! BharatSetu supports multiple Indian regional languages to ensure accessibility for all users.",
  },
  {
    question: "How quickly can I get legal assistance using BharatSetu?",
    answer:
      "Legal assistance is provided instantly through the AI chatbot and within minutes for document simplification or region-based service recommendations.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#f2fdfc] py-20 px-6 text-center pt-5">
      <h2 className="text-5xl font-extrabold text-teal-800 mb-4">FAQ</h2>
      <p className="text-xl text-teal-900 mb-12 max-w-xl mx-auto">
        Find answers to common questions about BharatSetu.
      </p>

      <div className="space-y-6 max-w-2xl mx-auto text-left">
        {faqData.map((item, index) => (
          <div
            key={index}
            className="bg-[#d2f7f3] rounded-xl px-6 py-5 cursor-pointer transition shadow hover:shadow-lg"
            onClick={() => toggle(index)}
          >
            <div className="flex justify-between items-center">
              <p className="text-xl font-semibold text-gray-800">
                {item.question}
              </p>
              <span className="text-2xl text-teal-700 font-bold">
                {openIndex === index ? "−" : "＋"}
              </span>
            </div>

            {openIndex === index && (
              <div className="mt-3 text-gray-700 text-[1rem]">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}