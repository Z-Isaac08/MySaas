import { CheckCircle, FileText, X } from "lucide-react";
import { type FileWithPath } from "react-dropzone";

interface UploadedFilesListProps {
  files: FileWithPath[];
  onRemove: (index: number) => void;
  onClearAll: () => void;
}

const UploadedFilesList: React.FC<UploadedFilesListProps> = ({
  files,
  onRemove,
  onClearAll,
}) => {
  if (files.length === 0) return null;

  const splitText = (text: string): string => {
    return text.split("/")[1].toUpperCase();
  };

  return (
    <section className="mt-6 w-full max-w-lg md:max-w-3/4 bg-white p-4 rounded shadow">
      <div className="flex flex-wrap items-center justify-between text-green-600 mb-3 gap-2">
        <div className="flex items-center gap-2">
          <CheckCircle />
          <span className="font-medium">Import réussi !</span>
        </div>
        <button
          onClick={onClearAll}
          className="text-sm text-red-500 hover:text-red-700"
        >
          Tout effacer
        </button>
      </div>

      <ul className="divide-y divide-gray-200">
        {files.map((file, index) => (
          <li
            key={index}
            className="py-3 flex flex-row items-center justify-between gap-3"
          >
            <div className="flex items-start sm:items-center gap-3">
              <FileText className="text-blue-500 shrink-0" />
              <div>
                <p className="font-medium break-all">{file.name}</p>
                <p className="text-sm text-gray-500">
                  {splitText(file.type) || "Type inconnu"} —{" "}
                  {(file.size / 1024).toFixed(2)} Ko
                </p>
              </div>
            </div>
            <button
              onClick={() => onRemove(index)}
              className="text-red-500 hover:text-red-700 self-start sm:self-center"
              title="Supprimer ce fichier"
            >
              <X size={20} />
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default UploadedFilesList;
