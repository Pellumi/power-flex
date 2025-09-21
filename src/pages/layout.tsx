import Footer from "@/components/landing/footer";
import TopNavbar from "@/components/top-navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      <TopNavbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
