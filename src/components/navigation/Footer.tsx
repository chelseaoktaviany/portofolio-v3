const Footer = () => {
  return (
    <footer
      className="h-20 lg:h-40 md:h-40 sm:h-20 border-t border-zinc-950/5
        dark:border-zinc-50/5"
    >
      <h1
        className="text-sm lg:text-lg md:text-md sm:text-sm text-center
          font-light"
      >
        &copy; 2022-{new Date().getFullYear()} chel.dev all rights reserved.
      </h1>
    </footer>
  );
};

export default Footer;
