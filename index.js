import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { ApolloProvider } from 'react-apollo'

import client from './graphql/ApolloClient'

import './theme'

import Main from './containers/Main'

import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(
    <ApolloProvider client={client}>
        <BrowserRouter>
            <Main />
        </BrowserRouter>
    </ApolloProvider>,
    document.getElementById('root'));
registerServiceWorker();
