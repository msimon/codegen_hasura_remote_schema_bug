import * as Types from '../graphql.d';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions =  {}
export type GetTwoQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetTwoQuery = { __typename?: 'query_root', two?: Types.Maybe<string> };


export const GetTwoDocument = gql`
    query getTwo {
  two
}
    `;
export function useGetTwoQuery(baseOptions?: Apollo.QueryHookOptions<GetTwoQuery, GetTwoQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTwoQuery, GetTwoQueryVariables>(GetTwoDocument, options);
      }
export function useGetTwoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTwoQuery, GetTwoQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTwoQuery, GetTwoQueryVariables>(GetTwoDocument, options);
        }
export type GetTwoQueryHookResult = ReturnType<typeof useGetTwoQuery>;
export type GetTwoLazyQueryHookResult = ReturnType<typeof useGetTwoLazyQuery>;
export type GetTwoQueryResult = Apollo.QueryResult<GetTwoQuery, GetTwoQueryVariables>;