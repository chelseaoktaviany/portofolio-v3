const Footer = () => {
  return (
    <footer className="h-40 border-t border-zinc-950/5 dark:border-zinc-50/5">
      <h1 className="text-lg text-center font-light">
        &copy; 2022-{new Date().getFullYear()} chel.dev all rights reserved.
      </h1>
    </footer>
  );
};

export default Footer;
