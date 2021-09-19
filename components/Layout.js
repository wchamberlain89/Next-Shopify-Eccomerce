import Nav from './Nav'
const Layout = ({ children }) => {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <Nav />
      <main>
        {children}
      </main>
      <footer className="py-40 text-center text-7xl bg-blue-200">Footer</footer>
    </div>
  );
};

export default Layout;