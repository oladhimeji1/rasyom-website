"use client";

import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: "What services does Rasyom Consults Ltd provide?",
    answer:
      "We specialize in construction project management, architectural design, civil engineering, electrical installations, and general contracting services tailored to meet client needs.",
  },
  {
    question: "Do you handle both residential and commercial projects?",
    answer:
      "Yes. Rasyom Consults Ltd manages a wide range of projects including residential housing, office complexes, schools, hospitals, and industrial buildings.",
  },
  {
    question: "How long does a typical construction project take?",
    answer:
      "Project timelines depend on the size and complexity of the work. We provide a detailed project schedule after the initial consultation and planning phase.",
  },
  {
    question: "Can you help with getting permits and approvals?",
    answer:
      "Absolutely. Our team assists clients with obtaining all necessary permits, approvals, and regulatory compliance before and during construction.",
  },
  {
    question: "How do I request a consultation or quotation?",
    answer:
      "You can contact us through our website, email, or phone. Our team will schedule a free initial consultation to discuss your project needs and provide a tailored quotation.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <h2 className="text-3xl font-bold text-center text-gray-900">
          Frequently Asked Questions
        </h2>
        <p className="mt-4 text-center text-gray-600">
          Here are some of the most common questions we get at{" "}
          <span className="font-semibold text-orange-500">
            Rasyom Consults Ltd
          </span>
          .
        </p>

        {/* FAQ Items */}
        <div className="mt-12 space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow p-6 cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-gray-800">
                  {faq.question}
                </h3>
                <ChevronDownIcon
                  className={`w-5 h-5 text-gray-600 transform transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </div>

              {openIndex === index && (
                <p className="mt-4 text-gray-600">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
