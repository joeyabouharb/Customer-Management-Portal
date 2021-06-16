import { useState } from "react";
import { Alert, Button, Form } from "react-bootstrap";
import { Redirect } from "react-router";
import { useHistory } from "react-router-dom";
import { updateCustomer } from "../services/customerService";
import CustomerFormView from "./CustomerFormView";

const CustomerEditView = ({details = null} : CustomerDetailProps) => {
    const history = useHistory();
    const [customer, onCustomerChanged] = useState(details);
    const [msg, onSetMessage] = useState('');
    const onInputChanged = (e: React.FormEvent<HTMLInputElement>) => {
        e.preventDefault();
        const element = e.target as HTMLInputElement;
        if (element !== null && customer !== null)
        {
            onCustomerChanged({
                ...customer,
                [element.id]: element.value
            })
        }
    };
    const onSaveSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (customer !== null)
        {
            const result = await updateCustomer(customer);
            if (result) {
                onSetMessage('');
                history.push('/');
            } else {
                onSetMessage('Error Occurred, Email may already be used with another user');
            }
        }
    };
    return customer !== null ? (
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
    ) : <Redirect to="/"/>;
}

export default CustomerEditView;