import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from '../../api/redux/actions';

const SearchContainer = styled.section`
  display: flex;
  padding: 10px;
  border-bottom: 1px solid rgba(255, 255, 255, .2);
`;

@connect(
  state => state,
  dispatch => bindActionCreators(actions, dispatch),
)
class Search extends PureComponent {

  static propTypes = {
    core: PropTypes.object.isRequired,
    setInputValue: PropTypes.func.isRequired,
    search: PropTypes.func.isRequired,
  };

  render() {
    const {
      core: {
        inputValue,
      },
      setInputValue,
      search,
    } = this.props;
    return (
      <SearchContainer>
        <form onSubmit={search}>
          <input
            type="text"
            value={inputValue}
            onChange={setInputValue}
          />
          <button
            onClick={search}
          >
            Search
          </button>
        </form>
      </SearchContainer>
    );
  }
}

export { Search };