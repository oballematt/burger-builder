import axios from "axios"

const instance = axios.create({
    baseURL: 'https://react-burger-builder-6e004-default-rtdb.firebaseio.com/'
});

export default instance