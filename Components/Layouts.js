import MyNavbar from './myNavbar/MyNavbar';
import MyFooter from './myFooter/MyFooter';
import Meta from './Meta';

const Layout = ({ children }) => {
  return (
    <div className='bg-gray-100'>
      <Meta />
      <MyNavbar />
      {children}
      <MyFooter />
    </div>
  );
};

export default Layout;
