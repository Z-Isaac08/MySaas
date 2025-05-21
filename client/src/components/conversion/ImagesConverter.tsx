import { useFileStore } from "../../stores/fileStore";
import UploadedFilesList from "../home/UploadedFiles";
import FileDropzoned from "../ui/FileDropZone";

const ImagesConverter: React.FC = () => {
  const setUploadedFiles = useFileStore((state) => state.addFiles);
  const uploadedFiles = useFileStore((state) => state.files);
  const handleRemoveFile = useFileStore((state) => state.removeFile);
  const handleClearAll = useFileStore((state) => state.clearFiles);
  
  return (
    <section className="mt-6 w-full flex flex-col items-center">
      <h2 className="text-lg font-medium mb-4 text-gray-800">
        Téléversez vos images
      </h2>
      <FileDropzoned onFilesUploaded={setUploadedFiles} />
      <UploadedFilesList
        files={uploadedFiles}
        onRemove={handleRemoveFile}
        onClearAll={handleClearAll}
      />
    </section>
  );
};

export default ImagesConverter;
