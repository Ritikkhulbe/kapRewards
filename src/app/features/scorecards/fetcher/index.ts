import { fetchController } from "@/app/utils/fetchController";
import { DesignationApiResponse, getConfigList } from "./responseTypes";
import { COOKIES_SCORECARD_CONFIG } from "@/constants";

const getDesignations = async () => {
    const response = await fetchController<DesignationApiResponse>({ method: "GET", url: "ms/employee/api/v1/get-designation" })
    response.Designation.push({groupName: "Gourav Arora", id: 1, cmId: 1, privilegeId: "1", enable: true, checkAssignToId: true})
    response.Designation.push({groupName: "Darshan", id: 2, cmId: 2, privilegeId: "2", enable: true, checkAssignToId: true})
    return response.Designation;
}

const getConfigurationList = async () => {
    const response = await fetchController<getConfigList>({ method: "GET", url: "ms/ai-service/qa/v1/get-config-list" })
    return response.data;
}

const deleteConfiguration = async (id: number) => {
    // const response = await fetchController<any>({ method: "DELETE", url: `ms/ai-service/qa/v1/delete-config/${id}` })
    // return response;
    console.log("Delete Configuration", id)
}

const fetchConfiguration = async (id?:number) => {
    if(id===undefined){
        var url = "ms/qa-service/config/get?id=0&getDefaultConfigs=false"
    }else{
        url = `ms/qa-service/config/get?id=${id}&getDefaultConfigs=false`
    }
    try {
        const response = await fetchController<any>({
            method: "GET",
            url: url,
            options: {
                headers: {
                    Cookie: COOKIES_SCORECARD_CONFIG,
                },
            },
        });

        console.log("Response:", response);
        return response;
    } catch (error) {
        console.error("Error fetching configuration:", error);
    }
};

export { getDesignations  ,getConfigurationList, deleteConfiguration, fetchConfiguration}; 
