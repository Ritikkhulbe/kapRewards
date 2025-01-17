
import SubParameterList from "./SubParameterList"
import SubParameterSettings from "./SubParameterSettings";
import { useAppSelector } from "@/store/hooks";

const ParameterDetails = () => {

    const activeParameter = useAppSelector(state => state?.parameterUtil?.activeParameter);
    const editing = useAppSelector(state => state?.parameterUtil?.editing);

    if (activeParameter !== -1) {
        if (editing === -1) {
            return (
                <SubParameterList />
            )
        } else {
            return (
                <SubParameterSettings />
            )
        }
    }



    return;
}

export default ParameterDetails