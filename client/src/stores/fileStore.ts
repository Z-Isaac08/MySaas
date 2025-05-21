import { type FileWithPath } from "react-dropzone";
import { create } from "zustand";

interface FileStore {
  files: FileWithPath[];
  addFiles: (newFiles: FileWithPath[]) => void;
  removeFile: (index: number) => void;
  clearFiles: () => void;
}

export const useFileStore = create<FileStore>((set) => ({
  files: [],
  addFiles: (newFiles) =>
    set((state) => ({ files: [...state.files, ...newFiles] })),
  removeFile: (index) =>
    set((state) => ({
      files: state.files.filter((_, i) => i !== index),
    })),
  clearFiles: () => set({ files: [] }),
}));
