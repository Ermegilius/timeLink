import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      {/* Ekhane Header Boshbe */}
      <Outlet></Outlet>
      {/* Ekhane footer boshbe */}
    </div>
  );
};

export default Layout;
