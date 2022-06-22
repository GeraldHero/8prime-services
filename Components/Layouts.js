import MyBackToBack from "./myBackToBack/MyBackToBack";
import MyNavbar from "./myNavbar/MyNavbar";
import Meta from "./Meta";
import MyFooter from "./myFooter/MyFooter";
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
