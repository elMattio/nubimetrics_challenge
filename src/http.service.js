import axios from "axios";

const httpInstance = axios.create( {
    baseURL: "https://api.mercadolibre.com/"
});

export default httpInstance;