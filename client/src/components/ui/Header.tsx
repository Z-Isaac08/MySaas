interface headerProps {
  mainText: string;
  secondText: string;
}

const Header: React.FC<headerProps> = ({ mainText, secondText }) => (
  <header className="text-center px-4">
    <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-normal-blue">
      {mainText}
    </h2>
    <span className="text-base sm:text-lg text-tertiary-dark-active mb-6 block">
      {secondText}
    </span>
  </header>
);

export default Header;
