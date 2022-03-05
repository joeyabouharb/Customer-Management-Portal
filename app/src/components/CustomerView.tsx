
import { useEffect, useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { Subscription } from 'rxjs';
import customerService from '../services/api-service/customerService';
const CustomerView = ({ details, customerNext }: { details: Nullable<CustomerDetails>, customerNext: (result: boolean) => void }) => {
    const history = useHistory();
    const hasDetails = details !== null;
    const [deleteSubscription, updateDeleteSubscription] = useState(Subscription.EMPTY)
    useEffect(() => {
        return () => {
            deleteSubscription.unsubscribe()
        }
    }, [deleteSubscription])
    const deleteCustomerEvent = () => {
        if (details?.customerId !== undefined)
            updateDeleteSubscription(customerService.DeleteCustomer(details.customerId)
            .subscribe((result: boolean) => customerNext(result)));
    };
    const editCustomerEvent = () => {
        history.push('/edit', {
            details: details
        });
    }
    return hasDetails
        ? (
            <Card style={{ width: '18rem' }} className="m-2" id={`${details?.customerId}`}>
                <Card.Body>
                    <Card.Title>{details?.firstName} {details?.surname}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{details?.email}</Card.Subtitle>
                    <Card.Text>
                        {details?.homeAddress}
                    </Card.Text>
                    <div className="d-flex">
                        <Button className="bg-info m-1" onClick={editCustomerEvent}>Edit</Button>
                        <Button className="bg-danger m-1" onClick={deleteCustomerEvent}>Delete</Button>
                    </div>
                </Card.Body>
            </Card>
        )
        : <></>
}
export default CustomerView;