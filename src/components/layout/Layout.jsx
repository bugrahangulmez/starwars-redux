import { Outlet } from "react-router-dom";
import { Header } from "../index";

const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};
export default Layout;
