type CustomerDetailProps = {
    details: Nullable<CustomerDetails>
}
type TriggerUpdateProps = {
    triggerUpdate: () => void
}
type CustomerFormProps = {
    details: CustomerDetails,
    onChangeEvent: React.ChangeEventHandler<HTMLInputElement>
}
type CustomerDetails = {
    customerId: number,
    firstName: string,
    surname: string,
    email: string,
    homeAddress: string
}

type Nullable<T> = T | null | undefined