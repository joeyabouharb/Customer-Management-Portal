import { ajax } from 'rxjs/ajax';
import { take } from 'rxjs/operators';
import { BehaviorSubject, Observable, throwError } from 'rxjs';

export const customerApi = 'https://localhost:44381';
export const Client = (uri: string) => {
    const getRequest = <T>(path: string) => {
        return ajax.getJSON<T[]>(`${uri}/${path}`).pipe(take(1), (res): Observable<T[]> => {
            if (res === null) {
                return throwError(() => new Error('API Timed out'));
            }
            return res;
        });
    }
    const updateRequest = <T>(path: string, detail: T) => {
        return ajax.patch(`${uri}/${path}`, detail, ).pipe((res) => {
            return res;
        })
    }

    const addRequest = <T>(path: string, detail: T) => {
        return ajax.post(`${uri}/${path}`, detail).pipe(take(1), (res: any) => {
            return res;
        });
    }

    const deleteRequest = (path: string, id: Number) => {
        return ajax.delete(`${uri}/${path}?id=${id}`).pipe(take(1), (r: any) => {
            return r;
        });
    }
    return Object.freeze({
        getRequest, addRequest, updateRequest, deleteRequest
    });
}
export const useObservable = (initValue: boolean = true) => {
    const subj = new BehaviorSubject<boolean>(initValue);

    const next = (value: boolean): void => {
        subj.next(value)
    };
    return { change: subj.asObservable(), next };
};

export type CustomerClientProps = {
    GetCustomer: () => Observable<CustomerDetails[]>,
    DeleteCustomer: (id: number) => Observable<boolean>,
    UpdateCustomer: (detail: CustomerDetails) => Observable<boolean>,
    AddCustomer: (detail: CustomerDetails) => Observable<boolean>,
    customerChange: Observable<boolean>,
    customerNext: (result: boolean) => void
}
export type DeleteCustomerProps = {
    details: Nullable<CustomerDetails>,
    DeleteCustomer: (id: number) => Observable<boolean>,
    customerNext: (result: boolean) => void
}

export type EditCustomerProps = {
    UpdateCustomer: (detail: CustomerDetails) => Observable<boolean>,
}