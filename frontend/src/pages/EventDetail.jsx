import { useRouteLoaderData, redirect, json } from 'react-router-dom';
import EventItem from '../components/EventItem';



function EventDetailPage() {
  const data = useRouteLoaderData('event-detail');


  return (
    <main>
        <EventItem event={data.event}/>
    </main>
  );
}

export default EventDetailPage;

export const loader = async ({request, params}) => {
    const id = params.eventId;
  
  
    const response = await fetch(`http://localhost:8080/events/${id}`);
  
    if (!response.ok) {
      throw json({message: 'Failed to load event'}, {status: 500})
    } else {
      return response;
    }
  };

  export async function action ({request, params}) {
    const id = params.eventId;

    const response = await fetch('http://localhost:8080/events/' + id, {
      method: request.method
    });

    if (!response.ok) {
      throw json({message: 'Could not delete event'}, {status: 500})
    }    

    return redirect('/events')
  }
