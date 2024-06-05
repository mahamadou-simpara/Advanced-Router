import { json, useLoaderData } from 'react-router-dom';
import EventForm from '../components/EventForm';

function EditEventPage () {

    const data = useLoaderData();

    return <>
    <EventForm event={data.event}/>
    </> 
}



export default EditEventPage;


export const loader = async ({request, params}) => {
    const id = params.eventId;

    const response = await fetch(`http://localhost:8080/events/${id}`);

    if(!response.ok){
        throw json({message: 'Failed to load the selected items data'}, {status: 500});
    }else{
        return response;
    }
}