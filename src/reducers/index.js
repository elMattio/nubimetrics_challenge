const initialState = {
    items: [],
    isModalOpen: false
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
        isModalOpen: true
      }
    };
    if(action.type === "CLOSE_MODAL") {
      return {
        ...state,
        isModalOpen: false
      }
    };
    return state;
};


    
export default rootReducer;