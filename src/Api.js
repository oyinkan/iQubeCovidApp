const API_BASE_ADDRESS = 'https://covidnigeria.herokuapp.com/api';

export default class Api {   
    static getUsers() {       
        const uri = API_BASE_ADDRESS;
        return fetch( uri, { method: 'GET' });   
    }
}