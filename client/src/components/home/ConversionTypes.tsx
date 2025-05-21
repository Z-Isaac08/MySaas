import { File, Image, Palette, Wrench } from "lucide-react";

const conversionTypes = [
  {
    icon: <File size={32} className="text-normal-blue" />,
    title: "Conversion de documents",
    description: "Transformez vos fichiers PDF, DOCX, TXT, etc. en un clic.",
  },
  {
    icon: <Image size={32} className="text-normal-blue" />,
    title: "Conversion d’images",
    description: "Changez le format de vos images (PNG, JPG, WebP, etc.).",
  },
  {
    icon: <Palette size={32} className="text-normal-blue" />,
    title: "Outils de couleurs",
    description: "Convertissez les codes HEX, RGB, HSL ou générez une palette.",
  },
  {
    icon: <Wrench size={32} className="text-normal-blue" />,
    title: "Autres utilitaires",
    description: "Encodage, décodage, compression, etc.",
  },
];

const ConversionTypes = () => {
  return (
    <section className="py-16 md:px-16 text-center">
      <h2 className="text-2xl sm:text-3xl font-bold text-normal-blue mb-4">
        Types de conversions disponibles
      </h2>
      <p className="text-tertiary-dark-active text-sm md:text-base mb-10">
        Une solution complète pour tous vos besoins de conversion.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {conversionTypes.map((type, index) => (
          <div key={index} className="bg-white p-6">
            <div className="mb-4 flex justify-center">{type.icon}</div>
            <h3 className="text-lg font-semibold text-normal-blue mb-2">
              {type.title}
            </h3>
            <p className="text-sm text-tertiary-dark-active">
              {type.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ConversionTypes;
