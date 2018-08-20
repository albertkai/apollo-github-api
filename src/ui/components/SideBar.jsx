import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { RepoItem } from './RepoItem';
import { Search } from '../components/Search';

const SideBarWrap = styled.section`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const ReposList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const Avatar = styled.img`
  width: 100px;
  height: 100px;
  display:block;
  margin: 20px auto;
  border-radius: 50%;
  border: 1px solid white;
`;

const OrganizationTitle = styled.h2`
  text-align: center;
  color: white;
  a {
    color: white;
    text-decoration:none;
  }
`;

class SideBar extends PureComponent {

  static propTypes = {
    loading: PropTypes.bool.isRequired,
    error: PropTypes.oneOf([PropTypes.string, null, undefined]),
    data: PropTypes.shape({
      organization: PropTypes.object,
    }),
  };

  renderOrgInfo = () => {
    if (this.props.loading) return <p>Loading...</p>
    if (this.props.error) return `Error! ${this.props.error.message}`;
    const {
      data: {
        organization: {
          avatarUrl,
          name,
          repositories: {
            edges,
          },
        },
      }
    } = this.props;
    return (
      <div>
        <Avatar src={avatarUrl} />
        <OrganizationTitle>
          <Link to="/">{name}</Link>
        </OrganizationTitle>
        <ReposList>
          {edges.map(item => (
            <RepoItem
              {...this.props}
              key={item.node.url}
              repo={item.node} />
          ))}
        </ReposList>
      </div>
    )
  };

  render() {
    return (
      <SideBarWrap>
        <Search />
        {this.renderOrgInfo()}
      </SideBarWrap>
    );
  }
}

export { SideBar };

export default SideBar;
