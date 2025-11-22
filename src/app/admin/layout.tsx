export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <nav>navbar</nav>
      <aside>sidebar</aside>
      {children}
      <footer>footer</footer>
    </div>
  );
}
