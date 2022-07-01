
import { NavLink,useLocation } from "react-router-dom";

export function QueryNavLink({to,...props}){

    let obj = {to,...props};
    console.log("object passed in Parameter",obj);
    let location = useLocation();
    console.log("location is ",location);
    
    return <NavLink to={to + location.search} {...props} />;
}


