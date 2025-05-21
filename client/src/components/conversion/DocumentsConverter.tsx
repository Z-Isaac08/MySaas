import { useFileStore } from "../../stores/fileStore";
import UploadedFilesList from "../home/UploadedFiles";
import FileDropzoned from "../ui/FileDropZone";

const DocumentsConverter: React.FC = () => {
  const setUploadedFiles = useFileStore((state) => state.addFiles);
  const uploadedFiles = useFileStore((state) => state.files);
  const handleRemoveFile = useFileStore((state) => state.removeFile);
  const handleClearAll = useFileStore((state) => state.clearFiles);
  
  return (
    <section className="mt-6 w-full flex flex-col items-center">
      <h2 className="text-lg font-medium mb-4 text-gray-800">
        Téléversez vos documents
      </h2>
      <FileDropzoned onFilesUploaded={setUploadedFiles} />
      <UploadedFilesList
        files={uploadedFiles}
        onRemove={handleRemoveFile}
        onClearAll={handleClearAll}
      />
      {/* Ici viendront ensuite les options de format de conversion */}
    </section>
  );
};

export default DocumentsConverter;
