import PageContent from "../components/PageContent";
import { useRouteError } from 'react-router-dom'

function ErrorPage () {

    const error = useRouteError();

    let title = 'An error occured!'
    let message = 'Something went wrong !'

    if(error.status === 500) {
        title = 'Not found !'
        message = 'Could not find resource on page !'

    }

    if(error.status === 400) {
        title = 'An error occured!'

    }
    // console.log(error);

    return <div>
        <PageContent title={title}>
            {message}
        </PageContent>
    </div>
}

export default ErrorPage;