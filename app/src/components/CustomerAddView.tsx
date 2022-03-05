import React, { useEffect, useState } from "react";
import { Button, Form, Alert } from "react-bootstrap";
import CustomerFormView from "./CustomerFormView";
import { useHistory } from 'react-router-dom'
import { CustomerClientProps } from "../services/api-service/clientService";
import { Subscription } from "rxjs";
const initialState = {
    customerId: 0,
    firstName: '',
    surname: '',
    homeAddress: '',
    email: ''
}
const CustomerAddView = ({ AddCustomer }: CustomerClientProps) => {
    const history = useHistory();
    const [customer, onCustomerChanged] = useState(initialState);
    const [msg, onSetMessage] = useState('');
    const [subscription, updateSubscription] = useState(Subscription.EMPTY);
    useEffect(() => {
        return () => {
            subscription.unsubscribe()
        }
    }, [subscription])
    const onInputChanged = (e: React.FormEvent<HTMLInputElement>) => {
        e.preventDefault();
        const element = e.target as HTMLInputElement;
        if (element !== null) {
            onCustomerChanged({
                ...customer,
                [element.id]: element.value
            })
        }
    };
    const onSaveSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        updateSubscription(AddCustomer(customer).subscribe((result) => {
            if (result) {
                onSetMessage('');
                history.push('/');
            } else {
                onSetMessage('Error Occurred, Email may already be used with another user');
            }
        }));
    };
    return (
        <Form onSubmit={onSaveSubmit} className="container mt-5">
            <CustomerFormView details={customer} onChangeEvent={onInputChanged} />
            <Button type="submit" className="mr-2">Save</Button>
            <Button type="button" className="mr-2" onClick={() => history.push('/')}>Cancel</Button>
            {
                msg.length > 0
                    ? <Alert variant="danger" className="mt-2">{msg}</Alert>
                    : <></>
            }
        </Form>
    );
};

export default CustomerAddView;