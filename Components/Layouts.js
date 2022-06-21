import MyBackToBack from "./myBackToBack/MyBackToBack";
import MyNavbar from "./myNavbar/MyNavbar";
import Meta from "./Meta";
const Layout = ({ children }) => {
  return (
    <div>
      <Meta />
      <MyNavbar />
      {children}
    </div>
  );
};

export default Layout;
