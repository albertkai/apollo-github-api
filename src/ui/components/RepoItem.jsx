import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const RepoItemContainer = styled.li`
  a {
    display: block;
    padding: 5px 10px;
    color: white;
    text-decoration:none;
    &.active, &:hover {
      background: rgba(255, 255, 255, .3);
      color: rgba(0, 0, 0, .8);
    }
  }
`;

export class RepoItem extends PureComponent {

  static propTypes = {
    repo: PropTypes.shape({
      name: PropTypes.string,
    }).isRequired,
  };

  render() {
    const {
      repo: {
        name,
      },
    } = this.props;
    return (
      <RepoItemContainer>
        <NavLink
          to={`/${name}`}
          activeClassName="active"
        >
          {name}
        </NavLink>
      </RepoItemContainer>
    );
  }
}
