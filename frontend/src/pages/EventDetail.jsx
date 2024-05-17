import { useLoaderData } from 'react-router-dom';
import EventItem from '../components/EventItem';



function EventDetailPage() {
  const data = useLoaderData();


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
    } else {
      return response;
    }
  };
