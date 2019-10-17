import axios from 'axios';

export default {
    createDish: (params = {}, onSuccess, onError) => {
        return axios.post('http://localhost:3000/dishes/create', params)
            .then(onSuccess)
            .catch(onError);
    }
}