import { siteData } from "../data/siteData";

export const PERSONAL_INFO = {
	name: siteData.personal.name,
	title: siteData.personal.title,
	email: siteData.personal.email,
	location: siteData.personal.location,
	tagline: siteData.home.description,
	resume: siteData.personal.resumePath,
	bio: [siteData.about.intro, siteData.about.details],
};

export const SOCIAL_LINKS = {
	github: siteData.social.github,
	linkedin: siteData.social.linkedin,
	twitter: siteData.social.twitter,
	facebook: "",
	instagram: "",
};

export const SKILLS = siteData.about.skillCards.flatMap((item) => item.tools);

export const PROJECTS = siteData.projects.github.selectedRepos.map((repoName) => ({
	name: repoName,
	description: "",
	technologies: [],
	link: `https://github.com/${siteData.projects.github.username}/${repoName}`,
}));

export const Nav_LINKS = siteData.nav.links;