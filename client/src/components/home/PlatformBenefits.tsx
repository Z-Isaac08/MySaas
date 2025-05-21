import { CloudLightning, ShieldCheck, UserRound, Cog } from "lucide-react";

const benefits = [
  {
    icon: <CloudLightning size={28} className="text-white" />,
    title: "Rapide et efficace",
    description: "Traitement instantané de vos conversions sans attente.",
    bg: "bg-yellow-500",
    border: "border-yellow-600"
  },
  {
    icon: <ShieldCheck size={28} className="text-white" />,
    title: "Sécurité garantie",
    description: "Vos fichiers ne sont jamais stockés. Respect de votre vie privée.",
    bg: "bg-green-600",
    border: "border-green-600"
  },
  {
    icon: <UserRound size={28} className="text-white" />,
    title: "Utilisation gratuite",
    description: "Aucun coût caché, tout est accessible sans abonnement.",
    bg: "bg-blue-600",
    border: "border-blue-600"
  },
  {
    icon: <Cog size={28} className="text-white" />,
    title: "Multi-outils",
    description: "Un large éventail d'outils pratiques pour les développeurs.",
    bg: "bg-purple-600",
    border: "border-purple-600"
  },
];

const PlatformBenefits = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-normal-blue mb-6">
          Pourquoi choisir IConverter ?
        </h2>
        <p className="text-tertiary-dark-active mb-12 text-sm md:text-base">
          Des fonctionnalités pensées pour les développeurs et utilisateurs exigeants.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`rounded-2xl border ${benefit.border} p-6 border-t-4`}
            >
              <div
                className={`w-12 h-12 mx-auto rounded-full flex items-center justify-center ${benefit.bg} mb-4`}
              >
                {benefit.icon}
              </div>
              <h3 className="text-lg font-semibold text-normal-blue mb-2">
                {benefit.title}
              </h3>
              <p className="text-sm text-tertiary-dark-active">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlatformBenefits;
