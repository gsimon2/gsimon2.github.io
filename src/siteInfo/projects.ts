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
        },{
            type: ProjectTags.code
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
        },{
            type: ProjectTags.code
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
        },{
            type: ProjectTags.code
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
        },{
            type: ProjectTags.code
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
        },{
            type: ProjectTags.code
        }]
    },
    {
        name: 'Applying Evolution and Novelty Search to Enhance the Resilience of Autonomous Systems',
        img: "https://github.com/gsimon2/EvoRos-Enki/blob/main/fig_evoros_enki_dfd.jpg?raw=true",
        description: `
        A paper I contributed to during graduate school. It was publiched in the "IEEE/ACM 14th International Symposium on Software Engineering for Adaptive and Self-Managing Systems (SEAMS)", Montreal, QC, Canada in May 2019.

        Abstract
        We investigate the integration of evolutionary algorithms and novelty search in order to improve the performance and resilience of autonomous systems. We have developed two tools for this purpose: Evo-ROS and Enki. Evo-ROS combines evolutionary search with physics-based simulations of autonomous systems whose software infrastructure is based on the Robot Operating System (ROS). Enki uses novelty search to discover operational scenarios that lead to the most diverse behavior in the target system. Combining these tools yields an automated approach to explore the operational landscape of the target system, identify regions of poor performance, and evolve system parameters that better respond to adverse situations. In this paper, we present results of a case study of the throttle controller on AutoRally, a 1:5-scale autonomous vehicle designed by researchers at Georgia Tech for the study of aggressive autonomous driving. Preliminary experiments demonstrate the ability of the proposed methods to identify and characterize input speed signals that cause the existing controller to perform poorly. The ability to identify these troublesome signals enables development of a control system capable of handling a wider range of conditions by autonomously switching among controller modes that are optimized for different conditions.
        `,
        year: '2019',
        tags: [{
            type: ProjectTags.paper,
            link: "https://github.com/gsimon2/EvoRos-Enki/blob/main/Enki___Evo_ROS_Integration.pdf"
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
        },{
            type: ProjectTags.code
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
        },{
            type: ProjectTags.code
        }]
    }
]