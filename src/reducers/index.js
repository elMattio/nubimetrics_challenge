const initialState = {
    items: [],
    isModalOpen: false,
    itemDetail: {},
    pagination: {
      active: 1,
      first: 1,
      pages: 20
    }
  }
  
function rootReducer(state = initialState, action) {
    if (action.type === "GET_ITEMS") {
        return {
          ...state,
          items: action.payload
        }
    };
    if(action.type === "OPEN_MODAL") {
      return {
        ...state,
        isModalOpen: true,
        itemDetail: action.payload
      }
    };
    if(action.type === "CLOSE_MODAL") {
      return {
        ...state,
        isModalOpen: false
      }
    };
    if(action.type === "ACTIVE_PAGE") {
      return {
        ...state,
        pagination: {
          ...state.pagination,
          active: action.payload
        }
      }
    };
    if(action.type === "CHANGE_PAGE") {
      return {
        ...state,
        pagination: {
          ...state.pagination,
          first: state.pagination.first + action.payload
        }
      }
    };
    if(action.type === "SET_PAGES") {
      return {
        ...state,
        pagination: {
          ...state.pagination,
          pages: action.payload
        }
      }
    };
    if(action.type === "RESET_PAGINATION") {
      return {
        ...state,
        pagination: {
          ...state.pagination,
          active: 1,
          first: 1 
        }
      }
    };
    return state;
};

export default rootReducer;