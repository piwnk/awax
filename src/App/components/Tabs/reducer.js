import { SET_ACTIVE_TAB } from './actions';


const initialState = {
  activeTab: window.location.href.split('/').slice(-1)[0],
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