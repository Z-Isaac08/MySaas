import { CheckCircle, FileText, X } from "lucide-react";
import { type FileWithPath } from "react-dropzone";

interface uploadedFilesListProps {
  files: FileWithPath[];
  onRemove: (index: number) => void;
  onClearAll: () => void;
}

const uploadedFilesList: React.FC<uploadedFilesListProps> = ({
  files,
  onRemove,
  onClearAll,
}) => {
  if (files.length === 0) return null;

  return (
    <section className="mt-6 w-3/4 bg-white p-4 rounded shadow">
      <div className="flex items-center justify-between text-green-600 mb-3">
        <div className="flex items-center">
          <CheckCircle className="mr-2" />
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
            className="py-2 flex items-center justify-between gap-3"
          >
            <div className="flex items-center gap-3">
              <FileText className="text-blue-500" />
              <div>
                <p className="font-medium">{file.name}</p>
                <p className="text-sm text-gray-500">
                  {file.type || "Type inconnu"} —{" "}
                  {(file.size / 1024).toFixed(2)} Ko
                </p>
              </div>
            </div>
            <button
              onClick={() => onRemove(index)}
              className="text-red-500 hover:text-red-700"
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

export default uploadedFilesList;
