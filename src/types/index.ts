export interface SocialLinks {
    email: string;
    github: string;
}

export interface SkillItem {
    name: string;
}

export interface SkillCategory {
    title: string;
    items: SkillItem[];
}

export interface Project {
    title: string;
    techStack: string[];
    description: string;
}

export interface Experience {
    role: string;
    company: string;
    website?: string;
    period: string;
    description: string[];
    companyWebsite?: string;
}

export interface Education {
    degree: string;
    institution: string;
    period: string;
    gpa?: string;
    major?: string;
}

export interface ResumeData {
    personalInfo: {
        name: string;
        title: string;
        location: string;
        social: SocialLinks;
        languages: string[];
        summary: string;
    };
    about: {
        background: string;
        interests: string;
    };
    skills: SkillCategory[];
    experience: Experience[];
    projects: Project[];
    education: Education[];
}
