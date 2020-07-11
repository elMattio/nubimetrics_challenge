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

export function openModal(id) {
    var url = "items/" + id;
    return function(dispatch) {
        return api.get(url).then(response => {
            dispatch({type: "OPEN_MODAL", payload: response.data});
        });
    };
};