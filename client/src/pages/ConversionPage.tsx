import { useState } from "react";
import CategoryTabs from "../components/conversion/CategoryTabs";
import Header from "../components/ui/Header";
import CategoryContent from "../components/conversion/CategoryContent";

const ConversionPage = () => {
  const [activeCategory, setActiveCategory] = useState("");
  return (
    <main className="p-9 flex flex-col items-center">
      <Header
        mainText="Convertisseur multifonction"
        secondText="Choisissez un type de service pour commencer une conversion ou utiliser un outil"
      />
      <CategoryTabs
        activeCategory={activeCategory}
        onSelect={(category) => setActiveCategory(category)}
      />
      <CategoryContent activeCategory={activeCategory} />
    </main>
  );
};

export default ConversionPage;
