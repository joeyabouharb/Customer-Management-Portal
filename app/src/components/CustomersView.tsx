import { useEffect, useState } from "react";
import { getCustomers } from "../services/customerService";
import CustomerView from "./CustomerView";
const initialState: Nullable<CustomerDetails>[] = [];
const CustomersView = () => {
    const [customers, onCustomersLoad] = useState<Nullable<CustomerDetails>[]>(initialState)
    useEffect(() => {
        triggerUpdate();
    }, []);
    const triggerUpdate = () => {
        getCustomers().then(c => {
            onCustomersLoad(c);
        });
    }
    return customers.length > 0 ? (
        <div className="d-flex flex-row align-self-stretch flex-wrap">
            {
                customers.map(c => <CustomerView details={c} key={`${c?.customerId}`} triggerUpdate={triggerUpdate}/>)
            }
        </div>
    ) : <></>
}

export default CustomersView;