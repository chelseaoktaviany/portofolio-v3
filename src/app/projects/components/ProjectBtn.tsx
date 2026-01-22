import Link from "next/link";

// types
import { ButtonProps } from "@/types/button";

// component
import { Button } from "@/components/ui/button";

const ProjectBtn = ({ href, onClick, children, variant }: ButtonProps) => {
  const baseStyles =
    "w-full lg:w-50 md:w-50 sm:w-full px-5 py-5 border tracking-wider transition-colors text-center uppercase hover:cursor-pointer";

  const variants = {
    default:
      "border-zinc-950 dark:border-zinc-50 hover:bg-zinc-800 dark:hover:bg-zinc-50/5 dark:hover:text-zinc-50",
    ghost:
      "border border-zinc-950 dark:border-zinc-50 hover:bg-zinc-950/5 dark:hover:bg-zinc-50/5",
  };

  const variantStyles =
    variant === "default"
      ? variants.default
      : variant === "ghost"
        ? variants.ghost
        : "";

  if (href) {
    return (
      <Button className={`${baseStyles} ${variantStyles}`} variant={variant}>
        <Link href={href}>{children}</Link>
      </Button>
    );
  }

  return (
    <Button
      onClick={onClick}
      className={`${baseStyles} ${variantStyles}`}
      variant={variant}
    >
      {children}
    </Button>
  );
};

export default ProjectBtn;
