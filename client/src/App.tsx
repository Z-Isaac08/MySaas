import { lazy, Suspense } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router";

// Chargement dynamique des pages
const HomePage = lazy(() => import("./pages/HomePage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const ConversionPage = lazy(() => import("./pages/ConversionPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));

// Importation du Layout
import Layout from "./components/layout/Layout";

function App() {
  const location = useLocation();

  const noLayoutRoutes = ["/404"];
  const isNoLayout = noLayoutRoutes.includes(location.pathname);
  return (
    <>
      <Suspense
        fallback={
          <div className="flex justify-center items-center min-h-screen">
            Loading
          </div>
        }
      >
        {isNoLayout ? (
          <Routes>
            <Route path="/404" element={<NotFoundPage />} />
          </Routes>
        ) : (
          <Layout>
            <Routes>
              <Route path="/" index element={<HomePage />} />
              <Route path="/convertir" index element={<ConversionPage />} />
              <Route path="/a-propos" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="*" element={<Navigate to="/404" />} />
            </Routes>
          </Layout>
        )}
      </Suspense>
    </>
  );
}

export default App;
