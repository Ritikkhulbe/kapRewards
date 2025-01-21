import routesConfig from "@/routes/routesConfig";
import { NavLink } from "react-router-dom";
import Logo from "../assets/icons/Logo";
import AgentIcon from "../assets/icons/AgentIcon";
import { Separator } from "@/components/ui/separator";
import { withPublicUrl } from "@/util";

const Navbar = () => {
  // Helper function to remove any trailing `/*` from the path
  const cleanPath = (path: string) => path.replace(/\/\*$/, "");

  return (
    <div className="w-14 bg-white h-screen border-r border-[#ECEEF1] fixed overflow-hidden">
      <nav className="flex flex-col h-[100%] justify-between">
        {/* Side Bar Header */}
        <ul className="flex flex-col justify-center items-center w-full ">
          <div className="my-4 flex justify-center items-center">
            <Logo />
          </div>
          {routesConfig.map((route) => (
            <li key={route.path} className="my-1">
              <NavLink
                to={withPublicUrl(cleanPath(route.path))}
                className="flex justify-center items-center"
              >
                {({ isActive }) => <route.icon isActive={isActive} />}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Side Bar Footer */}
        <div className="mb-4 flex flex-col justify-center items-center">
          <Separator className="mb-3 w-[80%]" />
          <div className="flex justify-center items-center">
            <AgentIcon />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
