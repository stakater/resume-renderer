import { createContext, ReactNode } from "react";

export interface IDocument {
  icon?: ReactNode;
  title: ReactNode;
  content?: ReactNode;
  id: string;
}

export interface IDocumentContext {
  documents: IDocument[];
  setDocuments: (next: IDocument[]) => void;
  content?: string;
}

export const DocumentContext = createContext<IDocumentContext>({
  documents: [],
  setDocuments: () => undefined,
});
