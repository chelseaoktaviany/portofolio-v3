import Link from "next/link";

// types
import { ButtonProps } from "@/types/button";

// component
import { Button } from "@/components/ui/button";

const Btn = ({ href, onClick, children, variant }: ButtonProps) => {
  const baseStyles =
    "w-full lg:w-50 md:w-full sm:w-full h-18  px-10 py-6 tracking-wider uppercase text-center transition-colors hover:cursor-pointer";

  const variants = {
    default:
      "bg-zinc-950 dark:bg-zinc-200 hover:bg-zinc-600 dark:hover:bg-zinc-800 text-zinc-100 dark:text-zinc-900 hover:text-zinc-100 dark:hover:text-zinc-50",
    ghost:
      "border border-zinc-950 dark:border-zinc-50 hover:bg-zinc-300/30 dark:hover:bg-zinc-50/10",
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

export default Btn;
