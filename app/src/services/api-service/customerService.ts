import { Observable, of } from "rxjs";
import { catchError, map, take } from "rxjs/operators";
import { Client, customerApi } from "./clientService";

const CustomerClient = Client(customerApi);

const AddCustomer = (detail: CustomerDetails) => {
  return CustomerClient.addRequest('Customer', detail)
    .pipe(take(1), 
    map(({ response: a }: any) => {
      const result = a.added as boolean;
      return result
    }),
    catchError(err => of(console.log(err))));
}

const UpdateCustomer = (detail: CustomerDetails) => {
  return CustomerClient.updateRequest('Customer', detail)
  .pipe(
    take(1),
    map(({ response }) => {
    return (response as any).updated as boolean;
  }),
  catchError(err => of(console.log(err))));
}

const DeleteCustomer = (id: number) => {
  return CustomerClient.deleteRequest('Customer', id).pipe(
    take(1),
    map(({ response: d }: any) => {
      const res = d.deleted as boolean;
      return res;
    }),
    catchError(err => of(console.log(err))),
  )
}

const GetCustomer = () => {
  return CustomerClient.getRequest<CustomerDetails>('Customer')
    .pipe(
      take(1),
      catchError(err => of(console.log(err)))
    ) as Observable<CustomerDetails[]>;
}
const customerService = Object.freeze({
  GetCustomer,
  UpdateCustomer,
  DeleteCustomer,
  AddCustomer,
})
export default customerService