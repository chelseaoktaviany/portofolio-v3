const ProjectTag = ({ children }: { children?: React.ReactNode }) => {
  return (
    <span
      className="text-xs border border-zinc-950/50 dark:border-zinc-50/50
        bg-zinc-50/10 dark:bg-zinc-700/30 px-3 py-2 rounded-lg tracking-wider"
    >
      {children}
    </span>
  );
};

export default ProjectTag;
