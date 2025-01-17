import axios, { AxiosRequestConfig, AxiosResponse } from "axios"

// Create an Axios instance with default settings
const apiClient = axios.create({
    baseURL: "", // Replace with your API base URL
    timeout: 10000, // Request timeout
    headers: {
        "Content-Type": "application/json",
    },
})

// Generic GET request
export const get = async <T>(url: string, config?: AxiosRequestConfig): Promise<T> => {
    const response: AxiosResponse<T> = await apiClient.get(url, config)
    return response.data
}

// Generic POST request
export const post = async <T>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
): Promise<T> => {
    const response: AxiosResponse<T> = await apiClient.post(url, data, config)
    return response.data
}

// Generic PUT request
export const put = async <T>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
): Promise<T> => {
    const response: AxiosResponse<T> = await apiClient.put(url, data, config)
    return response.data
}

// Generic DELETE request
export const remove = async <T>(url: string, config?: AxiosRequestConfig): Promise<T> => {
    const response: AxiosResponse<T> = await apiClient.delete(url, config)
    return response.data
}

// Generic PATCH request
export const patch = async <T>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
): Promise<T> => {
    const response: AxiosResponse<T> = await apiClient.patch(url, data, config)
    return response.data
}

// Optionally, you can export the Axios instance for custom configuration
export default apiClient
