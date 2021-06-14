import { ProjectTags } from "../constants/Constants";
import { IProject } from "../models/projectModel";

export const projects: IProject[] = [
    {
        name: 'Dramatic Rolls',
        img: "https://github.com/gsimon2/dramatic-rolls/blob/main/natty20.gif?raw=true",
        description: "Fill out description here",
        tags: [ProjectTags.github, ProjectTags.foundry]
    },
    {
        name: 'Playlist Drag and Drop',
        img: "https://github.com/gsimon2/playlist-drag-and-drop/blob/main/playlist-drag-and-drop-demo.gif?raw=true",
        description: "Fill out description here",
        tags: [ProjectTags.github, ProjectTags.foundry]
    },
    {
        name: 'Pf2e Inspire Courage',
        img: "https://github.com/gsimon2/pf2e-inspire-courage/blob/main/demo.gif?raw=true",
        description: "Fill out description here",
        tags: [ProjectTags.github, ProjectTags.foundry]
    },
    {
        name: 'Hide Player UI',
        description: "Fill out description here",
        tags: [ProjectTags.github, ProjectTags.foundry]
    },
    {
        name: 'Close Player Art',
        img: "https://github.com/gsimon2/close-player-art/blob/main/close-art.gif?raw=true",
        description: "Fill out description here",
        tags: [ProjectTags.github, ProjectTags.foundry]
    }
]