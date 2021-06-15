import { ProjectTags } from "../constants/Constants";

export interface IProject {
    name: string;
    img?: string;
    description: string;
    year: string;
    tags?: IProjectTag[];
};

export interface IProjectTag {
    type: ProjectTags;
    link?: string;
}