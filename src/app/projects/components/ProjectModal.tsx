import Link from "next/link";
import Image from "next/image";
// date format
import moment from "moment";

// components
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import ProjectBtn from "./ProjectBtn";
import ProjectTag from "./ProjectTag";

interface ProjectModalProps {
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

const ProjectModal = ({
  open,
  onOpenChange,
  title,
  projectDescription,
  projectImage,
  projectLink,
  demoLink,
  techStack,
  startDate,
  endDate,
}: ProjectModalProps) => {
  const monthYearStart = moment(startDate).format("MMMM YYYY");
  const monthYearEnd = moment(endDate).format("MMMM YYYY");

  //   let isPresent = false;
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="w-sm lg:w-2xl py-5 lg:py-8 md:py-2 sm:py-5 px-6">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <p className="py-2 text-sm text-muted-foreground italic">
            {monthYearStart} - {monthYearEnd}
          </p>
          <DialogDescription>{projectDescription}</DialogDescription>
        </DialogHeader>

        <div
          className="relative w-full h-30 lg:h-60 mt-4 rounded-lg
            overflow-hidden"
        >
          <Image
            src={projectImage || `https://placehold.co/600x400.png`}
            alt={title}
            fill
            className="object-cover"
          />
        </div>

        <div className="mt-4 flex flex-wrap justify-center items-center gap-2">
          {techStack.map((item, index) => (
            <ProjectTag key={index}>{item}</ProjectTag>
          ))}
        </div>

        <div className="flex flex-wrap justify-center items-center gap-4 py-3">
          {demoLink && (
            <ProjectBtn asChild variant="default">
              <Link href={demoLink}>demo link</Link>
            </ProjectBtn>
          )}

          {projectLink && (
            <ProjectBtn asChild variant="ghost">
              <Link href={projectLink}>project link</Link>
            </ProjectBtn>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectModal;
