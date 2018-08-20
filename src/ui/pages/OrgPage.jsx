import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export class OrgPage extends PureComponent {

  static propTypes = {
    loading: PropTypes.bool.isRequired,
    organization: PropTypes.object,
  };

  render() {
    if (this.props.loading) {
      return <p>Loading...</p>;
    }
    const {
      organization: {
        name,
        description,
        repositories: {
          totalCount,
        },
        websiteUrl,
        location,
      },
    } = this.props;
    return (
      <div>
        <h3>{name}</h3>
        <p><span>Location: </span><strong>{location}</strong></p>
        {websiteUrl && <p><span>Website: </span><strong><a href={websiteUrl}>{websiteUrl}</a></strong></p>}
        <p><span>Total repos: </span><strong>{totalCount}</strong></p>
        <p>{description}</p>
      </div>
    );
  }
}

export default OrgPage;
