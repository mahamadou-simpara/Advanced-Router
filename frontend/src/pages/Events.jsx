import { Link } from 'react-router-dom';

function EventsPage () {
    
    const EVENTS = [
        {id: 'e1', title: 'Event 1'},
        {id: 'e2', title: 'Event 2'},
        {id: 'e3', title: 'Event 3'},
        {id: 'e4', title: 'Event 4'},
        {id: 'e5', title: 'Event 5'},
    ]



    return <main>
    <h1>Events  Page</h1>
    <ul style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    }}>
        {EVENTS.map(e => <li key={e.id}><Link to={`${e.id}`}>{e.title}</Link></li>)}   
    </ul>
    </main>


}


export default EventsPage;