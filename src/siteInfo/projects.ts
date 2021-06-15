import { ProjectTags } from "../constants/Constants";
import { IProject } from "../models/projectModel";

export const projects: IProject[] = [
    {
        name: 'Dramatic Rolls',
        img: "https://github.com/gsimon2/dramatic-rolls/blob/main/natty20.gif?raw=true",
        description: "A module for FoundryVtt that addes a little excitement to natural 20s and natural 1s.",
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
        description: "A module for FoundryVtt that allows dragging playlist soundtracks from the sidebar and dropping them onto the map as ambient sounds. Default sound volume, radius, easing, and repeat settings can be configured via the configure settings menu.",
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
        description: "A module for FoundryVtt that adds a button to character token HUDs that allows for the toggling of Inspire Courage. This utilizes the PF2e \"Inspire Courage\" spell effect. Only applies to to actual character actors, not NPCs due to how spell effect interact with their sheet. When inspire courage is active, the inspire courage effect icon will appear on the token and the spell effect will be added to the actor's sheet. The bonus to attack and damage rolls will automatically apply.",
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
        description: "A module for FoundryVtt that the GM can enable to hide all joining player's control UI. The intended use for this is when the player screen is being used for displaying the maps during in-person gaming.",
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
        description: "A module for FoundryVtt that adds a configurable hot key (Default ` - backtick) for the GM to close open image popouts on player screens",
        tags: [{
            type: ProjectTags.github,
            link: "https://github.com/gsimon2/close-player-art"
        }, {
            type: ProjectTags.foundry,
            link: "https://foundryvtt.com/packages/close-player-art"
        }]
    },
    {
        name: 'Custom Fitbit Watchface',
        img: "https://github.com/gsimon2/fitbit-watchface/blob/main/demo.gif?raw=true",
        description: "A fun custom Fitbit watch face I designed for my fiancé while we were dating. It has a simple watch face with a background image of our dog, Loki. If you click the sides of the screen in a pre-defined sequence, then a custom message would appear on the screen.",
        tags: [{
            type: ProjectTags.github,
            link: "https://github.com/gsimon2/fitbit-watchface"
        }]
    },
    {
        name: 'Bomber Dodger',
        img: "https://github.com/gsimon2/bomber-dodger/blob/main/demo.gif?raw=true",
        description: "A surprisingly entertaining game that I submitted as a project for my CSE 471 Media Processing and Multimedia course at Michigan State University. Written in C#.",
        tags: [{
            type: ProjectTags.github,
            link: "https://github.com/gsimon2/bomber-dodger"
        }]
    }
]