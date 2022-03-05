import { useEffect, useState } from "react";
import { iif, of } from "rxjs";
import { switchMap } from "rxjs/operators";
import { CustomerClientProps } from "../services/api-service/clientService";
import CustomerView from "./CustomerView";
const initialState: Nullable<CustomerDetails>[] = [];
const CustomersView = ({ GetCustomer, customerChange, DeleteCustomer, customerNext }: CustomerClientProps) => {
    const [customers, onCustomersLoad] = useState<Nullable<CustomerDetails>[]>(initialState);
    useEffect(() => {
        const listener = customerChange.pipe(
            switchMap((v) => iif(() => v, GetCustomer(), of(customers))),
        ).subscribe(c => {
            onCustomersLoad(c)
        });
        return () => {
            listener.unsubscribe();
        }
    }, [GetCustomer, customerChange, customerNext, customers]);
    return customers?.length > 0 ? (
        <div className="d-flex flex-row align-self-stretch flex-wrap">
            {
                customers.map(c => <CustomerView details={c} key={`${c?.customerId}`} DeleteCustomer={DeleteCustomer} customerNext={customerNext}/>)
            }
        </div>
    ) : <></>
}

export default CustomersView;