import { useQuery } from '@apollo/client';

import { GET_CONTACT_DATA } from '../../queries/Queries';

import AppLayout from './AppLayout';
import Loader from '../loader/Loader';
import ErrorMessage from '../errorMessage/ErrorMessage';

export default function App() {
    const { loading, error, data } = useQuery(GET_CONTACT_DATA);

    return (
        <>
            {loading && <Loader typeLoading={'initial'} />}
            {error && <ErrorMessage />}
            {!(loading && error) && <AppLayout loading={loading} error={error} data={data} />}
        </>
    );
}
