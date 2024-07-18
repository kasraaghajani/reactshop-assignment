
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

// eslint-disable-next-line react/prop-types
function Layout({children}) {
  return (
    <div style={{ border: '6px solid #cdcdcd', margin: '15px 35px', boxShadow: '0px 0px 25px #c4c4c4;' }}>
      <Header />

      {children}

      <Footer />
    </div>
  );
}

export default Layout;