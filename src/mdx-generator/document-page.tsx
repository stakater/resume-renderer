import { PropsWithChildren, useContext, useEffect } from "react";
import { DocumentContext, IDocument } from "./document-context";

export type IDocumentPage = IDocument;
const DocumentPage = (props: PropsWithChildren<IDocumentPage>) => {
  const documentContext = useContext(DocumentContext);

  useEffect(() => {
    const { icon, id, title, children } = props;
    const doc: IDocument = { icon, id: id, title, content: children };
    const found = documentContext.documents.find(
      (doc: IDocument) => doc.id === props.id
    );
    if (found) {
      return;
    } else {
      documentContext.setDocuments([doc, ...documentContext.documents]);
    }
  }, [documentContext, props]);

  return null;
};

export default DocumentPage;
