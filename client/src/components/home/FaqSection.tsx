import { faqs } from "../../data/data";

const FaqSection = () => {
  return (
    <section className="w-full max-w-fit py-10 bg-white">
      <div className=" space-y-4 px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-normal-blue mb-6">
          Foire aux questions
        </h2>
        <div className="space-y-12 text-center">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border-b pb-4">
              <h3 className="text-lg font-semibold text-normal-blue mb-1">
                {faq.question}
              </h3>
              <p className="text-tertiary-dark-active">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
