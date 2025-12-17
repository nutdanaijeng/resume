import type { ResumeData } from '../types';

export const resumeData: ResumeData = {
    personalInfo: {
        name: "Nutdanai Wattanapruttipaisan",
        title: "Junior Developer / Full-Stack Developer",
        location: "Bangkok, Thailand",
        social: {
            email: "nutdanai2002492@gmail.com",
            github: "https://github.com/nutdanaijeng",
        },
        languages: ["Thai (Native)", "English (Fair)"],
        summary: "Junior Full-Stack Developer with hands-on experience building web applications using React, Node.js, and databases. Passionate about learning, solving problems, and growing through real-world projects."

    },
    about: {
        background: "I am a Junior Developer with a strong foundation in Information Technology and hands-on experience working at Four Point Zero. I have experience building and maintaining web applications, focusing on writing clean, maintainable, and practical code.",
        interests: "I am interested in Backend development and Full-Stack roles, and I enjoy learning how systems work end-to-end. I am motivated to continuously improve my skills, learn new technologies, and contribute to a collaborative engineering team."
    }
    ,
    skills: [
        {
            title: "Frontend",
            items: [
                { name: "React" },
                { name: "Next.js" },
                { name: "Vue.js" },
                { name: "HTML & CSS" },
                { name: "Tailwind CSS" },
                { name: "Ant Design" },
                { name: "Bootstrap" }
            ]
        },
        {
            title: "Backend",
            items: [
                { name: "Node.js (Express)" },
                { name: "Java (Spring)" },
                { name: "REST API" }
            ]
        },
        {
            title: "Databases",
            items: [
                { name: "MySQL" },
                { name: "PostgreSQL" },
                { name: "MongoDB" }
            ]
        },
        {
            title: "Tools",
            items: [
                { name: "Git & GitHub" },
                { name: "Windows / macOS" }
            ]
        }
    ],
    experience: [
        {
            role: "Full-Stack Developer",
            company: "Four Point Zero Co., Ltd.",
            companyWebsite: "https://www.40.co.th/",
            period: "September 2024 – Present",
            description: [
                "Developed and maintained internal web-based systems used by company teams",
                "Built and maintained frontend features using React and JavaScript",
                "Designed and managed MySQL database structures to support application requirements",
                "Collaborated with team members to understand requirements and improve existing features"
            ]
        }
    ]
    ,
    projects: [
        {
            title: "IT-Find Job Project (2024)",
            techStack: ["Next.js", "Ant Design", "PostgreSQL"],
            description: "A web application for job searching within KMITL. Helps students find part-time jobs to earn extra income and gain practical work experience."
        },
        {
            title: "Planet Project (2022)",
            techStack: ["React", "Node.js (Express)"],
            description: "A to-do list web application featuring a donut chart that displays task completion percentage. Includes due dates and in-app notifications."
        },
        {
            title: "IT Learn Project",
            techStack: ["React Native"],
            description: "A course management website with real-time chat and file attachment functionality."
        },
        {
            title: "Fastflight Project",
            techStack: ["Java (Spring)", "RabbitMQ", "CQRS"],
            description: "CRUD-based microservices application using CQRS pattern."
        },
        {
            title: "Cars 25 Project",
            techStack: ["Vue.js", "Bulma", "Node.js (Express)"],
            description: "A car listing web application."
        },
        {
            title: "Lemkus (Clone) Project",
            techStack: ["HTML", "CSS", "JavaScript"],
            description: "Frontend website clone of Lemkus."
        },
        {
            title: "COVID-19 Clinic Project",
            techStack: ["Java"],
            description: "COVID test appointment booking GUI with CRUD system."
        },
        {
            title: "Landing Page Website (Omkoi)",
            techStack: ["HTML", "CSS", "JavaScript"],
            description: "Static landing page website."
        },
        {
            title: "Car Parking Project",
            techStack: ["C++"],
            description: "Microcontroller-based car parking system."
        }
    ],
    education: [
        {
            degree: "Bachelor’s Degree in Information Technology",
            institution: "King Mongkut’s Institute of Technology Ladkrabang (KMITL)",
            period: "2020 – 2024",
            gpa: "2.62"
        },
        {
            degree: "Science – Mathematics",
            institution: "Rittiyawannalai 2 School",
            period: "2014 – 2020",
            gpa: "3.55"
        }
    ]
};
