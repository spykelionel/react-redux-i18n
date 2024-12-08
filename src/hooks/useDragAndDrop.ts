import { useCallback, useState } from "react";
import { UseDragAndDropReturn } from "./@types";

export function useDragAndDrop<T>(
  onFileDrop: (files: FileList) => void
): UseDragAndDropReturn {
  const [isDragging, setIsDragging] = useState(false);

  const handleDragEnter = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      e.stopPropagation();
      setIsDragging(false);

      if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
        onFileDrop(e.dataTransfer.files);
        e.dataTransfer.clearData();
      }
    },
    [onFileDrop]
  );

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  return {
    isDragging,
    handleDragEnter,
    handleDragLeave,
    handleDrop,
    handleDragOver,
  };
}
