import './../styles/guest.css';
import { Header } from '../components/Header/Header';
//import { Navbar } from '../components/Navbar/Navbar.jsx';
import { Footer } from '../components/Footer/Footer.jsx';
import { Outlet } from 'react-router-dom';
import { Sidebar } from '../components/Sidebar/Sidebar';

function Guest() {
  return (
    <>
      <div className="main_container">
        {/* {isLoginPage && <LoginLogo />} */}
        <Header />
        {/* <Navbar /> */}
        <Sidebar layoutType="guest" />
        {/* <main className='flex w-full justify-center p-3 sm:p-10 '> */}
        <main className="guest_main">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default Guest;
