import axios, { AxiosRequestConfig, AxiosResponse } from "axios"
import { BASE_URL } from "@/constants"
// Define the supported HTTP methods
type HttpMethod = "GET" | "POST" | "PUT" | "DELETE"

// Interface for the fetch controller parameters
interface FetchControllerParams {
    method: HttpMethod
    url: string
    data?: any
    options?: AxiosRequestConfig
}

// Helper functions for each HTTP method
const fetchGetApi = async <T>(url: string, config?: AxiosRequestConfig): Promise<T> => {
    const response: AxiosResponse<T> = await axios.get(url, config)
    return response.data
}

const fetchPostApi = async <T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> => {
    const response: AxiosResponse<T> = await axios.post(url, data, config)
    return response.data
}

const fetchPutApi = async <T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> => {
    const response: AxiosResponse<T> = await axios.put(url, data, config)
    return response.data
}

const fetchDeleteApi = async <T>(url: string, config?: AxiosRequestConfig): Promise<T> => {
    const response: AxiosResponse<T> = await axios.delete(url, config)
    return response.data
}

// Main controller function that uses the helper functions based on the method parameter
export const fetchController = async <T>({
    method,
    url,
    data,
    options,
}: FetchControllerParams): Promise<T> => {
    switch (method) {
        case "GET":
            return await fetchGetApi<T>(BASE_URL+url, options)
        case "POST":
            return await fetchPostApi<T>(BASE_URL+url, data, options)
        case "PUT":
            return await fetchPutApi<T>(BASE_URL+url, data, options)
        case "DELETE":
            return await fetchDeleteApi<T>(BASE_URL+url, options)
        default:
            throw new Error(`Unsupported HTTP method: ${method}`)
    }
}
