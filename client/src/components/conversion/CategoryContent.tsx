import ColorsTools from "./ColorsTools.tsx";
import DocumentsConverter from "./DocumentsConverter.tsx";
import ImagesConverter from "./ImagesConverter.tsx"
import UtilitiesTools from "./UtilitiesTools.tsx";

interface CategoryContentProps {
  activeCategory: string;
}

const CategoryContent: React.FC<CategoryContentProps> = ({
  activeCategory,
}) => {
  switch (activeCategory) {
    case "Documents":
      return <DocumentsConverter />;
    case "Images":
      return <ImagesConverter />;
    case "Couleurs":
      return <ColorsTools />;
    case "Utilitaires":
      return <UtilitiesTools />;
    default:
      return null;
  }
};

export default CategoryContent;
