import GenericLayout, { GenericLayoutButton, GenericLayoutDescription, GenericLayoutHeader } from '@/app/genericComponents/GenericLayout'
import Tile from './components/Tile';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getConfigurationList } from './fetcher';
import { withPublicUrl } from '@/util';

const formatLastUpdatedTime = (dateTime: string): string => {
    const date = new Date(dateTime);

    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-indexed
    const year = date.getFullYear();

    let hours = date.getHours();
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12; // Convert 24-hour to 12-hour format

    return `${day}-${month}-${year} ${hours}:${minutes} ${ampm}`;
};

const mapDataToHeaders = (item: any) => ({
    name : item.name,
    parameters: item["parameter count"],
    subParameters: item["sub-parameter count"],
    weightage: item.weightage ||"N/A", // Replace with actual data if available
    totalZT : item["Total ZTs"] || "N/A", // Replace with actual data if available
    LastModified: formatLastUpdatedTime(item.lastUpdatedTime),
    icon: item.id
});


const Scoreboard = () => {
    const [configList, setConfigList] = useState<any[]>([]);  
    const navigate = useNavigate();

    const headers = ["Scorecard Title", "Parameters", "Sub-Parameters", "Weightage", "Total ZTs", "Last Modified",""];

    useEffect(() => {
        const fetchConfigList = async () => {
            const response = await getConfigurationList();
            console.log(response)
            setConfigList(response.map(mapDataToHeaders));
        }
        fetchConfigList();
    }, []);

    useEffect(() => {
        console.log(configList)
    },[configList]) 

    return (
        <GenericLayout>
            <GenericLayoutHeader>Score Cards</GenericLayoutHeader>
            <GenericLayoutDescription>Create and configure scorecards to score conversations based</GenericLayoutDescription>
            <GenericLayoutButton onClick={()=>navigate(withPublicUrl('/scorecard/new'))}>Create New</GenericLayoutButton>
            {/* Table Headers */}
            <div className="flex w-full px-4">
                {headers.map((header, index) => (
                    <div
                        key={index}
                        className={"flex justify-center first:justify-start w-[15%] first:w-[25%] px-4 py-3 text-center last:border-r-0 font-thin text-sm text-slate-500 first:text-left"}>
                        {header}
                    </div>
                ))}
            </div>

            {/* Tiles */}
            
            <div className={"flex flex-col gap-2 mt-1"} onClick={()=>navigate(withPublicUrl(`/scorecard/configuration/2`))}>
                <Tile data={configList} />
            </div>    
        </GenericLayout>
    )
}

export default Scoreboard

