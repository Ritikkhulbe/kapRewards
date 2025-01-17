import { cn } from "@/lib/utils";
import ConfigurationIcons from "../../../assets/icons/ConfigurationIcons";
import { Switch } from "@/components/ui/switch";
import ConfigurationDeleteAndDuplicate from "./ConfigurationDeleteAndDuplicate";

interface TileProps {
    name: string;
    parameters: number;
    subParameters: number;
    weightage: string;
    totalZT: string;
    LastModified: string;
    icon: number;
}

export interface TilesProps {
    data: TileProps[];
}

const Tile: React.FC<TilesProps> = ({ data }) => {

    return (
        <>
            {data.map((tile, index) => (
                <div
                    key={index}
                    className="flex w-full bg-primary border rounded-2xl p transition-all duration-200 hover:border-blue-500 py-1 px-4"
                >
                    {/* Title Section */}
                    <div
                        className={cn(
                            "flex w-[25%] items-center px-4 py-1 text-center text-sm last:border-r-0 overflow-hidden whitespace-nowrap text-ellipsis first:text-left font-semibold last:font-normal first:font-bold  text-textsecondary-light first:text-secondary-dark"
                        )}
                    >
                        <span className="flex items-center gap-3">
                            <ConfigurationIcons id={tile.icon} />
                            {tile.name}
                        </span>
                    </div>

                    {/* Parameters */}
                    <div className="flex w-[15%] justify-center items-center px-4 py-3 text-center text-sm font-semibold text-textsecondary-light">
                        {tile.parameters}
                    </div>

                    {/* Sub-Parameters */}
                    <div className="flex w-[15%] justify-center items-center px-4 py-3 text-center text-sm font-semibold text-textsecondary-light">
                        {tile.subParameters}
                    </div>

                    {/* Weightage */}
                    <div className="flex w-[15%] justify-center items-center px-4 py-3 text-center text-sm font-semibold text-textsecondary-light">
                        {tile.weightage}
                    </div>

                    {/* Total ZTs */}
                    <div className="flex w-[15%] justify-center items-center px-4 py-3 text-center text-sm font-semibold text-textsecondary-light">
                        {tile.totalZT}
                    </div>

                    {/* Last Modified */}
                    <div
                        className={cn(
                            "flex w-[15%] justify-center items-center px-1 py-3 text-center text-[13px] last:border-r-0  text-ellipsis first:text-left font-normal   text-textsecondary-light"
                        )}
                    >
                        {tile.LastModified}
                    </div>

                    <div className="flex justify-center items-center w-[15%] gap-4">
                        <Switch />
                        <ConfigurationDeleteAndDuplicate name={tile.name} id={tile.icon} />
                    </div>
                </div>
            ))}
        </>
    );
};

export default Tile;
