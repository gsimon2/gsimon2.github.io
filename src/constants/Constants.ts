/* eslint-disable */

export enum ThemeTypes {
    light = 'light',
    dark = 'dark'
};

export enum Routes {
    home = "/",
    resume = "/resume",
    projects = "/projects",
    githubStats = '/githubStats'
};

export enum ProjectTags {
    github = "github",
    foundry = "foundry",
    academic = "academic",
    paper = "paper",
    code = "code"
}

export default {
    resumeIframeSource: "https://docs.google.com/gview?url=https://github.com/gsimon2/Resume2/raw/main/Resume2.pdf&embedded=true",
    githubRepoLink: "https://github.com/gsimon2",
    themeKey: "themeType",
    enableLiveBackgroundKey: "isLiveBackgroundEnabled"
};