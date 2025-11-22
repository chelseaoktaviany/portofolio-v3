import Link from "next/link";
import Image from "next/image";
// date format
import moment from "moment";

// components
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

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
            <span
              key={index}
              className="text-xs bg-zinc-50/10 dark:bg-zinc-700/30 px-3 py-2
                rounded-full tracking-wider"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap justify-center items-center gap-4 py-3">
          {demoLink && (
            <Button
              asChild
              className="w-full lg:w-50 md:w-50 sm:w-full px-5 py-5 border
                border-zinc-950 dark:border-zinc-50 hover:bg-zinc-800
                dark:hover:bg-zinc-50/5 dark:hover:text-zinc-50 tracking-wider
                transition-colors text-zinc-50 text-center uppercase"
              variant="secondary"
            >
              <Link href={demoLink}>demo link</Link>
            </Button>
          )}

          {projectLink && (
            <Button
              asChild
              className="w-full lg:w-50 md:w-50 sm:w-full px-6 py-5 border
                border-zinc-950 dark:border-zinc-50 hover:bg-zinc-950/5
                dark:hover:bg-zinc-50/5 tracking-wider transition-colors
                text-center uppercase"
              variant="outline"
            >
              <Link href={projectLink}>project link</Link>
            </Button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectModal;
