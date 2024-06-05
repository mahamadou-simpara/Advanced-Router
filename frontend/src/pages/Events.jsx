import EventsList from '../components/EventsList';
import { useLoaderData } from 'react-router-dom'

function EventsPage() {
  
    const events = useLoaderData()


//   if(events.isError){
//     return <p>{events.message}</p>  First way I can check if there is an error or not.
//   }

  return (
    <>
     {events.length > 0 ? <EventsList events={events} /> : <h1 style={{textAlign: 'center'}}>No events available yet </h1> }
    </>
  );
}

export default EventsPage;


export const loader = async () => {
        const response = await fetch('http://localhost:8080/events');


        if (!response.ok) {
        // return { isError: true, message: 'Could not fetch the data !'} First way I can check if there is an error or not.

        // throw { message: 'Could not fetch the data !'}  Second way I can check if there is an error, this one needs an errorElement: <ErrorPage /> which is an attribute for the Router.

        throw new Response(JSON.stringify({message: 'Something occured !'}), {status: 500})

        } else {
        const resData = await response.json();
        return resData.events;
        }

      };
