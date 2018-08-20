import * as c from './constants';

const initialState = {
  inputValue: 'facebook',
  searchOrganization: 'facebook',
  isOrganizationLoading: true,
  organizationData: {},
};

export function coreReducer(state = initialState, action) {
  switch (action.type) {
    case c.SET_INPUT_VALUE:
      return {
        ...state,
        inputValue: action.value,
      };
    case c.SET_SEARCH_ORGANIZATION:
      return {
        ...state,
        searchOrganization: state.inputValue,
      };
    case c.SET_ORGANIZATION_LOADING:
      return {
        ...state,
        isOrganizationLoading: action.isLoading,
      };
    case c.SET_ORGANIZATION_DATA:
      return {
        ...state,
        isOrganizationLoading: action.organizationData,
      };
    default:
      return state;
  }
}
