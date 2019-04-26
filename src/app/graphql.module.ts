import { NgModule } from '@angular/core';
import { InMemoryCache } from 'apollo-cache-inmemory';

import { ApolloModule, Apollo } from 'apollo-angular';
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';
import { NgrxCache } from 'apollo-angular-cache-ngrx';

const uri = 'http://server:4000/graphql';
export function createApollo(httpLink: HttpLink) {
  return {
    link: httpLink.create({uri}),
    cache: new InMemoryCache(),
  };
}

@NgModule({
  exports: [ApolloModule, HttpLinkModule],

})
export class GraphQLModule {
  constructor(
    apollo: Apollo,
    httpLink: HttpLink,
    ngrxCache: NgrxCache
  ) {
    // create Apollo
    apollo.create({
      link: httpLink.create({ uri }),
      cache: ngrxCache.create(),
      defaultOptions: {
        watchQuery: {
          fetchPolicy: 'network-only',
          errorPolicy: 'ignore',
        },
        query: {
          fetchPolicy: 'network-only',
          errorPolicy: 'all',
        },
      }
    });
  }
}
