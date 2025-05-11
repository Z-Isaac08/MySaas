import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router";

// Chargement dynamique des pages
const HomePage = lazy(() => import("./pages/HomePage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const RegisterPage = lazy(() => import("./pages/RegisterPage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));


// Importation du Layout
import Layout from "./components/layout/Layout";

function App() {
  return (
    <>
      <Suspense
        fallback={
          <div className="flex justify-center items-center min-h-screen">
            Loading
          </div>
        }
      >
        <Layout>
          <Routes>
            <Route path="/" index element={<HomePage />} />
            <Route path="/auth/s-inscrire" element={<RegisterPage />} />
            <Route path="/auth/se-connecter" element={<LoginPage />} />
            <Route path="/a-propos" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Layout>
      </Suspense>
    </>
  );
}

export default App;
