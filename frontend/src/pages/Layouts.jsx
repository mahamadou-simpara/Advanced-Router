import { Outlet, useLoaderData } from 'react-router-dom';
import MainNavigation from '../components/MainNavigation';

function Layouts() {

  const data = useLoaderData();

  console.log(data);

  return (
    <>
      <MainNavigation />
      <Outlet />
    </>
  );
}

export default Layouts;
