import { Form, useNavigate, useNavigation, redirect, json } from 'react-router-dom';

import classes from './EventForm.module.css';

function EventForm({ method, event }) {
  const navigate = useNavigate();
  const navigation = useNavigation();

  const isSubmitting = navigation.state === 'submitting';
  function cancelHandler() {
    navigate('..');
  }

  return (
    <Form method={method} className={classes.form}>
      <p>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          name="title"
          required
          defaultValue={event ? event.title : ''}
        />
      </p>
      <p>
        <label htmlFor="image">Image</label>
        <input
          id="image"
          type="url"
          name="image"
          required
          defaultValue={event ? event.image : ''}
        />
      </p>
      <p>
        <label htmlFor="date">Date</label>
        <input
          id="date"
          type="date"
          name="date"
          required
          defaultValue={event ? event.date : ''}
        />
      </p>
      <p>
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          rows="5"
          required
          defaultValue={event ? event.description : ''}
        />
      </p>
      <div className={classes.actions}>
        <button type="button" disabled={isSubmitting} onClick={cancelHandler}>
          Cancel
        </button>
        <button disabled={isSubmitting}>{isSubmitting ? 'Submitting...' : 'Save'}</button>
      </div>
    </Form>
  );
}

export default EventForm;


export async function action({ request, params }) {
  const submittedData = await request.formData();

  const method = request.method;

  console.log(method);

  const eventData = {
    title: submittedData.get('title'),
    description: submittedData.get('description'),
    image: submittedData.get('image'),
    date: submittedData.get('date')
  };

  let url = 'http://localhost:8080/events';
  if(method === 'PATCH'){
    const id = params.eventId;

    url = 'http://localhost:8080/events/' + id
  }

  const response = fetch(url, {
    method: method,
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
