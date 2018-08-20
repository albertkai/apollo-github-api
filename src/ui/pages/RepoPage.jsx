import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { Query } from 'react-apollo';
import { connect } from 'react-redux';

import { GET_REPOSITORY_BY_NAME } from '../../api/apollo/queries';

@withRouter
@connect(
  state => state,
  null,
)
class RepoPage extends PureComponent {

  static propTypes = {
    core: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
  };

  render() {
    const {
      core: {
        searchOrganization: owner,
      },
      match: {
        params: {
          repo: name,
        }
      }
    } = this.props;
    return (
      <div className="page">
        <Query
          query={GET_REPOSITORY_BY_NAME}
          variables={{ owner, name }}
        >
          {({ loading, error, data }) => {
            if (loading) return "Loading...";
            if (error) return `Error! ${error.message}`;
            const {
              repository: {
                name,
                createdAt,
                descriptionHTML,
                forkCount,
                isPrivate,
                primaryLanguage,
                url,
                watchers: {
                  edges,
                },
              },
            } = data;
            return (
              <div>
                <h2>{name}</h2>
                <p>Created at: <strong>{createdAt}</strong></p>
                <p>Forks: <strong>{forkCount}</strong></p>
                <p>Private: <strong>{isPrivate ? 'Yes' : 'No'}</strong></p>
                {primaryLanguage && <p>Language: <strong>{primaryLanguage.name}</strong></p>}
                <p>Url: <strong><a href={url}>{url}</a></strong></p>
                <p dangerouslySetInnerHTML={{ __html: descriptionHTML }} />
                <h4>Watchers:</h4>
                <ul>
                  {edges.map(({ node: { url, login } }) => (
                    <li key={login}>
                      <a target="_blank" href={url}>@{login}</a>
                    </li>
                  ))}
                </ul>
              </div>
            );
          }}
        </Query>
      </div>
    )
  }
}

export { RepoPage };

export default RepoPage;
