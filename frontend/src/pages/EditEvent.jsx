import {useParams } from 'react-router-dom';

function EditEventPage () {

    const params = useParams();



    return <>
    <h1>Edit Event Page</h1>
    <p>{params}</p>
    </> 
}


export default EditEventPage;