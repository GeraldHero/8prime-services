import MyNavbar from "./myNavbar/MyNavbar";
import MyFooter from "./myFooter/MyFooter";
import Meta from "./Meta";

const Layout = ({ children }) => {
  return (
    <div>
      <Meta />
      <MyNavbar />
      {children}
      <MyFooter />
    </div>
  );
};

export default Layout;
