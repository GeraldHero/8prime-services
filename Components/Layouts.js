import MyNavbar from './myNavbar/MyNavbar';
import MyFooter from './myFooter/MyFooter';
import Meta from './Meta';

const Layout = ({ children }) => {
  return (
    <body className='bg-gray-100'>
      <Meta />
      <MyNavbar />
      {children}
      <MyFooter />
    </body>
  );
};

export default Layout;
