import api from "../http.service"

export function getItems(query) {
    var url = "sites/MLA/search?q=" + query;
    return function(dispatch) {
        return api.get(url).then(response => {
            dispatch({type: "GET_ITEMS", payload: response.data.results});
        });
    };
};

export function closeModal() {
    return {type: "CLOSE_MODAL"}
};

export function openModal() {
    return {type: "OPEN_MODAL"}
};