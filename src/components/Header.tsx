const Header = () => {
  const classNames =
    "flex items-center gap-2 hover:underline hover:underline-offset-4";

  const linkItem = [
    {
      id: 0,
      name: "home",
      href: "#",
      className: classNames,
    },
    {
      id: 1,
      name: "about",
      href: "#",
      className: classNames,
    },
    {
      id: 2,
      name: "projects",
      href: "#",
      className: classNames,
    },
    {
      id: 3,
      name: "contacts",
      href: "#",
      className: classNames,
    },
  ];

  return (
    <header className="bg-transparent top-0 z-50">
      <nav
        className="container mx-auto flex items-center justify-between p-4
          my-auto gap-[32px] font(family-name:--font-afacad))"
      >
        <span
          className="my-5 text-[32px] float-left
            font-(family-name:--font-archivo-black)"
        >
          ch.
        </span>
        {/* link items */}
        {linkItem.map((item) => (
          <a key={item.id} href={item.href} className={item.className}>
            {item.name}
          </a>
        ))}

        {/* <Button>
          <span className="text-[16px]"></span>
        </Button> */}
      </nav>
    </header>
  );
};

export default Header;
