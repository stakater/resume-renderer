import React, {useMemo, useState} from "react";
import {useDocs} from "./useDocs";
import {DocumentContext, IDocument} from "./document-context";

export interface IDocumentContainerProps {
    documentPath: string;
}

const DocumentContainer = ({documentPath}: IDocumentContainerProps) => {
    const [documents, setDocuments] = useState<IDocument[]>([]);
    const content = useDocs(documentPath);
    const context = useMemo(
        () => ({content, documents, setDocuments}),
        [content, documents, setDocuments]
    );

    return (
        <DocumentContext.Provider value={context}>
            <pre>{JSON.stringify(documents)}</pre>
        </DocumentContext.Provider>
    );
};

export default DocumentContainer;
