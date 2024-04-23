import { Outlet } from 'react-router-dom';
import EventsNavigation from '../components/EventsNavigation';

function Layouts2() {
  return (
    <>
      <EventsNavigation />     
      <Outlet />
    </>
  );
}

export default Layouts2;
