import { useParams } from 'react-router-dom';


function EventDetailPage () {
    const params = useParams();

    console.log(params);
    return <main>
    <h1>Event Detail Page</h1>
     <p>{params.eventId}</p>
    </main>
}


export default EventDetailPage;