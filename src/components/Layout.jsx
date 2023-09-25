import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
  return (
    <section id="page-container">
      <Header />
      <Outlet />
      <Footer />
    </section>
  );
};
export default Layout;
