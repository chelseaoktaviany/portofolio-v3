import Link from "next/link";
import Image from "next/image";

// components
import {
  Card,
  CardAction,
  CardDescription,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ProjectCardProps {
  title: string;
  projectDescription: string;
  projectLink: string;
  demoLink: string;
  techStack: string[];
  startDate: string;
  endDate: string;
  createdAt: number;
}

const ProjectCard = ({
  title,
  projectDescription,
  projectLink,
  demoLink,
  techStack,
  startDate,
  endDate,
  createdAt,
}: ProjectCardProps) => {
  return (
    <Card className="w-xl px-2 py-8">
      <CardHeader>
        <Image className="w-5 h-4 py-5" src="" alt={title} />
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="truncate">
          {projectDescription}
        </CardDescription>
      </CardContent>
      <CardFooter>
        <CardAction className="py-3 mb-2">
          <Button
            className="px-3 py-6 mr-4 border border-zinc-950 dark:border-zinc-50
              hover:bg-zinc-800 dark:hover:bg-zinc-50/5 dark:hover:text-zinc-50
              tracking-wider transition-colors text-zinc-50 dark:text-zinc-950
              uppercase"
            variant="default"
          >
            <Link href={demoLink}>demo link</Link>
          </Button>
          <Button
            className="px-3 py-6 border border-zinc-950 dark:border-zinc-50
              hover:bg-zinc-950/5 dark:hover:bg-zinc-50/5 tracking-wider
              transition-colors uppercase"
            variant="ghost"
          >
            <Link href={projectLink}>project link</Link>
          </Button>
        </CardAction>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
