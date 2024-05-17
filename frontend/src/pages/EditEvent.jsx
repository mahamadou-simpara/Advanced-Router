import {useParams } from 'react-router-dom';
import EventForm from '../components/EventForm';

function EditEventPage () {

    const params = useParams();

    console.log(params.eventId);

    return <>
    <EventForm />
    </> 
}



export default EditEventPage;


export const loader = () => {
    fetch('http://localhost')
}