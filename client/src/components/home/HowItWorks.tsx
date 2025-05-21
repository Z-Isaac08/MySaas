import { steps } from "../../data/data";

const HowItWorks = () => {
  return (
    <section className="py-16 w-full">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-normal-blue mb-6">
          Comment ça fonctionne ?
        </h2>
        <p className="text-tertiary-dark-active text-sm mb-12">
          Convertir vos fichiers n’a jamais été aussi simple.
        </p>
        <div className="grid md:grid-cols-3 gap-10">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white p-6 space-y-5 border-t-2 text-normal-blue"
            >
              <h2 className="text-4xl font-semibold text-normal-blue mb-2">
                {index + 1}
              </h2>
              <h3 className="text-lg font-semibold text-normal-blue mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
