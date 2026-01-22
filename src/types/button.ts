export interface ButtonProps {
    asChild?: boolean;
    href?: string;
    onClick?: () => void;
    children: React.ReactNode;
    variant?: "default" | "ghost";
}