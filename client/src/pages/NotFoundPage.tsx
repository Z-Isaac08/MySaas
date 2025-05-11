import { Link } from "react-router";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center px-4 bg-tertiary">
      <h1 className="text-6xl font-bold text-normal-blue mb-2">404</h1>
      <p className="text-2xl font-semibold mb-1">Page non trouvée</p>
      <p className="text-gray-600 mb-4">
        Oups ! Cette page n’existe pas ou a été déplacée.
      </p>
      <Link
        to="/"
        className="px-5 py-3 bg-normal-blue text-tertiary rounded hover:bg-[#145692] transition-colors duration-300 text-sm"
      >
        Retour à l’accueil
      </Link>
    </div>
  );
};

export default NotFoundPage;
