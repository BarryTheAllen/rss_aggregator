import Aside from "@/UI/Aside";
import Header from "@/UI/Header";
import { Outlet } from "react-router";

const Layout = () => {
  return (
    <>
      <Header />
      <Aside />
      <Outlet />
    </>
  );
};

export default Layout;
