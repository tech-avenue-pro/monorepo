export interface ExperienceItemContent {
    period: string;
    role: string;
    institution: string;
}

export interface EducationItemContent {
    degree: string;
    institution: string;
    period: string;
}

export interface ExperienceSectionContent {
    experienceTitle: string;
    experience: ExperienceItemContent[];
    educationTitle: string;
    education: EducationItemContent[];
}
