import EventForm from '../components/EventForm';
import { redirect, json } from 'react-router-dom';

function NewEventPage() {
  return <EventForm />;
}

export default NewEventPage;

export async function action({ request, params }) {
  const submittedData = await request.formData();

  const eventData = {
    title: submittedData.get('title'),
    description: submittedData.get('description'),
    image: submittedData.get('image'),
    date: submittedData.get('date')
  };

  const response = fetch('http://localhost:8080/events', {
    method: 'POST',
    body: JSON.stringify(eventData),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if(!(await response).ok){
    throw json({message: 'Failed to save the event'}, {status: 500})
  }

  return redirect('/events');
}
