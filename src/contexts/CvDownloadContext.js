import React, {
  createContext,
  useCallback,
  useMemo,
  useState,
} from "react";
import CvDownloadModal from "../components/CvDownloadModal";

export const CvDownloadContext = createContext(null);

export function CvDownloadProvider({ children }) {
  const [open, setOpen] = useState(false);
  const openCvModal = useCallback(() => setOpen(true), []);
  const closeCvModal = useCallback(() => setOpen(false), []);

  const value = useMemo(() => ({ openCvModal }), [openCvModal]);

  return (
    <CvDownloadContext.Provider value={value}>
      {children}
      <CvDownloadModal open={open} onClose={closeCvModal} />
    </CvDownloadContext.Provider>
  );
}
