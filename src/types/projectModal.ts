export interface ProjectModalProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    title: string;
    projectDescription: string;
    projectLink: string;
    demoLink: string;
    techStack: string[];
    projectImage?: string;
    startDate: string;
    endDate: string;
}