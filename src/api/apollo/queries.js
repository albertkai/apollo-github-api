import gql from 'graphql-tag';

export const GET_ORGANIZATION = gql`
  query($organization: String!, $cursor: String) {
    organization(login: $organization) {
      id
      name
      url
      avatarUrl
      websiteUrl
      location
      email
      description
      repositories(
        first: 15
        orderBy: { direction: DESC, field: STARGAZERS }
        after: $cursor
      ) {
        edges {
          node {
            ...repository
          }
        }
        totalCount
        pageInfo {
          endCursor
          hasNextPage
        }
      }
    }
  }
  fragment repository on Repository {
    id
    name
    url
    watchers {
      totalCount
    }
  }
`;

export const GET_REPOSITORY_BY_NAME = gql`
  query($owner: String!, $name: String!) {
    repository(owner: $owner, name: $name) {
      name
      url
      createdAt
      description
      descriptionHTML
      forkCount
      isPrivate
      primaryLanguage {
        name
      }
      url
      watchers (
        first: 20
      ) {
        edges {
          node {
            name
            login
            url
          }
        }
      }
    }
  }
`;
