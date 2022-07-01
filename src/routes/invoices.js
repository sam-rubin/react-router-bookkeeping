import {NavLink, Outlet,Link,useSearchParams} from 'react-router-dom';
import { getInvoices } from '../data';
import {QueryNavLink} from '../navigation/querynavlink'; 

import {
    useParams,
    useNavigate,
    useLocation,
  } from "react-router-dom";
  

function Invoices(){

  let invoices = getInvoices();
  let [searchParams, setSearchParams] = useSearchParams();
  console.log('search params ',searchParams.get("filter"));
    return (
  
    <main style={{ padding: "1rem 0" }}>
       <h2> Invoices</h2>
       <nav style={{ borderRight: "solid 1px", padding: "1rem"}}>
     <input type ='text' value={searchParams.get("filter") || ""} onChange = {((event) => {
        let filter = event.target.value;
        if (filter) {
            setSearchParams({ filter });
          } else {
            setSearchParams({});
          }
     }
     )}></input> 
     
     {
     
     invoices.filter(invoice => {
          let filter =  searchParams.get("filter");
          if(!filter)
            return true;
          let name =invoice.name.toLowerCase();

          return name.startsWith(filter.toLocaleLowerCase());
     })
     .map((invoice) => (
    <QueryNavLink
    style={({ isActive }) => {
        return {
          display: "block",
          margin: "1rem 0",
          color: isActive ? "red" : "",
        };
      }}
      to={`/invoices/${invoice.number}`}
      key={invoice.number}
    >
      {invoice.name}
    </QueryNavLink>
  ))}


       </nav>

    
    
       <Outlet></Outlet> 
     </main>
       
    );
}

export {Invoices};