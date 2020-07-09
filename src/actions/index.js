import api from "../http.service"

export function getItems(query) {
    var url = "sites/MLA/search?q=" + query;
    return function(dispatch) {
        return api.get(url).then(response => {
            dispatch({type: "GET_ITEMS", payload: response.results});
        });
    };
};