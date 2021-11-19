import { ProjectTags } from "../constants/Constants";

export interface IProject {
    name: string;
    img?: string;
    lowResImg?: string;
    description: string;
    year: string;
    tags?: IProjectTag[];
    shields?: string[];
};

export interface IProjectTag {
    type: ProjectTags;
    link?: string;
}