import {createContext} from "react";
import {IResume} from "./interfaces/resume.interface";
import {validationData} from "./validation";

export interface IResumeContext {
    editorData: IResume;
}
export const ResumeContext = createContext<IResumeContext>({
    editorData: validationData
})
