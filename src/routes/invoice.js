import { useParams } from "react-router-dom";
import { getInvoice,deleteInvoice } from "../data";
import {useNavigate,useLocation} from "react-router-dom";

function Invoice(){
       let navigate = useNavigate();
       let location = useLocation();
       let params = useParams();
       let invoiceId = params.invoiceId;
       let invoice = getInvoice(invoiceId); 
       
    return (
    <div>
    <h2>Invoice {invoiceId} </h2>
    
    <main style={{ padding: "1rem" }}>
      <h2>Total Due: {invoice.amount}</h2>
      <p>
        {invoice.name}: {invoice.number}
      </p>
      <p>Due Date: {invoice.due}</p>
      <p>
        <button
          onClick={() => {
            deleteInvoice(invoice.number);
            navigate("/invoices" + location.search);
          }}
        >
          Delete
        </button>
      </p>
    </main>
  
    </div>
    );
}


export {Invoice};