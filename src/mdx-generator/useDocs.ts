import {useEffect, useState} from "react";

export const useDocs = (documentPath: string) => {
    const [doc, setDoc] = useState<string>("")
    useEffect(() => {
        const getDoc = async () => {
            try {
                const res = await fetch(documentPath);
                const text = await res.text();
                return text
            } catch (e) {
                return ""
            }
        }

        getDoc().then(setDoc)
    }, [documentPath]);


    return doc;
};
