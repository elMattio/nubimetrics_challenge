import api from "../http.service"

export function getItems(query) {
    var urls = [];
    for(let i = 0; i < 20; i++) {
        urls.push("sites/MLA/search?q=" + query + "&offset=" + i*50)
    };
    return function(dispatch) {
        return Promise.all(urls.map(url => api.get(url)
        )).then(response => {
            var items = []
            response.forEach((el) => {
                if(el.data.results.length > 0) {
                    items = items.concat(el.data.results)
                };
            });
            dispatch({type: "GET_ITEMS", payload: items});
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

export function activePage(number) {
    return {type: "ACTIVE_PAGE", payload: number}
};

export function changePage(number) {
    return {type: "CHANGE_PAGE", payload: number}   
};

export function setPages(number) {
    return {type: "SET_PAGES", payload: number}   
};

export function resetPagination() {
    return {type: "RESET_PAGINATION"}
};

export function isLoading() {
    return {type: "IS_LOADING"}
};

export function sortingItems(items) {
    return {type: "SORTING_ITEMS", payload: items}
}