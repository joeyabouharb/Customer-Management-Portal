
import { Card, Button } from 'react-bootstrap';
import { deleteCustomers } from '../services/customerService';
import { useHistory } from 'react-router-dom';
const CustomerView = ({details, triggerUpdate}: CustomerDetailProps & TriggerUpdateProps) => {
    const history = useHistory();
    const hasDetails = details !== null;
    const deleteCustomerEvent = async () => 
    {
        if (details?.customerId !== undefined)
            await deleteCustomers(details.customerId);
        triggerUpdate();
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