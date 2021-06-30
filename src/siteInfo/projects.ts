import { ProjectTags } from "../constants/Constants";
import { IProject } from "../models/projectModel";
import personalWebsiteImg from '../assets/personal-website-development.png';

export const projects: IProject[] = [
    {
        name: 'Personal Website',
        img: personalWebsiteImg,
        description: `I created this website to supplement my resume, encourage further learning when it comes to designing front-end projects, and act as a reference guide for ideas / practices that I have picked up over my years of working in React. I boot-strapped it using 'Create React App' with the typescript template. For routing, I pulled in the 'React Router Dom' hash router. I Explored and leveraged 'Material UI' as a component library, supplemented with 'Styled Components'. Application state is tracked via 'React Redux'. For hosting, I used 'Github Pages' and took advantage of 'Github Actions' to automate the build and deploy process. Lastly, I bought a personal domain so I could share it at a nice URL.

        Overall, it is grossly over-engineered for what its purpose is, but I had a blast making it.
        `,
        year: '2021',
        tags: [{
            type: ProjectTags.github,
            link: "https://github.com/gsimon2/gsimon2.github.io"
        },{
            type: ProjectTags.code
        }],
        shields: [
            '![GitHub top language](https://img.shields.io/github/languages/top/gsimon2/gsimon2.github.io?style=plastic)'
        ]
    },
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
        }],
        shields: [
            '![GitHub top language](https://img.shields.io/github/languages/top/gsimon2/dramatic-rolls?style=plastic)',
            '![GitHub release (latest by SemVer and asset including pre-releases)](https://img.shields.io/github/downloads-pre/gsimon2/dramatic-rolls/latest/module.zip)'
        ]
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
        }],
        shields: [
            '![GitHub top language](https://img.shields.io/github/languages/top/gsimon2/playlist-drag-and-drop?style=plastic)',
            '![GitHub release (latest by SemVer and asset including pre-releases)](https://img.shields.io/github/downloads-pre/gsimon2/playlist-drag-and-drop/latest/module.zip)'
        ]
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
        }],
        shields: [
            '![GitHub top language](https://img.shields.io/github/languages/top/gsimon2/pf2e-inspire-courage?style=plastic)',
            '![GitHub release (latest by SemVer and asset including pre-releases)](https://img.shields.io/github/downloads-pre/gsimon2/pf2e-inspire-courage/latest/module.zip)'

        ]
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
        }],
        shields: [
            '![GitHub top language](https://img.shields.io/github/languages/top/gsimon2/hide-player-ui?style=plastic)',
            '![GitHub release (latest by SemVer and asset including pre-releases)](https://img.shields.io/github/downloads-pre/gsimon2/hide-player-ui/latest/module.zip)'
        ]
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
        }],
        shields: [
            '![GitHub top language](https://img.shields.io/github/languages/top/gsimon2/close-player-art?style=plastic)',
            '![GitHub release (latest by SemVer and asset including pre-releases)](https://img.shields.io/github/downloads-pre/gsimon2/close-player-art/latest/module.zip)'
        ]
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
        }, {
            type: ProjectTags.academic
        }]
    },
    {
        name: 'Evo-Ros: Integration Evolution and the Robot Operating System',
        img: "https://github.com/gsimon2/EvoRos-Paper/blob/main/Figures/Workflow.png?raw=true",
        description: `
        A paper that I was lead author on during graduate school. It was published in the "Proceedings of the Genetic and Evolutionary Computation Conference Companion", pp.1386-1393, Kyoto, Japan in July 2018. 

        Abstract
        In this paper, we describe the Evo-ROS framework, which is intended to help bridge the gap between the evolutionary and traditional robotics communities. Evo-ROS combines an evolutionary algorithm with individual physics-based evaluations conducted using the Robot Operating System (ROS) and the Gazebo simulation environment. Our goals in developing Evo-ROS are to (1) provide researchers in evolutionary robotics with access to the extensive support for real-world components and capabilities developed by the ROS community and (2)  enable ROS developers, and more broadly robotics researchers, to take advantage of evolutionary search during design and testing. We describe the details of the Evo-ROS structure and operation, followed by presentation of a case study using Evo-ROS to optimize placement of sonar sensors on unmanned ground vehicles that can experience reduced sensing capability due to component failures and physical damage. The case study provides insights into the current capabilities and identifies areas for future enhancements.  
        `,
        year: '2018',
        tags: [{
            type: ProjectTags.paper,
            link: "https://gsimon2.github.io/EvoRos-Paper/"
        }, {
            type: ProjectTags.academic
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
        }],
        shields: [
            '![GitHub top language](https://img.shields.io/github/languages/top/gsimon2/fitbit-watchface?style=plastic)'
        ]
    },
    {
        name: 'Population Mapping via Wi-Fi Network Analysis',
        img: "https://github.com/gsimon2/population-mapping-via-wifi/blob/main/heat_map_first_floor_110717_6pm.png?raw=true",
        description: `
        A paper that I wrote with a couple of classmates, eleborating our work to utilize Michigan State University's Engineering Building Wi-Fi network to accurately map and predict population density of connected users. Submitted as a final project report for CSE 824: Advanced Computer Networking and Communications.

        Abstract
        In this paper we present an in-depth analysis on the usage of the Wi-Fi network located in the College of Engineering building at Michigan State University, with a focus on mapping the population distribution of the network users. The novelty in our work resides in the fact that we are not relying on GPS information from users' phones to provide localization. Instead, a dense collection of access points with known locations are used to identify the locality of connecting users. Our work provides statistical information about the behavior of congestion in the network, shows how the population distribution can be modeled using heatmaps, and offers a network usage prediction model that can represent how a population typically navigates through the building. We believe that this work is beneficial by allowing better understanding of how the current network is being used by the student population, helps identifying where highly congested locations are in the building, and can be used as a tool when determining the optimal deployment locations for future access points. 
        `,
        year: '2017',
        tags: [{
            type: ProjectTags.paper,
            link: "https://github.com/gsimon2/population-mapping-via-wifi/blob/main/Population_Mapping_via_Wi_Fi_Network_Analysis__normalsize_The_Final_Report.pdf"
        }, {
            type: ProjectTags.academic
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
            type: ProjectTags.academic
        },{
            type: ProjectTags.code
        }],
        shields: [
            '![GitHub top language](https://img.shields.io/github/languages/top/gsimon2/bomber-dodger)'
        ]
    },
    {
        name: 'Orthopaedic Exercise Feedback System',
        img: "https://github.com/gsimon2/ProjectBaymaxWebsite/blob/master/project-overview-diagram.png?raw=true",
        description: `
        A paper that I wrote with a small team of classmates, detailing our work in making a cyber-physical rehabilitation station that consisted of an exercise unit equipped with a touch screen computer that coached patients through their therapy routines. This unit also recorded statistics of the session and reported feedback to a SQL database. Asynchronously therapists could access a website to view progress of sessions and update patient regiments via this online portal. Submitted as a final report to Michigan State’s ECE 480 Senior Design course.

        Abstract
        During shoulder rehabilitation, doctors and therapists cannot guarantee that patients are completing the proper care while on their own. While at home or unattended in a therapeutic establishment, some patients have a tendency to skip routines and cheat the system, which can make therapy all for naught. Also, if the therapist is not assisting during every exercise, the patient can easily be using improper form. By doing so, incorrect muscles and joints are being worked, which can have a negative impact on the result of therapy. In order to solve this issue, Design Team One of MSU’s ECE 480 class has developed a control system to force correct progress and deliver feedback to the doctors and therapists. By integrating multiple hardware components, the new machine has the capability to halt operation if improper form is sensed. Through software applications, the doctors and therapists will be able to assign customized exercises based on each patient’s needs and the patient will have an interactive screen at the machine which shows these assigned custom exercises. After a therapy routine has been completed, a progress report will be sent automatically to the user who assigned the exercises. Thereby, guaranteeing that the routines have been done correctly and completely.
        `,
        year: '2016',
        tags: [{
            type: ProjectTags.paper,
            link: "https://github.com/gsimon2/ProjectBaymaxWebsite/blob/master/ECE480%20Project%20Final%20Report%20-%202016-12-04.pdf"
        }, {
            type: ProjectTags.github,
            link: "https://github.com/gsimon2/ProjectBaymaxWebsite"
        },{
            type: ProjectTags.academic
        }],
        shields: [
            '![GitHub top language](https://img.shields.io/github/languages/top/gsimon2/ProjectBaymaxWebsite)'
        ]
    },
]