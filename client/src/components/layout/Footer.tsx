const Footer = () => {
  return (
    <footer className="bg-normal-blue text-white py-6 mt-10">
      <div className="px-6 md:px-16 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
        <p className="text-sm">
          © {new Date().getFullYear()} IConverter. Tous droits réservés.
        </p>
        <div className="flex gap-4 text-sm">
          <a href="/a-propos" className="hover:underline">
            À propos
          </a>
          <a href="/contact" className="hover:underline">
            Contact
          </a>
          <a href="/auth/s-inscrire" className="hover:underline">
            Inscription
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
