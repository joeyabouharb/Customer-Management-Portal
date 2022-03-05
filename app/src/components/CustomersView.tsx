import { useEffect, useState } from "react";
import { Observable } from "rxjs";
import { filter, switchMapTo, tap } from "rxjs/operators";
import customerService from "../services/api-service/customerService";
import CustomerView from "./CustomerView";
const initialState: Nullable<CustomerDetails>[] = [];
const CustomersView = ({ customerChange, customerNext }: { customerChange: Observable<boolean>, customerNext: (result: boolean) => void }) => {
    const [customers, onCustomersLoad] = useState<Nullable<CustomerDetails>[]>(initialState);
    const listener = customerChange.pipe(
        tap(s => console.log(s)),
        filter(d => d),
        switchMapTo(customerService.GetCustomer()));

    useEffect(() => {
        const subscription = listener.subscribe(c => {
            onCustomersLoad(c)
            customerNext(false)
        });
        return () => {
            subscription.unsubscribe();
        }
    }, [listener, customerNext]);
    return customers?.length > 0 ? (
        <div className="d-flex flex-row align-self-stretch flex-wrap">
            {
                customers.map(c => <CustomerView
                    details={c}
                    customerNext={customerNext}
                    key={`${c?.customerId}`}
                />)
            }
        </div>
    ) : <></>
}

export default CustomersView;