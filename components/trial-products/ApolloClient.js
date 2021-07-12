import fetch from 'node-fetch';
import { ApolloClient } from 'apollo-boost';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createHttpLink } from 'apollo-link-http';
import clientConfig from '../client-config';

const client = new ApolloClient(  { 
    link: createHttpLink(  {
            url: clientConfig.graphqUrl,
            fetch:fetch
    }),
    cache: new InMemoryCache()

});



export default client;
