

const GeneralSettingsIcon = ({isActive=false}:{isActive?:boolean}) => {
    return (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.75 15.75V10.5M3.75 7.5V2.25M9 15.75V9M9 6V2.25M14.25 15.75V12M14.25 9V2.25M1.5 10.5H6M6.75 6H11.25M12 12H16.5" stroke={!isActive ? "#929BA8" : "#000"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    )
}

export default GeneralSettingsIcon