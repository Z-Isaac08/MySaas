import { useDropzone, type FileWithPath } from "react-dropzone";

interface FileDropzoneProps {
  onFilesUploaded: (files: FileWithPath[]) => void;
}

const FileDropzone: React.FC<FileDropzoneProps> = ({ onFilesUploaded }) => {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: onFilesUploaded,
    accept: {
      "application/*": [],
      "text/*": [],
      "image/*": [],
    },
  });

  return (
    <>
      <div
        {...getRootProps()}
        className={`w-3/4 h-64 flex flex-col items-center justify-center border-2 border-dashed ${
          isDragActive ? "border-normal-blue-hover" : "border-tertiary-dark"
        } rounded-lg bg-gray-100 transition-colors duration-300 cursor-pointer`}
      >
        <input {...getInputProps()} />
        <p className="text-center text-tertiary-dark-active">
          {isDragActive
            ? "Déposez les fichiers ici..."
            : "Glissez-déposez les fichiers ici, ou cliquez pour sélectionner"}
        </p>
      </div>
      <button
        onClick={() =>
          (document.querySelector('input[type="file"]') as HTMLInputElement)?.click()
        }
        className="w-80 p-4 border-none outline-none mt-4 bg-normal-blue text-tertiary rounded hover:bg-normal-blue-hover transition-colors duration-300"
      >
        Sélectionner un fichier
      </button>
    </>
  );
};

export default FileDropzone;
