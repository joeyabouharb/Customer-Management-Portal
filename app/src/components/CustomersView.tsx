import { useEffect, useState } from "react";
import { getCustomers } from "../services/customerService";
import CustomerView from "./CustomerView";
const initialState: Nullable<CustomerDetails>[] = [];
const CustomersView = () => {
    const [customers, onCustomersLoad] = useState<Nullable<CustomerDetails>[]>(initialState)
    useEffect(() => {
        let isMounted = true; 
        getCustomers().then(c => {
            if (isMounted) onCustomersLoad(c);
        });
        // cleanup function called after unmounting
        return () => { isMounted = false;}
    }, [customers]);
    return customers.length > 0 ? (
        <div className="d-flex flex-row align-self-stretch flex-wrap">
            {
                customers.map(c => <CustomerView details={c} key={`${c?.customerId}`}/>)
            }
        </div>
    ) : <></>
}

export default CustomersView;