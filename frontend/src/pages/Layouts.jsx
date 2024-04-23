import { Outlet } from 'react-router-dom';
import MainNavigation from '../components/MainNavigation';

function Layouts() {
  return (
    <>
      <MainNavigation />
      <Outlet />
    </>
  );
}

export default Layouts;
