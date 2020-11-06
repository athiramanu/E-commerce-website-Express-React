import { API } from '../../backend';

export const getProducts = () => {
    return fetch(`${API}/products`, {
        mathod: "GET"
    })
    .then(response => {
        return response.json()
    })
    .catch(err => console.log(err));
}