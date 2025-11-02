export interface ExperienceListProps {
  jobTitle: string;
  company: string;
  location: string;
  duration: string;
  techStack: string[];
  open: boolean;
  onToggle: () => void;
}
