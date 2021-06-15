import { ProjectTags } from "../constants/Constants";
import { IProject } from "../models/projectModel";

export const projects: IProject[] = [
    {
        name: 'Dramatic Rolls',
        img: "https://github.com/gsimon2/dramatic-rolls/blob/main/natty20.gif?raw=true",
        description: "A module for FoundryVtt that addes a little excitement to natural 20s and natural 1s.",
        year: '2021',
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
        year: '2021',
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
        year: '2021',
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
        year: '2021',
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
        year: '2021',
        tags: [{
            type: ProjectTags.github,
            link: "https://github.com/gsimon2/close-player-art"
        }, {
            type: ProjectTags.foundry,
            link: "https://foundryvtt.com/packages/close-player-art"
        }]
    },
        {
        name: 'Evo-Ros: Integration Evolution and the Robot Operating System',
        img: "https://github.com/gsimon2/EvoRos-Paper/blob/main/Figures/Workflow.png?raw=true",
        description: `
        A paper that I was lead author on during graduate school. It was published in the "Proceedings of the Genetic and Evolutionary Computation Conference Companion", pp.1386-1393, Kyoto, Japan in July 2018. 

        Abstract
        In this paper, we describe the Evo-ROS framework, which is intended to help bridge the gap between the evolutionary and traditional robotics communities.
        Evo-ROS combines an evolutionary algorithm with individual physics-based evaluations conducted using the Robot Operating System (ROS) and the Gazebo simulation environment.
        Our goals in developing Evo-ROS are to (1) provide researchers in evolutionary robotics with access to the extensive support for real-world components and capabilities developed by the ROS community and (2) 
        enable ROS developers, and more broadly robotics researchers, to take advantage of evolutionary search during design and testing.
        We describe the details of the Evo-ROS structure and operation, followed by
        presentation of a case study using Evo-ROS to optimize placement of sonar sensors on
        unmanned ground vehicles that can experience reduced sensing capability due
        to component failures and physical damage.
        The case study provides insights into the current capabilities and identifies areas 
        for future enhancements.  
        `,
        year: '2018',
        tags: [{
            type: ProjectTags.github,
            link: "https://github.com/gsimon2/EvoRos-Paper"
        }, {
            type: ProjectTags.paper,
            link: "https://gsimon2.github.io/EvoRos-Paper/"
        }]
    },
    {
        name: 'Custom Fitbit Watchface',
        img: "https://github.com/gsimon2/fitbit-watchface/blob/main/demo.gif?raw=true",
        description: "A fun custom Fitbit watch face I designed for my fiancé while we were dating. It has a simple watch face with a background image of our dog, Loki. If you click the sides of the screen in a pre-defined sequence, then a custom message would appear on the screen.",
        year: '2018',
        tags: [{
            type: ProjectTags.github,
            link: "https://github.com/gsimon2/fitbit-watchface"
        }]
    },
    {
        name: 'Bomber Dodger',
        img: "https://github.com/gsimon2/bomber-dodger/blob/main/demo.gif?raw=true",
        description: "A surprisingly entertaining game that I submitted as a project for my CSE 471 Media Processing and Multimedia course at Michigan State University. Written in C#.",
        year: '2016',
        tags: [{
            type: ProjectTags.github,
            link: "https://github.com/gsimon2/bomber-dodger"
        }, {
            type: ProjectTags.school
        }]
    }
]