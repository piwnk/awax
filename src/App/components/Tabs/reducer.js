import { SET_ACTIVE_TAB } from './actions';

const currentRoute = window.location.href.split('/').slice(-1)[0]

const initialState = {
  activeTab: currentRoute || 'home',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_ACTIVE_TAB:
      // console.log(window.location.href.split('/').slice(-1)[0]);
      return {
        ...state,
        activeTab: action.name,
      };
    default:
      return state;
  }
};