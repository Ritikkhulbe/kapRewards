
const DropdownMenuIcon = ({ isOpen }: { isOpen: boolean }) => {
    return (
        <svg
            className={`w-5 h-5 transform transition-transform ${isOpen ? "rotate-180" : "rotate-0"
                }`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
            />
        </svg>
    )
}

export default DropdownMenuIcon