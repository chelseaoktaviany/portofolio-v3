export interface EducationListProps {
  school: string;
  major: string;
  degree: string;
  duration: string;
  gpa: string;
  open: boolean;
  onToggle: () => void;
}
