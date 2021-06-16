import React, { useState } from "react";
import { Button, Form, Alert } from "react-bootstrap";
import { addCustomers } from "../services/customerService";
import CustomerFormView from "./CustomerFormView";
import { useHistory } from 'react-router-dom'
const initialState = {
    customerId : 0,
    firstName : '',
    surname : '',
    homeAddress: '',
    email: ''
}
const CustomerAddView = () => {
    const history = useHistory();
    const [customer, onCustomerChanged] = useState(initialState);
    const [msg, onSetMessage] = useState('');
    const onInputChanged = (e: React.FormEvent<HTMLInputElement>) => {
        e.preventDefault();
        const element = e.target as HTMLInputElement;
        if (element !== null)
        {
            onCustomerChanged({
                ...customer,
                [element.id]: element.value
            })
        }
    };
    const onSaveSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const result = await addCustomers(customer);
        if (result) {
            onSetMessage('');
            history.push('/');
        } else {
            onSetMessage('Error Occurred, Email may already be used with another user');
        }
    };
    return (
        <Form onSubmit={onSaveSubmit} className="container mt-5">
            <CustomerFormView details={customer} onChangeEvent={onInputChanged}/>
            <Button type="submit" className="mr-2">Save</Button>
            <Button type="button" className="mr-2" onClick={() => history.push('/')}>Cancel</Button>
            {
                msg.length > 0
                    ? <Alert variant="danger" className="mt-2">{ msg }</Alert>
                    : <></>
            }
        </Form>
    );
};

export default CustomerAddView;