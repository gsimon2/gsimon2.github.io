import { ProjectTags } from "../constants/Constants";
import { IProject } from "../models/projectModel";

export const projects: IProject[] = [
    {
        name: 'Dramatic Rolls',
        img: "https://github.com/gsimon2/dramatic-rolls/blob/main/natty20.gif?raw=true",
        description: "Sample Long description. Sample Long description. Sample Long description. Sample Long description. Sample Long description. ",
        tags: [{
            type: ProjectTags.github,
            link: "https://github.com/gsimon2/dramatic-rolls"
        }, {
            type: ProjectTags.foundry,
            link: "https://foundryvtt.com/packages/dramatic-rolls"
        }]
    },
    {
        name: 'Playlist Drag and Drop',
        img: "https://github.com/gsimon2/playlist-drag-and-drop/blob/main/playlist-drag-and-drop-demo.gif?raw=true",
        description: "Fill out description here",
        tags: [{
            type: ProjectTags.github,
            link: "https://github.com/gsimon2/playlist-drag-and-drop"
        }, {
            type: ProjectTags.foundry,
            link: "https://foundryvtt.com/packages/playlist-drag-and-drop"
        }]
    },
    {
        name: 'Pf2e Inspire Courage',
        img: "https://github.com/gsimon2/pf2e-inspire-courage/blob/main/demo.gif?raw=true",
        description: "Fill out description here",
        tags: [{
            type: ProjectTags.github,
            link: "https://github.com/gsimon2/pf2e-inspire-courage"
        }, {
            type: ProjectTags.foundry,
            link: "https://foundryvtt.com/packages/pf2e-inspire-courage"
        }]
    },
    {
        name: 'Hide Player UI',
        description: "Fill out description here",
        tags: [{
            type: ProjectTags.github,
            link: "https://github.com/gsimon2/hide-player-ui"
        }, {
            type: ProjectTags.foundry,
            link: "https://foundryvtt.com/packages/hide-player-ui"
        }]
    },
    {
        name: 'Close Player Art',
        img: "https://github.com/gsimon2/close-player-art/blob/main/close-art.gif?raw=true",
        description: "Fill out description here",
        tags: [{
            type: ProjectTags.github,
            link: "https://github.com/gsimon2/close-player-art"
        }, {
            type: ProjectTags.foundry,
            link: "https://foundryvtt.com/packages/close-player-art"
        }]
    }
]