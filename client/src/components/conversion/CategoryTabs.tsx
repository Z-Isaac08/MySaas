const categories = ["Documents", "Images", "Couleurs", "Utilitaires"];

interface CategoryTabsProps {
  activeCategory: string;
  onSelect: (category: string) => void;
}

const CategoryTabs: React.FC<CategoryTabsProps> = ({
  activeCategory,
  onSelect,
}) => {
  return (
    <div className="flex flex-wrap justify-center gap-3 my-6">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onSelect(cat)}
          className={`px-4 py-2 rounded-full border text-sm font-medium transition-colors duration-300 ${
            activeCategory === cat
              ? "bg-normal-blue text-white border-normal-blue"
              : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default CategoryTabs;
