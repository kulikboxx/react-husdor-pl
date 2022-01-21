import React from 'react';
import { hydrate, render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';

import App from './components/app/App';

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.scss';

const GQL_ENDPOINT = 'https://husdor.pl/...';

const client = new ApolloClient({ uri: GQL_ENDPOINT, cache: new InMemoryCache() });

const APP = (
    <ApolloProvider client={client}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </ApolloProvider>
);

const rootElement = document.getElementById('root');

if (rootElement.hasChildNodes()) {
    hydrate(APP, rootElement);
} else {
    render(APP, rootElement);
}
