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
    <div className="w-full flex flex-col items-center">
      <div
        {...getRootProps()}
        className={`w-full max-w-lg md:max-w-3/4 h-60 sm:h-64 flex flex-col items-center justify-center border-2 border-dashed ${
          isDragActive ? "border-normal-blue-hover" : "border-tertiary-dark"
        } rounded-lg bg-gray-100 px-4 text-center transition-colors duration-300 cursor-pointer`}
      >
        <input {...getInputProps()} />
        <p className="text-sm sm:text-base text-tertiary-dark-active">
          {isDragActive
            ? "Déposez les fichiers ici..."
            : "Glissez-déposez les fichiers ici, ou cliquez pour sélectionner"}
        </p>
      </div>

      <button
        onClick={() =>
          (
            document.querySelector('input[type="file"]') as HTMLInputElement
          )?.click()
        }
        className="w-full max-w-lg md:max-w-3/4  p-4 border-none outline-none mt-4 bg-normal-blue text-tertiary rounded hover:bg-normal-blue-hover transition-colors duration-300"
      >
        Sélectionner un fichier
      </button>
    </div>
  );
};

export default FileDropzone;
