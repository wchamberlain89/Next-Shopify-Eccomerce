import Nav from './Nav'
import Footer from './Footer'
const Layout = ({ children }) => {
  return (
    <div className="flex flex-col justify-between min-h-screen px-6">
      <Nav />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;