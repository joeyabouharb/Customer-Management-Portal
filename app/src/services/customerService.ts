const customerApi = 'https://localhost:44381';

export const getCustomers = (): Promise<CustomerDetails[]> => {
    return fetch(`${customerApi}/Customer`).then<CustomerDetails[]>(v => v.json())
}
export const deleteCustomers = (id : Number): Promise<boolean> => {
    return fetch(`${customerApi}/Customer?id=${id}`, {
        method: 'DELETE',
    }).then(r => r.json()).then(r => r.deleted);
}
export const addCustomers = (detail : CustomerDetails) => {
    return fetch(`${customerApi}/Customer`, {
        method: 'POST',
        body: JSON.stringify(detail),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    }).then(r => r.json()).then(r => r.added);
};
export const updateCustomer = (detail: CustomerDetails) => {
    return fetch(`${customerApi}/Customer`, {
        method: 'PATCH',
        body: JSON.stringify(detail),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    }).then(r => r.json()).then(r => r.updated);
}