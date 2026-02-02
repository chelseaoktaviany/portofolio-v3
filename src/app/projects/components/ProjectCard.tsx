"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
// date format
import moment from "moment";

// types
import { ProjectCardProps } from "@/types/projects";

// components
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import ProjectTag from "./ProjectTag";

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

  return (
    <Card className="mx-auto w-full max-w-sm">
      {/* <div className="absolute inset-0 z-30 aspect-video bg-black/35">
        <Image
          fill
          className="relative z-20 aspect-video w-full object-cover
            brightness-60 dark:brightness-40 grayscale"
          src={projectImage || `/images/placeholder300x100.png`}
          alt={title}
        />
      </div> */}
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>
          <p className="py-2 text-muted-foreground italic">
            {monthYearStart} - {monthYearEnd}
          </p>
          <p>{projectDescription}</p>
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
        {demoLink && (
          <Button
            className="w-full lg:w-32 md:w-full sm:w-full"
            variant="default"
          >
            <Link href={demoLink}>demo link</Link>
          </Button>
        )}

        {projectLink && (
          <Button
            className="w-full lg:w-32 md:w-full sm:w-full"
            variant="outline"
          >
            <Link href={projectLink}>project link</Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
