import React from "react";
import ConversionTypes from "../components/home/ConversionTypes";
import FaqSection from "../components/home/FaqSection";
import HowItWorks from "../components/home/HowItWorks";
import PlatformBenefits from "../components/home/PlatformBenefits";
import UploadedFilesList from "../components/home/UploadedFiles";
import FileDropzone from "../components/ui/FileDropZone";
import Header from "../components/ui/Header";
import { useFileStore } from "../stores/fileStore";

const HomePage: React.FC = () => {
  const setUploadedFiles = useFileStore((state) => state.addFiles);
  const uploadedFiles = useFileStore((state) => state.files);
  const handleRemoveFile = useFileStore((state) => state.removeFile);
  const handleClearAll = useFileStore((state) => state.clearFiles);

  return (
    <main className="p-9 flex flex-col items-center">
      <Header
        mainText="Convertisseur de fichiers"
        secondText="La plateforme rapide et intuitive pour convertir tous vos fichiers en un clin d'œil."
      />
      <FileDropzone onFilesUploaded={setUploadedFiles} />
      <UploadedFilesList
        files={uploadedFiles}
        onRemove={handleRemoveFile}
        onClearAll={handleClearAll}
      />
      <ConversionTypes />
      <PlatformBenefits />
      <HowItWorks />
      <FaqSection />
    </main>
  );
};

export default HomePage;
