import * as c from './constants';
import history from '../history';

export const setInputValue = e => ({
  type: c.SET_INPUT_VALUE,
  value: e.target.value,
});

export const setSearchOrganization = () => ({
  type: c.SET_SEARCH_ORGANIZATION,
});

export const search = (e) => {
  return (dispatch) => {
    e.preventDefault();
    dispatch({
      type: c.SET_SEARCH_ORGANIZATION,
    });
    history.push(`/`);
  };
};

