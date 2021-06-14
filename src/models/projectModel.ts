import { ProjectTags } from "../constants/Constants";

export interface IProject {
    name: string;
    img?: string;
    description: string;
    tags?: ProjectTags[];
};