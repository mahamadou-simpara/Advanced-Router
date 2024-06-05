// Challenge / Exercise

// 1. Add five new (dummy) page components (content can be simple <h1> elements)
//    - HomePage
//    - EventsPage
//    - EventDetailPage
//    - NewEventPage
//    - EditEventPage
// 2. Add routing & route definitions for these five pages
//    - / => HomePage
//    - /events => EventsPage
//    - /events/<some-id> => EventDetailPage
//    - /events/new => NewEventPage
//    - /events/<some-id>/edit => EditEventPage
// 3. Add a root layout that adds the <MainNavigation> component above all page components
// 4. Add properly working links to the MainNavigation
// 5. Ensure that the links in MainNavigation receive an "active" class when active
// 6. Output a list of dummy events to the EventsPage
//    Every list item should include a link to the respective EventDetailPage
// 7. Output the ID of the selected event on the EventDetailPage
// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomePage from './pages/Home';
import EventsPage, {loader as eventsLoader} from './pages/Events';
import Layouts from './pages/Layouts';
import EventDetailPage, { loader as eventDetailLoader, action as eventDeleteAction } from './pages/EventDetail.jsx';
import NewEventPage, {action as NewEventAction} from './pages/NewEvent';
import EditEventPage, {loader as editEventLoader} from './pages/EditEvent';
import ErrorPage from './pages/Error';
import EventsRoot from './pages/EventsRoot';


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layouts />,
      errorElement: <ErrorPage />,
      children: [
        {path: '/',  element: <HomePage />},
        {path: 'events', element: <EventsRoot />, children: [
          {index: true, element: <EventsPage />, loader: eventsLoader},
          {path: ':eventId', 
          id: 'event-detail',
          loader: eventDetailLoader, 
          children: [
            {index: true, element: <EventDetailPage />, loader: eventDetailLoader, action: eventDeleteAction },
            {path: 'edit', element: <EditEventPage />, loader: editEventLoader}
          ]},
          {path: 'new', element: <NewEventPage />, action: NewEventAction },
        ]},
      ]
    }
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
