const initialState = {
    items: []
  }
  
function rootReducer(state = initialState, action) {
    if (action.type === "GET_ITEMS") {
        return {
          ...state,
          items: action.payload
        }
      };
    return state;
};
    
export default rootReducer;