import axios from "axios";

export const axiosCliente = axios.create({
    baseURL: process.env.NEXT_PUBLIC_URL_BASE
})

