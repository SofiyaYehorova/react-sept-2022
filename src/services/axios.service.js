import axios from "axios";

import {baseURL} from "../configurations";


const axiosService = axios.create({baseURL})


export {
    axiosService
};