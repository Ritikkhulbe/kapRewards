import { fetchController } from "@/app/utils/fetchController"
import { User } from "../types"

export const getUserData = async () => {
    const response = await fetchController<User[]>({
        method: "GET",
        url: "https://jsonplaceholder.typicode.com/users",
    })
    return response;
}

export const fetchDashboardDataV3 = async (data:any) => {
    const response = await fetchController<any>({
        method: "POST",
        url: "ms/ai-service/qa/v1/get-dashboard-details-v3",
        data: data
    });
    return response;
}