import axios from "axios";

const instance = axios.create({
    baseURL:'http://localhost:5001/clone-b50ff/us-central1/api' // the api cloud function url
})

export default instance;