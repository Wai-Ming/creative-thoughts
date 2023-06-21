import Nav from './Nav';

export default function Layout({ children }) {
  return (
    <div>
      <Nav />
      <main className="min-h-screen">{children}</main>
    </div>
  );
}
