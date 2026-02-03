"use client";

import Image from "next/image";
import Link from "next/link";
// date format
import moment from "moment";

// types
import { ProjectCardProps } from "@/types/projects";

// components
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ProjectTag from "./ProjectTag";

// icons
import ArrowOutwardOutlinedIcon from "@mui/icons-material/ArrowOutwardOutlined";

const ProjectCard = ({
  title,
  projectDescription,
  projectImage,
  projectLink,
  demoLink,
  techStack,
  startDate,
  endDate,
}: ProjectCardProps) => {
  const monthYearStart = moment(startDate).format("MMMM YYYY");
  const monthYearEnd = moment(endDate).format("MMMM YYYY");

  const buttonItems = [
    {
      href: demoLink,
      label: "demo link",
      variant: "default" as const,
      target: "_blank",
      showIcon: true,
    },
    {
      href: projectLink,
      label: "project link",
      variant: "outline" as const,
      target: "_self",
      showIcon: false,
    },
  ];

  return (
    <Card className="mx-auto w-full max-w-sm h-full flex flex-col">
      <div className="relative inset-0 aspect-video bg-black/35">
        <Image
          fill
          className="relative z-20 aspect-video w-full object-cover
            brightness-60 dark:brightness-40 grayscale"
          src={projectImage || `/images/placeholder300x100.png`}
          alt={title}
        />
      </div>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>
          <p className="py-2 text-muted-foreground italic">
            {monthYearStart} -{" "}
            {endDate === "Present" || endDate === "" ? "Present" : monthYearEnd}
          </p>
          <p className="text-wrap text-justify whitespace-normal">
            {projectDescription}
          </p>
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-wrap gap-3">
        {techStack.map((item, index) => (
          <ProjectTag key={index}>{item}</ProjectTag>
        ))}
      </CardContent>
      <CardFooter
        className="w-full flex flex-col lg:flex-row justify-center items-center
          gap-4 py-3"
      >
        {buttonItems.map(
          (btn) =>
            btn.href && (
              <Button
                key={btn.label}
                className={"w-full lg:w-30 md:w-full sm:w-full uppercase"}
                variant={btn.variant}
              >
                <Link
                  className="flex justify-between"
                  href={btn.href}
                  target={btn.target}
                >
                  {btn.label}
                  {btn.showIcon && (
                    <ArrowOutwardOutlinedIcon
                      fontSize="small"
                      className="ml-2"
                    />
                  )}
                </Link>
              </Button>
            ),
        )}
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
