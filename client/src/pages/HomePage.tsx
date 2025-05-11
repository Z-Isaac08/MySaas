import React, { useState } from "react";
import { type FileWithPath } from "react-dropzone";
import FileDropzone from "../components/home/FileDropZone";
import Header from "../components/home/Header";
import UploadedFilesList from "../components/home/UploadedFiles";

const HomePage: React.FC = () => {
  const [uploadedFiles, setUploadedFiles] = useState<FileWithPath[]>([]);

  const handleRemoveFile = (index: number) => {
    setUploadedFiles(prev => prev.filter((_, i) => i !== index));
  };

  const handleClearAll = () => {
  setUploadedFiles([]);
};

  return (
    <main className="p-9 flex flex-col items-center">
      <Header />
      <FileDropzone onFilesUploaded={setUploadedFiles} />
      <UploadedFilesList files={uploadedFiles} onRemove={handleRemoveFile} onClearAll={handleClearAll} />
    </main>
  );
};


export default HomePage;
